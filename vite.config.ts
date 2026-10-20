import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Stamped into the bundle so the running page can report which build it is.
  // Useful when a stale browser cache is suspected.
  define: {
    __BUILD__: JSON.stringify(new Date().toISOString().slice(0, 16).replace('T', ' ')),
  },
  server: {
    host: true,
    port: 3001,
    proxy: {
      '/api': 'http://localhost:4001',
    },
  },
})