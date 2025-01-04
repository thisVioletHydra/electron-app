import type { Options } from 'unplugin-auto-import/types';
import type { PluginOption } from 'vite';
import { cwd } from 'node:process';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { normalizePath } from 'vite';
import { ViteAliases } from 'vite-aliases';
import renderer from 'vite-plugin-electron-renderer';
import electron from 'vite-plugin-electron/simple';
import { cssm, removeCssModulesChunk } from 'vite-plugin-vue-css-modules';

export function listPlugins(mode?: string) {
  return [
    vue(),
    electron({
      main: {
        entry: 'src/app/main.ts',
      },
      preload: {
        input: 'src/app/preload.ts',
      },
    }),
    renderer({
      resolve: {
        got: { type: 'esm' },
      },
    }),
    Components({
      dts: true, // enabled by default if `typescript` is installed
    }),
    ViteAliases({
      adjustDuplicates: false,
      createGlobalAlias: true,
      createLog: true,
      deep: true,
      depth: 1,
      dir: 'src',
      dts: true,
      logPath: './logs/',
      prefix: '~~',
      root: normalizePath(cwd()),
      useAbsolute: false,
      useConfig: true,

      useIndexes: false,
    }),
    AutoImport({
      dirs: ['./src/hooks'],
      dts: './@types/auto-imports.d.ts',
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          '@vueuse/core': [
            'useMouse', // import { useMouse } from '@vueuse/core',
            'useFetch',
          ],
          'axios': [['default', 'axios']],
        },

        {
          from: 'axios',
          imports: ['default', 'axios'],
          type: true,
        },
        {
          from: 'vue-router',
          imports: ['RouteLocationRaw'],
          type: true,
        },
      ],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },

      include: [/\.[jt]sx?$/, /\.md$/, /\.vue$/, /\.vue\?vue/],

    } as Options),

    cssm(),
    removeCssModulesChunk(),
  ] as PluginOption[];
}
