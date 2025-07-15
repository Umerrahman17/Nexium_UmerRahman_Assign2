const fs = require('fs');
const path = 'src/lib/urduDictionary.ts';

const src = fs.readFileSync(path, 'utf8');
const lines = src.split('\n');
const seen = new Set();
const output = [];
let inDict = false;

for (let line of lines) {
  if (line.includes('const urduDictionary')) inDict = true;
  if (inDict && line.trim().endsWith('};')) inDict = false;

  if (inDict) {
    const match = line.match(/^\s*([a-zA-Z0-9_'"\-\s\(\)\[\]\.]+):/);
    if (match) {
      const key = match[1].replace(/['"]/g, '').trim();
      if (seen.has(key)) continue;
      seen.add(key);
    }
  }
  output.push(line);
}

fs.writeFileSync(path, output.join('\n'), 'utf8');
console.log('Duplicate keys removed from urduDictionary.ts!'); 