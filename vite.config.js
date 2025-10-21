import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Tambahkan ini

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@public': path.resolve(__dirname, './public'), // Tambahkan alias ini
      '@assets': path.resolve(__dirname, './assets') // Tambahkan alias ini

    }
  }
})