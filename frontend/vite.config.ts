import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,       // same as 0.0.0.0 (needed for Docker)
    port: 5173,
    strictPort: true,
  },
})


