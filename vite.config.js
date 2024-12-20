import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
  },
  root: 'src',
  plugins: [react()],
  "server.hmr.overlay":"false"
})


// import { defineConfig } from 'vite';
