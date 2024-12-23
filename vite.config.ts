import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // Already excluded
    include: ['@react-google-maps/api'], // Ensure this dependency is pre-bundled
  },
  build: {
    rollupOptions: {
      external: ['@react-google-maps/api'], // Explicitly externalize this package
    },
  },
});
