// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Replace 'https://<username>.github.io' with your GitHub Pages URL
	site: 'https://example.com',
	// Replace '/blog' with your repository name (e.g., '/my-blog')
	// If you are using a custom domain or <username>.github.io, you may not need this.
	base: '/blog',
	integrations: [mdx(), sitemap()],
});
