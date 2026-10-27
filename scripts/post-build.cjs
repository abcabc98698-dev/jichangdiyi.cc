const fs = require('fs');
const path = require('path');

const sitemapIndex = path.resolve('dist/sitemap-index.xml');
const sitemap = path.resolve('dist/sitemap.xml');

if (fs.existsSync(sitemapIndex)) {
  fs.copyFileSync(sitemapIndex, sitemap);
  console.log('[post-build] Successfully created dist/sitemap.xml from dist/sitemap-index.xml');
} else {
  console.warn('[post-build] dist/sitemap-index.xml not found');
}
