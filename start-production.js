// Simple production server starter
// This file fixes the import.meta.dirname issue in bundled production code

import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from dist/public
const publicPath = path.resolve(__dirname, 'dist', 'public');

if (!fs.existsSync(publicPath)) {
  console.error(`Build directory not found: ${publicPath}`);
  console.error('Please run "npm run build" first');
  process.exit(1);
}

app.use(express.static(publicPath));

// Serve index.html for all routes (SPA behavior)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'index.html'));
});

const port = parseInt(process.env.PORT || '5000', 10);
const host = process.env.HOST || '0.0.0.0';

app.listen(port, host, () => {
  console.log(`Portfolio server running on port ${port}`);
});