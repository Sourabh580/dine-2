# Design Guidelines: Digital Restaurant Menu Web App

## Design Approach

**Reference-Based Approach**: Drawing inspiration from premium food delivery platforms (DoorDash, Uber Eats, Swiggy) and modern restaurant ordering systems (Toast, Square), combined with e-commerce browsing patterns. The design emphasizes appetite appeal, easy navigation, and seamless ordering flow with a premium, hospitality-focused aesthetic.

## Core Design Principles

1. **Appetite-Driven Design**: Visual hierarchy that makes food items irresistible
2. **Effortless Navigation**: Minimal friction from browsing to ordering
3. **Trust & Clarity**: Clear pricing, transparent order summary, confident CTAs
4. **Premium Accessibility**: Upscale feel that remains approachable and functional

---

## Typography System

**Font Families**:
- Primary: 'Inter' (Google Fonts) - for UI elements, body text, prices
- Display: 'Playfair Display' or 'Cormorant Garamond' (Google Fonts) - for restaurant name, category headers (optional premium touch)

**Hierarchy**:
- Restaurant Name (Header): text-3xl md:text-4xl, font-bold
- Category Titles: text-2xl md:text-3xl, font-semibold
- Item Names: text-lg md:text-xl, font-medium
- Prices: text-base md:text-lg, font-semibold
- Body/Descriptions: text-sm md:text-base, font-normal
- Button Text: text-base md:text-lg, font-semibold
- Form Labels: text-sm, font-medium

---

## Layout & Spacing System

**Tailwind Spacing Primitives**: Use units of 2, 4, 6, and 8 consistently (p-2, p-4, p-6, p-8, gap-4, space-y-6, etc.)

**Container Strategy**:
- Max width: max-w-7xl for main container
- Mobile padding: px-4
- Desktop padding: px-6 md:px-8
- Section spacing: py-8 md:py-12

**Grid Patterns**:
- Category Grid: grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4
- Item Grid: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6
- Single column for order summary and forms

---

## Component Library

### 1. Header Component
- Fixed/sticky top navigation
- Restaurant logo (left) + name (center on mobile, left on desktop)
- Height: h-16 md:h-20
- Padding: px-4 md:px-8
- Includes subtle bottom border or shadow for depth
- Optional: Shopping cart icon with item count badge (top-right)

### 2. Category Cards (Homepage Grid)
- Aspect ratio: aspect-square or aspect-[4/3]
- Rounded corners: rounded-2xl
- Shadow: shadow-lg with hover:shadow-xl transition
- Content layout:
  - Background: Gradient overlay or glassmorphism effect
  - Category icon (top-center or full background image)
  - Category name (bottom-center, large text)
  - Item count badge (e.g., "12 items") - small text, top-right
- Hover: Subtle scale transform (hover:scale-105 transition-transform duration-300)

### 3. Menu Item Cards
- Card container: rounded-xl shadow-md bg-white dark:bg-gray-800
- Padding: p-4
- Layout structure:
  - Top: Item image (if available) - aspect-video or aspect-square, rounded-lg
  - Middle: Item name + short description (2 lines max, text-ellipsis)
  - Bottom: Price (left) + Add/Selection control (right)
- Selection state:
  - Unselected: Border default, "Add" button or plus icon
  - Selected: Border accent color, green checkmark icon, quantity controls
- Quantity controls: Circle buttons with +/- for increment/decrement (when selected)
- Transition: All state changes with transition-all duration-200

### 4. Floating "Order Now" Button
- Position: fixed bottom-6 right-6 (mobile: bottom-20 right-4 to avoid mobile browser chrome)
- Size: Large circle or rounded-full pill shape
- Dimensions: w-16 h-16 md:w-auto md:h-14 md:px-8
- Icon: Shopping cart or checkmark
- Mobile: Icon-only circle; Desktop: Icon + "Order Now" text
- Shadow: shadow-2xl for prominence
- Animation: Entrance with slide-up + fade-in when items selected
- Pulse animation: animate-pulse (subtle) when first item added

### 5. Order Modal/Sheet
**Mobile**: Bottom sheet that slides up from bottom (rounded-t-3xl)
**Desktop**: Center modal with rounded-2xl, max-w-2xl

**Structure**:
- Header: "Your Order" title + close button (top-right)
- Form Section:
  - Table Number: Large input field, type="number", required indicator
  - Customer Name: Text input, required indicator
  - Notes: Textarea, 3-4 rows, placeholder "Special requests..."
- Order Summary Section:
  - Item list with name, quantity controls, and price per line
  - Each item: Editable quantity with +/- controls, remove option (trash icon)
  - Divider line
  - Subtotal, optional tax/service charge rows
  - Total: Large, bold text (text-2xl font-bold)
- Footer: "Confirm Order" button (full-width, large, prominent)

### 6. Form Inputs
- Height: h-12 md:h-14
- Padding: px-4
- Rounded: rounded-lg
- Border: 2px border with focus state (ring-2 ring-offset-2)
- Label: Above input, text-sm font-medium, mb-2
- Required indicator: Red asterisk or "(required)" text

### 7. Success/Confirmation Screen
- Full-screen overlay with centered content
- Large success icon: Checkmark in circle (w-20 h-20 md:w-24 h-24)
- Animation: Scale-in + fade-in entrance
- Heading: "Order Placed Successfully! 🎉" (text-2xl md:text-3xl font-bold)
- Subtext: "Your order will be prepared shortly" or order number
- Details card: Order summary (table, items count, total)
- Action button: "Place Another Order" or "Back to Menu"

### 8. Toast Notifications
- Position: top-center or bottom-center
- Width: max-w-md
- Padding: p-4
- Rounded: rounded-lg
- Shadow: shadow-lg
- Auto-dismiss after 3-5 seconds
- Icon + message layout (icon left, text right, close button far right)

---

## Interaction & Animation Guidelines

**Subtle & Purposeful** - Use animations sparingly for feedback, not decoration:

1. **Item Selection**: Scale transform (scale-105) on card when selected
2. **Button Interactions**: No hover effects on buttons as they handle their own states
3. **Floating Button**: Slide-up entrance (translateY) when first item added
4. **Modal/Sheet**: Slide-in from bottom (mobile) or fade-in with scale (desktop)
5. **Success Screen**: Scale-in (scale-0 to scale-100) + fade-in
6. **Transitions**: Use transition-all duration-200 or duration-300 for smooth state changes
7. **Avoid**: Continuous animations, parallax effects, or distracting motion

---

## Page Structure

### Homepage (Category View)
1. Header (fixed/sticky)
2. Restaurant branding section (optional): Logo + tagline, py-6 md:py-8
3. Category grid: pt-4 pb-24 (extra bottom padding for floating button)
4. Floating "Order Now" button (appears when cart has items)

### Category Items View
1. Header (with back button to categories)
2. Category title banner: py-4 md:py-6, category name + item count
3. Items grid: pt-4 pb-24
4. Floating "Order Now" button

### Order Modal Flow
1. Modal overlay (backdrop-blur-sm)
2. Modal container with form and summary
3. Sticky footer with total and confirm button

---

## Images

**Required Images**:
1. **Restaurant Logo**: 
   - Placement: Header left side
   - Size: h-10 md:h-12, auto width
   - Format: PNG with transparency preferred
   - Fallback: Restaurant name text if no logo

2. **Category Images** (optional but recommended):
   - Placement: Background or top section of category cards
   - Size: Square or 4:3 aspect ratio
   - Treatment: Gradient overlay for text readability
   - Style: Appetizing food photography, professional quality

3. **Menu Item Images** (strongly recommended):
   - Placement: Top of item cards, above name and price
   - Size: aspect-video (16:9) or aspect-square
   - Format: WebP or JPG, optimized for web
   - Style: Clean, well-lit food photography on neutral backgrounds
   - Fallback: Placeholder with item initial or generic food icon if no image

**No Large Hero Image**: This app prioritizes immediate browsing functionality over hero sections. The restaurant branding (logo + name) serves as the identity element without requiring a full hero treatment.

---

## Glassmorphism Effects (User-Specified)

Apply subtle glassmorphism to:
- Category cards: backdrop-blur-md with semi-transparent background
- Floating order button: backdrop-blur-lg
- Modal header: backdrop-blur-sm
- Not recommended for main content cards (menu items) - keep those solid for readability

---

## Mobile-First Responsive Breakpoints

- **Mobile (base)**: Single column, touch-friendly targets (min 44x44px)
- **Tablet (md: 768px)**: 2-column grids, expanded spacing
- **Desktop (lg: 1024px)**: 3-4 column grids, hover states, larger type

**Critical Mobile Considerations**:
- Floating button positioned to avoid browser UI overlap
- Modal/sheet slides from bottom on mobile (natural thumb zone)
- Form inputs large enough for easy tapping (h-12 minimum)
- Category and item cards with adequate spacing (gap-4 minimum)

---

This design creates a premium, appetite-driven browsing experience with clear visual hierarchy, effortless navigation, and a seamless order flow - all optimized for mobile-first usage while scaling beautifully to larger screens.