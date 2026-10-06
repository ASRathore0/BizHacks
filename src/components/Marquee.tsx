"use client";

import React from "react";
import { Zap, Flame, Sparkles } from "lucide-react";

export default function Marquee() {
  const items = [
    { text: "WE MAKE CREATORS BRANDS", icon: Zap, gold: false },
    { text: "VIRAL DISTRIBUTION", icon: Flame, gold: true },
    { text: "TALENT MANAGEMENT", icon: Sparkles, gold: false },
    { text: "150+ BRAND COLLABORATIONS", icon: Zap, gold: true },
    { text: "CONTENT PLANNING & STRATEGY", icon: Sparkles, gold: false },
    { text: "DIGITAL MARKETING ARCHITECTURE", icon: Flame, gold: false },
  ];

  return (
    <div className="relative w-full py-4 bg-[#0E0E11] border-y border-white/[0.08] overflow-hidden select-none">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#09090B] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#09090B] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee-left">
        {[...items, ...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-6 px-6 text-xs sm:text-sm font-display font-black tracking-widest uppercase"
            >
              <span
                className={
                  item.gold
                    ? "text-brand-gold drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]"
                    : "text-zinc-300 hover:text-white transition-colors"
                }
              >
                {item.text}
              </span>
              <Icon
                className={`w-3.5 h-3.5 ${
                  item.gold ? "text-brand-gold animate-bounce" : "text-brand-crimson"
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
