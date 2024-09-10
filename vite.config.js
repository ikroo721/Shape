import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }), // Optional: visualize bundle sizes
  ],
  build: {
    minify: 'esbuild', // Keep it fast and efficient with esbuild
    cssCodeSplit: true, // Keep CSS splitting enabled
    sourcemap: false,   // Keep sourcemaps disabled in production
    chunkSizeWarningLimit: 1000, // Increase limit if chunks are large but essential
  },
});
