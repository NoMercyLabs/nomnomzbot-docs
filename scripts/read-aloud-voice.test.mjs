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

import { pickVoice, voiceChoices } from '../src/lib/readAloudVoice.ts';

const david = { name: 'Microsoft David Desktop - English (United States)', lang: 'en-US', localService: true };
const zira = { name: 'Microsoft Zira Desktop - English (United States)', lang: 'en-US', localService: true };
const google = { name: 'Google US English', lang: 'en-US', localService: false };
const aria = { name: 'Microsoft Aria Online (Natural) - English (United States)', lang: 'en-US', localService: false };
const espeak = { name: 'eSpeak English', lang: 'en', localService: true };
const dutch = { name: 'Microsoft Frank Online (Natural) - Dutch (Netherlands)', lang: 'nl-NL', localService: false };

test('a natural voice wins over a network voice, and a network voice over a desktop voice', () => {
  assert.equal(pickVoice([david, zira, google, aria], 'en', null), aria);
  assert.equal(pickVoice([david, zira, google], 'en', null), google);
});

test('only voices of the page language are offered, best first, and a robotic one comes last', () => {
  const names = voiceChoices([espeak, david, dutch, google, aria], 'en').map(voice => voice.name);
  assert.deepEqual(names, [aria.name, google.name, espeak.name]);
});

test('the old Microsoft desktop voices David, Mark and Zira are never offered or picked', () => {
  const mark = { name: 'Microsoft Mark - English (United States)', lang: 'en-US', localService: true };
  const all = [david, zira, mark, espeak, google];
  assert.deepEqual(voiceChoices(all, 'en').map(voice => voice.name), [google.name, espeak.name]);
  assert.equal(pickVoice([david, zira, mark], 'en', null), undefined);
});

test('the reader\'s own pick wins while it exists, and is ignored when it is gone', () => {
  assert.equal(pickVoice([david, google, aria], 'en', david.name), david);
  assert.equal(pickVoice([google, aria], 'en', david.name), aria);
});

test('no voice of the language gives no voice, so the browser default speaks', () => {
  assert.equal(pickVoice([dutch], 'en', null), undefined);
  assert.equal(pickVoice([], 'en', null), undefined);
});
