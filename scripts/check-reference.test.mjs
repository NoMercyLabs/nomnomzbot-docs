import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import test from 'node:test';
import { checkDocumentation } from './check-reference.mjs';

function fixture(context) {
  const root = mkdtempSync(join(tmpdir(), 'nomnomz-doc-links-'));
  context.after(() => {
    assert.ok(resolve(root).startsWith(resolve(tmpdir()) + '\\') || resolve(root).startsWith(resolve(tmpdir()) + '/'));
    rmSync(root, { recursive: true, force: true });
  });
  function write(path, content) {
    const full = join(root, path);
    mkdirSync(dirname(full), { recursive: true });
    writeFileSync(full, content);
  }
  write('src/lib/nav-structure.ts', "export const navStructure = { reference: [{ pages: ['overview', 'guide'] }] };");
  for (const slug of ['overview', 'guide']) {
    write('src/content/reference/en/' + slug + '.mdx', '---\ntitle: Example\ndescription: A page.\n---\n\nText.\n');
    write('dist/reference/' + slug + '/index.html', '<h1 id="title">Example</h1><a href="/">Home</a>');
  }
  write('dist/index.html', '<a href="/reference/overview">User guide</a><a href="/reference/guide#title">Guide</a>');
  write('dist/searchIndex.json', JSON.stringify([
    { url: '/reference/overview' }, { url: '/reference/guide' },
  ]));
  return { root, write };
}

test('checks the collection, the landing page and search routes', async (context) => {
  const { root } = fixture(context);
  const result = await checkDocumentation(root, { rendered: true });
  assert.deepEqual(result.problems, []);
  assert.equal(result.counts.pages, 2);
  assert.equal(result.counts.rendered, 3);
  assert.equal(result.counts.search, 2);
});

for (const source of ['index.html', 'reference/guide/index.html']) {
  test('rejects broken links and fragments in ' + source, async (context) => {
    const { root, write } = fixture(context);
    write('dist/' + source, '<a href="/missing">Missing</a><a href="/reference/overview#missing">Fragment</a>');
    const { problems } = await checkDocumentation(root, { rendered: true });
    assert.ok(problems.some((problem) => problem.includes('missing rendered target: /missing')));
    assert.ok(problems.some((problem) => problem.includes('missing fragment: /reference/overview#missing')));
  });
}

test('requires page frontmatter and exactly one navigation entry', async (context) => {
  const { root, write } = fixture(context);
  write('src/content/reference/en/guide.mdx', '---\ntitle: Guide\n---\nText');
  write('src/lib/nav-structure.ts', "export const navStructure = { reference: [{ pages: ['overview', 'guide', 'guide', 'absent'] }] };");
  const { problems } = await checkDocumentation(root);
  assert.ok(problems.some((problem) => problem.includes('missing description')));
  assert.ok(problems.some((problem) => problem.includes('exactly once')));
  assert.ok(problems.some((problem) => problem.includes('navigation has no article: absent')));
});

test('rejects missing and incorrect-case assets', async (context) => {
  const { root, write } = fixture(context);
  write('dist/image.svg', '<svg/>');
  write('dist/index.html', '<img src="/Image.svg"><img src="/missing.svg">');
  const { problems } = await checkDocumentation(root, { rendered: true });
  assert.ok(problems.some((problem) => problem.includes('missing rendered target: /Image.svg')));
  assert.ok(problems.some((problem) => problem.includes('missing rendered target: /missing.svg')));
});

test('checks single-quoted attributes and decodes fragment entities', async (context) => {
  const { root, write } = fixture(context);
  write('dist/index.html', "<a href='/reference/overview#one%27s'>Link</a>");
  write('dist/reference/overview/index.html', '<h1 id="one&#39;s">Title</h1>');
  assert.deepEqual((await checkDocumentation(root, { rendered: true })).problems, []);
});

test('reports malformed URLs without aborting the audit', async (context) => {
  const { root, write } = fixture(context);
  write('dist/index.html', '<a href="/bad%ZZ">Bad</a><a href="/missing">Missing</a>');
  const { problems } = await checkDocumentation(root, { rendered: true });
  assert.ok(problems.some((problem) => problem.includes('invalid URL: /bad%ZZ')));
  assert.ok(problems.some((problem) => problem.includes('missing rendered target: /missing')));
});

test('rejects duplicate, stale and missing search entries', async (context) => {
  const { root, write } = fixture(context);
  write('dist/searchIndex.json', JSON.stringify([
    { url: '/reference/overview' }, { url: '/reference/overview' }, { url: '/removed' },
  ]));
  const { problems } = await checkDocumentation(root, { rendered: true });
  assert.ok(problems.some((problem) => problem.includes('repeats route')));
  assert.ok(problems.some((problem) => problem.includes('has no article: /removed')));
  assert.ok(problems.some((problem) => problem.includes('missing from search index: /reference/guide')));
});

test('checks every generated HTML file, including redirects', async (context) => {
  const { root, write } = fixture(context);
  write('dist/old/index.html', '<a href="/removed">Redirect destination</a>');
  const { problems } = await checkDocumentation(root, { rendered: true });
  assert.ok(problems.some((problem) => problem.startsWith('/old/: missing rendered target')));
});

test('reports missing rendered articles and missing search output', async (context) => {
  const { root } = fixture(context);
  rmSync(join(root, 'dist/reference/overview/index.html'));
  rmSync(join(root, 'dist/searchIndex.json'));
  const { problems } = await checkDocumentation(root, { rendered: true });
  assert.ok(problems.some((problem) => problem.includes('no compiled route')));
  assert.ok(problems.some((problem) => problem.includes('Search index is missing')));
});
