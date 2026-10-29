// -----------------------------------------------------------------------------
//  Copyright (c) NoMercy Labs.
//
//  This file is part of NomNomzBot. You may use, change and share it for free,
//  for any noncommercial purpose, under the PolyForm Noncommercial License
//  1.0.0. You may not earn money with it. Distributed WITHOUT ANY WARRANTY.
//  See LICENSE for details, and TRADEMARKS.md for the name and logo.
//
//  SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
// -----------------------------------------------------------------------------

import assert from 'node:assert/strict';
import { test } from 'node:test';

import { rowText, tableIsRead } from '../src/lib/readAloudLabels.ts';

test('a table of one-word cells is reference data and is not read', () => {
  const cells = ['Helper', 'he', 'she', 'they', 'Subject', 'he', 'she', 'they', 'Present tense', 'is', 'is', 'are'];
  assert.equal(tableIsRead(cells), false);
});

test('a table with a cell of real text is read', () => {
  const cells = ['State', 'Meaning', 'Active', 'The plan runs.', 'Trial', 'The plan is on a free trial.'];
  assert.equal(tableIsRead(cells), true);
});

test('an empty table is not read', () => {
  assert.equal(tableIsRead([]), false);
});

// Stoney 2026-10-29: "can we read out a whole table row instead of each column?"
test('a row with a label and an explanation is one line: the label, then what it means', () => {
  assert.equal(rowText(['Active', 'The plan runs.']), 'Active: The plan runs.');
});

test('a row of more cells puts a stop between the cells after the label', () => {
  assert.equal(rowText(['Trial', 'Free for 14 days', 'Ends on its own']), 'Trial: Free for 14 days. Ends on its own');
});

test('an empty cell is left out, and a row with one cell is read as it is', () => {
  assert.equal(rowText(['Active', '  ', 'The plan runs.']), 'Active: The plan runs.');
  assert.equal(rowText(['Just a sentence in one cell.']), 'Just a sentence in one cell.');
  assert.equal(rowText(['', ' ']), '');
});

