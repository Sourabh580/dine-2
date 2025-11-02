import { MenuItem } from "./data/menu";

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Order {
  table_no: string;
  customer_name: string;
  items: {
    name: string;
    qty: number;
    price: number;
  }[];
  total: number;
  notes?: string;
}
