import { z } from "zod";

export const orderFormSchema = z.object({
  tableNumber: z.string().min(1, "Table number is required"),
  customerName: z.string().min(1, "Customer name is required"),
  notes: z.string().optional(),
});

export type OrderFormData = z.infer<typeof orderFormSchema>;
