import path from 'path';
import adapter from '@sveltejs/adapter-netlify';
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: adapter({
      split: false,
    }),
    vite: {
      resolve: {
        alias: {
          '@lib': path.resolve('./src/lib'),
          '@static': path.resolve('./static'),
        },
      },
    },
  },
};

export default config;
