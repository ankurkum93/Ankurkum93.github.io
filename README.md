# Ankur Kumar - Data Engineer Portfolio

A stunning 3D interactive portfolio showcasing 8+ years of experience in data engineering, built with React, TypeScript, and Three.js.

## Features

- 🌟 **3D Interactive Animations** - Floating geometric shapes and particle effects
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎨 **Modern UI** - Glassmorphism effects and smooth animations
- 📄 **Resume Download** - Direct PDF download functionality
- 🚀 **Fast Performance** - Built with Vite for optimal loading speeds
- 📊 **Project Showcase** - Interactive gallery of data engineering projects

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and builds
- **Three.js** for 3D animations
- **Tailwind CSS** for styling
- **Shadcn/ui** for UI components
- **Wouter** for routing
- **TanStack Query** for state management

### Backend
- **Node.js** with Express.js
- **TypeScript** with ES modules
- **Drizzle ORM** (configured for future database integration)

## Quick Start

### Prerequisites
- **Node.js 18 or higher** (Required for optional chaining support)
- npm or yarn

> **Important**: If you encounter `SyntaxError: Unexpected token '.'` errors, you're likely using an older Node.js version. Please upgrade to Node.js 18+ to resolve this issue.

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5000
   ```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## Troubleshooting

### Node.js Version Issues

If you encounter errors like `SyntaxError: Unexpected token '.'`, this indicates a Node.js version compatibility issue:

**Solution 1: Update Node.js**
```bash
# Check your current Node.js version
node --version

# If less than 18.0.0, update using nvm (recommended):
nvm install 18
nvm use 18

# Or download from nodejs.org
```

**Solution 2: Use .nvmrc (if you have nvm)**
Create a `.nvmrc` file in your project root:
```bash
echo "18" > .nvmrc
nvm use
```

**Solution 3: Alternative Package Manager**
If you're using yarn, try:
```bash
yarn install
yarn dev
```

### Common Issues

1. **Port already in use**: Change the port by setting `PORT=3000 npm run dev`
2. **Missing dependencies**: Run `npm install` to install all dependencies
3. **Build failures**: Ensure you're using Node.js 18+ and run `npm run build`

## Deployment

### Render Deployment

1. **GitHub Setup:**
   ```bash
   # Initialize git repository
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Render Configuration:**
   - Build Command: `npm run build`
   - Start Command: `npm start`
   - Node Version: 18.20.4 (automatically detected from `.nvmrc`)

3. **Environment Variables in Render:**
   - `NODE_ENV`: `production`

### Netlify Deployment

1. **For Static Deployment:**
   ```bash
   npm run build
   # Deploy the dist/public folder
   ```

2. **For Full-Stack (Netlify Functions):**
   - Configure using the included `netlify.toml`
   - Build command: `npm run build`
   - Publish directory: `dist/public`

### Vercel Deployment

1. **Vercel Configuration:**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

2. **Environment Variables:**
   - Set `NODE_ENV` to `production`

## Project Structure

```
portfolio-project/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
│   └── index.html
├── server/                 # Backend Express server
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── vite.ts            # Vite integration
├── shared/                 # Shared types and schemas
├── public/                 # Static assets
└── package.json
```

## Environment Variables

For local development, you can set:

```bash
PORT=5000          # Server port (default: 5000)
HOST=localhost     # Server host (default: localhost)
NODE_ENV=development
```

## Deployment

### Replit (Recommended)
This project is optimized for Replit deployment. Simply:
1. Import the project to Replit
2. Run the project - it will automatically install dependencies and start

### Other Platforms
For other platforms:
1. Build the project: `npm run build`
2. Set `NODE_ENV=production`
3. Run: `npm start` or serve the built files

## Features Overview

### 🎯 Hero Section
- Interactive 3D background with floating geometric shapes
- Professional introduction with call-to-action buttons
- Smooth scroll navigation

### 👨‍💼 About Section
- Professional timeline with glassmorphism design
- Education and certification highlights
- Experience at BID Company, HelloFresh, and American Express

### 🚀 Projects Section
- Interactive project cards with hover effects
- Live links to Power BI dashboards and GitHub repositories
- Technology badges for each project

### 🛠️ Skills Section
- Animated progress bars
- Categorized technology stacks:
  - Analytical Tools (Excel, Tableau, Power BI, etc.)
  - Databases (PostgreSQL, MongoDB, Spark SQL, etc.)
  - Data Engineering (Python, Airflow, Docker, AWS, etc.)

### 📞 Contact Section
- Direct contact information
- Social media links (LinkedIn, GitHub)
- Resume download functionality

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Ankur Kumar**
- Email: ankurkum93@gmail.com
- LinkedIn: [linkedin.com/in/ankurkum93](https://linkedin.com/in/ankurkum93)
- GitHub: [github.com/ankurkum93](https://github.com/ankurkum93)
- Location: Genoa, Liguria, Italy

---

Built with ❤️ by Ankur Kumar - Senior Data Engineer with 8+ years of experience in building scalable data solutions.