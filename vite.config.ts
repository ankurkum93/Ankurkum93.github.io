import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { copy } from 'fs-extra';

export default defineConfig({
  root: path.resolve(__dirname, "client"), // Set root to client directory
  plugins: [
    react(),
    {
      name: 'copy-resume',
      writeBundle() {
        // Copy resume file to build output
        copy(
          path.resolve(__dirname, 'public', 'Resume_Senior_Data_Engineer_1753900296996.pdf'),
          path.resolve(__dirname, 'dist', 'client', 'Resume_Senior_Data_Engineer_1753900296996.pdf')
        ).catch(console.error);
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
    dedupe: ['react', 'react-dom'],
  },
  build: {
    outDir: path.resolve(__dirname, "dist/client"),
    emptyOutDir: true,
    rollupOptions: {
      external: [],
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
  css: {
    modules: false,
    postcss: './postcss.config.js',
  },
  define: {
    'process.env.NODE_ENV': '"production"',
    'global': 'globalThis',
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    force: true,
    esbuildOptions: {
      target: 'es2020',
    },
  },
  ssr: {
    noExternal: ['react', 'react-dom'],
  },
  clearScreen: false,
  logLevel: 'info',
});
