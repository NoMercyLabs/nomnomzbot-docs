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

// A table lists interface names (a panel, a button, a state) next to what each
// one means. Read aloud is for the explanation, so a header cell and the label
// cell of a row are skipped. A row with one cell is plain text and is read.
export function isLabelCell(tagName: string, cellIndex: number, cellCount: number): boolean {
  if (tagName === 'TH') return true;
  return tagName === 'TD' && cellCount > 1 && cellIndex === 0;
}
