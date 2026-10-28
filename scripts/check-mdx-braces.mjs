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

// MDX runs `{word}` in prose as JavaScript, so a template helper written bare fails the build
// with "word is not defined". This check names every such line before the build does.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.argv[2] ?? 'src/content/reference';
const bareBrace = /\{[A-Za-z_][\w.:-]*\}/;
// A placeholder such as `<song name>` reads as an unknown JSX tag and fails the build the same way.
const placeholderTag = /<([a-z][\w-]*)(\s[^<>]*)?>/g;
const htmlTags = new Set(['a', 'b', 'i', 'em', 'strong', 'br', 'span', 'div', 'kbd', 'code', 'img', 'p', 'ul', 'ol', 'li', 'sup', 'sub', 'small', 'details', 'summary']);
const hasPlaceholder = (prose) => [...prose.matchAll(placeholderTag)].some((match) => !htmlTags.has(match[1]));

function mdxFiles(dir) {
	return readdirSync(dir).flatMap((name) => {
		const path = join(dir, name);
		if (statSync(path).isDirectory()) return mdxFiles(path);
		return path.endsWith('.mdx') ? [path] : [];
	});
}

const problems = [];
for (const file of mdxFiles(root)) {
	let inFence = false;
	const lines = readFileSync(file, 'utf8').split(/\r?\n/);
	lines.forEach((line, index, all) => {
		// A ::Name box only renders when a blank line follows its opener and precedes its closing ::.
		const opensBox = /^::[A-Za-z]+\s*$/.test(line) && all[index + 1]?.trim() !== '';
		const closesBox = /^::\s*$/.test(line) && all[index - 1]?.trim() !== '';
		if (!inFence && (opensBox || closesBox)) problems.push(`${file}:${index + 1}: box needs a blank line: ${line.trim()}`);
		if (line.trimStart().startsWith('```')) {
			inFence = !inFence;
			return;
		}
		if (inFence) return;
		const prose = line.replace(/`[^`]*`/g, '');
		if (bareBrace.test(prose) || hasPlaceholder(prose)) problems.push(`${file}:${index + 1}: ${line.trim()}`);
	});
}

if (problems.length > 0) {
	console.error(`check-mdx-braces: ${problems.length} problem(s): bare braces or placeholder tags go in backticks; a ::Name box needs blank lines inside:`);
	for (const problem of problems) console.error(`  ${problem}`);
	process.exit(1);
}
console.log('check-mdx-braces: no bare braces in prose.');
