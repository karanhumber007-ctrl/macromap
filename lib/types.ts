export interface MenuItem {
  id: string;
  restaurant: string;
  item: string;
  protein_g: number;
  carbs_g: number;
  fat_g: number;
  calories: number;
  price_cad: number | null;
  price_usd: number | null;
  country: "CA" | "US" | "both";
  category: string;
}

export interface City {
  name: string;
  country: "CA" | "US";
}

export type SortMode = "protein" | "value";

export interface Filters {
  minProtein: number;
  maxCalories: number;
  maxPrice: number;
  restaurants: string[];
}
