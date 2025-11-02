import { MenuItem } from "../data/menu";

export function filterMenuItems(
  items: MenuItem[],
  searchQuery: string
): MenuItem[] {
  if (!searchQuery.trim()) {
    return items;
  }

  const query = searchQuery.toLowerCase().trim();
  return items.filter(
    (item) =>
      item.name.toLowerCase().includes(query) ||
      (item.description && item.description.toLowerCase().includes(query))
  );
}

export function searchAllCategories(
  menu: Record<string, MenuItem[]>,
  searchQuery: string
): Record<string, MenuItem[]> {
  if (!searchQuery.trim()) {
    return menu;
  }

  const filteredMenu: Record<string, MenuItem[]> = {};
  
  for (const [category, items] of Object.entries(menu)) {
    const filtered = filterMenuItems(items, searchQuery);
    if (filtered.length > 0) {
      filteredMenu[category] = filtered;
    }
  }

  return filteredMenu;
}
