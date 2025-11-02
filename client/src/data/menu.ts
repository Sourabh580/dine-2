export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
  icon?: string;
}

export const menu: Record<string, MenuItem[]> = {
  Sabji: [
    { id: "sabji-1", name: "Paneer Butter Masala", price: 120, description: "Creamy tomato-based curry with soft paneer cubes" },
    { id: "sabji-2", name: "Aloo Gobi", price: 90, description: "Classic potato and cauliflower curry with aromatic spices" },
    { id: "sabji-3", name: "Mix Veg", price: 110, description: "Fresh seasonal vegetables in a rich gravy" },
    { id: "sabji-4", name: "Dal Tadka", price: 100, description: "Yellow lentils tempered with garlic and cumin" },
    { id: "sabji-5", name: "Palak Paneer", price: 130, description: "Cottage cheese in creamy spinach gravy" },
    { id: "sabji-6", name: "Chole", price: 95, description: "Spicy chickpea curry with tangy tomatoes" },
  ],
  Roti: [
    { id: "roti-1", name: "Tawa Roti", price: 10, description: "Soft whole wheat flatbread" },
    { id: "roti-2", name: "Butter Roti", price: 15, description: "Roti brushed with fresh butter" },
    { id: "roti-3", name: "Lachha Paratha", price: 25, description: "Layered flaky flatbread" },
    { id: "roti-4", name: "Naan", price: 20, description: "Soft leavened bread from tandoor" },
    { id: "roti-5", name: "Garlic Naan", price: 30, description: "Naan topped with garlic and herbs" },
    { id: "roti-6", name: "Butter Naan", price: 25, description: "Naan brushed with butter" },
  ],
  Beverages: [
    { id: "bev-1", name: "Masala Chai", price: 20, description: "Traditional spiced tea" },
    { id: "bev-2", name: "Sweet Lassi", price: 40, description: "Refreshing yogurt drink" },
    { id: "bev-3", name: "Mango Lassi", price: 50, description: "Creamy mango yogurt drink" },
    { id: "bev-4", name: "Cold Coffee", price: 60, description: "Chilled coffee with milk" },
    { id: "bev-5", name: "Fresh Lime Soda", price: 30, description: "Fizzy lime refresher" },
    { id: "bev-6", name: "Buttermilk", price: 25, description: "Salted spiced yogurt drink" },
  ],
  Desserts: [
    { id: "dessert-1", name: "Gulab Jamun", price: 45, description: "Soft milk dumplings in sugar syrup" },
    { id: "dessert-2", name: "Rasmalai", price: 55, description: "Cottage cheese patties in sweet milk" },
    { id: "dessert-3", name: "Kheer", price: 50, description: "Rice pudding with cardamom" },
    { id: "dessert-4", name: "Jalebi", price: 40, description: "Crispy syrup-soaked spirals" },
    { id: "dessert-5", name: "Ice Cream", price: 35, description: "Creamy vanilla ice cream" },
  ],
};

export const categories = Object.keys(menu);
