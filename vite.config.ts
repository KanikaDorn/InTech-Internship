import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  build: {
    outDir: 'build'  // Change this to 'build' if you want the output to go into the 'build' folder
  }
});

