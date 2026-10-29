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

import { clipUrl, createClipCache, textsAhead, whenBuffered } from '../src/lib/readAloudClip.ts';

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

test('a request that keeps being refused gives no clip, and the server is skipped for the rest of the reading', async () => {
  let calls = 0;
  const cache = createClipCache(BASE, async () => {
    calls += 1;
    return answer(503);
  }, 0);

  assert.equal(await cache.clip('One.', 'en'), null);
  assert.equal(cache.serverDown(), true);
  assert.equal(await cache.clip('Two.', 'en'), null);
  assert.equal(calls, 3);
});

// Stoney 2026-10-29: "why did that fallback to the system tts?!" One busy answer (503, 429, an empty body, a
// dropped connection) switched the bot voice off for the whole reading. A busy answer is tried again first.
test('a busy answer is tried again, and the bot voice stays on when the second try works', async () => {
  const answers = [answer(503), answer(429), answer(200)];
  const cache = createClipCache(BASE, async () => answers.shift(), 0);

  assert.match(await cache.clip('One.', 'en'), /^blob:/);
  assert.equal(cache.serverDown(), false);
});

test('an empty answer is tried again before the sentence goes to the browser voice', async () => {
  const answers = [answer(200, []), answer(200)];
  const cache = createClipCache(BASE, async () => answers.shift(), 0);

  assert.match(await cache.clip('One.', 'en'), /^blob:/);
});

// Stoney 2026-10-29: "the current line just switched to the system tts". The server's empty answer carried a
// one-week cache header, so the browser gave the same empty clip to every retry (same x-request-id each time).
// A retry must go to the network, not to the cache.
test('the first try may use the browser cache, and every retry goes to the network', async () => {
  const fresh = [];
  const answers = [answer(200, []), answer(200, []), answer(200)];
  const cache = createClipCache(BASE, async (_url, options) => {
    fresh.push(options?.fresh === true);
    return answers.shift();
  }, 0);

  assert.match(await cache.clip('One.', 'en'), /^blob:/);
  assert.deepEqual(fresh, [false, true, true]);
});

test('a dropped connection is tried again', async () => {
  let calls = 0;
  const cache = createClipCache(BASE, async () => {
    calls += 1;
    if (calls === 1) throw new TypeError('Failed to fetch');
    return answer(200);
  }, 0);

  assert.match(await cache.clip('One.', 'en'), /^blob:/);
  assert.equal(cache.serverDown(), false);
});

test('a refusal that no retry can change (a site that is not allowed, a bad request) is not tried again', async () => {
  let calls = 0;
  const cache = createClipCache(BASE, async () => {
    calls += 1;
    return answer(403);
  }, 0);

  assert.equal(await cache.clip('One.', 'en'), null);
  assert.equal(cache.serverDown(), true);
  assert.equal(calls, 1);
});

// Stoney 2026-10-29: the console filled with ERR_REQUEST_RANGE_NOT_SATISFIABLE on blob clips. A browser asks a
// blob for a byte range, and an empty blob has none to give.
test('an empty answer is no clip, and one bad sentence does not silence the server for the rest', async () => {
  const cache = createClipCache(BASE, async (url) => (url.includes('Empty') ? answer(200, []) : answer(200)));

  assert.equal(await cache.clip('Empty one.', 'en'), null);
  assert.equal(cache.serverDown(), false);
  assert.match(await cache.clip('Fine one.', 'en'), /^blob:/);
});

// Stoney 2026-10-29: a long block asked for every line at once, and the first line came back last, so the reading
// waited on the one clip it needed first. Requests now go out one at a time, in the order they were asked for.
function slowServer() {
  const started = [];
  const gates = new Map();
  const fetchClip = (url) => {
    const text = new URL(url).searchParams.get('text');
    started.push(text);
    return new Promise((resolve) => gates.set(text, () => resolve(answer(200))));
  };
  const finish = async (text) => {
    gates.get(text)();
    await new Promise((resolve) => setImmediate(resolve));
  };
  return { started, fetchClip, finish };
}

// Stoney 2026-10-29: fresh clips take 3 to 13 s each, so one at a time stacked the waits. Three go out together,
// still in the order they were asked for; the bot's voice service handles that many at once.
test('three lines are requested at a time, in the order they were asked for', async () => {
  const server = slowServer();
  const cache = createClipCache(BASE, server.fetchClip);

  const first = cache.clip('One.', 'en');
  cache.clip('Two.', 'en');
  cache.clip('Three.', 'en');
  cache.clip('Four.', 'en');
  cache.clip('Five.', 'en');
  await new Promise((resolve) => setImmediate(resolve));

  assert.deepEqual(server.started, ['One.', 'Two.', 'Three.']);
  await server.finish('Two.');
  assert.deepEqual(server.started, ['One.', 'Two.', 'Three.', 'Four.']);
  await server.finish('One.');
  assert.deepEqual(server.started, ['One.', 'Two.', 'Three.', 'Four.', 'Five.']);
  assert.match(await first, /^blob:/);
});

test('the line that is read now goes ahead of lines that only wait', async () => {
  const server = slowServer();
  const cache = createClipCache(BASE, server.fetchClip);

  cache.clip('Busy one.', 'en');
  cache.clip('Busy two.', 'en');
  cache.clip('Busy three.', 'en');
  cache.clip('Later one.', 'en');
  cache.clip('Later two.', 'en');
  cache.clip('Now.', 'en', true);
  await new Promise((resolve) => setImmediate(resolve));
  await server.finish('Busy one.');

  assert.deepEqual(server.started, ['Busy one.', 'Busy two.', 'Busy three.', 'Now.']);
});

test('lines that only wait can be dropped, and are asked for again when needed', async () => {
  const server = slowServer();
  const cache = createClipCache(BASE, server.fetchClip);

  cache.clip('Busy one.', 'en');
  cache.clip('Busy two.', 'en');
  cache.clip('Busy three.', 'en');
  const waiting = cache.clip('Waiting.', 'en');
  await new Promise((resolve) => setImmediate(resolve));
  cache.dropQueued();

  assert.equal(await waiting, null);
  assert.equal(cache.serverDown(), false);
  await server.finish('Busy one.');
  const again = cache.clip('Waiting.', 'en');
  await new Promise((resolve) => setImmediate(resolve));
  assert.deepEqual(server.started, ['Busy one.', 'Busy two.', 'Busy three.', 'Waiting.']);
  await server.finish('Waiting.');
  assert.match(await again, /^blob:/);
});

// Stoney 2026-10-29: fetch ahead, not when a line plays: keep about ten sentences buffered.
test('the lines to buffer run on from the current sentence into the next blocks', () => {
  const later = [['C1.', 'C2.'], ['D1.']];

  assert.deepEqual(textsAhead(['A1.', 'A2.', 'A3.'], 0, later, 10), ['A2.', 'A3.', 'C1.', 'C2.', 'D1.']);
  assert.deepEqual(textsAhead(['A1.', 'A2.', 'A3.'], 2, later, 10), ['C1.', 'C2.', 'D1.']);
});

test('the buffer stops at its size, and the later blocks are only opened as far as needed', () => {
  let opened = 0;
  const later = (function* () {
    for (const block of [['B1.', 'B2.'], ['C1.', 'C2.'], ['D1.']]) {
      opened += 1;
      yield block;
    }
  })();

  assert.deepEqual(textsAhead(['A1.'], 0, later, 3), ['B1.', 'B2.', 'C1.']);
  assert.equal(opened, 2);
  assert.deepEqual(textsAhead(['A1.'], 0, [], 3), []);
});

// Stoney 2026-10-29: "a little delay and a loading indication to have at least 3 or 4 items ready to be played".
function later(ms, value = null) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

test('reading waits until the wanted number of clips are ready', async () => {
  const started = Date.now();
  await whenBuffered([later(5), later(15), later(25), later(400)], 3, 1000);

  const waited = Date.now() - started;
  assert.ok(waited >= 20 && waited < 300, `waited ${waited} ms`);
});

test('a clip that arrives with no sound still counts as handled, so one bad sentence never holds reading back', async () => {
  const started = Date.now();
  await whenBuffered([later(5, 'blob:a'), later(10, null), later(15, 'blob:b')], 3, 1000);

  assert.ok(Date.now() - started < 300);
});

test('fewer lines than the wanted number are enough when they are all there is', async () => {
  const started = Date.now();
  await whenBuffered([later(5), later(10)], 4, 1000);

  assert.ok(Date.now() - started < 300);
});

test('reading starts after the longest wait even when the clips are not all ready', async () => {
  const started = Date.now();
  await whenBuffered([later(5), later(900), later(900)], 3, 80);

  const waited = Date.now() - started;
  assert.ok(waited >= 70 && waited < 400, `waited ${waited} ms`);
});

test('no lines at all is no wait', async () => {
  const started = Date.now();
  await whenBuffered([], 4, 1000);

  assert.ok(Date.now() - started < 100);
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
