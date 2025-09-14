import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //base: "/shoppingreact",
  base: "/e-plantShopping",
  plugins: [react()],
  build: {
    sourcemap: true,      // utile pour déboguer même en preview
  },
})
