// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://dikhiachmaddani.my.id',
  markdown: {
		shikiConfig: {
			theme: "aurora-x",
		},
	},
  vite: {
    build: {
    cssCodeSplit: true,
    rollupOptions: {
        output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
        }
    }
    },

    plugins: [tailwindcss()]
  },

  integrations: [svelte(), mdx()]
});