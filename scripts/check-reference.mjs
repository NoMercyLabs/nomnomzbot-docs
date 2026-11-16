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

import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { transformSync } from 'esbuild';

function filesIn(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? filesIn(path) : [path];
  });
}

function decodedAttribute(value) {
  return value.replace(/&(?:amp|quot|apos|lt|gt|#\d+|#x[\da-f]+);/gi, (entity) => {
    const named = { '&amp;': '&', '&quot;': '"', '&apos;': "'", '&lt;': '<', '&gt;': '>' };
    if (named[entity]) return named[entity];
    const numeric = /^&#(x[\da-f]+|\d+);$/i.exec(entity);
    return numeric ? String.fromCodePoint(parseInt(numeric[1].replace(/^x/i, ''), /^x/i.test(numeric[1]) ? 16 : 10)) : entity;
  });
}

export async function checkDocumentation(root, { rendered = false } = {}) {
  const dist = join(root, 'dist');
  const site = 'https://docs.nomnomz.bot';
  const navCode = transformSync(readFileSync(join(root, 'src/lib/nav-structure.ts'), 'utf8'), {
    loader: 'ts', format: 'esm',
  }).code;
  const { navStructure } = await import('data:text/javascript;base64,' + Buffer.from(navCode).toString('base64'));
  const problems = [];
  const pages = new Map();
  const counts = { pages: 0, navigation: 0, collections: {}, rendered: 0, links: 0, fragments: 0, assets: 0, search: 0 };

  for (const collection of ['reference']) {
    const content = join(root, 'src/content', collection, 'en');
    if (!existsSync(content)) {
      problems.push(collection + ': content directory is missing');
      continue;
    }
    const listed = (navStructure[collection] ?? []).flatMap((group) => group.pages);
    const sourceFiles = filesIn(content).filter((file) => /\.mdx?$/.test(file));
    const collectionPages = new Map(sourceFiles.map((file) => [
      relative(content, file).replaceAll('\\', '/').replace(/\.mdx?$/, ''), file,
    ]));
    counts.collections[collection] = { pages: collectionPages.size, navigation: listed.length };
    counts.pages += collectionPages.size;
    counts.navigation += listed.length;
    for (const slug of listed) {
      if (!collectionPages.has(slug)) problems.push(collection + ': navigation has no article: ' + slug);
    }
    for (const [slug, file] of collectionPages) {
      const route = '/' + collection + '/' + slug;
      pages.set(route, file);
      if (listed.filter((entry) => entry === slug).length !== 1) {
        problems.push(route + ': must appear exactly once in navigation');
      }
      try {
        const { data } = matter(readFileSync(file, 'utf8'));
        if (typeof data.title !== 'string' || !data.title.trim()) problems.push(route + ': missing title');
        if (typeof data.description !== 'string' || !data.description.trim()) problems.push(route + ': missing description');
        if (data.draft === true) problems.push(route + ': hidden by draft frontmatter while listed in navigation');
      } catch (error) {
        problems.push(route + ': invalid frontmatter: ' + error.message);
      }
    }
  }

  if (!rendered) return { problems, counts };
  if (!existsSync(dist)) {
    problems.push('No dist directory: run the documentation build first');
    return { problems, counts };
  }
  const renderedFiles = new Set(filesIn(dist).map((file) => relative(dist, file).replaceAll('\\', '/')));
  const htmlCache = new Map();
  const idCache = new Map();
  function htmlAt(path) {
    if (!htmlCache.has(path)) htmlCache.set(path, readFileSync(path, 'utf8'));
    return htmlCache.get(path);
  }
  function validateTarget(value, source, base) {
    if (/^(mailto:|tel:|data:|blob:|javascript:)/i.test(value)) return;
    let url;
    let decodedPath;
    let fragment;
    try {
      url = new URL(value, base);
      if (url.origin !== site) return;
      decodedPath = decodeURIComponent(url.pathname);
      fragment = decodeURIComponent(url.hash.slice(1));
    } catch {
      problems.push(source + ': invalid URL: ' + value);
      return;
    }
    counts.links++;
    const direct = resolve(dist, '.' + decodedPath);
    const relativePath = relative(dist, direct);
    if (relativePath.startsWith('..') || resolve(dist, relativePath) !== direct) {
      problems.push(source + ': link leaves generated site: ' + value);
      return;
    }
    const candidates = [direct, join(direct, 'index.html')];
    const target = candidates.find((candidate) =>
      renderedFiles.has(relative(dist, candidate).replaceAll('\\', '/')) && statSync(candidate).isFile());
    if (!target) {
      problems.push(source + ': missing rendered target: ' + value);
      return;
    }
    if (!target.endsWith('.html')) counts.assets++;
    if (fragment && target.endsWith('.html')) {
      counts.fragments++;
      if (!idCache.has(target)) {
        idCache.set(target, new Set([...htmlAt(target).matchAll(/\bid=(?:"([^"]+)"|'([^']+)')/g)]
          .map((match) => decodedAttribute(match[1] ?? match[2]))));
      }
      if (!idCache.get(target).has(fragment)) problems.push(source + ': missing fragment: ' + value);
    }
  }

  for (const route of pages.keys()) {
    if (!renderedFiles.has(route.slice(1) + '/index.html')) problems.push(route + ': no compiled route');
  }
  for (const file of [...renderedFiles].filter((file) => file.endsWith('.html'))) {
    counts.rendered++;
    const path = join(dist, file);
    const route = '/' + file.replace(/(^|\/)index\.html$/, '$1');
    const html = htmlAt(path);
    const attributes = [...html.matchAll(/\b(?:href|src|component-url|renderer-url)=(?:"([^"]+)"|'([^']+)')/g)]
      .map((match) => match[1] ?? match[2]);
    const imports = [...html.matchAll(/(?:from\s*|import\s*)["'](\/_astro\/[^"']+)["']/g)]
      .map((match) => match[1]);
    for (const value of [...attributes, ...imports]) validateTarget(decodedAttribute(value), route, site + route);
  }

  const searchPath = join(dist, 'searchIndex.json');
  if (!existsSync(searchPath)) {
    problems.push('Search index is missing from generated site');
  } else {
    try {
      const documents = JSON.parse(readFileSync(searchPath, 'utf8'));
      const indexed = new Set();
      for (const document of documents) {
        counts.search++;
        if (indexed.has(document.url)) problems.push('Search index repeats route: ' + document.url);
        indexed.add(document.url);
        if (!pages.has(document.url)) problems.push('Search index has no article: ' + document.url);
        validateTarget(document.url, 'Search index', site);
      }
      for (const route of pages.keys()) {
        if (!indexed.has(route)) problems.push('Article missing from search index: ' + route);
      }
    } catch (error) {
      problems.push('Invalid search index: ' + error.message);
    }
  }
  return { problems, counts };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
  const { problems, counts } = await checkDocumentation(root, { rendered: process.argv.includes('--rendered') });
  if (problems.length) {
    console.error('check-reference: FAIL (' + problems.length + ')');
    for (const problem of problems) console.error('  ' + problem);
    process.exitCode = 1;
  } else {
    console.log('check-reference: PASS ' + JSON.stringify(counts));
  }
}
