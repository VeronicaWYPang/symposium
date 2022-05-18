import path from 'path';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

import svg from '@poppanator/sveltekit-svg'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [preprocess(), mdsvex(mdsvexConfig)],

  kit: {
    adapter: adapter(),
    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ['PATCH', 'DELETE']
    },

    vite: {
      plugins: [
        svg({})
      ],

      resolve: {
        alias: {
          // these are the aliases and paths to them
          '$api': path.resolve('./src/api'),
          '$lib': path.resolve('./src/lib'),
          '$components': path.resolve('./src/lib/components'),
          '$assets': path.resolve('./src/assets'),
        }
      }
    }
  }
};

export default config;
