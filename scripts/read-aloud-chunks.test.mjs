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

import { MAX_ROW, MAX_UTTERANCE, chunkSentence, joinCommandBangs, rowChunks } from '../src/lib/readAloudChunks.ts';

test('a chat command such as !uptime stays in its sentence, and a real exclamation still ends one', () => {
  assert.deepEqual(
    joinCommandBangs(['A command, such as !', 'uptime.', 'Wow!', 'Next one.']),
    ['A command, such as !uptime.', 'Wow!', 'Next one.'],
  );
});

// Stoney 2026-10-29: "its not doing the whole table row in one speech". A row is one line, so it is not cut
// into sentences, and it is cut at a comma only when it is longer than a row may be.
test('a table row stays one speech, whatever stops are inside it', () => {
  const row = 'Always on · …: No channel can switch the command off. The row has no switch. Everyone. 0 s. 12 s';

  assert.deepEqual(rowChunks(row), [row]);
});

test('a row over the row limit is cut at a comma, and no chunk is over that limit', () => {
  const long = Array.from({ length: 30 }, (_, i) => `part number ${i + 1} of the row`).join(', ');
  const chunks = rowChunks(long);

  assert.ok(long.length > MAX_ROW);
  assert.ok(chunks.length > 1);
  assert.ok(chunks.every(chunk => chunk.length <= MAX_ROW));
});

test('a short sentence stays one chunk', () => {
  assert.deepEqual(chunkSentence('Type the trigger word.'), ['Type the trigger word.']);
});

test('a long sentence with no stop is cut at commas, and no chunk is over the limit', () => {
  const long = Array.from({ length: 12 }, (_, i) => `step number ${i + 1} of the long list`).join(', ');
  const chunks = chunkSentence(long);
  assert.ok(chunks.length > 1);
  assert.ok(chunks.every(chunk => chunk.length <= MAX_UTTERANCE));
  assert.equal(chunks.join(' ').replace(/,/g, '').replace(/\s+/g, ' '), long.replace(/,/g, ''));
});

test('a long run with no comma is cut at a space, never inside a word', () => {
  const words = Array.from({ length: 80 }, (_, i) => `word${i}`);
  const chunks = chunkSentence(words.join(' '));
  assert.ok(chunks.every(chunk => chunk.length <= MAX_UTTERANCE));
  assert.deepEqual(chunks.join(' ').split(' '), words);
});
