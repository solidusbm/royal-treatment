const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '..', '..', 'assets', 'img', 'before-after');
const manifestPath = path.join(__dirname, '..', '..', 'assets', 'data', 'before-after.json');
const pattern = /^(before|after)(\d+)\.(jpe?g|png|webp)$/i;

const files = fs.existsSync(imgDir) ? fs.readdirSync(imgDir) : [];
const pairs = {};

for (const file of files) {
  const match = file.match(pattern);
  if (!match) continue;
  const [, kind, id] = match;
  pairs[id] = pairs[id] || {};
  pairs[id][kind.toLowerCase()] = `assets/img/before-after/${file}`;
}

const manifest = Object.keys(pairs)
  .filter((id) => pairs[id].before && pairs[id].after)
  .sort((a, b) => Number(a) - Number(b))
  .map((id) => ({
    id: Number(id),
    before: pairs[id].before,
    after: pairs[id].after,
  }));

fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
console.log(`Wrote ${manifest.length} before/after pair(s) to ${manifestPath}`);
