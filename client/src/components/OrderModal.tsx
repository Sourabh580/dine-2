import { useCart } from "../contexts/CartContext";
import { XMarkIcon, TrashIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { orderFormSchema, type OrderFormData } from "../schemas/orderSchema";
import toast from "react-hot-toast";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function OrderModal({ isOpen, onClose, onSuccess }: OrderModalProps) {
  const { cart, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  const form = useForm<OrderFormData>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      tableNumber: "",
      customerName: "",
      notes: "",
    },
  });

  const total = getTotalPrice();

  const onSubmit = async (data: OrderFormData) => {
    try {
      const orderData = {
        id: Date.now(), // unique order ID
        placedAt: new Date().toLocaleString(),
        table_no: data.tableNumber,
        customer_name: data.customerName,
        items: cart.map((item) => ({
          name: item.name,
          qty: item.quantity,
          price: item.price,
        })),
        total,
        notes: data.notes || "",
      };

      // ---- Save order to localStorage ----
      const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
      existingOrders.push(orderData);
      localStorage.setItem("orders", JSON.stringify(existingOrders));

      toast.success("✅ Order placed successfully!");

      clearCart();
      form.reset();
      onSuccess();
      onClose();
    } catch (error) {
      console.error("Order error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
        data-testid="modal-backdrop"
      />

      <div className="relative bg-card border border-card-border rounded-t-3xl md:rounded-2xl w-full md:max-w-2xl max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom-8 md:slide-in-from-bottom-0 md:zoom-in-95 duration-300">
        <div className="sticky top-0 z-10 bg-card/95 backdrop-blur-sm border-b border-card-border px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-card-foreground">Your Order</h2>
          <button
            onClick={onClose}
            className="h-9 w-9 rounded-full hover-elevate active-elevate-2 flex items-center justify-center"
            data-testid="button-close-modal"
          >
            <XMarkIcon className="h-6 w-6 text-card-foreground" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-180px)] px-6 py-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="tableNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Table Number <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter table number"
                          className="h-12"
                          data-testid="input-table-number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="customerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Your Name <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your name"
                          className="h-12"
                          data-testid="input-customer-name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Special Requests</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any special requests or dietary requirements..."
                          rows={3}
                          data-testid="input-notes"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Order Summary</h3>
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-4 p-3 bg-muted/50 rounded-lg"
                      data-testid={`cart-item-${item.id}`}
                    >
                      <div className="flex-1 min-w-0">
                        <p
                          className="font-medium text-foreground truncate"
                          data-testid={`text-item-name-${item.id}`}
                        >
                          {item.name}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-testid={`text-item-price-${item.id}`}
                        >
                          ₹{item.price} each
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <div className="flex items-center gap-1 bg-background rounded-full p-1">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-7 w-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover-elevate active-elevate-2"
                            data-testid={`button-decrease-cart-${item.id}`}
                          >
                            <MinusIcon className="h-4 w-4" />
                          </button>
                          <span
                            className="w-8 text-center font-semibold text-foreground"
                            data-testid={`text-quantity-${item.id}`}
                          >
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-7 w-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover-elevate active-elevate-2"
                            data-testid={`button-increase-cart-${item.id}`}
                          >
                            <PlusIcon className="h-4 w-4" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="h-9 w-9 rounded-full hover:bg-destructive/10 flex items-center justify-center hover-elevate active-elevate-2"
                          data-testid={`button-remove-${item.id}`}
                        >
                          <TrashIcon className="h-5 w-5 text-destructive" />
                        </button>

                        <span
                          className="text-sm font-semibold text-foreground w-16 text-right"
                          data-testid={`text-item-total-${item.id}`}
                        >
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">Total</span>
                    <span
                      className="text-2xl font-bold text-primary"
                      data-testid="text-total"
                    >
                      ₹{total}
                    </span>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={form.formState.isSubmitting || cart.length === 0}
                data-testid="button-confirm-order"
              >
                {form.formState.isSubmitting ? "Placing Order..." : "Confirm Order"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
