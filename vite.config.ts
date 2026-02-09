import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Framer-Landing-Page/',
  // Reason: GitHub Pages serves from /<repo-name>/ path
})
