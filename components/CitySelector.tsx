"use client";

import { MapPin, ChevronDown } from "lucide-react";
import { CITIES } from "@/lib/data";
import { City } from "@/lib/types";

interface Props {
  selected: City;
  onChange: (city: City) => void;
}

export default function CitySelector({ selected, onChange }: Props) {
  const caCities = CITIES.filter((c) => c.country === "CA");
  const usCities = CITIES.filter((c) => c.country === "US");

  return (
    <div className="relative inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2.5 w-full max-w-xs">
      <MapPin size={16} className="text-emerald-400 shrink-0" />
      <select
        value={selected.name}
        onChange={(e) => {
          const city = CITIES.find((c) => c.name === e.target.value)!;
          onChange(city);
        }}
        className="w-full bg-transparent text-white text-sm font-medium appearance-none outline-none cursor-pointer"
      >
        <optgroup label="🇨🇦 Canada">
          {caCities.map((c) => (
            <option key={c.name} value={c.name} className="bg-zinc-900">
              {c.name}
            </option>
          ))}
        </optgroup>
        <optgroup label="🇺🇸 United States">
          {usCities.map((c) => (
            <option key={c.name} value={c.name} className="bg-zinc-900">
              {c.name}
            </option>
          ))}
        </optgroup>
      </select>
      <ChevronDown size={14} className="text-zinc-400 shrink-0 pointer-events-none" />
    </div>
  );
}
