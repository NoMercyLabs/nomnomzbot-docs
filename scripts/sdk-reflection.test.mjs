// Copyright (c) NoMercy Labs. SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { verifyTestResult } from './check-sdk-reflection.mjs';

test('SDK reflection accepts an executed passing result', () => {
  assert.equal(verifyTestResult('<Counters total="3" executed="3" passed="3" />', 0), 3);
});

test('SDK reflection refuses empty, skipped, failed and missing results', () => {
  for (const xml of ['', '<Counters total="0" executed="0" passed="0" />', '<Counters total="3" executed="2" passed="2" />', '<Counters total="3" executed="3" passed="2" />']) {
    assert.throws(() => verifyTestResult(xml, 0));
  }
  assert.throws(() => verifyTestResult('<Counters total="3" executed="3" passed="3" />', 1));
});

test('SDK reflection refuses a passing filter that lost a required test class', () => {
  const xml = '<Counters total="1" executed="1" passed="1" /><TestMethod className="Example.RegistryTests" />';
  assert.equal(verifyTestResult(xml, 0, ['RegistryTests']), 1);
  assert.throws(() => verifyTestResult(xml, 0, ['RegistryTests', 'SnapshotTests']), /SnapshotTests/);
});
