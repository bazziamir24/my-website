import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  esbuild: {
    loader: 'jsx',                 // <-- parse JSX in .js files
    include: /src\/.*\.js$/,       // only your src/*.js files
  },
})
