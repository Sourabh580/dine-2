import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui/button";
import { useTheme } from "../contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      data-testid="button-theme-toggle"
      className="rounded-full"
    >
      {theme === "light" ? (
        <MoonIcon className="h-5 w-5" data-testid="icon-moon" />
      ) : (
        <SunIcon className="h-5 w-5" data-testid="icon-sun" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
