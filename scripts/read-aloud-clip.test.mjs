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

import { clipUrl, createClipCache } from '../src/lib/readAloudClip.ts';

const BASE = 'https://bot.example/api/v1/public/read-aloud';

function answer(status, bytes = [1, 2, 3]) {
  return { ok: status === 200, status, blob: async () => new Blob([new Uint8Array(bytes)], { type: 'audio/mpeg' }) };
}

test('the clip address carries the text and the language, safely encoded', () => {
  const url = new URL(clipUrl(BASE, 'Hello & welcome, friend?', 'nl'));
  assert.equal(url.origin + url.pathname, BASE);
  assert.equal(url.searchParams.get('text'), 'Hello & welcome, friend?');
  assert.equal(url.searchParams.get('locale'), 'nl');
});

test('one sentence is requested once, however many times it is asked for', async () => {
  const calls = [];
  const cache = createClipCache(BASE, async (url) => {
    calls.push(url);
    return answer(200);
  });

  const first = await cache.clip('Hello there.', 'en');
  const again = await cache.clip('Hello there.', 'en');

  assert.equal(calls.length, 1);
  assert.equal(first, again);
  assert.match(first, /^blob:/);
});

test('a refused request gives no clip, and the server is skipped for the rest of the reading', async () => {
  let calls = 0;
  const cache = createClipCache(BASE, async () => {
    calls += 1;
    return answer(503);
  });

  assert.equal(await cache.clip('One.', 'en'), null);
  assert.equal(cache.serverDown(), true);
  assert.equal(await cache.clip('Two.', 'en'), null);
  assert.equal(calls, 1);
});

test('a network error is the same as a refusal', async () => {
  const cache = createClipCache(BASE, async () => {
    throw new TypeError('Failed to fetch');
  });

  assert.equal(await cache.clip('One.', 'en'), null);
  assert.equal(cache.serverDown(), true);
});

test('reset forgets the clips and gives the server another chance', async () => {
  let status = 503;
  const cache = createClipCache(BASE, async () => answer(status));

  await cache.clip('One.', 'en');
  status = 200;
  cache.reset();

  assert.equal(cache.serverDown(), false);
  assert.match(await cache.clip('One.', 'en'), /^blob:/);
});
