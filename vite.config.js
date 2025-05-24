import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Portfolio",
  //base: 0,//test only
  plugins: [react()],
  //server: {host: true}//test only
})
