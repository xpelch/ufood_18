/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 8080,
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: 'src/router/index.tsx',
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts'
  }
})
