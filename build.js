import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

console.log('🚀 Starting custom build process...');

// Step 1: Install dependencies
console.log('📦 Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

// Step 2: Ensure React dependencies are available
console.log('⚛️ Ensuring React dependencies...');
execSync('npm install react react-dom @types/react @types/react-dom', { stdio: 'inherit' });

// Step 3: Build with Vite
console.log('🔨 Building with Vite...');
try {
  execSync('npx vite build', { 
    stdio: 'inherit',
    cwd: path.resolve(__dirname, 'client')
  });
} catch (error) {
  console.error('❌ Vite build failed, trying alternative approach...');
  
  // Alternative: Try building from root with explicit config
  execSync('npx vite build --config vite.config.ts', { 
    stdio: 'inherit'
  });
}

// Step 4: Build server
console.log('🖥️ Building server...');
execSync('npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist', { stdio: 'inherit' });

console.log('✅ Build completed successfully!'); 