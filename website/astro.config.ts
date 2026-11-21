import path from 'node:path';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import astrowind from './vendor/integration';

export default defineConfig({
  output: 'static',
  integrations: [icon(), astrowind({ config: './src/config.yaml' })],
  vite: { plugins: [tailwindcss()], resolve: { alias: { '~': path.resolve('./src') } } },
});
