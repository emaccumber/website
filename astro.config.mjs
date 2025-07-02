// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://emaccumber.github.io',
  base: '/website',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    assets: '_astro'
  },
  server: {
    host: true
  },
  integrations: [
    mdx({
      remarkPlugins: [],
      rehypePlugins: [],
      gfm: true, // Enable GitHub Flavored Markdown
      extendMarkdownConfig: true, // Extend from main markdown config
    }), 
    react()
  ],
  markdown: {
    gfm: true, // Enable GitHub Flavored Markdown
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  image: {
    domains: ['f004.backblazeb2.com'],
    remotePatterns: [{ protocol: 'https' }],
    responsiveStyles: true,
    layout: 'constrained'
  }
});