import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const req = createRequire(new URL('../package.json', import.meta.url));
const ts = req('typescript');

function load(relative, extra = '') {
  const file = path.join(root, relative);
  const source = fs.readFileSync(file, 'utf8');
  const output = ts.transpileModule(source + extra, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true } }).outputText;
  const mod = { exports: {} };
  const localRequire = name => {
    if (name === '../src/lib/readAloudClip.ts') return load('src/lib/readAloudClip.ts');
    if (name === './MobileNavigation') return { useMobileNavigationStore() {} };
    if (name === './Tag') return { Tag() {} };
    if (name === '@/lib/i18n') return { t: key => key };
    return req(name);
  };
  new Function('require', 'module', 'exports', output)(localRequire, mod, mod.exports);
  return mod.exports;
}

async function regressions() {
  const check = test;
  const doc = { id: 'sdk', title: 'SDK', description: '', category: '', section: 'Developers', tags: [], url: '/developers/sdk', content: 'NomNomzBot.SendMessage {target.name}', order: 0 };
  await check('mixed-case SDK identifier and helper search', async () => {
    global.fetch = async () => ({ ok: true, json: async () => [doc] });
    const next = load('src/components/Search.tsx', '\nexport { searchDocs };');
    assert.equal((await next.searchDocs('NomNomzBot.SendMessage'))[0].url, doc.url);
    assert.equal((await next.searchDocs('{target.name}'))[0].url, doc.url);
  });
  await check('search recovers after failed HTTP response', async () => {
    let calls = 0;
    global.fetch = async () => ++calls === 1 ? { ok: false, status: 503 } : { ok: true, json: async () => [doc] };
    const next = load('src/components/Search.tsx', '\nexport { searchDocs };');
    assert.deepEqual(await next.searchDocs('SDK'), []);
    assert.equal((await next.searchDocs('SDK'))[0].url, doc.url);
    assert.equal(calls, 2);
  });
  await check('old failed clip cannot disable a new reading', async () => {
      let finish;
      const { createClipCache } = load('src/lib/readAloudClip.ts');
      const cache = createClipCache('https://example.test/read', () => new Promise(resolve => { finish = resolve; }), 0);
      const old = cache.clip('Old.', 'en');
      cache.reset();
      finish({ ok: false, status: 403 });
      assert.equal(await old, null);
      assert.equal(cache.serverDown(), false);
  });
  await check('old successful clip is discarded after reset', async () => {
    let finish;
    const { createClipCache } = load('src/lib/readAloudClip.ts');
    const cache = createClipCache('https://example.test/read', () => new Promise(resolve => { finish = resolve; }), 0);
    const old = cache.clip('Old.', 'en');
    cache.reset();
    finish({ ok: true, status: 200, blob: async () => new Blob(['audio']) });
    assert.equal(await old, null);
    assert.equal(cache.serverDown(), false);
  });
  await check('grouped-code SSR retains newlines and entities', async () => {
    const { codeText } = load('src/components/protocol/Code.tsx', '\nexport { codeText };');
    const html = '<pre><code><span>const a = &quot;x&quot;;</span><br><span>return a &amp;&amp; b &lt; 2;</span></code></pre>';
    assert.equal(codeText(html), 'const a = "x";\nreturn a && b < 2;');
  });
  await check('uppercase documented Button directive transforms', async () => {
    const { visit } = await import(pathToFileURL(req.resolve('unist-util-visit')));
    const source = fs.readFileSync(path.join(root, 'src/lib/mdx/remark-button.ts'), 'utf8');
    const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
    const mod = { exports: {} };
    new Function('require', 'module', 'exports', output)(() => ({ visit }), mod, mod.exports);
    const p = value => ({ type: 'paragraph', children: [{ type: 'text', value }] });
    const tree = { type: 'root', children: [p('::Button {{ href: "/reference/overview" }}'), p('Open the guide'), p('::')] };
    mod.exports.remarkButton()(tree);
    assert.equal(tree.children[0].children[0].name, 'Button');
    assert.equal(tree.children[0].children[0].attributes[0].value, '/reference/overview');
  });
  await check('copy success, rejection and cleanup', async () => {
    const { bindCopyButtons } = load('src/components/CodeHighlighter.tsx');
    const attrs = new Map([['data-code', 'one\ntwo']]);
    const label = { innerHTML: 'Copy', textContent: 'Copy' };
    const status = { textContent: '' };
    let click;
    const button = { querySelector: q => q === 'span' ? label : status, getAttribute: k => attrs.get(k), setAttribute: (k,v) => attrs.set(k,v), addEventListener: (_, fn) => { click = fn; }, removeEventListener: (_, fn) => { assert.equal(fn, click); click = null; } };
    let resolve;
    Object.defineProperty(global, 'navigator', { configurable: true, value: { clipboard: { writeText: text => { assert.equal(text, 'one\ntwo'); return new Promise(r => { resolve = r; }); } } } });
    const clean = bindCopyButtons({ querySelectorAll: () => [button] });
    const pending = click();
    assert.equal(status.textContent, '');
    resolve();
    await pending;
    assert.equal(status.textContent, 'Code copied to clipboard');
    navigator.clipboard.writeText = async () => { throw new Error('denied'); };
    await click();
    assert.match(status.textContent, /Could not copy/);
    clean();
    assert.equal(click, null);
    assert.equal(status.textContent, '');
  });
}

await regressions();

