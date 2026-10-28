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

// Chrome's network voices stop on a long utterance and never fire its end
// event, so reading hangs on a long block that has no sentence stop. Cut every
// sentence that is too long at a comma, or at a space when there is no comma.

export const MAX_UTTERANCE = 160;

function cutPoint(text: string): number {
  const window = text.slice(0, MAX_UTTERANCE + 1);
  const comma = Math.max(window.lastIndexOf(', '), window.lastIndexOf('; '), window.lastIndexOf(': '));
  if (comma > 0) return comma + 1;
  const space = window.lastIndexOf(' ');
  return space > 0 ? space : MAX_UTTERANCE;
}

// A sentence splitter ends a sentence at "!", so "such as !uptime" comes apart
// as "such as !" and "uptime." A "!" that follows a space is a chat command.
export function joinCommandBangs(parts: string[]): string[] {
  const joined: string[] = [];
  for (const part of parts) {
    const last = joined.at(-1);
    if (last !== undefined && /\s!$/.test(last)) joined[joined.length - 1] = `${last}${part}`;
    else joined.push(part);
  }
  return joined;
}

export function chunkSentence(sentence: string): string[] {
  const chunks: string[] = [];
  let rest = sentence.trim();
  while (rest.length > MAX_UTTERANCE) {
    const at = cutPoint(rest);
    chunks.push(rest.slice(0, at).trim());
    rest = rest.slice(at).trim();
  }
  if (rest) chunks.push(rest);
  return chunks;
}
