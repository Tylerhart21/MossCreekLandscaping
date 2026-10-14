// build-static-pages.js
// Generates a static HTML file per CITY and per SERVICE from index.html +
// the data in Locations.jsx (CITY_DATA) and ServicePages.jsx (SERVICE_DATA),
// so each URL serves its own title / description / canonical / OG / Twitter /
// fallback H1+intro in the INITIAL raw HTML (view-source), before JS runs.
//
// Re-run after ANY edit to index.html, Locations.jsx, or ServicePages.jsx:
//   node scripts/build-static-pages.js
//
// Do NOT hand-edit the generated landscaping-*-tx.html / <service>.html files —
// they are overwritten on every run.

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const ORIGIN = 'https://mosscreeklandscaping.com';
const template = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

function extractArray(file, varName) {
  const src = fs.readFileSync(path.join(ROOT, file), 'utf8');
  const startKw = 'const ' + varName + ' =';
  const start = src.indexOf(startKw);
  if (start === -1) throw new Error('Could not find ' + varName + ' in ' + file);
  const open = src.indexOf('[', start);
  // find matching close bracket
  let depth = 0, end = -1;
  for (let i = open; i < src.length; i++) {
    if (src[i] === '[') depth++;
    else if (src[i] === ']') { depth--; if (depth === 0) { end = i; break; } }
  }
  if (end === -1) throw new Error('Unbalanced array for ' + varName);
  // eslint-disable-next-line no-eval
  return eval(src.slice(open, end + 1));
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function render(fields) {
  const { title, desc, url, h1, intro } = fields;
  let html = template;
  const sub = (re, replacement, label) => {
    if (!re.test(html)) throw new Error('Anchor not found: ' + label);
    html = html.replace(re, replacement);
  };
  sub(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`, 'title');
  sub(/(<meta name="description" content=")[^"]*(")/, `$1${esc(desc)}$2`, 'description');
  sub(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`, 'canonical');
  sub(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(title)}$2`, 'og:title');
  sub(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(desc)}$2`, 'og:description');
  sub(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`, 'og:url');
  sub(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(title)}$2`, 'twitter:title');
  sub(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(desc)}$2`, 'twitter:description');
  sub(/(<h1 style="font-size: 2\.4rem;[^"]*">)[^<]*(<\/h1>)/, `$1${esc(h1)}$2`, 'fallback H1');
  sub(/(<p style="font-size: 1\.05rem;[^"]*">)[^<]*(<\/p>)/, `$1${esc(intro)}$2`, 'fallback intro');
  return html;
}

let count = 0;

// Cities: landscaping-<slug>-tx.html
for (const c of extractArray('Locations.jsx', 'CITY_DATA')) {
  const html = render({
    title: c.metaTitle,
    desc: c.metaDescription,
    url: `${ORIGIN}/landscaping-${c.slug}-tx`,
    h1: `Landscaping in ${c.city}, TX`,
    intro: `Moss Creek Landscaping — ${c.heroSub}`,
  });
  fs.writeFileSync(path.join(ROOT, `landscaping-${c.slug}-tx.html`), html);
  console.log(`city    landscaping-${c.slug}-tx.html`);
  count++;
}

// Services: <slug>.html
for (const s of extractArray('ServicePages.jsx', 'SERVICE_DATA')) {
  const html = render({
    title: s.metaTitle,
    desc: s.metaDescription,
    url: `${ORIGIN}/${s.slug}`,
    h1: `${s.name} in Richardson & DFW`,
    intro: `Moss Creek Landscaping — ${s.heroSub}`,
  });
  fs.writeFileSync(path.join(ROOT, `${s.slug}.html`), html);
  console.log(`service ${s.slug}.html`);
  count++;
}

console.log(`\nGenerated ${count} static pages.`);
