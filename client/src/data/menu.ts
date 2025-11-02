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
    { id: "sabji-3", name: "Mix Veg", price: 110, description: "Fresh seasonal vegetables in a rich gravy", image: "mixed_vegetables_cur_99aadd3c.jpg" },
    { id: "sabji-4", name: "Dal Tadka", price: 100, description: "Yellow lentils tempered with garlic and cumin", image: "dal_tadka_yellow_len_8103fd18.jpg" },
    { id: "sabji-5", name: "Palak Paneer", price: 130, description: "Cottage cheese in creamy spinach gravy", image: "palak_paneer_spinach_61b69f89.jpg" },
    { id: "sabji-6", name: "Chole", price: 95, description: "Spicy chickpea curry with tangy tomatoes", image: "chole_chickpea_curry_a08bdb33.jpg" },
  ],
  Roti: [
    { id: "roti-1", name: "Tawa Roti", price: 10, description: "Soft whole wheat flatbread", image: "tawa_roti_indian_fla_01120b6a.jpg" },
    { id: "roti-2", name: "Butter Roti", price: 15, description: "Roti brushed with fresh butter", image: "whole_wheat_roti_wit_a6933a9a.jpg" },
    { id: "roti-3", name: "Lachha Paratha", price: 25, description: "Layered flaky flatbread", image: "lachha_paratha_layer_070c0ac8.jpg" },
    { id: "roti-4", name: "Naan", price: 20, description: "Soft leavened bread from tandoor", image: "naan_indian_bread_ta_77792fc4.jpg" },
    { id: "roti-5", name: "Garlic Naan", price: 30, description: "Naan topped with garlic and herbs", image: "garlic_naan_indian_b_c9cfc19d.jpg" },
    { id: "roti-6", name: "Butter Naan", price: 25, description: "Naan brushed with butter", image: "butter_naan_indian_f_428942ee.jpg" },
  ],
  Beverages: [
    { id: "bev-1", name: "Masala Chai", price: 20, description: "Traditional spiced tea", image: "masala_chai_indian_s_f6480d68.jpg" },
    { id: "bev-2", name: "Sweet Lassi", price: 40, description: "Refreshing yogurt drink", image: "sweet_lassi_indian_y_e06d89f9.jpg" },
    { id: "bev-3", name: "Mango Lassi", price: 50, description: "Creamy mango yogurt drink", image: "mango_lassi_indian_d_ec5b64bb.jpg" },
    { id: "bev-4", name: "Cold Coffee", price: 60, description: "Chilled coffee with milk", image: "cold_coffee_iced_dri_46668452.jpg" },
    { id: "bev-5", name: "Fresh Lime Soda", price: 30, description: "Fizzy lime refresher", image: "fresh_lime_soda_indi_693e6ebe.jpg" },
    { id: "bev-6", name: "Buttermilk", price: 25, description: "Salted spiced yogurt drink", image: "buttermilk_indian_ch_df11c411.jpg" },
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
