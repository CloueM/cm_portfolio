import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    autoprefixer()
  ],
})