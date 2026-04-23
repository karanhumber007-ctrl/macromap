import { MenuItem } from "@/lib/types";

interface Props {
  item: MenuItem;
  currency: "CAD" | "USD";
  rank: number;
  sortMode: "protein" | "value";
}

const RESTAURANT_COLORS: Record<string, string> = {
  "McDonald's": "bg-yellow-500",
  Subway: "#00713B",
  "A&W": "bg-amber-600",
  Chipotle: "bg-red-700",
  "Wendy's": "bg-red-500",
  "Harvey's": "bg-orange-500",
  KFC: "bg-red-600",
  "Burger King": "bg-orange-600",
  "Nando's": "bg-red-600",
  "Taco Bell": "bg-violet-600",
  "Chick-fil-A": "bg-red-700",
  "Five Guys": "bg-red-600",
  "Pita Pit": "bg-green-600",
  Qdoba: "bg-red-500",
  Quesada: "bg-green-700",
  "The Halal Guys": "bg-yellow-500",
  Popeyes: "bg-orange-600",
  "Tim Hortons": "bg-red-600",
  Freshii: "bg-emerald-600",
  Panera: "bg-green-700",
  "Shake Shack": "bg-emerald-600",
  "Mary Brown's": "bg-red-700",
};

function initials(name: string) {
  return name
    .split(" ")
    .filter((w) => /[A-Z]/.test(w[0]))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    || name.slice(0, 2).toUpperCase();
}

export default function ItemCard({ item, currency, rank, sortMode }: Props) {
  const price = currency === "CAD" ? item.price_cad : item.price_usd;
  const pricePerProtein = price ? (price / item.protein_g).toFixed(2) : null;
  const proteinPerCalorie = (item.protein_g / item.calories * 100).toFixed(1);
  const colorClass = RESTAURANT_COLORS[item.restaurant] ?? "bg-zinc-600";

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex gap-4 items-start hover:border-zinc-700 transition-colors">
      {/* Rank + Avatar */}
      <div className="flex flex-col items-center gap-2 shrink-0">
        <span className="text-xs text-zinc-500 font-mono w-6 text-center">#{rank}</span>
        <div className={`w-10 h-10 rounded-xl ${colorClass} flex items-center justify-center text-white text-xs font-bold shadow-lg`}>
          {initials(item.restaurant)}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 min-w-0">
        <p className="text-xs text-zinc-400 mb-0.5">{item.restaurant}</p>
        <p className="text-white font-semibold text-sm leading-snug mb-3 truncate">
          {item.item}
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap gap-2">
          {/* Protein — always highlighted */}
          <div className={`flex flex-col items-center px-3 py-1.5 rounded-lg ${sortMode === "protein" ? "bg-emerald-500/15 ring-1 ring-emerald-500/40" : "bg-zinc-800"}`}>
            <span className="text-emerald-400 font-bold text-base leading-none">{item.protein_g}g</span>
            <span className="text-zinc-500 text-[10px] mt-0.5">protein</span>
          </div>

          <div className="flex flex-col items-center px-3 py-1.5 rounded-lg bg-zinc-800">
            <span className="text-orange-400 font-semibold text-base leading-none">{item.calories}</span>
            <span className="text-zinc-500 text-[10px] mt-0.5">cal</span>
          </div>

          <div className="flex flex-col items-center px-3 py-1.5 rounded-lg bg-zinc-800">
            <span className="text-purple-400 font-semibold text-base leading-none">{item.carbs_g}g</span>
            <span className="text-zinc-500 text-[10px] mt-0.5">carbs</span>
          </div>

          <div className="flex flex-col items-center px-3 py-1.5 rounded-lg bg-zinc-800">
            <span className="text-pink-400 font-semibold text-base leading-none">{item.fat_g}g</span>
            <span className="text-zinc-500 text-[10px] mt-0.5">fat</span>
          </div>

          {price && (
            <div className={`flex flex-col items-center px-3 py-1.5 rounded-lg ${sortMode === "value" ? "bg-yellow-500/15 ring-1 ring-yellow-500/40" : "bg-zinc-800"}`}>
              <span className="text-yellow-400 font-semibold text-base leading-none">
                {currency === "CAD" ? "CA$" : "$"}{price.toFixed(2)}
              </span>
              <span className="text-zinc-500 text-[10px] mt-0.5">{currency}</span>
            </div>
          )}

          {/* Ratio badge */}
          <div className="flex flex-col items-center px-3 py-1.5 rounded-lg bg-zinc-800">
            <span className="text-sky-400 font-semibold text-base leading-none">{proteinPerCalorie}%</span>
            <span className="text-zinc-500 text-[10px] mt-0.5">pro/cal</span>
          </div>

          {sortMode === "value" && pricePerProtein && (
            <div className="flex flex-col items-center px-3 py-1.5 rounded-lg bg-yellow-500/15 ring-1 ring-yellow-500/40">
              <span className="text-yellow-300 font-semibold text-base leading-none">
                {currency === "CAD" ? "CA$" : "$"}{pricePerProtein}
              </span>
              <span className="text-zinc-500 text-[10px] mt-0.5">per g</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
