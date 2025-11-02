import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useCart } from "../contexts/CartContext";
import { Button } from "@/components/ui/button";

interface FloatingOrderButtonProps {
  onClick: () => void;
}

export function FloatingOrderButton({ onClick }: FloatingOrderButtonProps) {
  const { getTotalItems, getTotalPrice } = useCart();
  const itemCount = getTotalItems();
  const total = getTotalPrice();

  if (itemCount === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 animate-in slide-in-from-bottom-4 fade-in duration-300">
      <Button
        onClick={onClick}
        size="lg"
        className="rounded-full shadow-2xl backdrop-blur-lg px-6 md:px-8 gap-3 animate-pulse"
        data-testid="button-order-now"
      >
        <div className="relative">
          <ShoppingBagIcon className="h-6 w-6" />
          <span className="absolute -top-2 -right-2 bg-primary-foreground text-primary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center" data-testid="text-item-count">
            {itemCount}
          </span>
        </div>
        <div className="hidden md:flex flex-col items-start">
          <span className="text-sm font-medium">Order Now</span>
          <span className="text-xs opacity-90" data-testid="text-cart-total-desktop">₹{total}</span>
        </div>
        <span className="md:hidden font-semibold" data-testid="text-cart-total-mobile">₹{total}</span>
      </Button>
    </div>
  );
}
