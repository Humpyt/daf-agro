# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based corporate website for DAF-AGRO LIMITED, a Ugandan agribusiness company specializing in import-export operations, agricultural machinery, and quality produce trading. The website is built with Vite, React 18, TypeScript, and styled with Tailwind CSS.

## Development Commands

### Core Commands
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks
- `npm run typecheck` - Run TypeScript type checking without emitting files

## Architecture & Technology Stack

### Frontend Stack
- **React 18** - Main UI framework with hooks and functional components
- **TypeScript** - Type safety and enhanced development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Lucide React** - Icon library used throughout the site

### Key Dependencies
- `@supabase/supabase-js` - Likely intended for future backend integration
- `lucide-react` - Comprehensive icon set used for UI elements

## Project Structure

```
src/
├── App.tsx          # Main application component with complete website
├── main.tsx         # React entry point
├── index.css        # Global styles and Tailwind imports
└── vite-env.d.ts    # Vite environment type definitions
```

### Component Architecture
- **Single-page application** structure with all content in `App.tsx`
- **Responsive design** using Tailwind's responsive utilities
- **Component sections**: Hero, About, Services, Vision, Contact, Footer
- **Image assets** referenced from `/public` directory and external sources (Pexels)

## Styling Approach

### Design System
- **Color palette**: Emerald/green gradient theme reflecting agricultural brand
- **Typography**: Gradient text effects for headings, clean sans-serif fonts
- **Layout**: Responsive grid system using Tailwind utilities
- **Animations**: Hover effects, scale transforms, and smooth transitions
- **Components**: Cards with shadow effects, rounded corners, and backdrop filters

### Key Design Patterns
- Gradient backgrounds and text effects for brand consistency
- Card-based layouts with hover animations for services section
- Fixed navigation header with backdrop blur effect
- Responsive image galleries with hover scaling
- Form styling with focus states and transitions

## Development Notes

### Image Management
- Local images stored in `/public` directory (logo.png, machinery images)
- External images from Pexels with auto-compress parameters
- All images include proper alt tags for accessibility

### Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Complex grid layouts using CSS Grid and Flexbox
- Adaptive typography and spacing across device sizes

### Performance Considerations
- Vite's optimized bundling for fast builds
- Image optimization through external CDN (Pexels)
- Component-based structure for maintainability

## Code Style

### TypeScript Configuration
- Strict type checking enabled
- Path aliases configured for cleaner imports
- Separate config files for app and Node.js environments

### ESLint Configuration
- React hooks and refresh plugins for modern React development
- Standard JavaScript rules for code quality

This website represents a complete corporate presence with sections for company information, services, vision, and contact functionality, all built within a single-page application architecture.