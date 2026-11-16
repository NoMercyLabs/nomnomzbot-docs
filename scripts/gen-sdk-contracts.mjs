// Copyright (c) NoMercy Labs. SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
// Generate the lookup blocks from the product's committed SDK declarations.
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createContext, runInContext } from 'node:vm';
import { globSync } from 'glob';
import ts from 'typescript';

const docsRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const sourceRoot = resolve(process.env.NOMNOMZBOT_SOURCE ?? resolve(docsRoot, '../nomnomzbot'));
const infraRoot = resolve(sourceRoot, 'server/src/NomNomzBot.Infrastructure');
const outputIndex = process.argv.indexOf('--output');
const pagePath = outputIndex === -1 ? resolve(docsRoot, 'src/content/reference/en/code/sdk-contracts.mdx') : resolve(process.argv[outputIndex + 1]);
const read = (path) => readFileSync(path, 'utf8').replaceAll('\r\n', '\n');
const infrastructureSources = globSync('**/*.cs', { cwd: infraRoot, ignore: ['**/Migrations/**'] }).map((file) => [file, read(resolve(infraRoot, file))]);
const check = process.argv.includes('--check');
const widgetSource = read(resolve(sourceRoot, 'dashboard/src/api/nnz-widget.d.ts'));
const runtimeSource = read(resolve(infraRoot, 'DevPlatform/SdkRuntimeSurface.cs'));
const parse = (source, file = 'nnz.d.ts') => ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
const widget = parse(widgetSource);
const declarations = new Map(widget.statements.filter((node) => node.name).map((node) => [node.name.text, node]));
const requireDeclaration = (name) => {
  const node = declarations.get(name);
  if (!node) throw new Error(`Missing SDK declaration: ${name}`);
  return node;
};
const propertyName = (node) => node.name.text;
const members = (name) => [...requireDeclaration(name).members];
const actionMap = members('NnzActionParams');
const eventMap = members('NnzWidgetEventMap');

// Split the small, literal descriptor expressions, preserving nested calls and strings.
// Unsupported source shapes fail rather than silently producing incomplete reference rows.
function splitTop(source, separator = ',') {
  const parts = [];
  let start = 0;
  let depth = 0;
  let quote = null;
  for (let i = 0; i < source.length; i++) {
    const char = source[i];
    if (quote) {
      if (char === '\\') i++;
      else if (char === quote) quote = null;
      continue;
    }
    if (char === '"' || char === "'") quote = char;
    else if (char === '/' && source[i + 1] === '/') {
      i = source.indexOf('\n', i);
      if (i === -1) break;
    } else if (char === '/' && source[i + 1] === '*') {
      const end = source.indexOf('*/', i + 2);
      if (end === -1) throw new Error('Unclosed source comment');
      i = end + 1;
    } else if ('([{'.includes(char)) depth++;
    else if (')]}'.includes(char)) depth--;
    else if (char === separator && depth === 0) {
      parts.push(source.slice(start, i).trim());
      start = i + 1;
    }
  }
  parts.push(source.slice(start).trim());
  return parts.filter(Boolean);
}

function fieldsFrom(source, actionName) {
  const stringValue = (expression, context = source) => {
    if (expression.startsWith('"')) return JSON.parse(expression);
    if (!/^\w+$/.test(expression)) throw new Error(`${actionName}: unsupported string ${expression}`);
    const constant = new RegExp(`const string ${expression} = ("[^"\\n]+");`).exec(context);
    if (!constant) throw new Error(`${actionName}: unresolved string ${expression}`);
    return JSON.parse(constant[1]);
  };
  const match = /\bFields\s*=>\s*([\s\S]*?);/.exec(source);
  if (!match) return [];
  const expression = match[1].trim();
  if (!expression.startsWith('[') || !expression.endsWith(']')) throw new Error(`${actionName}: nonliteral Fields`);
  return splitTop(expression.slice(1, -1)).map((entry) => {
    if (entry === 'PlaylistProviderChoice.Field()') {
      const helper = read(resolve(infraRoot, 'Music/PlaylistProviderChoice.cs'));
      const descriptor = /Field\(\)\s*=>\s*(new\([\s\S]*?\));/.exec(helper)?.[1];
      if (!descriptor) throw new Error('Playlist provider field helper changed');
      return fieldsFrom(helper + `\n Fields => [${descriptor}];`, actionName)[0];
    }
    const call = /^(?:\s*\/\/[^\n]*\n)*\s*new(?: PipelineActionFieldDescriptor)?\s*\(([\s\S]*)\)$/.exec(entry);
    if (!call) throw new Error(`${actionName}: unsupported field ${entry}`);
    const args = splitTop(call[1]);
    const name = stringValue(args[0]);
    const kind = /^PipelineActionFieldKind\.(\w+)$/.exec(args[1])?.[1];
    if (!kind) throw new Error(`${actionName}.${name}: unsupported kind`);
    const named = Object.fromEntries(args.slice(2).filter((arg) => /^\w+:/.test(arg)).map((arg) => {
      const colon = arg.indexOf(':');
      return [arg.slice(0, colon), arg.slice(colon + 1).trim()];
    }));
    const required = named.Required ?? (args[2] && !args[2].includes(':') ? args[2] : 'false');
    const repeatable = named.Repeatable ?? 'false';
    if (!['true', 'false'].includes(required) || !['true', 'false'].includes(repeatable)) throw new Error(`${actionName}.${name}: nonliteral flags`);
    let type = kind === 'Number' ? 'number' : kind === 'Boolean' ? 'boolean' : kind === 'KeyValueMap' ? 'Record<string, string>' : 'string';
    if (kind === 'Enum' && named.Options && named.Options !== 'null') {
      let options = named.Options;
      let optionContext = source;
      if (options === 'MediaPlaybackCommands.All') {
        optionContext = read(resolve(sourceRoot, 'server/src/NomNomzBot.Application/MediaShare/Dtos/MediaPlaybackDtos.cs'));
        options = /\bAll\s*(?:\{ get; \})?\s*=\s*(\[[^;]+\]);/.exec(optionContext)?.[1] ?? '';
      }
      if (options === 'DiscordConfigDefaults.NotificationTriggers') {
        const config = read(resolve(sourceRoot, 'server/src/NomNomzBot.Domain/Discord/DiscordConfigDefaults.cs'));
        const catalog = /NotificationTriggerCatalog\s*=\s*\[([\s\S]*?)\];/.exec(config)?.[1];
        if (!catalog) throw new Error('Discord notification trigger catalog changed');
        const names = [...catalog.matchAll(/new\(\s*("[^"]+")\s*,/g)].map((entry) => entry[1]);
        if (!names.length) throw new Error('Discord notification trigger catalog is empty');
        options = '[' + names.join(',') + ']';
      }
      if (options === '[.. Enum.GetValues<ReplyTarget>().Select(ReplyTargetName)]') {
        const enumFiles = globSync('server/src/NomNomzBot.Domain/**/*.cs', { cwd: sourceRoot });
        const enumText = enumFiles.map((file) => read(resolve(sourceRoot, file))).find((text) => /enum ReplyTarget\b/.test(text));
        const values = /enum ReplyTarget\s*\{([^}]+)\}/.exec(enumText ?? '')?.[1];
        if (!values || !/target\.ToString\(\)\.ToLowerInvariant\(\)/.test(source)) throw new Error('Reply target mapping changed');
        const names = values.replace(/\/\/[^\n]*/g, '').split(',').map((value) => value.trim().split(/\s*=/)[0]).filter(Boolean);
        options = '[' + names.map((name) => JSON.stringify(name.toLowerCase())).join(',') + ']';
      }
      if (/^\w+$/.test(options)) {
        const literal = new RegExp(`\\b${options}\\s*(?:\\{ get; \\})?\\s*=\\s*(\\[[^;]+\\]);`).exec(source)?.[1];
        if (!literal) throw new Error(`${actionName}.${name}: unresolved options ${options}`);
        options = literal;
      }
      if (options === 'StagePresetRegistry.Ids') {
        const ids = globSync('Stage/Presets/*.cs', { cwd: infraRoot }).map((file) => {
          const id = /string Id => ("[^"]+");/.exec(read(resolve(infraRoot, file)))?.[1];
          if (!id) throw new Error(`Unresolved stage preset in ${file}`);
          return JSON.parse(id);
        }).toSorted();
        options = '[' + ids.map((id) => JSON.stringify(id)).join(',') + ']';
      }
      if (!options.startsWith('[') || !options.endsWith(']')) throw new Error(`${actionName}.${name}: nonliteral options`);
      type = splitTop(options.slice(1, -1)).map((option) => `'${stringValue(option, optionContext)}'`).join(' | ') || 'string';
    }
    if (repeatable === 'true') type = type.includes(' | ') ? `(${type})[]` : `${type}[]`;
    return { name, required: required === 'true', type };
  });
}

function verifyActions() {
  const actual = new Map();
  for (const [file, source] of infrastructureSources) {
    if (!source.includes('ActionType') && !source.includes('ICommandAction')) continue;
    const classes = [...source.matchAll(/(?:public|internal)\s+(?:(?:sealed|abstract|partial)\s+)*class\s+(\w+)/g)];
    for (let i = 0; i < classes.length; i++) {
      const block = source.slice(classes[i].index, classes[i + 1]?.index);
      const expression = /\bActionType\s*=>\s*([^;]+);/.exec(block)?.[1].trim();
      if (classes[i][1] === 'CapturingCommandAction') continue;
      const header = block.slice(0, block.indexOf('{'));
      if (!expression) {
        let inheritance = header;
        while (/\([^()]*\)/.test(inheritance)) inheritance = inheritance.replace(/\([^()]*\)/g, '');
        const candidate = /\bstring\s+ActionType\s*(?:\{|=>)/.test(block) || /(?:[:,])\s*ICommandAction\b/.test(inheritance);
        if (candidate && !/\babstract\s+class\b/.test(header)) throw new Error(`${file}: unsupported action declaration for ${classes[i][1]}`);
        continue;
      }
      let name;
      if (expression.startsWith('"')) name = JSON.parse(expression);
      else {
        const constant = new RegExp(`const string ${expression} = ("[^"\\n]+");`).exec(block);
        if (!constant) throw new Error(`${file}: unresolved action type ${expression}`);
        name = JSON.parse(constant[1]);
      }
      if (actual.has(name)) throw new Error(`Duplicate action ${name}`);
      actual.set(name, { fields: fieldsFrom(block, name), file });
    }
  }
  if (actual.size !== actionMap.length) throw new Error(`Action count differs: source=${actual.size}, declaration=${actionMap.length}`);
  let fieldCount = 0;
  for (const action of actionMap) {
    const name = propertyName(action);
    const source = actual.get(name);
    if (!source) throw new Error(`Declared action not in current source: ${name}`);
    const fields = [...action.type.members].map((field) => ({ name: propertyName(field), required: !field.questionToken, type: field.type.getText(widget) }));
    if (JSON.stringify(fields) !== JSON.stringify(source.fields)) throw new Error(`${name}: source/declaration field mismatch\n${JSON.stringify(source.fields)}\n${JSON.stringify(fields)}`);
    fieldCount += fields.length;
  }
  return fieldCount;
}

function staticStrings(methodName) {
  const start = runtimeSource.search(new RegExp(`(?:public|private) static [^\\n]*\\b${methodName}\\(`));
  if (start === -1) throw new Error(`Missing SDK runtime emitter ${methodName}`);
  const following = runtimeSource.slice(start).search(/\n    (?:public|private) static /);
  const body = runtimeSource.slice(start, following === -1 ? undefined : start + following);
  const calls = [...body.matchAll(/sb\.Append(Line)?\(\s*("(?:[^"\\]|\\.)*"|'[^']'|)\s*\);/g)];
  const total = [...body.matchAll(/sb\.Append(?:Line)?\(/g)].length;
  if (total !== calls.length) throw new Error(`${methodName}: nonliteral SDK declarations require review`);
  return calls.map((call) => (call[2] ? call[2].startsWith("'") ? call[2].slice(1, -1) : JSON.parse(call[2]) : '') + (call[1] ? '\n' : '')).join('');
}

function verifyWidgetEvents() {
  const registry = read(resolve(sourceRoot, 'server/src/NomNomzBot.Api/Hubs/Broadcasters/WidgetEventPayloadRegistry.cs'));
  const constants = {
    'NowPlayingShapeDto.EventName': 'music.nowPlaying',
    'YouTubePlayerDispatcher.PlayEventType': 'youtube.play',
    'YouTubePlayerDispatcher.PauseEventType': 'youtube.pause',
    'YouTubePlayerDispatcher.ResumeEventType': 'youtube.resume',
    'YouTubePlayerDispatcher.StopEventType': 'youtube.stop',
    'YouTubePlayerDispatcher.SeekEventType': 'youtube.seek',
    'YouTubePlayerDispatcher.VolumeEventType': 'youtube.volume',
    'StageSurface.EventType': 'stage_effect',
  };
  // Constant values are checked in their defining source too, not only assumed here.
  const constantFiles = {
    'NowPlayingShapeDto': 'server/src/NomNomzBot.Application/Music/Dtos/NowPlayingShapeDto.cs',
    'YouTubePlayerDispatcher': 'server/src/NomNomzBot.Infrastructure/Music/YouTubePlayerDispatcher.cs',
    'StageSurface': 'server/src/NomNomzBot.Infrastructure/Stage/StageSurface.cs',
  };
  for (const [key, value] of Object.entries(constants)) {
    const [owner, member] = key.split('.');
    const source = read(resolve(sourceRoot, constantFiles[owner]));
    if (!new RegExp(`const string ${member} = "${value.replaceAll('.', '\\.')}"`).test(source)) throw new Error(`Event constant changed: ${key}`);
  }
  const entries = [...registry.matchAll(/\bnew\(("[^"]+"|[\w.]+),\s*(?:typeof\((\w+)\)|null)(?:,\s*(\w+))?\)/g)];
  const constructorCount = [...registry.matchAll(/\bnew\s*(?:WidgetEventPayloadEntry\s*)?\(/g)].length;
  if (constructorCount !== entries.length) throw new Error('Unsupported widget event registry entry shape');
  const names = entries.map((match) => match[1].startsWith('"') ? JSON.parse(match[1]) : constants[match[1]]);
  if (names.some((name) => !name)) throw new Error('Unresolved widget event name');
  const declared = eventMap.map(propertyName);
  if (JSON.stringify(names.toSorted()) !== JSON.stringify(declared.toSorted())) throw new Error('Widget event registry/declaration mismatch');
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    let type = entry[2] ? `Nnz${entry[2]}` : 'Record<string, unknown>';
    if (entry[3]) {
      const variants = new RegExp(`\\b${entry[3]} =\\s*\\[([\\s\\S]*?)\\];`).exec(registry)?.[1];
      if (!variants) throw new Error(`Unresolved widget event variants: ${entry[3]}`);
      type = [...variants.matchAll(/typeof\((\w+)\)/g)].map((variant) => `Nnz${variant[1]}`).join(' | ');
    }
    const declaration = eventMap.find((event) => propertyName(event) === names[i]);
    if (declaration.type.getText(widget) !== type) throw new Error(`Widget event payload type changed: ${names[i]}`);
  }
}

const fieldCount = verifyActions();
verifyWidgetEvents();
const metricMap = members('NnzStreamMetricMap');
const metricType = (type) => {
  const core = type.replace(/\?$/, '');
  if (core.startsWith('List<')) return metricType(core.slice(5, -1)) + '[]';
  if (['int', 'long', 'double'].includes(core)) return 'number';
  if (core === 'string') return 'string';
  if (core === 'bool') return 'boolean';
  if (/^StreamStats\w+Dto$/.test(core)) return 'NnzStream' + core.slice(11, -3);
  throw new Error(`Unresolved stream metric result type: ${type}`);
};
const metrics = infrastructureSources.filter(([, source]) => /:\s*StreamMetric\s*</.test(source)).map(([file, source]) => {
  if ([...source.matchAll(/:\s*StreamMetric\s*</g)].length !== 1) throw new Error(`Unsupported metric declarations in ${file}`);
  const key = /string Key => "([^"]+)"/.exec(source)?.[1];
  const result = /:\s*StreamMetric<([\w?]+(?:<[\w?]+>)?)>/.exec(source)?.[1];
  if (!key || !result) throw new Error(`Unresolved stream metric producer: ${file}`);
  return { key, type: metricType(result), optional: /^(int|long|double|bool)\?$/.test(result) };
});
if (metrics.length !== metricMap.length) throw new Error('Stream metric count changed');
for (const metric of metrics) {
  const field = metricMap.find((entry) => propertyName(entry) === metric.key);
  if (!field || field.type.getText(widget) !== metric.type || Boolean(field.questionToken) !== metric.optional) throw new Error(`Stream metric declaration/producer mismatch: ${metric.key}`);
}
const scriptSource = [staticStrings('ScriptApiInterfaces'), staticStrings('AppendBatteryInterfaces'), staticStrings('AppendApiInterfaces'), staticStrings('ScriptGlobals')].join('\n');
const script = parse(scriptSource, 'script.d.ts');
if (script.parseDiagnostics.length || widget.parseDiagnostics.length) throw new Error('SDK declarations contain TypeScript syntax errors');
const scriptDeclarations = script.statements.filter((node) => ts.isInterfaceDeclaration(node) || ts.isVariableStatement(node));
const bootstrapFile = read(resolve(infraRoot, 'CustomCode/Jint/JintScriptExecutor.cs'));
const bootstrap = /const string Bootstrap = """\n([\s\S]*?)\n\s*""";/.exec(bootstrapFile)?.[1];
if (!bootstrap) throw new Error('Script bootstrap source changed');
const sandbox = createContext({ __argsJson: '[]', __call: () => null, __getVar: () => null, __setVar() {}, __send() {}, __stop() {}, __log() {}, __sleep() {} });
runInContext(bootstrap, sandbox, { timeout: 1000 });
const scriptInterfaces = new Map(scriptDeclarations.filter(ts.isInterfaceDeclaration).map((node) => [node.name.text, node]));
function verifyMembers(value, node, path, interfaces = scriptInterfaces, source = script) {
  const names = [...new Set(node.members.map(propertyName))].toSorted();
  if (JSON.stringify(Object.keys(value).toSorted()) !== JSON.stringify(names)) throw new Error(`Script runtime/declaration members differ at ${path}`);
  for (const member of node.members) {
    const name = propertyName(member);
    if (ts.isMethodSignature(member) && typeof value[name] !== 'function') throw new Error(`Script runtime method missing: ${path}.${name}`);
    const typeName = ts.isPropertySignature(member) && member.type && ts.isTypeReferenceNode(member.type) ? member.type.typeName.getText(source) : null;
    if (typeName && interfaces.has(typeName)) verifyMembers(value[name], interfaces.get(typeName), `${path}.${name}`, interfaces, source);
  }
}
const nnzDeclaration = scriptDeclarations.find(ts.isVariableStatement)?.declarationList.declarations.find((node) => node.name.getText(script) === 'nnz');
if (!nnzDeclaration || !ts.isTypeLiteralNode(nnzDeclaration.type)) throw new Error('Missing nnz global declaration');
verifyMembers(sandbox.nnz, nnzDeclaration.type, 'nnz');
const overlayController = read(resolve(sourceRoot, 'server/src/NomNomzBot.Api/Controllers/OverlaySdkController.cs'));
const overlayScript = /const string Sdk = """\n([\s\S]*?)\n\s*""";/.exec(overlayController)?.[1];
if (!overlayScript) throw new Error('Overlay SDK script source changed');
const window = { WIDGET_TOKEN: 'offline-fixture', WIDGET_ID: 'offline-widget', WIDGET_SETTINGS: {}, WIDGET_NAME: 'Offline fixture', addEventListener() {} };
const overlaySandbox = createContext({ window, location: { search: '', protocol: 'https:', host: 'offline.invalid' }, URLSearchParams, setInterval() {}, fetch: () => new Promise(() => {}), console: { error() {} } });
runInContext(overlayScript, overlaySandbox, { timeout: 1000 });
verifyMembers(window.NomNomz, requireDeclaration('NnzOverlaySdk'), 'NomNomz', declarations, widget);
if (outputIndex === -1) {
  const guide = read(resolve(docsRoot, 'src/content/reference/en/code/sdk-widgets-actions-templates.mdx'));
  const section = guide.split('### Action parameters\n')[1]?.split('\n## ')[0];
  if (!section) throw new Error('Missing action summary in the SDK guide');
  const rows = [...section.matchAll(/^\| `([^`]+)` \| ([^\n]+) \|$/gm)];
  if (rows.length !== actionMap.length) throw new Error('SDK guide action summary count differs from declarations');
  for (const action of actionMap) {
    const row = rows.find((entry) => entry[1] === propertyName(action));
    const listed = [...(row?.[2] ?? '').matchAll(/(\*\*)?`([^`]+)`(?:\*\*)?/g)].map((entry) => ({ name: entry[2], required: Boolean(entry[1]) }));
    const expected = [...action.type.members].map((field) => ({ name: propertyName(field), required: !field.questionToken }));
    if (JSON.stringify(listed) !== JSON.stringify(expected)) throw new Error(`SDK guide action fields differ: ${propertyName(action)}`);
  }
}
const clean = (node, source) => node.getText(source).replace(/\/\*\*[\s\S]*?\*\//g, '').replace(/^\s*\n/gm, '').trim();
const fence = (source) => `\n\`\`\`ts\n${source}\n\`\`\`\n`;
const details = (title, source) => `<details>\n<summary>${title}</summary>\n${fence(source)}\n</details>\n`;
const cell = (value) => '`' + value.replaceAll('|', '\\|').replaceAll('`', '\\`') + '`';

const scriptSection = scriptDeclarations.map((node) => details(node.name?.text ?? 'nnz', clean(node, script))).join('\n');
const widgetNames = ['NnzOverlaySdk', 'NnzEventMeta', 'NnzOverlayActions', 'NnzActionResult', 'NnzOverlayData', 'NnzMusicQueueItem', 'NnzOverlaySpotify', 'NnzOverlayTemplate', 'NnzOverlayWidget'];
const widgetSection = widgetNames.map((name) => details(name, clean(requireDeclaration(name), widget))).join('\n');
const actionSection = '| Action type | Parameters |\n| --- | --- |\n' + actionMap.map((action) => `| ${cell(propertyName(action))} | ${action.type.members.length ? [...action.type.members].map((member) => cell(clean(member, widget))).join('<br />') : 'No fields.'} |`).join('\n') + '\n\n' + details('NnzActionsWithOptionalParams', clean(requireDeclaration('NnzActionsWithOptionalParams'), widget));
const eventSection = '| Event name | Payload type |\n| --- | --- |\n' + eventMap.map((event) => `| ${cell(propertyName(event))} | ${cell(event.type.getText(widget))} |`).join('\n') + '\n\n' + details('NnzWidgetAnyEvent', clean(requireDeclaration('NnzWidgetAnyEvent'), widget));
const excluded = new Set([...widgetNames, 'NnzActionParams', 'NnzWidgetEventMap', 'NnzEventMap', 'NnzTemplateHelperMap', 'NnzStreamMetricMap', 'NnzStreamStatsOptions']);
const payloadSection = [...declarations].filter(([name, node]) => ts.isInterfaceDeclaration(node) && !excluded.has(name) && !name.startsWith('NnzStream')).map(([name, node]) => details(name, clean(node, widget))).join('\n');
const metricNames = [...declarations.keys()].filter((name) => name.startsWith('NnzStream'));
const metricSection = metricNames.map((name) => details(name, clean(requireDeclaration(name), widget))).join('\n');
const page = read(pagePath);
let output = page;
for (const [name, content] of Object.entries({ SCRIPT: scriptSection, WIDGET: widgetSection, ACTIONS: actionSection, EVENTS: eventSection, PAYLOADS: payloadSection, METRICS: metricSection })) {
  const begin = `{/* SDK ${name} BEGIN */}`;
  const end = `{/* SDK ${name} END */}`;
  if (!output.includes(begin) || !output.includes(end)) throw new Error(`Missing generated marker: ${name}`);
  output = output.slice(0, output.indexOf(begin) + begin.length) + '\n\n' + content + '\n\n' + output.slice(output.indexOf(end));
}
if (check && output !== page) throw new Error('SDK reference differs from current product declarations; regenerate it.');
if (!check) writeFileSync(pagePath, output);
console.log(`SDK contract ${check ? 'check' : 'generation'} passed: ${actionMap.length} actions, ${fieldCount} fields, ${eventMap.length} widget events, ${metrics.length} metrics, ${scriptDeclarations.filter(ts.isInterfaceDeclaration).length} script interfaces; source ${relative(docsRoot, sourceRoot)}.`);
