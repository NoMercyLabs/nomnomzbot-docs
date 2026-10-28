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
	readFileSync(file, 'utf8').split(/\r?\n/).forEach((line, index) => {
		if (line.trimStart().startsWith('```')) {
			inFence = !inFence;
			return;
		}
		if (inFence) return;
		const prose = line.replace(/`[^`]*`/g, '');
		if (bareBrace.test(prose)) problems.push(`${file}:${index + 1}: ${line.trim()}`);
	});
}

if (problems.length > 0) {
	console.error(`check-mdx-braces: ${problems.length} bare brace(s) in prose. Put each in backticks:`);
	for (const problem of problems) console.error(`  ${problem}`);
	process.exit(1);
}
console.log('check-mdx-braces: no bare braces in prose.');
