import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import test from 'node:test';

test('search keeps copyable helper expressions, SDK calls and configuration identifiers', (context) => {
  const root = mkdtempSync(join(tmpdir(), 'nomnomz-doc-search-'));
  context.after(() => {
    assert.ok(resolve(root).startsWith(resolve(tmpdir()) + '\\') || resolve(root).startsWith(resolve(tmpdir()) + '/'));
    rmSync(root, { recursive: true, force: true });
  });
  const content = join(root, 'src/content/reference/en');
  mkdirSync(content, { recursive: true });
  const tick = String.fromCharCode(96);
  writeFileSync(join(content, 'example.mdx'), [
    '---', 'title: SDK example', 'description: A working example.', '---',
    'Use ' + tick + '{args.1.upper}' + tick + ' or ' + tick + 'run_code' + tick + '.',
    '<details><summary>Example</summary>', tick.repeat(3) + 'js',
    'nnz.api.chat.send("hello");', tick.repeat(3), '</details>',
  ].join('\n'));
  writeFileSync(join(content, 'hidden.mdx'), '---\ntitle: Hidden\ndraft: true\n---\nsecret');
  const script = join(dirname(fileURLToPath(import.meta.url)), 'build-search-index.mjs');
  const result = spawnSync(process.execPath, [script], { cwd: root, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  const documents = JSON.parse(readFileSync(join(root, 'public/searchIndex.json'), 'utf8'));
  assert.equal(documents.length, 1);
  assert.equal(documents[0].url, '/reference/example');
  for (const term of ['{args.1.upper}', 'run_code', 'nnz.api.chat.send']) {
    assert.ok(documents[0].content.includes(term), 'Search lost ' + term);
  }
  assert.equal(documents[0].section, 'User guide');
  assert.ok(!documents[0].content.includes('<details>'));
});
