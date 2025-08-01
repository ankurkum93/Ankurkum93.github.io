# Deployment Guide

## Quick Fix for Render Deployment

The error you encountered is due to Render trying to run a complex build command from your GitHub repository structure. Here's the solution:

### 1. Replace package.json

**Important**: Replace your current `package.json` with the contents from `package-template.json`:

```bash
cp package-template.json package.json
```

### 2. Key Files for Production

The archive includes a new production startup file:
- `start-production.js` - Fixes the `import.meta.dirname` issue in production
- Simplified build process that only runs `vite build`
- Static file serving for the React SPA

### 3. Render Configuration

In your Render dashboard:

- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Node Version**: Will be automatically detected from `.nvmrc` (18.20.4)

**What this fixes:**
- Build only runs `vite build` (no complex server bundling)
- Production uses `start-production.js` which properly handles static file serving
- Eliminates the `import.meta.dirname` error completely

### 3. Environment Variables

Set these in Render:
- `NODE_ENV`: `production`

### 4. GitHub Repository Structure

Make sure your repository includes:
- ✅ `.nvmrc` (Node.js version)
- ✅ `package.json` (from template)
- ✅ `render.yaml` (optional but recommended)
- ✅ All source files

### 5. Alternative: Static Deployment

If you prefer a static deployment (no server needed):

1. Build locally:
   ```bash
   npm run build
   ```

2. Deploy only the `dist/public` folder to:
   - Netlify
   - Vercel 
   - GitHub Pages

## Why the Error Occurred

The original error happened because:
1. Render was trying to run commands in the wrong directory (`cd client`)
2. React dependencies weren't properly resolved in the build process
3. The build command was overly complex for the deployment environment

## Test Locally First

Always test before deploying:
```bash
npm install
npm run build
npm start
```

Then visit `http://localhost:5000` to verify everything works.