import path from 'path';
import vercel from '@sveltejs/adapter-vercel';

const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: vercel(),
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
