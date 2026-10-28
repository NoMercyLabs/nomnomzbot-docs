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

// For every helper in docs-work/helpers.json, finds one typed example and its result in the product
// tests of the template helpers. Each test row renders a typed template through the real resolver.
// The output keeps file:line of the row, so a reader can check it.
//
//   node scripts/export-helper-inputs.mjs <product repo root> [--data <helpers.json>] [--out <file>]
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, resolve, sep } from 'node:path';

const TEST_ROOT = 'server/tests';
const ROW_PAIR = /\{\s*"((?:[^"\\])*)"\s*,\s*"((?:[^"\\])*)"\s*\}/;
const INLINE_PAIR = /InlineData\(\s*"((?:[^"\\])*)"\s*,\s*"((?:[^"\\])*)"/;
const SINGLE_GROUP = /^\{[^{}]+\}$/;
const HEAD = /^\{([^:}|]+)/;
const ANGLE = /<[^>]+>/g;
const REGEX_SPECIAL = /[.*+?^${}()|[\]\\]/g;
const NUMBER_SLOT = /<[nab]>/g;
const SHUFFLE = /\.shuffle:/;

function walk(dir, found) {
	for (const name of readdirSync(dir)) {
		if (name === 'bin' || name === 'obj') continue;
		const full = join(dir, name);
		if (statSync(full).isDirectory()) walk(full, found);
		else if (name.endsWith('.cs')) found.push(full);
	}
	return found;
}

function readRows(root) {
	const files = walk(join(root, TEST_ROOT), []).sort();
	const rows = [];
	for (const file of files) {
		const lines = readFileSync(file, 'utf8').split(/\r?\n/);
		lines.forEach((line, index) => {
			const match = ROW_PAIR.exec(line) ?? INLINE_PAIR.exec(line);
			if (match === null || !SINGLE_GROUP.test(match[1])) return;
			// A shuffle test lists the pieces, not one output, so it is no example.
			if (SHUFFLE.test(match[1])) return;
			const source = `${relative(root, file).split(sep).join('/')}:${index + 1}`;
			rows.push({ typed: match[1], result: match[2], source });
		});
	}
	return rows;
}

// The shape a registry key accepts, as a test on the typed text's head.
function shapeOf(key) {
	if (key.startsWith('date:')) return null;
	// A number slot takes digits only, so `{args.all.x}` never stands in for `args.<n>.x`.
	const escaped = key.replace(REGEX_SPECIAL, '\\$&').replace(NUMBER_SLOT, '\\d+');
	const generic = escaped.replace(/<[^>]+>/g, '[^.:|]+');
	return new RegExp(`^${generic.replace(/:\[\^\.:\|\]\+.*$/, '')}$`, 'i');
}

function dateStep(key) {
	const step = /\|([a-z+-]*)/i.exec(key);
	return step === null ? null : step[1].replace(ANGLE, '');
}

function matches(helper, row) {
	const head = HEAD.exec(row.typed)?.[1];
	if (head === undefined) return false;
	const hasArgument = row.typed.includes(':', 1) && row.typed.indexOf(':') < row.typed.length - 1;
	if (helper.key.startsWith('date:')) {
		if (head !== 'date') return false;
		const step = dateStep(helper.key);
		return step !== null && step !== '' && row.typed.includes(`|${step}`);
	}
	const keyHasDefault = /^args\.<n>:<default>$/.test(helper.key);
	if (keyHasDefault) return /^args\.\d+$/i.test(head) && hasArgument;
	if (helper.key === 'args.<n>') return /^args\.\d+$/i.test(head) && !hasArgument;
	const shape = shapeOf(helper.key);
	return shape !== null && shape.test(head);
}

function main() {
	const args = process.argv.slice(2);
	const root = args[0];
	if (root === undefined || root.startsWith('--')) {
		console.error('usage: node scripts/export-helper-inputs.mjs <product repo root> [--data f] [--out f]');
		process.exit(1);
	}
	const option = (name, fallback) => (args.includes(name) ? args[args.indexOf(name) + 1] : fallback);
	const data = JSON.parse(readFileSync(option('--data', 'docs-work/helpers.json'), 'utf8'));
	const rows = readRows(resolve(root));
	const examples = {};
	for (const helper of data.helpers) {
		const hit = rows.find((row) => matches(helper, row) && row.result !== '');
		if (hit !== undefined) examples[helper.key] = hit;
	}
	const out = option('--out', 'docs-work/helper-inputs.json');
	writeFileSync(out, `${JSON.stringify({ meta: { rows: rows.length, found: Object.keys(examples).length }, examples }, null, 1)}\n`);
	console.log(`rows ${rows.length}, helpers with a typed example ${Object.keys(examples).length}, wrote ${out}`);
}

main();
