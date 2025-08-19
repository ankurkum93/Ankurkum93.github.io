import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname, "client"), // Set root to client directory
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist/client"),
    emptyOutDir: true,
    rollupOptions: {
    },
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  ssr: {
    noExternal: ['react', 'react-dom'],
  },
  clearScreen: false,
  logLevel: 'info',
});
