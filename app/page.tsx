"use client";

import { useState, useMemo } from "react";
import { Dumbbell } from "lucide-react";
import CitySelector from "@/components/CitySelector";
import TabNav from "@/components/TabNav";
import FilterBar from "@/components/FilterBar";
import ItemCard from "@/components/ItemCard";
import { CITIES, MENU_ITEMS } from "@/lib/data";
import { City, Filters, SortMode } from "@/lib/types";

const DEFAULT_FILTERS: Filters = {
  minProtein: 0,
  maxCalories: 2000,
  maxPrice: 50,
  restaurants: [],
};

export default function Home() {
  const [city, setCity] = useState<City>(CITIES.find((c) => c.name === "Edmonton")!);
  const [sortMode, setSortMode] = useState<SortMode>("protein");
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);

  const currency = city.country === "CA" ? "CAD" : "USD";

  const allForCity = useMemo(
    () =>
      MENU_ITEMS.filter((item) => {
        if (item.country !== "both" && item.country !== city.country) return false;
        const price = currency === "CAD" ? item.price_cad : item.price_usd;
        return price !== null;
      }),
    [city, currency]
  );

  const filtered = useMemo(() => {
    let items = allForCity.filter((item) => {
      const price = (currency === "CAD" ? item.price_cad : item.price_usd)!;
      if (item.protein_g < filters.minProtein) return false;
      if (item.calories > filters.maxCalories) return false;
      if (filters.maxPrice < 50 && price > filters.maxPrice) return false;
      if (filters.restaurants.length > 0 && !filters.restaurants.includes(item.restaurant)) return false;
      return true;
    });

    if (sortMode === "protein") {
      items = [...items].sort((a, b) => b.protein_g - a.protein_g);
    } else {
      items = [...items].sort((a, b) => {
        const priceA = (currency === "CAD" ? a.price_cad : a.price_usd)!;
        const priceB = (currency === "CAD" ? b.price_cad : b.price_usd)!;
        return priceA / a.protein_g - priceB / b.protein_g;
      });
    }

    return items;
  }, [allForCity, sortMode, filters, currency]);

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-zinc-950/90 backdrop-blur border-b border-zinc-900">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shadow">
              <Dumbbell size={16} className="text-black" />
            </div>
            <div>
              <span className="font-bold text-white text-base leading-none">MacroMap</span>
              <p className="text-zinc-500 text-[10px] leading-none mt-0.5">High protein fast food</p>
            </div>
          </div>
          <CitySelector selected={city} onChange={setCity} />
        </div>
      </header>

      {/* Body */}
      <div className="max-w-lg mx-auto px-4 py-4 space-y-3">
        <TabNav active={sortMode} onChange={setSortMode} />

        <p className="text-xs text-zinc-500 px-1">
          {sortMode === "protein"
            ? "Ranked by highest protein content"
            : "Ranked by lowest cost per gram of protein — best value first"}
        </p>

        <FilterBar
          filters={filters}
          onChange={setFilters}
          currency={currency}
          activeCount={filtered.length}
          totalCount={allForCity.length}
        />

        {filtered.length === 0 ? (
          <div className="text-center py-16 text-zinc-500">
            <Dumbbell size={32} className="mx-auto mb-3 opacity-30" />
            <p className="text-sm">No items match your filters.</p>
            <button
              onClick={() => setFilters(DEFAULT_FILTERS)}
              className="mt-3 text-xs text-emerald-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="space-y-2.5 pb-8">
            {filtered.map((item, i) => (
              <ItemCard
                key={item.id}
                item={item}
                currency={currency}
                rank={i + 1}
                sortMode={sortMode}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
