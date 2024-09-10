import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Minify with esbuild (default, fast and efficient)
    minify: 'esbuild', // You can switch to 'terser' if you need more advanced options but it will be slower.

    // Uncomment to use Terser if more complex minification is needed:
    // minify: 'terser',
    // terserOptions: {
    //   compress: {
    //     drop_console: true, // Example option to drop console statements
    //   },
    // },

    // Additional settings for fine-tuning
    cssCodeSplit: true, // Split CSS into separate files (enabled by default)
    sourcemap: false,   // Disable sourcemaps in production to save space
    chunkSizeWarningLimit: 500, // Adjust chunk size limit warnings if necessary
  },
})
