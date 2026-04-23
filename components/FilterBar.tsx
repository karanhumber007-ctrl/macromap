"use client";

import { useState } from "react";
import { SlidersHorizontal, ChevronDown, ChevronUp, X } from "lucide-react";
import { Filters } from "@/lib/types";
import { ALL_RESTAURANTS } from "@/lib/data";

interface Props {
  filters: Filters;
  onChange: (f: Filters) => void;
  currency: "CAD" | "USD";
  activeCount: number;
  totalCount: number;
}

export default function FilterBar({ filters, onChange, currency, activeCount, totalCount }: Props) {
  const [open, setOpen] = useState(false);

  const maxPriceLabel = currency === "CAD" ? "CA$" : "$";

  const hasActiveFilters =
    filters.minProtein > 0 ||
    filters.maxCalories < 2000 ||
    filters.maxPrice < 50 ||
    filters.restaurants.length > 0;

  function reset() {
    onChange({ minProtein: 0, maxCalories: 2000, maxPrice: 50, restaurants: [] });
  }

  function toggleRestaurant(r: string) {
    const next = filters.restaurants.includes(r)
      ? filters.restaurants.filter((x) => x !== r)
      : [...filters.restaurants, r];
    onChange({ ...filters, restaurants: next });
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
      {/* Header row */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3"
      >
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={15} className="text-zinc-400" />
          <span className="text-sm font-semibold text-white">Filters</span>
          {hasActiveFilters && (
            <span className="bg-emerald-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
              ON
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-zinc-500">{activeCount} / {totalCount} items</span>
          {open ? <ChevronUp size={15} className="text-zinc-400" /> : <ChevronDown size={15} className="text-zinc-400" />}
        </div>
      </button>

      {/* Expandable filters */}
      {open && (
        <div className="border-t border-zinc-800 px-4 py-4 space-y-5">
          {/* Min protein */}
          <div>
            <div className="flex justify-between mb-1.5">
              <label className="text-xs font-medium text-zinc-400">Min protein</label>
              <span className="text-xs font-semibold text-emerald-400">{filters.minProtein}g</span>
            </div>
            <input
              type="range" min={0} max={80} step={5} value={filters.minProtein}
              onChange={(e) => onChange({ ...filters, minProtein: Number(e.target.value) })}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-zinc-600 mt-0.5">
              <span>0g</span><span>80g</span>
            </div>
          </div>

          {/* Max calories */}
          <div>
            <div className="flex justify-between mb-1.5">
              <label className="text-xs font-medium text-zinc-400">Max calories</label>
              <span className="text-xs font-semibold text-orange-400">
                {filters.maxCalories >= 2000 ? "Any" : `${filters.maxCalories} cal`}
              </span>
            </div>
            <input
              type="range" min={200} max={2000} step={50} value={filters.maxCalories}
              onChange={(e) => onChange({ ...filters, maxCalories: Number(e.target.value) })}
              className="w-full accent-orange-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-zinc-600 mt-0.5">
              <span>200</span><span>Any</span>
            </div>
          </div>

          {/* Max price */}
          <div>
            <div className="flex justify-between mb-1.5">
              <label className="text-xs font-medium text-zinc-400">Max price</label>
              <span className="text-xs font-semibold text-yellow-400">
                {filters.maxPrice >= 50 ? "Any" : `${maxPriceLabel}${filters.maxPrice}`}
              </span>
            </div>
            <input
              type="range" min={2} max={50} step={1} value={filters.maxPrice}
              onChange={(e) => onChange({ ...filters, maxPrice: Number(e.target.value) })}
              className="w-full accent-yellow-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-zinc-600 mt-0.5">
              <span>{maxPriceLabel}2</span><span>Any</span>
            </div>
          </div>

          {/* Restaurant filter */}
          <div>
            <label className="text-xs font-medium text-zinc-400 block mb-2">Restaurants</label>
            <div className="flex flex-wrap gap-1.5">
              {ALL_RESTAURANTS.map((r) => (
                <button
                  key={r}
                  onClick={() => toggleRestaurant(r)}
                  className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                    filters.restaurants.includes(r)
                      ? "bg-emerald-500 border-emerald-500 text-black font-semibold"
                      : "border-zinc-700 text-zinc-400 hover:border-zinc-500"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Reset */}
          {hasActiveFilters && (
            <button
              onClick={reset}
              className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
            >
              <X size={12} />
              Reset all filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}
