# Digital Restaurant Menu - Full-Stack Web App

## Overview

This is a mobile-first digital restaurant menu application built with React, Vite, Express, and Tailwind CSS. The application allows customers to browse menu categories, select items, and place orders through a local backend API. Orders are stored in-memory on the server and can be retrieved for management purposes.

The app features a premium UI with glassmorphism effects, smooth animations, persistent cart storage using localStorage, and real-time toast notifications for user feedback. It's optimized for mobile devices while maintaining an excellent desktop experience.

**Architecture:** Frontend runs on React with Vite, backend uses Express with in-memory storage for order management.

## Recent Changes

**November 1, 2025:**
- Created local backend API for order handling
- Added order schema and validation with Zod
- Implemented POST `/api/orders` endpoint for order submission
- Implemented GET `/api/orders` endpoint for order retrieval
- Updated configuration to use local API endpoint instead of external placeholder
- Orders now successfully submit and store in-memory on the server
- Full ordering flow now functional without requiring external services

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and dev server for optimal performance
- Wouter for lightweight client-side routing
- TanStack React Query for server state management
- React Hook Form with Zod for form validation

**Component Architecture:**
- Shadcn/ui component library providing a comprehensive set of accessible, customizable UI primitives built on Radix UI
- Custom components for domain-specific features (FloatingOrderButton, OrderModal, SuccessScreen, Header)
- Context-based state management for cart functionality (CartProvider)
- Page-based routing with HomePage and CategoryPage

**State Management:**
- Cart state managed through React Context API (CartContext)
- LocalStorage for cart persistence across sessions
- Form state handled by React Hook Form
- No global state management library required due to simple state needs

**Styling System:**
- Tailwind CSS with custom configuration for design tokens
- CSS variables for theme colors supporting light/dark modes
- Custom spacing system based on 2, 4, 6, 8 units
- Google Fonts integration (Inter for UI, Playfair Display for display text)
- Glassmorphism and elevation effects using custom CSS utilities

### Backend Architecture

**Technology Stack:**
- Express.js server handling API routes
- In-memory storage (MemStorage) for order persistence during runtime
- Zod schema validation for API requests
- TypeScript for type safety across frontend and backend

**API Endpoints:**
- POST `/api/orders` - Submit new customer orders
- GET `/api/orders` - Retrieve all submitted orders

**Data Models:**
- Order schema defined in `shared/schema.ts`
- Storage interface in `server/storage.ts`
- API routes in `server/routes.ts`

### Configuration Management

**Application Configuration:**
- `client/src/config.ts` contains all customizable settings:
  - OWNER_API_URL: Local API endpoint for order submission ("/api/orders")
  - OWNER_API_KEY: Optional authentication key (empty for local API)
  - RESTAURANT_NAME: Display name
  - LOGO_URL: Optional logo image path

**Menu Data:**
- `client/src/data/menu.ts` defines the menu structure
- Record-based organization with category keys (Sabji, Roti, Beverages, Desserts)
- Each MenuItem includes: id, name, price, optional description and image
- Easily extensible for adding new categories or items

### Build and Deployment

**Development:**
- Vite dev server with HMR (Hot Module Replacement)
- TypeScript type checking
- Replit-specific plugins for development experience

**Production Build:**
- Frontend: Vite builds optimized static assets to `dist/public`
- Backend: esbuild bundles Express server with API routes
- Requires a Node.js hosting environment (Replit, Heroku, Railway, etc.)

**Server:**
- Express server handles both frontend serving and API routes
- Serves the static frontend in production mode
- Uses Vite middleware in development mode for HMR
- In-memory storage for orders (resets on server restart)

## External Dependencies

### Third-Party UI Libraries

**Radix UI Primitives:**
- Comprehensive set of unstyled, accessible components (@radix-ui/react-*)
- Includes: accordion, alert-dialog, checkbox, dialog, dropdown-menu, form controls, navigation, popover, scroll-area, select, slider, switch, tabs, toast, tooltip
- Provides accessibility features out of the box

**Supporting Libraries:**
- class-variance-authority: Type-safe component variants
- clsx & tailwind-merge: Conditional class name utilities
- cmdk: Command palette component
- lucide-react & @heroicons/react: Icon libraries
- react-hot-toast: Toast notification system
- react-day-picker: Date picker component
- vaul: Drawer component
- embla-carousel-react: Carousel functionality
- input-otp: OTP input component

### Validation and Forms

- Zod: Schema validation library
- React Hook Form: Form state management
- @hookform/resolvers: Integrates Zod with React Hook Form
- drizzle-zod: Generates Zod schemas from Drizzle ORM schemas

### Database Layer (Configured but Not Currently Used)

**Note:** The application currently uses in-memory storage for orders, which resets when the server restarts. However, the repository includes database configuration that could be utilized for persistent storage:

- Drizzle ORM with PostgreSQL dialect configured
- @neondatabase/serverless for Neon PostgreSQL connectivity
- Connection via DATABASE_URL environment variable
- Schema defined in `shared/schema.ts` (includes users table and order schema)
- Migrations output to `./migrations` directory
- Can be switched from MemStorage to database storage in the future

### Development Tools

- TypeScript for type safety
- ESBuild for backend bundling
- PostCSS with Autoprefixer
- Replit-specific plugins for enhanced development experience

### API Integration

**Order Submission Flow:**
1. Customer fills out order form with table number, name, and optional notes
2. Frontend sends POST request to `/api/orders` with order data
3. Backend validates data using Zod schema
4. Order is stored in memory with unique ID and timestamp
5. Success response triggers cart clear and confirmation screen

**API Payload Structure:**
```typescript
{
  table_no: string
  customer_name: string
  items: Array<{ name: string, qty: number, price: number }>
  total: number
  notes?: string
}
```

**Response Structure:**
```typescript
{
  success: true,
  order: {
    id: string
    table_no: string
    customer_name: string
    items: Array<{ name: string, qty: number, price: number }>
    total: number
    notes?: string
    createdAt: string
  }
}
```

**Error Handling:**
- User-friendly toast notifications for errors
- Form validation before submission
- Backend validation with Zod schemas

### Browser Storage

- localStorage for cart persistence
- Keys: "restaurant-menu-cart"
- Cart data includes items with quantities
- Automatically synced on cart state changes