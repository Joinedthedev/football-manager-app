import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
  }
  
})
//Goodness gracius this gave me so much trouble. Apparently src isnt automatically
//resolved from @, so you have to manually tell vite to replace @with ./src
