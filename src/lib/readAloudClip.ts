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

// The bot's own voice for Read aloud: one sentence is one request and one clip.
// The reader asks for the next sentences while this one plays, and a clip is
// kept until the reading stops. When the bot cannot speak, the cache says so
// once and the reader uses the browser voice for the rest of that reading.
//
// Requests go out a few at a time, started in the order they were asked for. A long block
// asked for every line at once, and the server answered them in any order, so
// the line the reader needed first could arrive last. The line that is read now
// is asked for as urgent and goes to the front of the queue.

// `fresh` asks for the network and not the browser cache: a retry must not read back the bad answer it retries.
export type ClipFetch = (url: string, options?: { fresh?: boolean }) => Promise<Pick<Response, 'ok' | 'status' | 'blob'>>;

export interface ClipCache {
  clip: (text: string, lang: string, urgent?: boolean) => Promise<string | null>;
  // Forgets the lines that only wait for their turn; each answers with no clip and can be asked for again.
  dropQueued: () => void;
  serverDown: () => boolean;
  reset: () => void;
}

interface Waiting {
  key: string;
  start: () => void;
  cancel: () => void;
}

// The sentences to have ready after the one being read: the rest of this block, then the blocks after it, up
// to `count`. The later blocks are opened one by one, only as far as the buffer needs.
export function textsAhead(
  sentences: string[],
  index: number,
  laterBlocks: Iterable<string[]>,
  count: number,
): string[] {
  const ahead = sentences.slice(index + 1, index + 1 + count);
  const blocks = laterBlocks[Symbol.iterator]();
  while (ahead.length < count) {
    const block = blocks.next();
    if (block.done) break;
    ahead.push(...block.value.slice(0, count - ahead.length));
  }
  return ahead;
}

// Resolves when `wanted` of the clips have answered (with a sound or without: a bad sentence must not hold the
// reading back), when all of them have, or after `maxWaitMs`, whichever comes first.
export function whenBuffered(
  clips: Promise<string | null>[],
  wanted: number,
  maxWaitMs: number,
): Promise<void> {
  const needed = Math.min(wanted, clips.length);
  if (needed === 0) return Promise.resolve();
  return new Promise((resolve) => {
    let answered = 0;
    const timer = setTimeout(resolve, maxWaitMs);
    for (const clip of clips) {
      void clip.then(() => {
        answered += 1;
        if (answered >= needed) {
          clearTimeout(timer);
          resolve();
        }
      });
    }
  });
}

export function clipUrl(base: string, text: string, lang: string): string {
  const query = new URLSearchParams({ text, locale: lang });
  return `${base}?${query.toString()}`;
}

const TRIES = 3;

// A busy bot (503, 429, an empty clip, a dropped connection) usually answers a moment later. Any other refusal
// (a site that is not allowed, a bad request) is the same every time.
function worthTryingAgain(status: number): boolean {
  return status === 429 || status >= 500;
}

export function createClipCache(base: string, fetchClip: ClipFetch, retryDelayMs = 400): ClipCache {
  const clips = new Map<string, Promise<string | null>>();
  let down = false;

  async function load(text: string, lang: string): Promise<string | null> {
    let refused = false;
    for (let attempt = 1; attempt <= TRIES; attempt += 1) {
      if (attempt > 1) await new Promise(resolve => setTimeout(resolve, retryDelayMs * (attempt - 1)));
      try {
        const response = await fetchClip(clipUrl(base, text, lang), { fresh: attempt > 1 });
        if (!response.ok) {
          refused = true;
          if (worthTryingAgain(response.status)) continue;
          break;
        }
        refused = false;
        const blob = await response.blob();
        // An empty clip cannot be played (a browser's range request on it fails). It is tried again; if it stays
        // empty it is one sentence's problem, not the server's: the browser voice reads that sentence and the
        // next one asks the bot again.
        if (blob.size > 0) return URL.createObjectURL(blob);
      }
      catch {
        // a dropped connection: try again
        refused = true;
      }
    }
    // Only a bot that keeps refusing is skipped for the rest of the reading.
    if (refused) down = true;
    return null;
  }

  // A fresh clip takes 3 to 13 s, so one at a time stacked the waits. A few together, still started in order.
  const MAX_AT_ONCE = 3;
  const queue: Waiting[] = [];
  let active = 0;

  function next(): void {
    while (active < MAX_AT_ONCE && queue.length > 0) {
      active += 1;
      queue.shift()!.start();
    }
  }

  function enqueue(key: string, text: string, lang: string, urgent: boolean): Promise<string | null> {
    return new Promise((resolve) => {
      const waiting: Waiting = {
        key,
        start: () => {
          const loaded = down ? Promise.resolve(null) : load(text, lang);
          void loaded.then((url) => {
            active -= 1;
            resolve(url);
            next();
          });
        },
        cancel: () => resolve(null),
      };
      if (urgent) queue.unshift(waiting);
      else queue.push(waiting);
      next();
    });
  }

  return {
    clip: (text, lang, urgent = false) => {
      if (down) return Promise.resolve(null);
      const key = `${lang}:${text}`;
      const pending = clips.get(key);
      if (pending) {
        // Already asked for: if it still waits, the line read now moves to the front.
        const index = queue.findIndex(waiting => waiting.key === key);
        if (urgent && index > 0) queue.unshift(...queue.splice(index, 1));
        return pending;
      }
      const created = enqueue(key, text, lang, urgent);
      clips.set(key, created);
      return created;
    },
    dropQueued: () => {
      for (const waiting of queue.splice(0)) {
        clips.delete(waiting.key);
        waiting.cancel();
      }
    },
    serverDown: () => down,
    reset: () => {
      queue.splice(0).forEach(waiting => waiting.cancel());
      for (const pending of clips.values()) {
        void pending.then(url => url && URL.revokeObjectURL(url));
      }
      clips.clear();
      down = false;
    },
  };
}
