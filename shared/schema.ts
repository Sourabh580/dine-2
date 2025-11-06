import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;


// 🧩 Order Item Schema
export const orderItemSchema = z.object({
  name: z.string(),                    // dish name
  qty: z.number().int().positive(),    // quantity (already correct)
  price: z.number().positive(),        // single item price
  total: z.number().positive().optional(), // 🆕 total per item (price * qty)
});

// 🧾 Order Schema
export const orderSchema = z.object({
  id: z.string().optional(),
  table_no: z.string(),
  customer_name: z.string(),
  items: z.array(orderItemSchema),     // list of ordered items
  total: z.number().positive(),        // total bill
  notes: z.string().optional(),
  createdAt: z.string().optional(),
});

// 🧠 Types for TypeScript
export type Order = z.infer<typeof orderSchema>;
export type OrderItem = z.infer<typeof orderItemSchema>;
