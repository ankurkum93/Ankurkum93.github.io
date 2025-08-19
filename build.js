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

// Try manual build approach
try {
  console.log('🔨 Trying manual build approach...');
  
  // Create dist/client directory
  const distClientPath = path.join(__dirname, 'dist', 'client');
  if (!fs.existsSync(distClientPath)) {
    fs.mkdirSync(distClientPath, { recursive: true });
  }
  
  // Copy static files
  execSync('cp client/index.html dist/client/', { stdio: 'inherit' });
  execSync('cp -r client/src/*.css dist/client/', { stdio: 'inherit' });
  
  // Use esbuild to bundle the main entry point with React included
  execSync('npx esbuild client/src/main.tsx --bundle --format=esm --outdir=dist/client --platform=browser --target=es2020 --minify', { stdio: 'inherit' });
  
  // Rename the output to main.js
  execSync('mv dist/client/main.js dist/client/main.js.tmp', { stdio: 'inherit' });
  execSync('mv dist/client/main.js.tmp dist/client/main.js', { stdio: 'inherit' });
  
  // Update HTML to reference the bundled JS
  const htmlPath = path.join(__dirname, 'dist', 'client', 'index.html');
  let htmlContent = fs.readFileSync(htmlPath, 'utf8');
  htmlContent = htmlContent.replace('src="/src/main.tsx"', 'src="main.js"');
  htmlContent = htmlContent.replace('href="/src/index.css"', 'href="index.css"');
  fs.writeFileSync(htmlPath, htmlContent);
  
  console.log('✅ Manual build approach successful!');
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