import { defineConfig, rolldown } from 'rolldown';
import createLoaderPlugin from './plugin.mjs';

const config = defineConfig({
  input: ['./test.mjs'],
  experimental: {
    strictExecutionOrder: true,
  },
  resolve: { conditionNames: ['import'] },
  treeshake: true,
  output: {
    dir: './build/',
    chunkFileNames: '[name]-[hash].chunk.js',
    entryFileNames: '[name]-[hash].entry.js',
    minify: true,
    advancedChunks: {
      minSize: 20000,
      minShareCount: 2,
    },
  },
  plugins: [
    createLoaderPlugin({
      importMap: JSON.stringify({}),
      importMapBaseUrl: 'file://',
      entryPoints: ['./test.mjs'],
    }),
  ],
});
const build = await rolldown(config);
console.log(await build.generate());
