// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jichangdiyi.cc',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/go/'),
    }),
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['if-function'],
        },
      },
    },
  },
});
