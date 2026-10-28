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

// Writes the "Template helpers" section of the user guide.
// It reads every helper from a data file, places each helper on exactly one page
// by the grouping table, and writes one MDX page per row plus an overview page.
//
//   node scripts/gen-template-helpers.mjs [--data <file>] [--groups <file>] [--out <dir>] [--check]
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const DEFAULT_DATA = 'docs-work/helpers.json';
const DEFAULT_GROUPS = 'docs-work/helper-groups.md';
const DEFAULT_OUT = 'src/content/reference/en/templates';
const ROUTE_PREFIX = '/reference/templates/';
const OVERVIEW_SLUG = 'overview';
const OVERVIEW_TITLE = 'Template helpers';
const TABLE_HEADER = ['Order', 'Group', 'Page title', 'Route', 'Key patterns', 'Count'];
const SECTION_NAMES = ['Groups', 'Overview', 'Intros', 'Sample corrections'];
const CORRECTION_LINE = /^- `([^`]+)` = `([^`]*)`/;

const SECTION_HEAD = /^## (.+?)\s*$/;
const INTRO_HEAD = /^### (\S+)\s*$/;
const ROUTE_SHAPE = /^\/reference\/templates\/[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ORDER_SHAPE = /^\d+$/;
const SEPARATOR_CELL = /^:?-+:?$/;
const BACKTICK_CONTENT = /`([^`]+)`/g;
const BACKTICK_SPAN = /`[^`]*`/g;
const BACKTICK_RUNS = /`+/g;
const PIPE = /\|/g;
const LINE_BREAK = /\s*\r?\n\s*/g;
const SPLIT_LINES = /\r?\n/;
const GLOB_SPECIAL = /[.+?^${}()|[\]\\]/g;
const STAR = /\*/g;
const BARE_BRACE = /\{[A-Za-z_][\w.:-]*\}/;
const ANGLE_OPEN = /</g;
const KEEP_TICK_SPANS = /(`[^`]*`)/;
const TICK_SPAN_ONLY = /^`[^`]*`$/;
const RAW_ANGLE = /<[A-Za-z/!]/;
const YAML_PLAIN = /^[A-Za-z0-9][A-Za-z0-9 ,.'()&/-]*$/;
const YAML_RESERVED = /^(?:true|false|null|yes|no|on|off|~|[0-9.]+)$/i;
const FENCE_START = /^\s*```/;

function die(lines) {
	for (const line of lines) console.error(line);
	process.exit(1);
}

function readOptions(args) {
	const options = { data: DEFAULT_DATA, groups: DEFAULT_GROUPS, out: DEFAULT_OUT, check: false };
	for (let index = 0; index < args.length; index++) {
		const name = args[index];
		if (name === '--check') {
			options.check = true;
			continue;
		}
		if (name === '--nav') {
			options.nav = true;
			continue;
		}
		const value = args[index + 1];
		if (!['--data', '--groups', '--out'].includes(name) || value === undefined) {
			die([`gen-template-helpers: unknown or incomplete option ${name}`]);
		}
		options[name.slice(2)] = value;
		index++;
	}
	return options;
}

// ---- data file -------------------------------------------------------------

function loadHelpers(path) {
	const parsed = JSON.parse(readFileSync(path, 'utf8'));
	if (!Array.isArray(parsed.helpers)) die([`gen-template-helpers: ${path} has no "helpers" array`]);
	const seen = new Set();
	const problems = [];
	for (const helper of parsed.helpers) {
		if (typeof helper.key !== 'string' || helper.key === '') {
			problems.push('a helper has no key');
		} else if (seen.has(helper.key)) {
			problems.push(`duplicate key ${helper.key}`);
		} else {
			seen.add(helper.key);
		}
	}
	if (problems.length > 0) die([`gen-template-helpers: bad data in ${path}`, ...problems.map((p) => `  ${p}`)]);
	return parsed.helpers;
}

// ---- groups file -----------------------------------------------------------

function splitSections(text) {
	const sections = { Groups: [], Overview: [], Intros: [], 'Sample corrections': [] };
	let current = null;
	for (const line of text.split(SPLIT_LINES)) {
		const head = SECTION_HEAD.exec(line);
		if (head !== null && SECTION_NAMES.includes(head[1])) {
			current = head[1];
			continue;
		}
		// An unknown "##" heading ends Groups and Intros; inside Overview it stays prose.
		if (head !== null && current !== 'Overview') current = null;
		if (current !== null) sections[current].push(line);
	}
	return sections;
}

// Splits a table row on pipes that sit outside backticks.
function splitRow(line) {
	const body = line.trim().replace(/^\|/, '').replace(/\|$/, '');
	const cells = [];
	let cell = '';
	let inCode = false;
	for (const char of body) {
		if (char === '`') inCode = !inCode;
		if (char === '|' && !inCode) {
			cells.push(cell.trim());
			cell = '';
			continue;
		}
		cell += char;
	}
	cells.push(cell.trim());
	return cells;
}

function globToRegex(pattern) {
	const escaped = pattern.replace(GLOB_SPECIAL, '\\$&');
	const source = escaped.replace(STAR, '.*');
	return new RegExp(`^${source}$`);
}

function parsePatterns(cell) {
	const positive = [];
	const exclusions = [];
	for (const match of cell.matchAll(BACKTICK_CONTENT)) {
		const text = match[1];
		if (text.startsWith('!')) {
			exclusions.push(globToRegex(text.slice(1)));
		} else {
			positive.push(globToRegex(text));
		}
	}
	return { positive, exclusions };
}

function parseRow(cells, problems) {
	const [order, group, title, route, patterns, count] = cells;
	const label = route || group || '(row)';
	if (!ORDER_SHAPE.test(order)) problems.push(`${label}: Order must be an integer, found "${order}"`);
	if (!ORDER_SHAPE.test(count)) problems.push(`${label}: Count must be an integer, found "${count}"`);
	if (!ROUTE_SHAPE.test(route) || route === `${ROUTE_PREFIX}${OVERVIEW_SLUG}`) problems.push(`${label}: bad Route`);
	if (group === '' || title === '') problems.push(`${label}: Group and Page title must not be empty`);
	const { positive, exclusions } = parsePatterns(patterns);
	if (positive.length === 0) problems.push(`${label}: no positive key pattern in backticks`);
	return {
		order: Number(order),
		group,
		title,
		route,
		slug: route.slice(ROUTE_PREFIX.length),
		positive,
		exclusions,
		expected: Number(count),
	};
}

function parseTable(lines) {
	const tableLines = lines.filter((line) => line.trimStart().startsWith('|'));
	if (tableLines.length === 0) die(['gen-template-helpers: the Groups section holds no table']);
	const header = splitRow(tableLines[0]);
	if (header.join('|') !== TABLE_HEADER.join('|')) {
		die(['gen-template-helpers: Groups table header differs from the agreed format', `  found:    | ${header.join(' | ')} |`]);
	}
	const problems = [];
	const rows = [];
	for (const line of tableLines.slice(1)) {
		const cells = splitRow(line);
		if (cells.every((cell) => SEPARATOR_CELL.test(cell))) continue;
		if (cells.length !== TABLE_HEADER.length) {
			problems.push(`row has ${cells.length} cells, expected ${TABLE_HEADER.length}: ${line.trim()}`);
			continue;
		}
		rows.push(parseRow(cells, problems));
	}
	const routes = new Set();
	for (const row of rows) {
		if (routes.has(row.route)) problems.push(`${row.route}: route appears twice`);
		routes.add(row.route);
	}
	if (problems.length > 0) die(['gen-template-helpers: Groups table problems', ...problems.map((p) => `  ${p}`)]);
	return rows.sort((a, b) => a.order - b.order);
}

function parseIntros(lines) {
	const intros = new Map();
	let route = null;
	for (const line of lines) {
		const head = INTRO_HEAD.exec(line);
		if (head !== null) {
			route = head[1];
			intros.set(route, []);
			continue;
		}
		if (route !== null) intros.get(route).push(line);
	}
	return new Map([...intros].map(([key, body]) => [key, body.join('\n').trim()]));
}

function loadGroups(path) {
	const sections = splitSections(readFileSync(path, 'utf8'));
	return {
		rows: parseTable(sections.Groups),
		overview: sections.Overview.join('\n').trim(),
		intros: parseIntros(sections.Intros),
		corrections: parseCorrections(sections['Sample corrections']),
	};
}

// A listed sample replaces the product sample that the helper cannot return (each line cites the code).
function parseCorrections(lines) {
	const corrections = new Map();
	for (const line of lines) {
		const found = CORRECTION_LINE.exec(line);
		if (found !== null) corrections.set(found[1], found[2]);
	}
	return corrections;
}

function applyCorrections(helpers, corrections) {
	const keys = new Set(helpers.map((helper) => helper.key));
	const unknown = [...corrections.keys()].filter((key) => !keys.has(key));
	if (unknown.length > 0) die(['gen-template-helpers: sample correction for an unknown key', ...unknown.map((k) => `  ${k}`)]);
	return helpers.map((helper) => (corrections.has(helper.key) ? { ...helper, sample: corrections.get(helper.key) } : helper));
}

// ---- placement -------------------------------------------------------------

function matchesRow(row, key) {
	const wanted = row.positive.some((pattern) => pattern.test(key));
	const excluded = row.exclusions.some((pattern) => pattern.test(key));
	return wanted && !excluded;
}

function compareKeys(a, b) {
	if (a.key < b.key) return -1;
	if (a.key > b.key) return 1;
	return 0;
}

function placeHelpers(helpers, rows) {
	const pages = new Map(rows.map((row) => [row.route, []]));
	const problems = [];
	for (const helper of helpers) {
		const hits = rows.filter((row) => matchesRow(row, helper.key));
		if (hits.length === 0) problems.push(`no row matches ${helper.key}`);
		if (hits.length > 1) problems.push(`${helper.key} matches ${hits.length} rows: ${hits.map((row) => row.route).join(', ')}`);
		for (const hit of hits) pages.get(hit.route).push(helper);
	}
	for (const list of pages.values()) list.sort(compareKeys);
	return { pages, problems };
}

function checkCounts(rows, pages, introRoutes) {
	const problems = [];
	for (const row of rows) {
		const real = pages.get(row.route).length;
		if (real === 0) problems.push(`row ${row.route} matches no helper`);
		if (real !== row.expected) problems.push(`row ${row.route}: Count says ${row.expected}, real count is ${real}`);
		if (!introRoutes.has(row.route) || introRoutes.get(row.route) === '') problems.push(`row ${row.route} has no intro`);
	}
	const known = new Set(rows.map((row) => row.route));
	for (const route of introRoutes.keys()) {
		if (!known.has(route) && route !== `${ROUTE_PREFIX}${OVERVIEW_SLUG}`) problems.push(`intro for ${route}, which is not a row`);
	}
	return problems;
}

// ---- brace rule (same as scripts/check-mdx-braces.mjs) -----------------------

function braceProblems(label, text) {
	const problems = [];
	let inFence = false;
	text.split(SPLIT_LINES).forEach((line, index) => {
		if (FENCE_START.test(line)) {
			inFence = !inFence;
			return;
		}
		if (inFence) return;
		const prose = line.replace(BACKTICK_SPAN, '');
		if (BARE_BRACE.test(prose)) problems.push(`${label}:${index + 1}: bare brace: ${line.trim()}`);
	});
	return problems;
}

function angleWarnings(label, text) {
	const warnings = [];
	text.split(SPLIT_LINES).forEach((line, index) => {
		const prose = line.replace(BACKTICK_SPAN, '');
		if (RAW_ANGLE.test(prose)) warnings.push(`${label}:${index + 1}: angle bracket outside backticks: ${line.trim()}`);
	});
	return warnings;
}

// ---- page text -------------------------------------------------------------

function tableSafe(text) {
	return text.replace(LINE_BREAK, ' ').replace(PIPE, '\\|');
}

function codeSpan(text) {
	const safe = tableSafe(text);
	const runs = safe.match(BACKTICK_RUNS) ?? [];
	const longest = Math.max(0, ...runs.map((run) => run.length));
	const fence = '`'.repeat(longest + 1);
	const touchesTick = safe.startsWith('`') || safe.endsWith('`');
	const pad = touchesTick ? ' ' : '';
	return `${fence}${pad}${safe}${pad}${fence}`;
}

// Puts each outermost {...} group in one code span. Backticks inside a group are dropped.
function wrapBraceGroups(text) {
	let out = '';
	let depth = 0;
	let inTick = false;
	for (const char of text) {
		if (depth > 0 && char === '`') continue;
		if (depth === 0 && char === '`') inTick = !inTick;
		const opens = !inTick && char === '{';
		const closes = !inTick && char === '}' && depth > 0;
		if (opens && depth === 0) out += '`';
		if (opens) depth += 1;
		out += char;
		if (closes) depth -= 1;
		if (closes && depth === 0) out += '`';
	}
	return out;
}

// A description that names a helper in braces gets it in backticks; a raw "<" is escaped.
function proseSafe(text) {
	const parts = wrapBraceGroups(text).split(KEEP_TICK_SPANS);
	const safe = parts.map((part) => (TICK_SPAN_ONLY.test(part) ? part : part.replace(ANGLE_OPEN, '&lt;')));
	return safe.join('');
}

function firstLine(text) {
	const lines = text.split(SPLIT_LINES);
	return lines[0].trim();
}

function helperRow(helper) {
	const description = firstLine(helper.description ?? '');
	const sample = (helper.sample ?? '').trim();
	const name = codeSpan(`{${helper.key}}`);
	const gives = description === '' ? '-' : tableSafe(proseSafe(description));
	const example = sample === '' ? '-' : codeSpan(sample);
	return `| ${name} | ${gives} | ${example} |`;
}

function countWords(count) {
	return `${count} ${count === 1 ? 'helper' : 'helpers'}`;
}

function yamlText(value) {
	const plain = YAML_PLAIN.test(value) && !YAML_RESERVED.test(value);
	return plain ? value : JSON.stringify(value);
}

function pageDescription(row, count) {
	return `Lists ${countWords(count).replace('helper', 'template helper')}, each with what it gives and an example.`;
}

// The nav-structure.ts groups for the section, in table order. Printed with --nav, pasted by hand.
function navLines(rows) {
	const groups = new Map([['Template helpers', ['templates/overview']]]);
	for (const row of rows) {
		const name = `Helpers: ${row.group}`;
		const slug = row.route.replace(ROUTE_PREFIX, 'templates/');
		groups.set(name, [...(groups.get(name) ?? []), slug]);
	}
	const lines = [];
	for (const [name, slugs] of groups) {
		lines.push('    {', `      group: "${name}",`, '      pages: [');
		for (const slug of slugs) lines.push(`        '${slug}',`);
		lines.push('      ],', '    },');
	}
	return lines;
}

function frontmatter(title, description) {
	return `---\ntitle: ${yamlText(title)}\ndescription: ${yamlText(description)}\n---\n`;
}

function groupPage(row, helpers, intro) {
	const description = pageDescription(row, helpers.length);
	const head = frontmatter(row.title, description);
	const table = ['| Helper | What it gives | Example |', '| --- | --- | --- |', ...helpers.map(helperRow)];
	return `${head}\n${intro}\n\n${table.join('\n')}\n`;
}

function overviewDescription(total, pageCount) {
	return `Find any of the ${total} template helpers, split over ${pageCount} pages by topic.`;
}

function overviewSections(rows, pages) {
	const lines = [];
	let group = null;
	for (const row of rows) {
		if (row.group !== group) {
			group = row.group;
			lines.push('', `### ${group}`, '');
		}
		lines.push(`- [${row.title}](${row.route}): ${countWords(pages.get(row.route).length)}`);
	}
	return lines.join('\n');
}

function overviewPage(rows, pages, overview, total) {
	const head = frontmatter(OVERVIEW_TITLE, overviewDescription(total, rows.length));
	const sections = overviewSections(rows, pages);
	return `${head}\n${overview}\n\n## All helper pages\n${sections}\n`;
}

function buildPages(rows, pages, intros, overview, total) {
	const built = new Map();
	for (const row of rows) {
		built.set(`${row.slug}.mdx`, groupPage(row, pages.get(row.route), intros.get(row.route)));
	}
	built.set(`${OVERVIEW_SLUG}.mdx`, overviewPage(rows, pages, overview, total));
	return built;
}

// ---- main ------------------------------------------------------------------

function sourceProblems(overview, intros) {
	const problems = braceProblems('helper-groups.md ## Overview', overview);
	for (const [route, body] of intros) problems.push(...braceProblems(`helper-groups.md ### ${route}`, body));
	return problems;
}

function pageProblems(built) {
	const problems = [];
	for (const [name, text] of built) problems.push(...braceProblems(name, text));
	return problems;
}

function pageWarnings(built) {
	const warnings = [];
	for (const [name, text] of built) warnings.push(...angleWarnings(name, text));
	return warnings;
}

function summary(rows, pages, total) {
	const lines = [`placed ${total} of ${total}`];
	for (const row of rows) lines.push(`${row.route}  ${pages.get(row.route).length}`);
	const missing = [];
	for (const list of pages.values()) {
		for (const helper of list) {
			if (firstLine(helper.description ?? '') === '') missing.push(helper.key);
		}
	}
	lines.push(`keys without a description (${missing.length}):`);
	for (const key of missing.sort()) lines.push(`  ${key}`);
	return lines;
}

function writePages(outDir, built) {
	mkdirSync(outDir, { recursive: true });
	for (const [name, text] of built) writeFileSync(join(outDir, name), text);
}

function main() {
	const options = readOptions(process.argv.slice(2));
	const loaded = loadHelpers(options.data);
	const { rows, overview, intros, corrections } = loadGroups(options.groups);
	const helpers = applyCorrections(loaded, corrections);
	const { pages, problems } = placeHelpers(helpers, rows);
	problems.push(...checkCounts(rows, pages, intros));
	problems.push(...sourceProblems(overview, intros));
	if (problems.length > 0) die(['gen-template-helpers: not placed', ...problems.map((p) => `  ${p}`)]);

	const built = buildPages(rows, pages, intros, overview, helpers.length);
	const generated = pageProblems(built);
	if (generated.length > 0) die(['gen-template-helpers: bare brace in a generated page. Put each in backticks:', ...generated.map((p) => `  ${p}`)]);

	if (options.nav) {
		for (const line of navLines(rows)) console.log(line);
		return;
	}
	for (const line of summary(rows, pages, helpers.length)) console.log(line);
	for (const warning of pageWarnings(built)) console.warn(`warning: ${warning}`);
	if (options.check) {
		console.log('check only: nothing written');
		return;
	}
	const outDir = resolve(options.out);
	writePages(outDir, built);
	console.log(`wrote ${built.size} pages to ${outDir}`);
}

main();
