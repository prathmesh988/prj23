import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173, // Your preferred port
    open: false, // Prevent opening in a new browser tab on start
    cors: true, // Enable CORS
  },
})
