import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting custom build process...');

// Step 1: Install dependencies
console.log('📦 Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

// Step 2: Ensure React dependencies are available
console.log('⚛️ Ensuring React dependencies...');
execSync('npm install react react-dom @types/react @types/react-dom', { stdio: 'inherit' });

// Step 3: Try alternative build approaches
console.log('🔨 Trying alternative build approaches...');

// Try using Vite with a simple configuration
try {
  console.log('🔨 Trying Vite approach...');
  
  // Create a simple Vite config for this build
  const simpleViteConfig = `
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: '../dist/client',
    emptyOutDir: true,
  },
  root: '.',
})
`;
  
  const viteConfigPath = path.join(__dirname, 'client', 'vite.simple.config.js');
  fs.writeFileSync(viteConfigPath, simpleViteConfig);
  
  // Build with the simple config
  execSync('npx vite build --config vite.simple.config.js', { 
    stdio: 'inherit',
    cwd: path.resolve(__dirname, 'client')
  });
  
  // Clean up the temporary config
  fs.unlinkSync(viteConfigPath);
  
  console.log('✅ Vite approach successful!');
} catch (error) {
  console.error('❌ esbuild approach failed, trying Vite...');
  
  try {
    // Try building from root with explicit config
    execSync('npx vite build --config vite.config.ts', { 
      stdio: 'inherit'
    });
  } catch (viteError) {
    console.error('❌ Vite build also failed, trying client directory...');
    
    // Alternative: Try building from client directory
    execSync('npx vite build', { 
      stdio: 'inherit',
      cwd: path.resolve(__dirname, 'client')
    });
  }
}

// Step 4: Build server
console.log('🖥️ Building server...');
execSync('npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist', { stdio: 'inherit' });

console.log('✅ Build completed successfully!'); 