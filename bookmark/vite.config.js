import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Better debugging: enable source maps in dev and build, and CSS dev sourcemaps
  css: { devSourcemap: true },
  build: { sourcemap: true },
})
