import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ensure @react-google-maps/api is correctly resolved
      '@react-google-maps/api': '/node_modules/@react-google-maps/api',
    },
  },
  optimizeDeps: {
    include: ['@react-google-maps/api'], // Pre-bundle the dependency
    exclude: ['lucide-react'], // Exclude lucide-react as intended
  },
  build: {
    rollupOptions: {
      external: ['@react-google-maps/api'], // Externalize the package to avoid Rollup errors
    },
    sourcemap: true, // Enable source maps for debugging
  },
});
