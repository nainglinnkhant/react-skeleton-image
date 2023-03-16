import { defineConfig } from 'tsup'

export default defineConfig({
  target: 'esnext',
  clean: true,
  dts: true,
  entry: ['src/index.tsx'],
  keepNames: true,
  minify: true,
  sourcemap: true,
  format: ['cjs', 'esm'],
})
