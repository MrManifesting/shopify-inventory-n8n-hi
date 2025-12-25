import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  // Use Vite's native environment variable support
  // All VITE_* prefixed env vars are automatically available
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '. '),
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  }
})