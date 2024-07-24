import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    assetsDir: './res',
    outDir: 'dist',
    minify: false,
    rollupOptions: {
      input: 'src/main.ts',
      output: {
        entryFileNames: 'main.js',
      },
    },
  },
})
