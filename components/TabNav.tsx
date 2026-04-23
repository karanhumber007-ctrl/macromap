"use client";

import { Dumbbell, DollarSign } from "lucide-react";
import { SortMode } from "@/lib/types";

interface Props {
  active: SortMode;
  onChange: (mode: SortMode) => void;
}

export default function TabNav({ active, onChange }: Props) {
  const tabs: { id: SortMode; label: string; icon: React.ReactNode }[] = [
    { id: "protein", label: "Most Protein", icon: <Dumbbell size={15} /> },
    { id: "value", label: "Best Value", icon: <DollarSign size={15} /> },
  ];

  return (
    <div className="flex bg-zinc-900 border border-zinc-800 rounded-xl p-1 gap-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`flex-1 flex items-center justify-center gap-2 text-sm font-semibold rounded-lg py-2.5 px-3 transition-all duration-150 ${
            active === tab.id
              ? "bg-emerald-500 text-black shadow"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
