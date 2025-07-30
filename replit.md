# Portfolio Application

## Overview

This is a full-stack portfolio website built as a single-page application showcasing professional experience and skills. The application features a modern React frontend with a Node.js/Express backend, designed to display portfolio content, projects, and provide a resume download functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Bundler**: Vite for fast development and optimized builds
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Component Structure**: Component-based architecture with reusable UI components

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Style**: RESTful API endpoints
- **File Serving**: Static file serving for resume downloads
- **Development**: Custom Vite integration for SSR-like development experience

### Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (configured but not actively used in current implementation)
- **Driver**: Neon Database serverless driver
- **Schema Management**: Type-safe schema definitions with Zod validation
- **Storage**: Currently uses in-memory storage with interface for future database integration

## Key Components

### Frontend Components
- **Hero Section**: Interactive landing area with Three.js background animations
- **About Section**: Professional experience timeline with glassmorphism design
- **Projects Section**: Portfolio showcase with external links and technology badges
- **Skills Section**: Animated skill bars and technology categorization
- **Contact Section**: Contact information with resume download functionality
- **Navigation**: Smooth scrolling navigation with active section highlighting

### Backend Services
- **Resume Download**: File serving endpoint for PDF resume downloads
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database operations
- **User Management**: Basic user schema and CRUD operations (prepared for future authentication)

### UI System
- **Design System**: Consistent component library with variant-based styling
- **Theming**: Dark/light mode support with CSS custom properties
- **Animations**: CSS-based animations with intersection observer triggers
- **Responsive Design**: Mobile-first responsive layouts

## Data Flow

1. **Application Initialization**: React app initializes with QueryClient provider and routing setup
2. **Page Rendering**: Single-page portfolio loads all sections with lazy-loaded animations
3. **User Interactions**: Smooth scrolling navigation and interactive elements
4. **Resume Download**: Client-side initiated download triggers backend file serving
5. **Development Mode**: Vite middleware handles HMR and development features

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with comprehensive Radix UI component primitives
- **Styling**: Tailwind CSS with PostCSS processing
- **Animations**: CSS-based animations with JavaScript intersection observers
- **State Management**: TanStack Query for API state management
- **Routing**: Wouter for lightweight routing
- **Form Handling**: React Hook Form with Zod resolvers

### Backend Dependencies
- **Web Framework**: Express.js for HTTP server
- **Database**: Drizzle ORM with Neon PostgreSQL driver
- **Development Tools**: Custom Vite integration for development experience
- **File Handling**: Native Node.js file system operations

### Development Tools
- **Build System**: Vite with React plugin and TypeScript support
- **Code Quality**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom configuration
- **Development**: Hot module replacement and error overlay

## Deployment Strategy

### Build Process
- **Frontend Build**: Vite builds optimized React bundle to `dist/public`
- **Backend Build**: ESBuild bundles Express server to `dist/index.js`
- **Asset Handling**: Static assets served from build directory

### Production Setup
- **Server**: Node.js server serving both API and static files
- **Environment**: Production environment variables for database configuration
- **File Serving**: Express static middleware for built frontend assets

### Development Workflow
- **Development Server**: Concurrent frontend (Vite) and backend (tsx) development
- **Hot Reloading**: Vite HMR for frontend changes
- **API Proxy**: Development proxy for backend API calls
- **Database Management**: Drizzle Kit for schema migrations and database operations

The application is structured as a monorepo with shared TypeScript types and clear separation between client and server code, making it maintainable and scalable for future enhancements.