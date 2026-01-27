import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import * as staticCopy from 'vite-plugin-static-copy'
// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [staticCopy.viteStaticCopy({
    targets: [{
      src: 'src/script.js',
      dest: 'assets'
    }]
  }), tailwindcss(), react()],
})
