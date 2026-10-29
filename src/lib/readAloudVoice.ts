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

// A browser speaks with its default voice for the page language, and that is
// often the oldest, most robotic voice on the system. Rank the voices the
// reader has and prefer the natural ones: neural and online voices first, then
// Apple's enhanced voices. Chrome's Google voices are never offered.

export interface VoiceLike {
  name: string;
  lang: string;
  localService: boolean;
}

const NATURAL = /natural|neural/i;
const ONLINE = /\bonline\b/i;
const APPLE = /premium|enhanced|siri/i;
const ROBOTIC = /espeak|compact/i;
// The old Windows desktop voices and Chrome's Google network voices sound flat and robotic. They are never offered.
const NEVER_OFFERED = /\bmicrosoft (david|mark|zira)\b|^google\b/i;
const MAX_CHOICES = 6;

function sameLanguage(voice: VoiceLike, lang: string): boolean {
  return (
    voice.lang.replace('_', '-').toLowerCase().startsWith(lang.slice(0, 2).toLowerCase()) &&
    !NEVER_OFFERED.test(voice.name)
  );
}

export function rankVoice(voice: VoiceLike, lang: string): number {
  let rank = 10;
  if (NATURAL.test(voice.name)) rank += 100;
  else if (ONLINE.test(voice.name)) rank += 80;
  else if (APPLE.test(voice.name)) rank += 60;

  if (ROBOTIC.test(voice.name)) rank -= 20;
  if (!voice.localService) rank += 5;

  const region = voice.lang.replace('_', '-').toLowerCase();
  if (region === lang.toLowerCase()) rank += 3;
  else if (lang.length === 2 && region === `${lang.toLowerCase()}-us`) rank += 2;

  return rank;
}

export function voiceChoices<T extends VoiceLike>(voices: readonly T[], lang: string): T[] {
  return voices
    .filter(voice => sameLanguage(voice, lang))
    .map(voice => ({ voice, rank: rankVoice(voice, lang) }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, MAX_CHOICES)
    .map(entry => entry.voice);
}

// The reader's own pick wins while that voice still exists on this machine;
// otherwise the best-ranked voice for the language.
export function pickVoice<T extends VoiceLike>(
  voices: readonly T[],
  lang: string,
  preferredName: string | null,
): T | undefined {
  const preferred = preferredName ? voices.find(voice => voice.name === preferredName) : undefined;
  return preferred ?? voiceChoices(voices, lang)[0];
}
