import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useSearch } from "../contexts/SearchContext";

export function SearchBar() {
  const { searchQuery, setSearchQuery } = useSearch();

  const handleClear = () => {
    setSearchQuery("");
  };

  return (
    <div className="relative w-full max-w-md">
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
      <Input
        type="search"
        placeholder="Search menu items..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10 pr-10"
        data-testid="input-search"
      />
      {searchQuery && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
          onClick={handleClear}
          data-testid="button-clear-search"
        >
          <XMarkIcon className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
