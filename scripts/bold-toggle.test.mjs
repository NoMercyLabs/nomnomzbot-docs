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
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const menu = readFileSync(new URL('../src/components/A11yMenu.tsx', import.meta.url), 'utf8');
const layout = readFileSync(new URL('../src/layouts/MarkdownLayout.astro', import.meta.url), 'utf8');
const css = readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');

// The setting is one storage key and one attribute on <html>. The menu writes them, the no-flash script
// in the layout reads them before first paint, and the stylesheet reacts to the attribute. If one of the
// three stops agreeing, the toggle silently does nothing.
test('the bold toggle uses one storage key and one attribute in the menu, the layout and the stylesheet', () => {
  assert.match(menu, /read\('bold-text', 'on'\)/);
  assert.match(menu, /setAttribute\('data-bold', value\)/);
  assert.match(menu, /write\('bold-text', value\)/);
  assert.match(layout, /setAttribute\("data-bold", localStorage\.getItem\("bold-text"\) \|\| "on"\)/);
  assert.match(layout, /data-bold="on"/);
  assert.match(css, /html\[data-bold='off'\] :is\(p, li, td, dd, blockquote\) :is\(strong, b\)/);
});

test('turning bold off never touches headings or table headers', () => {
  const rule = css.match(/html\[data-bold='off'\][^{]*\{/)?.[0] ?? '';
  assert.doesNotMatch(rule, /\bh[1-6]\b|\bth\b/);
});
