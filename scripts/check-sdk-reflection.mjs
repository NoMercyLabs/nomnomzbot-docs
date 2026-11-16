// Copyright (c) NoMercy Labs. SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, readdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export function verifyTestResult(xml, status, expectedClasses = []) {
  if (status !== 0) throw new Error(`Product SDK tests failed (exit ${status}).`);
  const counters = /<Counters\b([^>]+)\/>/.exec(xml)?.[1];
  const value = (name) => Number(new RegExp(`\\b${name}="(\\d+)"`).exec(counters ?? '')?.[1]);
  if (!value('total') || value('total') !== value('executed') || value('total') !== value('passed')) {
    throw new Error('SDK comparison requires a nonempty, fully executed, passing TRX result.');
  }
  const classes = new Set([...xml.matchAll(/<TestMethod\b[^>]*\bclassName="([^"]+)"/g)]
    .map((match) => match[1].split(',')[0].split('.').at(-1)));
  for (const name of expectedClasses) {
    if (!classes.has(name)) throw new Error(`SDK comparison did not execute required class ${name}.`);
  }
  return value('passed');
}

export function checkSdkReflection(sourceRoot) {
  const resultsRoot = mkdtempSync(join(tmpdir(), 'nnz-sdk-reflection-'));
  const suites = [
    ['Api', ['DashboardWidgetSdkTypesTests', 'WidgetEventPayloadRegistryDriftTests']],
    ['Infrastructure', ['SdkTypeEmitterTests', 'SdkWidgetEventTypesTests', 'SdkHostJsonDriftTests', 'ReflectionSampleGeneratorStabilityTests']],
  ];
  let passed = 0;
  try {
    for (const [project, classes] of suites) {
      const results = join(resultsRoot, project);
      const run = spawnSync('dotnet', [
        'test', `server/tests/NomNomzBot.${project}.Tests/NomNomzBot.${project}.Tests.csproj`,
        '--filter', classes.map((name) => `FullyQualifiedName~.${name}.`).join('|'),
        '--logger', 'trx;LogFileName=sdk-reflection.trx', '--results-directory', results, '--verbosity', 'quiet',
      ], { cwd: sourceRoot, env: { ...process.env, NNZ_WRITE_SDK_TYPES: '0' }, stdio: 'inherit' });
      if (run.error) throw run.error;
      const files = readdirSync(results).filter((name) => name.endsWith('.trx'));
      if (files.length !== 1) throw new Error(`${project}: expected exactly one fresh TRX result.`);
      passed += verifyTestResult(readFileSync(join(results, files[0]), 'utf8'), run.status, classes);
    }
    console.log(`SDK reflection comparison: ${passed} product tests passed. No snapshot was rewritten.`);
  } finally {
    rmSync(resultsRoot, { recursive: true, force: true });
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const docsRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
  checkSdkReflection(resolve(process.env.NOMNOMZBOT_SOURCE ?? resolve(docsRoot, '../nomnomzbot')));
}
