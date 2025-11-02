import { RESTAURANT_NAME, LOGO_URL } from "../config";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useCart } from "../contexts/CartContext";
import { ThemeToggle } from "./ThemeToggle";
import { SearchBar } from "./SearchBar";

export function Header() {
  const { getTotalItems } = useCart();
  const itemCount = getTotalItems();

  return (
    <header className="sticky top-0 z-40 bg-card shadow-md border-b-2 border-primary/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {LOGO_URL && (
              <img
                src={LOGO_URL}
                alt={RESTAURANT_NAME}
                className="h-10 md:h-12 w-auto"
              />
            )}
            <h1 className="text-2xl md:text-3xl font-bold font-serif text-foreground drop-shadow-sm">
              {RESTAURANT_NAME}
            </h1>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />
            {itemCount > 0 && (
              <div className="relative" data-testid="cart-indicator">
                <ShoppingBagIcon className="h-6 w-6 text-foreground" />
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              </div>
            )}
          </div>
        </div>
        
        <div className="w-full md:w-auto md:max-w-md">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
