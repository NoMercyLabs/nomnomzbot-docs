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

// Writes the "Template helpers" section of the user guide: one overview page and one page per helper type.
// It places each helper on exactly one page by the type table in docs-work/helper-groups.md.
//
//   node scripts/gen-template-helpers.mjs [--data <file>] [--groups <file>] [--inputs <file>] [--out <dir>] [--check] [--nav]
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const DEFAULT_DATA = 'docs-work/helpers.json';
const DEFAULT_GROUPS = 'docs-work/helper-groups.md';
const DEFAULT_INPUTS = 'docs-work/helper-inputs.json';
const EXTRAS_DIR = 'docs-work/helper-sections';
const DEFAULT_OUT = 'src/content/reference/en/templates';
const ROUTE_PREFIX = '/reference/templates/';
const COMMANDS_PAGE = '/reference/commands/variables-and-templates';
const OVERVIEW_SLUG = 'overview';
const OVERVIEW_TITLE = 'Template helpers';
const TYPE_HEADER = ['Order', 'Type', 'Page title', 'Route', 'Key patterns', 'Count'];
const SECTION_HEADER = ['Route', 'Section', 'Key patterns'];
const SECTION_NAMES = ['Types', 'Sections', 'Inputs', 'Overview', 'Intros', 'Sample corrections', 'Description corrections'];

const SECTION_HEAD = /^## (.+?)\s*$/;
const INTRO_HEAD = /^### (\S+)\s*$/;
const SAMPLE_LINE = /^- `([^`]+)` = `([^`]*)`/;
const TEXT_LINE = /^- `([^`]+)` = "([^"]*)"/;
const INPUT_LINE = /^- `([^`]+)` = `([^`]+)`(?: -> `([^`]*)`)?\s*:\s*(\S+:\d+)/;
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
const POSITION_ONLY = /<n>/g;
const OTHER_PLACEHOLDER = /<(?!n>)[^>]+>/;
const LEADING_PIPE = /^\|/;
const TRAILING_PIPE = /\|$/;

function die(lines) {
	for (const line of lines) console.error(line);
	process.exit(1);
}

function readOptions(args) {
	const options = { data: DEFAULT_DATA, groups: DEFAULT_GROUPS, inputs: DEFAULT_INPUTS, out: DEFAULT_OUT, check: false, nav: false };
	for (let index = 0; index < args.length; index++) {
		const name = args[index];
		if (name === '--check' || name === '--nav') {
			options[name.slice(2)] = true;
			continue;
		}
		const value = args[index + 1];
		if (!['--data', '--groups', '--inputs', '--out'].includes(name) || value === undefined) {
			die([`gen-template-helpers: unknown or incomplete option ${name}`]);
		}
		options[name.slice(2)] = value;
		index++;
	}
	return options;
}

// ---- data files ------------------------------------------------------------

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

// Typed examples that docs-work/helper-inputs.json took from the product tests (scripts/export-helper-inputs.mjs).
function loadExported(path) {
	return existsSync(path) ? (JSON.parse(readFileSync(path, 'utf8')).examples ?? {}) : {};
}

// ---- groups file -----------------------------------------------------------

function splitSections(text) {
	const sections = Object.fromEntries(SECTION_NAMES.map((name) => [name, []]));
	let current = null;
	for (const line of text.split(SPLIT_LINES)) {
		const head = SECTION_HEAD.exec(line);
		if (head !== null && SECTION_NAMES.includes(head[1])) {
			current = head[1];
			continue;
		}
		// An unknown "##" heading ends a table or list section; inside Overview it stays prose.
		if (head !== null && current !== 'Overview') current = null;
		if (current !== null) sections[current].push(line);
	}
	return sections;
}

// Splits a table row on pipes that sit outside backticks.
function splitRow(line) {
	const body = line.trim().replace(LEADING_PIPE, '').replace(TRAILING_PIPE, '');
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
	return new RegExp(`^${source}$`, 'i');
}

function parsePatterns(cell) {
	const positive = [];
	const exclusions = [];
	const keys = [];
	for (const match of cell.matchAll(BACKTICK_CONTENT)) {
		const text = match[1];
		if (text.startsWith('!')) {
			exclusions.push(globToRegex(text.slice(1)));
		} else {
			positive.push(globToRegex(text));
			keys.push(text);
		}
	}
	return { positive, exclusions, keys };
}

function tableCells(lines, header, name) {
	const tableLines = lines.filter((line) => line.trimStart().startsWith('|'));
	if (tableLines.length === 0) die([`gen-template-helpers: the ${name} section holds no table`]);
	const found = splitRow(tableLines[0]);
	if (found.join('|') !== header.join('|')) {
		die([`gen-template-helpers: ${name} table header differs from the agreed format`, `  found: | ${found.join(' | ')} |`]);
	}
	return tableLines.slice(1).map(splitRow).filter((cells) => !cells.every((cell) => SEPARATOR_CELL.test(cell)));
}

function parseTypeRow(cells, problems) {
	const [order, type, title, route, patterns, count] = cells;
	const label = route || type || '(row)';
	if (!ORDER_SHAPE.test(order)) problems.push(`${label}: Order must be an integer, found "${order}"`);
	if (!ORDER_SHAPE.test(count)) problems.push(`${label}: Count must be an integer, found "${count}"`);
	if (!ROUTE_SHAPE.test(route) || route === `${ROUTE_PREFIX}${OVERVIEW_SLUG}`) problems.push(`${label}: bad Route`);
	if (type === '' || title === '') problems.push(`${label}: Type and Page title must not be empty`);
	// The sidebar is narrow: a title names the type in words; the keys go in the page's key line.
	if (title.includes('{')) problems.push(`${label}: Page title must not carry a key, found "${title}"`);
	const { positive, exclusions, keys } = parsePatterns(patterns);
	if (positive.length === 0) problems.push(`${label}: no positive key pattern in backticks`);
	return { order: Number(order), type, title, route, slug: route.slice(ROUTE_PREFIX.length), positive, exclusions, keys, expected: Number(count) };
}

function parseTypes(lines) {
	const problems = [];
	const rows = [];
	for (const cells of tableCells(lines, TYPE_HEADER, 'Types')) {
		if (cells.length !== TYPE_HEADER.length) {
			problems.push(`row has ${cells.length} cells, expected ${TYPE_HEADER.length}: ${cells.join(' | ')}`);
			continue;
		}
		rows.push(parseTypeRow(cells, problems));
	}
	const routes = new Set();
	for (const row of rows) {
		if (routes.has(row.route)) problems.push(`${row.route}: route appears twice`);
		routes.add(row.route);
	}
	if (problems.length > 0) die(['gen-template-helpers: Types table problems', ...problems.map((p) => `  ${p}`)]);
	return rows.sort((a, b) => a.order - b.order);
}

// Sections split a long page into headed tables. The first section whose patterns match a helper takes it.
function parseSections(lines) {
	const sections = new Map();
	for (const cells of tableCells(lines, SECTION_HEADER, 'Sections')) {
		const [route, heading, patterns] = cells;
		const { positive, exclusions } = parsePatterns(patterns);
		sections.set(route, [...(sections.get(route) ?? []), { heading, positive, exclusions }]);
	}
	return sections;
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

// A listed sample or description replaces the product text that the helper cannot return. Each line cites the code.
function parseLines(lines, pattern) {
	const found = new Map();
	for (const line of lines) {
		const match = pattern.exec(line);
		if (match !== null) found.set(match[1], match[2]);
	}
	return found;
}

function parseInputs(lines) {
	const found = new Map();
	for (const line of lines) {
		const match = INPUT_LINE.exec(line);
		if (match !== null) found.set(match[1], { typed: match[2], result: match[3], source: match[4] });
	}
	return found;
}

function loadGroups(path) {
	const sections = splitSections(readFileSync(path, 'utf8'));
	return {
		rows: parseTypes(sections.Types),
		sections: parseSections(sections.Sections),
		overview: sections.Overview.join('\n').trim(),
		intros: parseIntros(sections.Intros),
		samples: parseLines(sections['Sample corrections'], SAMPLE_LINE),
		descriptions: parseLines(sections['Description corrections'], TEXT_LINE),
		inputs: parseInputs(sections.Inputs),
	};
}

function applyCorrections(helpers, samples, descriptions) {
	const keys = new Set(helpers.map((helper) => helper.key));
	const unknown = [...samples.keys(), ...descriptions.keys()].filter((key) => !keys.has(key));
	if (unknown.length > 0) die(['gen-template-helpers: correction for an unknown key', ...unknown.map((k) => `  ${k}`)]);
	return helpers.map((helper) => ({
		...helper,
		sample: samples.get(helper.key) ?? helper.sample,
		description: descriptions.get(helper.key) ?? helper.description,
	}));
}

// ---- placement -------------------------------------------------------------

function matchesPatterns(entry, key) {
	const wanted = entry.positive.some((pattern) => pattern.test(key));
	const excluded = entry.exclusions.some((pattern) => pattern.test(key));
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
		const hits = rows.filter((row) => matchesPatterns(row, helper.key));
		if (hits.length === 0) problems.push(`no row matches ${helper.key}`);
		if (hits.length > 1) problems.push(`${helper.key} matches ${hits.length} rows: ${hits.map((row) => row.route).join(', ')}`);
		for (const hit of hits) pages.get(hit.route).push(helper);
	}
	for (const list of pages.values()) list.sort(compareKeys);
	return { pages, problems };
}

function splitIntoSections(route, list, sections, problems) {
	const wanted = sections.get(route);
	if (wanted === undefined) return null;
	const parts = wanted.map((section) => ({ heading: section.heading, helpers: [] }));
	for (const helper of list) {
		const index = wanted.findIndex((section) => matchesPatterns(section, helper.key));
		if (index < 0) problems.push(`${route}: no section takes ${helper.key}`);
		else parts[index].helpers.push(helper);
	}
	for (const part of parts) {
		if (part.helpers.length === 0) problems.push(`${route}: section "${part.heading}" holds no helper`);
	}
	return parts;
}

function checkCounts(rows, pages, intros) {
	const problems = [];
	for (const row of rows) {
		const real = pages.get(row.route).length;
		if (real === 0) problems.push(`row ${row.route} matches no helper`);
		if (real !== row.expected) problems.push(`row ${row.route}: Count says ${row.expected}, real count is ${real}`);
		if (!intros.has(row.route) || intros.get(row.route) === '') problems.push(`row ${row.route} has no intro`);
	}
	const known = new Set(rows.map((row) => row.route));
	for (const route of intros.keys()) {
		if (!known.has(route)) problems.push(`intro for ${route}, which is not a row`);
	}
	return problems;
}

// ---- typed examples --------------------------------------------------------

function takesInput(helper) {
	return helper.key.includes('<') || helper.key.includes(':');
}

// A position key such as args.<n>.upper is typed with the first word: ArgumentKeys.cs:17-19 and :24-34 in the product.
function positionExample(helper) {
	if (!helper.key.startsWith('args.')) return null;
	const filled = helper.key.replace(POSITION_ONLY, '1');
	return OTHER_PLACEHOLDER.test(filled) || filled.includes('<') ? null : { typed: `{${filled}}` };
}

function usableExported(helper, example) {
	if (example === undefined) return null;
	const resolved = example.result !== example.typed && !example.result.includes('{');
	const hasInput = example.typed.includes(':') || helper.key.includes('<');
	return resolved && hasInput ? example : null;
}

function exampleFor(helper, manual, exported) {
	return manual.get(helper.key) ?? usableExported(helper, exported[helper.key]) ?? positionExample(helper);
}

function collectExamples(helpers, manual, exported) {
	const examples = new Map();
	const problems = [];
	for (const helper of helpers) {
		const example = exampleFor(helper, manual, exported);
		if (example !== null && example !== undefined) examples.set(helper.key, example);
		else if (takesInput(helper)) problems.push(`${helper.key} takes input but has no typed example`);
	}
	for (const key of manual.keys()) {
		if (!helpers.some((helper) => helper.key === key)) problems.push(`Inputs line for an unknown key ${key}`);
	}
	return { examples, problems };
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

function exampleCell(helper, example) {
	const sample = (helper.sample ?? '').trim();
	if (example === undefined) return sample === '' ? '-' : codeSpan(sample);
	const result = (example.result ?? sample).trim();
	return result === '' ? codeSpan(example.typed) : `${codeSpan(example.typed)} gives ${codeSpan(result)}`;
}

function helperRow(helper, examples) {
	const description = firstLine(helper.description ?? '');
	const gives = description === '' ? '-' : tableSafe(proseSafe(description));
	return `| ${codeSpan(`{${helper.key}}`)} | ${gives} | ${exampleCell(helper, examples.get(helper.key))} |`;
}

function helperTable(helpers, examples) {
	return ['| Helper | What it gives | Example |', '| --- | --- | --- |', ...helpers.map((helper) => helperRow(helper, examples))].join('\n');
}

function countWords(count) {
	return `${count} ${count === 1 ? 'helper' : 'helpers'}`;
}

function yamlText(value) {
	const plain = YAML_PLAIN.test(value) && !YAML_RESERVED.test(value);
	return plain ? value : JSON.stringify(value);
}

function frontmatter(title, description) {
	return `---\ntitle: ${yamlText(title)}\ndescription: ${yamlText(description)}\n---\n`;
}

function readExtra(slug) {
	const path = join(EXTRAS_DIR, `${slug}.md`);
	return existsSync(path) ? readFileSync(path, 'utf8').trim() : '';
}

function pageEnd() {
	const overview = `[${OVERVIEW_TITLE}](${ROUTE_PREFIX}${OVERVIEW_SLUG})`;
	return `Back to ${overview}. For the places helpers work, special characters and HTML, read [Variables and templates](${COMMANDS_PAGE}).`;
}

function typePage(row, helpers, parts, intro, extra, examples) {
	const description = `Lists ${countWords(helpers.length).replace('helper', 'template helper')}, each with what it gives and an example.`;
	const note = 'Each row is its own example, so the rows on this page do not all come from one moment.';
	const body =
		parts === null
			? helperTable(helpers, examples)
			: parts.map((part) => `## ${part.heading}\n\n${helperTable(part.helpers, examples)}`).join('\n\n');
	const head = frontmatter(row.title, description).trimEnd();
	const blocks = [head, keyLine(row, helpers), intro, extra, note, body, pageEnd()];
	return `${blocks.filter((block) => block !== '').join('\n\n')}\n`;
}

// Only patterns that match a helper on this page, so the line never names a helper with no row.
function keyLine(row, helpers) {
	const used = row.keys.filter((_, index) => helpers.some((helper) => row.positive[index].test(helper.key)));
	const keys = used.map((pattern) => `\`{${pattern}}\``);
	return `Helpers on this page: ${keys.join(', ')}.`;
}

function overviewLines(rows, pages) {
	return rows.map((row) => `- [${row.title}](${row.route}): ${countWords(pages.get(row.route).length)}`);
}

function overviewPage(rows, pages, overview, total) {
	const description = `Find any of the ${total} template helpers, with one page for each type of helper.`;
	const list = overviewLines(rows, pages).join('\n');
	return `${frontmatter(OVERVIEW_TITLE, description)}\n${overview}\n\n## All helper pages\n\n${list}\n\n${pageEnd()}\n`;
}

function buildPages(context) {
	const built = new Map();
	for (const row of context.rows) {
		const list = context.pages.get(row.route);
		const parts = splitIntoSections(row.route, list, context.sections, context.problems);
		const page = typePage(row, list, parts, context.intros.get(row.route), readExtra(row.slug), context.examples);
		built.set(`${row.slug}.mdx`, page);
	}
	built.set(`${OVERVIEW_SLUG}.mdx`, overviewPage(context.rows, context.pages, context.overview, context.total));
	return built;
}

// The nav-structure.ts group for the section: overview first, then the type pages in table order.
function navLines(rows) {
	const lines = ['    {', `      group: "${OVERVIEW_TITLE}",`, '      pages: [', `        'templates/${OVERVIEW_SLUG}',`];
	for (const row of rows) lines.push(`        'templates/${row.slug}',`);
	lines.push('      ],', '    },');
	return lines;
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

function summary(rows, pages, total, examples) {
	const lines = [`placed ${total} of ${total}`];
	for (const row of rows) lines.push(`${row.route}  ${pages.get(row.route).length}`);
	lines.push(`helpers with a typed example: ${examples.size}`);
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
	const groups = loadGroups(options.groups);
	const helpers = applyCorrections(loaded, groups.samples, groups.descriptions);
	const { pages, problems } = placeHelpers(helpers, groups.rows);
	problems.push(...checkCounts(groups.rows, pages, groups.intros));
	problems.push(...sourceProblems(groups.overview, groups.intros));
	const { examples, problems: inputProblems } = collectExamples(helpers, groups.inputs, loadExported(options.inputs));
	problems.push(...inputProblems);
	if (problems.length > 0) die(['gen-template-helpers: not placed', ...problems.map((p) => `  ${p}`)]);

	const context = { ...groups, pages, examples, problems, total: helpers.length };
	const built = buildPages(context);
	if (problems.length > 0) die(['gen-template-helpers: sections problems', ...problems.map((p) => `  ${p}`)]);
	const generated = pageProblems(built);
	if (generated.length > 0) die(['gen-template-helpers: bare brace in a generated page. Put each in backticks:', ...generated.map((p) => `  ${p}`)]);

	if (options.nav) {
		for (const line of navLines(groups.rows)) console.log(line);
		return;
	}
	for (const line of summary(groups.rows, pages, helpers.length, examples)) console.log(line);
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
