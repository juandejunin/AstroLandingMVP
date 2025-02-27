// // @ts-check
// import { defineConfig } from 'astro/config';

// import react from '@astrojs/react';

// import tailwind from '@astrojs/tailwind';
// import node from '@astrojs/node';

// // https://astro.build/config
// export default defineConfig({
//   output: 'server',
//   integrations: [react(), tailwind()],
//   adapter: node({ mode: 'standalone' })
// });

// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static', // Cambiamos a estático
  integrations: [react(), tailwind()],
  build: {
    rollupOptions: {
      external: ['fsevents'] // Ignora fsevents en el build
    }
  }
});