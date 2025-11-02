# Digital Restaurant Menu - Static Web App

A beautiful, mobile-first digital restaurant menu built with React, Vite, and Tailwind CSS. Customers can browse categories, select items, and place orders that are sent directly to your dashboard API.

## 🎯 Features

- ✅ **Fully Static** - No backend server required
- 📱 **Mobile-First Design** - Optimized for smartphones and tablets
- 🎨 **Premium UI** - Glassmorphism effects, smooth animations, and elegant typography
- 🛒 **Smart Cart** - Persistent cart using localStorage
- 🔔 **Toast Notifications** - Real-time feedback for user actions
- 🌐 **External API Integration** - Orders sent directly to your dashboard
- ⚡ **Fast & Responsive** - Built with Vite for optimal performance

## 🚀 Quick Start

### 1. Configure Your Restaurant

Edit `client/src/config.ts` to customize your restaurant details and API connection:

```typescript
export const OWNER_API_URL = "https://your-dashboard-endpoint.com/api/order";
export const OWNER_API_KEY = "YOUR_SECRET_KEY";
export const RESTAURANT_NAME = "Your Restaurant Name";
export const LOGO_URL = ""; // Optional: path to your logo image
```

### 2. Customize Your Menu

Edit `client/src/data/menu.ts` to add or modify your menu items:

```typescript
export const menu: Record<string, MenuItem[]> = {
  Sabji: [
    { 
      id: "sabji-1", 
      name: "Paneer Butter Masala", 
      price: 120, 
      description: "Creamy tomato-based curry" 
    },
    // Add more items...
  ],
  // Add more categories...
};
```

**Menu Item Structure:**
- `id`: Unique identifier (required)
- `name`: Item name (required)
- `price`: Price in your currency (required)
- `description`: Short description (optional)
- `image`: Image URL (optional)

### 3. Run Locally

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5000`

## 📡 API Integration

### Order Endpoint

Orders are sent as POST requests to `OWNER_API_URL` with the following structure:

**Request Headers:**
```json
{
  "Content-Type": "application/json",
  "Authorization": "Bearer YOUR_API_KEY"
}
```

**Request Body:**
```json
{
  "table_no": "5",
  "customer_name": "John Doe",
  "items": [
    {
      "name": "Paneer Butter Masala",
      "qty": 2,
      "price": 120
    }
  ],
  "total": 240,
  "notes": "Extra spicy"
}
```

### Setting Up Your API Endpoint

Your dashboard API should:
1. Accept POST requests at the configured endpoint
2. Validate the Bearer token
3. Process the order data
4. Return a success response (200 OK)

Example responses:
- **Success**: `{ "success": true, "order_id": "12345" }`
- **Error**: Return any non-200 status code

## 🎨 Customization

### Adding Categories

1. Open `client/src/data/menu.ts`
2. Add a new category with items:

```typescript
export const menu = {
  // ... existing categories
  "Starters": [
    { id: "starter-1", name: "Spring Rolls", price: 80 },
    { id: "starter-2", name: "Paneer Tikka", price: 150 },
  ],
};
```

### Adding Category Icons

Edit `client/src/pages/HomePage.tsx` to add custom icons:

```typescript
import { FireIcon } from "@heroicons/react/24/outline";

const categoryIcons = {
  // ... existing icons
  "Starters": FireIcon,
};
```

### Changing Colors

The app uses a green theme by default. To change colors, edit `client/src/index.css`:

- Primary color: Search for `--primary` variables
- Background colors: Search for `--background` and `--card` variables

## 📱 User Flow

1. **Browse Categories** - Customer sees all available categories
2. **Select Items** - Click a category to view items, tap items to add to cart
3. **Adjust Quantities** - Use +/- buttons to change quantities
4. **Place Order** - Click floating "Order Now" button
5. **Fill Details** - Enter table number, name, and optional notes
6. **Submit** - Order sent to your API endpoint
7. **Success** - Confirmation screen shown

## 🚢 Deployment

### Deploy to Replit

1. This project is already configured for Replit
2. Click the "Run" button to start the development server
3. Use Replit's deployment feature to publish your app

### Deploy to Netlify

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

### Deploy to Vercel

1. Connect your repository to Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy!

## 🔧 Configuration Files

- **`client/src/config.ts`** - Restaurant name, logo, and API settings
- **`client/src/data/menu.ts`** - Menu categories and items
- **`client/src/index.css`** - Color theme and design tokens
- **`tailwind.config.ts`** - Tailwind CSS configuration

## 💡 Tips

1. **Test API Connection**: Use a tool like Postman to test your API endpoint before deployment
2. **Mobile Testing**: Always test on real mobile devices
3. **Images**: Add item images in `client/src/data/menu.ts` for better visual appeal
4. **Logo**: Place your logo in `public/` folder and update `LOGO_URL` in config
5. **Backup Cart**: Cart data is saved in localStorage - it persists across page refreshes

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Wouter** - Lightweight routing
- **React Hot Toast** - Notifications
- **Heroicons** - Icon library
- **LocalStorage API** - Cart persistence

## 📄 License

MIT License - Feel free to use this for your restaurant!

## 🤝 Support

For issues or questions, please open an issue on the repository.

---

Built with ❤️ for restaurants everywhere
