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

export const orderItemSchema = z.object({
  name: z.string(),
  qty: z.number().int().positive(),
  price: z.number().positive(),
});

export const orderSchema = z.object({
  id: z.string().optional(),
  table_no: z.string(),
  customer_name: z.string(),
  items: z.array(orderItemSchema),
  total: z.number().positive(),
  notes: z.string().optional(),
  createdAt: z.string().optional(),
});

export type Order = z.infer<typeof orderSchema>;
export type OrderItem = z.infer<typeof orderItemSchema>;
