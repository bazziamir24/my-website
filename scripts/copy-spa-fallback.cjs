const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const indexFile = path.join(distDir, 'index.html');
const fallbackFile = path.join(distDir, '404.html');

if (!fs.existsSync(indexFile)) {
  throw new Error('dist/index.html was not found. Run vite build first.');
}

fs.copyFileSync(indexFile, fallbackFile);
console.log('Created dist/404.html SPA fallback for GitHub Pages.');
