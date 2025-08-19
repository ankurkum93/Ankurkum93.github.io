import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting build process...');

// Step 1: Install dependencies
console.log('📦 Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

// Step 2: Build client with Vite from client directory
console.log('⚛️ Building React app with Vite...');
try {
  execSync('npx vite build', { 
    stdio: 'inherit',
    cwd: path.join(__dirname, 'client') // Build from client directory
  });
  console.log('✅ Vite build successful!');
} catch (error) {
  console.error('❌ Vite build failed:', error.message);
  process.exit(1);
}

// Step 3: Build server
console.log('🖥️ Building server...');
execSync('npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist', { stdio: 'inherit' });

console.log('✅ Build completed successfully!'); 