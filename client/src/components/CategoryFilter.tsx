import { Badge } from "./ui/badge";
import { useSearch } from "../contexts/SearchContext";
import { menu } from "../data/menu";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui/button";

export function CategoryFilter() {
  const { selectedCategory, setSelectedCategory, searchQuery } = useSearch();

  if (!searchQuery) {
    return null;
  }

  const categories = Object.keys(menu);

  return (
    <div className="flex flex-wrap items-center gap-2" data-testid="category-filters">
      <span className="text-sm text-muted-foreground">Filter by:</span>
      <Badge
        variant={selectedCategory === null ? "default" : "outline"}
        className="cursor-pointer hover-elevate active-elevate-2"
        onClick={() => setSelectedCategory(null)}
        data-testid="filter-all"
      >
        All Categories
      </Badge>
      {categories.map((category) => (
        <Badge
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          className="cursor-pointer hover-elevate active-elevate-2"
          onClick={() => setSelectedCategory(category)}
          data-testid={`filter-${category.toLowerCase()}`}
        >
          {category}
        </Badge>
      ))}
      {selectedCategory && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSelectedCategory(null)}
          className="h-6 px-2"
          data-testid="button-clear-filter"
        >
          <XMarkIcon className="h-3 w-3 mr-1" />
          Clear
        </Button>
      )}
    </div>
  );
}
