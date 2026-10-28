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

import { isLabelCell } from '../src/lib/readAloudLabels.ts';

test('a table header cell is a label, never read', () => {
  assert.equal(isLabelCell('TH', 0, 2), true);
  assert.equal(isLabelCell('TH', 1, 2), true);
});

test('the first cell of a row with an explanation next to it is a label', () => {
  assert.equal(isLabelCell('TD', 0, 2), true);
});

test('the explanation cell is read', () => {
  assert.equal(isLabelCell('TD', 1, 2), false);
});

test('a row with one cell is plain text and is read', () => {
  assert.equal(isLabelCell('TD', 0, 1), false);
});

test('a paragraph or a list item is never a label', () => {
  assert.equal(isLabelCell('P', 0, 1), false);
  assert.equal(isLabelCell('LI', 0, 3), false);
});
