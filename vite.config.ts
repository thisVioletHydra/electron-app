/* eslint-disable antfu/no-import-dist */
import type { UserConfig } from 'vite';

import path from 'node:path';
import process, { env } from 'node:process';
import { defineConfig } from 'vite';
import { classicPostcss } from './libs/vite-postcss/dist/index.esm.js';

import { listPlugins } from './vite.plugins';
import 'dotenv/config';

function postcssBundler() {
  const answer = classicPostcss({
    isDevelopmentMode: false,
    kickCssnano: true,
    hexToRgba: true,
  }) ?? {};

  return answer;
}

export default defineConfig(async ({ mode }: UserConfig): Promise<UserConfig> => {
  console.clear();

  return {
    css: {
      postcss: postcssBundler(),
    },

    plugins: listPlugins(mode),

    server: {
      strictPort: true,
      watch: { awaitWriteFinish: false },
    },
  };
});
