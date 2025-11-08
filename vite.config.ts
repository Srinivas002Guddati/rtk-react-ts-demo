import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@reduxjs/toolkit/src/query/tests/mocks/handlers',
      '@reduxjs/toolkit/src/query/tests'

    ]
  }
})
