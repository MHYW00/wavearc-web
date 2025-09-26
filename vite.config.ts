import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          'three': ['three', '@react-three/fiber', '@react-three/drei'],
          'animation': ['framer-motion', 'gsap'],
          'i18n': ['react-i18next', 'i18next']
        }
      }
    }
  }
})