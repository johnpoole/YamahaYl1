const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { PAGES } = require('../nav.js');
const D = require('../project/design.js');
const PHOTOS = require('../media/photos.js');

const root = path.join(__dirname, '..');
const page = (href) => path.join(root, href.endsWith('/') || href === '' ? `${href}index.html` : href);

test('every page in the menu exists and loads the menu', () => {
  for (const [href] of PAGES) {
    const file = page(href);
    assert.ok(fs.existsSync(file), `${file} is missing`);
    assert.match(fs.readFileSync(file, 'utf8'), /<script src="(\.\.\/)*nav\.js"><\/script>/, `${href || 'home'} does not load nav.js`);
  }
});

test('every local script, image and link on each page points at a file that exists', () => {
  for (const [href] of PAGES) {
    const file = page(href);
    const html = fs.readFileSync(file, 'utf8');
    for (const [, url] of html.matchAll(/(?:src|href)="([^"#:]+)"/g)) {
      if (url.startsWith("//") || url.includes("${")) continue;
      const target = path.join(path.dirname(file), url);
      const exists = fs.existsSync(target) && (!fs.statSync(target).isDirectory() || fs.existsSync(path.join(target, 'index.html')));
      assert.ok(exists, `${path.relative(root, file)} links to ${url}, which does not exist`);
    }
  }
});

test('the bike page draws every group the parts name and nothing else', () => {
  const html = fs.readFileSync(path.join(root, 'bike', 'index.html'), 'utf8');
  const drawn = new Set([...html.matchAll(/beginPart\('([a-z-]+)'\)/g)].map((m) => m[1]));
  assert.deepEqual([...drawn].sort(), [...new Set(Object.values(D.PARTS).map((p) => p.draw))].sort());
});

test('every photo is listed once and every listed photo is there', () => {
  const files = fs.readdirSync(path.join(root, 'media', 'photos')).filter((f) => f.endsWith('.jpg')).sort();
  assert.deepEqual(PHOTOS.map((p) => p.file).sort(), files);
  for (const p of PHOTOS) {
    assert.ok(p.caption.length > 10, `${p.file} has no caption`);
  }
});

test('the photos are web-sized', () => {
  for (const p of PHOTOS) {
    const size = fs.statSync(path.join(root, 'media', 'photos', p.file)).size;
    assert.ok(size < 800 * 1024, `${p.file} is ${Math.round(size / 1024)} kB`);
  }
});
