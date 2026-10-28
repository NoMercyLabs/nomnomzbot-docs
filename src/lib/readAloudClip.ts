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
// The reader asks for the next sentence while this one plays, and a clip is
// kept until the reading stops. When the bot cannot speak, the cache says so
// once and the reader uses the browser voice for the rest of that reading.

export type ClipFetch = (url: string) => Promise<Pick<Response, 'ok' | 'status' | 'blob'>>;

export interface ClipCache {
  clip: (text: string, lang: string) => Promise<string | null>;
  serverDown: () => boolean;
  reset: () => void;
}

export function clipUrl(base: string, text: string, lang: string): string {
  const query = new URLSearchParams({ text, locale: lang });
  return `${base}?${query.toString()}`;
}

export function createClipCache(base: string, fetchClip: ClipFetch): ClipCache {
  const clips = new Map<string, Promise<string | null>>();
  let down = false;

  async function load(text: string, lang: string): Promise<string | null> {
    try {
      const response = await fetchClip(clipUrl(base, text, lang));
      if (!response.ok) {
        down = true;
        return null;
      }
      return URL.createObjectURL(await response.blob());
    }
    catch {
      down = true;
      return null;
    }
  }

  return {
    clip: (text, lang) => {
      if (down) return Promise.resolve(null);
      const key = `${lang}:${text}`;
      let pending = clips.get(key);
      if (!pending) {
        pending = load(text, lang);
        clips.set(key, pending);
      }
      return pending;
    },
    serverDown: () => down,
    reset: () => {
      for (const pending of clips.values()) {
        void pending.then(url => url && URL.revokeObjectURL(url));
      }
      clips.clear();
      down = false;
    },
  };
}
