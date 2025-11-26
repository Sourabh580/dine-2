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
    { id: "sabji-1", name: "Paneer Butter Masala", price: 120, description: "Creamy tomato-based curry with soft paneer cubes", image: "paneer_butter_masala_0fc6b529.jpg" },
    { id: "sabji-2", name: "Aloo Gobi", price: 90, description: "Classic potato and cauliflower curry with aromatic spices", image: "aloo_gobi_potato_cau_2089fa04.jpg" },
    { id: "sabji-5", name: "Palak Paneer", price: 130, description: "Cottage cheese in creamy spinach gravy", image: "palak_paneer_spinach_61b69f89.jpg" },
  ],
  Roti: [
    { id: "roti-1", name: "Tawa Roti", price: 10, description: "Soft whole wheat flatbread", image: "tawa_roti_indian_fla_01120b6a.jpg" },
    { id: "roti-4", name: "Naan", price: 20, description: "Soft leavened bread from tandoor", image: "naan_indian_bread_ta_77792fc4.jpg" },
    ],
  Beverages: [
    { id: "bev-2", name: "Sweet Lassi", price: 40, description: "Refreshing yogurt drink", image: "sweet_lassi_indian_y_e06d89f9.jpg" },
    { id: "bev-4", name: "Cold Coffee", price: 60, description: "Chilled coffee with milk", image: "cold_coffee_iced_dri_46668452.jpg" },
    { id: "bev-5", name: "Fresh Lime Soda", price: 30, description: "Fizzy lime refresher", image: "fresh_lime_soda_indi_693e6ebe.jpg" },
  ],
  Desserts: [
    { id: "dessert-1", name: "Gulab Jamun", price: 45, description: "Soft milk dumplings in sugar syrup", image: "gulab_jamun_indian_d_68135efd.jpg" },
    { id: "dessert-2", name: "Rasmalai", price: 55, description: "Cottage cheese patties in sweet milk", image: "rasmalai_indian_dess_999d1e62.jpg" },
    { id: "dessert-3", name: "Kheer", price: 50, description: "Rice pudding with cardamom", image: "kheer_indian_rice_pu_9a48c04b.jpg" },
    { id: "dessert-4", name: "Jalebi", price: 40, description: "Crispy syrup-soaked spirals", image: "jalebi_indian_sweet__29942f20.jpg" },
    { id: "dessert-5", name: "Ice Cream", price: 35, description: "Creamy vanilla ice cream", image: "vanilla_ice_cream_sc_f17dd9b1.jpg" },
  ],
};

export const categories = Object.keys(menu);
