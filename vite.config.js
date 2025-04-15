import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: "freecodecamp-vite-tutorial-vanilla",
  plugins: [
    tailwindcss(),
  ],
})