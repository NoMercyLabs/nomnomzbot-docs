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

import { MAX_UTTERANCE, chunkSentence, joinCommandBangs } from '../src/lib/readAloudChunks.ts';

test('a chat command such as !uptime stays in its sentence, and a real exclamation still ends one', () => {
  assert.deepEqual(
    joinCommandBangs(['A command, such as !', 'uptime.', 'Wow!', 'Next one.']),
    ['A command, such as !uptime.', 'Wow!', 'Next one.'],
  );
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
