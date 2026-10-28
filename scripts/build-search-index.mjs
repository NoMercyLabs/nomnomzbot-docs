// -----------------------------------------------------------------------------
//  Copyright (c) NoMercy Labs.
//
//  This file is part of NomNomzBot, free software licensed under the GNU Affero
//  General Public License v3.0 or later. You may redistribute and/or modify it
//  under those terms. Distributed WITHOUT ANY WARRANTY. See LICENSE for details.
//
//  SPDX-License-Identifier: AGPL-3.0-or-later
// -----------------------------------------------------------------------------

// Builds public/searchIndex.json, the file the header search reads in the
// browser. One document per published page of each collection below.

import fs from 'node:fs';
import path from 'node:path';
import { glob } from 'glob';
import matter from 'gray-matter';

const collections = [
  { dir: './src/content/reference', baseUrl: '/reference', section: 'Reference' },
];

const outputPath = './public/searchIndex.json';

function toPlainText(markdown) {
  return markdown
    .replace(/^---[\s\S]*?---/m, '')
    .replace(/import\s+.*?from\s+['"].*?['"]/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]+`/g, '')
    .replace(/^#+\s+/gm, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[#*_`\[\](){}]/g, '')
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
