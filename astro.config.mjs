import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import { remarkModifiedTime } from './src/plugins/remark-last-modified';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [
      remarkModifiedTime
    ]
  },
  site: 'https://handbook.xevion.dev',
  integrations: [mdx(), sitemap(), tailwind(), react()]
});