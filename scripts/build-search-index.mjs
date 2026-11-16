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

// Builds public/searchIndex.json, the file the header search reads in the
// browser. One document per published page of each collection below.

import fs from 'node:fs';
import path from 'node:path';
import { glob } from 'glob';
import matter from 'gray-matter';

const collections = [
  { dir: './src/content/reference', baseUrl: '/reference', section: 'User guide' },
];

const outputPath = './public/searchIndex.json';

function toPlainText(markdown) {
  const code = [];
  const preserveCode = (_match, _fence, content) => {
    code.push(content);
    return '\u0000' + (code.length - 1) + '\u0000';
  };
  return markdown
    .replace(/^---[\s\S]*?---/m, '')
    .replace(/^([`]{3,}|~{3,})[^\r\n]*\r?\n([\s\S]*?)^\1[ \t]*$/gm, preserveCode)
    .replace(/([`]+)([\s\S]*?)\1/g, preserveCode)
    .replace(/import\s+.*?from\s+['"].*?['"]/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/^#+\s+/gm, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[#*`\[\]]/g, '')
    .replace(/\u0000(\d+)\u0000/g, (_match, index) => code[Number(index)])
    .replace(/\s+/g, ' ')
    .trim();
}

function toSlug(file) {
  return file
    .split(path.sep)
    .join('/')
    .replace(/\.(md|mdx)$/, '')
    .replace(/^[a-z]{2}\//, '')
    .replace(/\/index$/, '')
    .replace(/^index$/, '');
}

async function readCollection({ dir, baseUrl, section }) {
  if (!fs.existsSync(dir)) {
    console.log(`Skipping ${dir} (directory not found)`);
    return [];
  }

  const files = await glob('**/*.{md,mdx}', { cwd: dir });
  const documents = [];

  for (const file of files) {
    const { data, content } = matter(fs.readFileSync(path.join(dir, file), 'utf-8'));
    if (data.draft === true) continue;

    const text = toPlainText(content);
    const slug = toSlug(file);

    documents.push({
      id: `${baseUrl}/${file}`.replace(/^\//, ''),
      title: data.title || slug.replace(/-/g, ' '),
      description: data.description || text.substring(0, 300).trim(),
      category: section,
      section,
      tags: data.tags || [],
      url: slug ? `${baseUrl}/${slug}` : baseUrl,
      content: text.toLowerCase(),
      order: data.order ?? 999,
    });
  }

  return documents;
}

const documents = (await Promise.all(collections.map(readCollection))).flat();
documents.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(documents, null, 2));
console.log(`Search index: ${documents.length} documents saved to ${outputPath}`);
