// Copyright (c) NoMercy Labs. SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const generator = fileURLToPath(new URL('./gen-sdk-contracts.mjs', import.meta.url));
const infrastructure = 'server/src/NomNomzBot.Infrastructure';
const widgetPath = 'dashboard/src/api/nnz-widget.d.ts';
const actionPath = `${infrastructure}/ExampleAction.cs`;
const registryPath = 'server/src/NomNomzBot.Api/Hubs/Broadcasters/WidgetEventPayloadRegistry.cs';
const action = `public sealed class ExampleAction : ICommandAction {
  public string ActionType => "example";
  public IReadOnlyList<PipelineActionFieldDescriptor> Fields => [new("text", PipelineActionFieldKind.Text, Required: true)];
}`;
const widget = `interface NnzActionParams { 'example': { text: string; }; }
interface NnzWidgetEventMap { 'follow': NnzFollowAlertDto; }
type NnzActionsWithOptionalParams = never;
type NnzWidgetAnyEvent = [eventType: 'follow', data: NnzFollowAlertDto];
interface NnzFollowAlertDto { name: string; }
interface NnzStreamMetricMap { duration: number; }
${['NnzOverlaySdk', 'NnzEventMeta', 'NnzOverlayActions', 'NnzActionResult', 'NnzOverlayData', 'NnzMusicQueueItem', 'NnzOverlaySpotify', 'NnzOverlayTemplate', 'NnzOverlayWidget'].map((name) => `interface ${name} {}`).join('\n')}`;
const markerPage = ['SCRIPT', 'WIDGET', 'ACTIONS', 'EVENTS', 'PAYLOADS', 'METRICS'].map((name) => `{/* SDK ${name} BEGIN */}\n{/* SDK ${name} END */}`).join('\n');

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'nnz-sdk-contracts-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const put = (file, value) => {
    const path = join(root, file);
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, value);
  };
  put(widgetPath, widget);
  put(actionPath, action);
  put(registryPath, 'new("follow", typeof(FollowAlertDto))');
  put(`${infrastructure}/Dashboard/Stats/DurationMetric.cs`, 'public class DurationMetric : StreamMetric<long> { public override string Key => "duration"; }');
  put('server/src/NomNomzBot.Application/Music/Dtos/NowPlayingShapeDto.cs', 'public const string EventName = "music.nowPlaying";');
  put(`${infrastructure}/Music/YouTubePlayerDispatcher.cs`, ['Play', 'Pause', 'Resume', 'Stop', 'Seek', 'Volume'].map((name) => `public const string ${name}EventType = "youtube.${name.toLowerCase()}";`).join('\n'));
  put(`${infrastructure}/Stage/StageSurface.cs`, 'public const string EventType = "stage_effect";');
  put(`${infrastructure}/DevPlatform/SdkRuntimeSurface.cs`, [
    ['ScriptApiInterfaces', 'interface NnzResult { value: string; }'],
    ['AppendBatteryInterfaces', 'interface NnzHelper { test(): string; }'],
    ['AppendApiInterfaces', 'interface NnzApi { version(): string; }'],
    ['ScriptGlobals', 'declare const nnz: { helper: NnzHelper; api: NnzApi; };'],
  ].map(([name, declaration]) => `private static string ${name}() { sb.AppendLine(${JSON.stringify(declaration)}); }`).join('\n    '));
  put(`${infrastructure}/CustomCode/Jint/JintScriptExecutor.cs`, 'const string Bootstrap = """\nvar nnz = { helper: { test: function() {} }, api: { version: function() {} } };\n""";');
  put('server/src/NomNomzBot.Api/Controllers/OverlaySdkController.cs', 'const string Sdk = """\nwindow.NomNomz = {};\n""";');
  put('page.mdx', markerPage);
  const run = (...args) => spawnSync(process.execPath, [generator, '--output', join(root, 'page.mdx'), ...args], { env: { ...process.env, NOMNOMZBOT_SOURCE: root }, encoding: 'utf8' });
  return { root, put, run };
}

test('SDK generator runs from source, generates all sections and checks a repeat run', (t) => {
  const { root, run } = fixture(t);
  const generated = run();
  assert.equal(generated.status, 0, generated.stderr);
  const page = readFileSync(join(root, 'page.mdx'), 'utf8');
  assert.match(page, /`example`.*`text: string;`/);
  assert.match(page, /interface NnzFollowAlertDto/);
  assert.match(page, /declare const nnz/);
  assert.equal(run('--check').status, 0);
});

test('SDK checker rejects an action requiredness mismatch', (t) => {
  const { put, run } = fixture(t);
  put(actionPath, action.replace('Required: true', 'Required: false'));
  assert.match(run().stderr, /source\/declaration field mismatch/);
});

test('SDK checker rejects an action declaration outside its supported expression syntax', (t) => {
  const { put, run } = fixture(t);
  put(`${infrastructure}/HiddenAction.cs`, 'public sealed class HiddenAction : ICommandAction { public string ActionType { get; } = "hidden"; public IReadOnlyList<PipelineActionFieldDescriptor> Fields => []; }');
  assert.match(run().stderr, /unsupported action declaration/);
});

test('SDK checker rejects changed widget payload types', (t) => {
  const { put, run } = fixture(t);
  put(registryPath, 'new("follow", typeof(ChangedPayload))');
  assert.match(run().stderr, /Widget event payload type changed/);
});

test('SDK checker rejects an unrecognized explicitly typed registry constructor', (t) => {
  const { put, run } = fixture(t);
  put(registryPath, 'new("follow", typeof(FollowAlertDto)), new WidgetEventPayloadEntry("hidden", typeof(HiddenPayload))');
  assert.match(run().stderr, /Unsupported widget event registry entry shape/);
});

test('nested payload fields deliberately follow the declaration snapshot, not C# reflection', (t) => {
  const { put, run } = fixture(t);
  const payload = 'server/src/NomNomzBot.Api/Hubs/Dtos/FollowAlertDto.cs';
  put(payload, 'public record FollowAlertDto(string Name);');
  assert.equal(run().status, 0);
  put(payload, 'public record FollowAlertDto(string Name, int AdditionalField);');
  // This boundary is stated on the page: installed types/catalog must be refreshed to expose this change.
  assert.equal(run('--check').status, 0);
});

test('SDK checker fails closed on an unrecognized descriptor expression', (t) => {
  const { put, run } = fixture(t);
  put(actionPath, action.replace('[new("text", PipelineActionFieldKind.Text, Required: true)]', 'ReadFields()'));
  assert.match(run().stderr, /nonliteral Fields/);
});

test('SDK checker rejects a method present in declarations but absent from the actual bootstrap', (t) => {
  const { put, run } = fixture(t);
  put(`${infrastructure}/CustomCode/Jint/JintScriptExecutor.cs`, 'const string Bootstrap = """\nvar nnz = { helper: { test: function() {} }, api: {} };\n""";');
  assert.match(run().stderr, /runtime\/declaration members differ/);
});

test('SDK checker rejects an undeclared member in the actual widget SDK', (t) => {
  const { put, run } = fixture(t);
  put('server/src/NomNomzBot.Api/Controllers/OverlaySdkController.cs', 'const string Sdk = """\nwindow.NomNomz = { unexpected: function() {} };\n""";');
  assert.match(run().stderr, /runtime\/declaration members differ at NomNomz/);
});

test('SDK checker detects stale generated output', (t) => {
  const { run } = fixture(t);
  assert.match(run('--check').stderr, /reference differs from current product declarations/);
});

test('SDK checker rejects a metric producer and declaration mismatch', (t) => {
  const { put, run } = fixture(t);
  put(`${infrastructure}/Dashboard/Stats/DurationMetric.cs`, 'public class DurationMetric : StreamMetric<string> { public override string Key => "duration"; }');
  assert.match(run().stderr, /Stream metric declaration\/producer mismatch/);
});

test('SDK checker discovers a new metric regardless of its filename or folder', (t) => {
  const { put, run } = fixture(t);
  put(`${infrastructure}/AnotherFeature/ExtraStreamValue.cs`, 'public sealed class ExtraStreamValue : StreamMetric<long> { public override string Key => "extra"; }');
  assert.match(run().stderr, /Stream metric count changed/);
});
