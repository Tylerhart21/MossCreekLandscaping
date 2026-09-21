// build-city-pages.js
// Generates a static HTML file per city (landscaping-<slug>-tx.html) from
// index.html + the CITY_DATA in Locations.jsx, so each city URL serves its
// own title / description / canonical / OG / Twitter / fallback H1+intro in
// the INITIAL raw HTML (view-source), before JavaScript runs.
//
// Re-run this whenever index.html or the CITY_DATA in Locations.jsx changes:
//   node scripts/build-city-pages.js
//
// Do NOT hand-edit the generated landscaping-*-tx.html files — they are
// overwritten on every run.

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const ORIGIN = 'https://mosscreeklandscaping.com';

const template = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

// --- Pull CITY_DATA out of Locations.jsx (plain object array, no JSX inside) ---
const locSrc = fs.readFileSync(path.join(ROOT, 'Locations.jsx'), 'utf8');
const start = locSrc.indexOf('const CITY_DATA = [');
const endMarker = '\nconst LOCATION_BY_SLUG';
const end = locSrc.indexOf(endMarker);
if (start === -1 || end === -1) throw new Error('Could not locate CITY_DATA array in Locations.jsx');
const arrayLiteral = locSrc.slice(locSrc.indexOf('[', start), locSrc.lastIndexOf('];', end) + 1);
// eslint-disable-next-line no-eval
const CITY_DATA = eval(arrayLiteral);

const esc = (s) => String(s)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

function buildCity(c) {
  const url = `${ORIGIN}/landscaping-${c.slug}-tx`;
  const title = esc(c.metaTitle);
  const desc = esc(c.metaDescription);
  const h1 = esc(`Landscaping in ${c.city}, TX`);
  const intro = esc(`Moss Creek Landscaping — ${c.heroSub}`);

  let html = template;
  const sub = (re, replacement, label) => {
    if (!re.test(html)) throw new Error(`Anchor not found for ${label} (city ${c.slug})`);
    html = html.replace(re, replacement);
  };

  sub(/<title>[^<]*<\/title>/, `<title>${title}</title>`, 'title');
  sub(/(<meta name="description" content=")[^"]*(")/, `$1${desc}$2`, 'meta description');
  sub(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`, 'canonical');
  sub(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`, 'og:title');
  sub(/(<meta property="og:description" content=")[^"]*(")/, `$1${desc}$2`, 'og:description');
  sub(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`, 'og:url');
  sub(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${title}$2`, 'twitter:title');
  sub(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${desc}$2`, 'twitter:description');
  // Static fallback H1 (2.4rem header) and italic intro line.
  sub(/(<h1 style="font-size: 2\.4rem;[^"]*">)[^<]*(<\/h1>)/, `$1${h1}$2`, 'fallback H1');
  sub(/(<p style="font-size: 1\.05rem;[^"]*">)[^<]*(<\/p>)/, `$1${intro}$2`, 'fallback intro');

  return html;
}

let count = 0;
for (const c of CITY_DATA) {
  const out = buildCity(c);
  const file = path.join(ROOT, `landscaping-${c.slug}-tx.html`);
  fs.writeFileSync(file, out);
  console.log(`wrote landscaping-${c.slug}-tx.html  (${out.length} bytes)`);
  count++;
}
console.log(`\nGenerated ${count} city pages.`);
