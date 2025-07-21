// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://dikhiachmaddani.my.id',

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

  integrations: [svelte()]
});