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

const WORDS_OF_REAL_TEXT = 3;

// A table of one or two words per cell (he, she, they; is, are) is reference data: the voice would say each
// word on its own, which is slow and says nothing a listener can use. A table is read only when some cell
// holds real text.
export function tableIsRead(cellTexts: string[]): boolean {
  return cellTexts.some(text => text.trim().split(/\s+/).filter(Boolean).length >= WORDS_OF_REAL_TEXT);
}

function endsInStop(text: string): boolean {
  return /[.!?…]$/.test(text);
}

// A table lists interface names (a panel, a button, a state) next to what each
// one means. A row is read as one speech, not one cell at a time: the first cell
// says what the row is about, the others say what it means. "Active: The plan
// runs." A header row is skipped: its words only name the columns.
export function rowText(cellTexts: string[]): string {
  const [first, ...rest] = cellTexts.map(text => text.trim()).filter(Boolean);
  if (first === undefined) return '';
  if (rest.length === 0) return first;
  // A stop between the cells, unless a cell already ends in one.
  const spoken = rest.reduce((text, cell) => `${text}${endsInStop(text) ? ' ' : '. '}${cell}`);
  return `${first}${endsInStop(first) ? ' ' : ': '}${spoken}`;
}
