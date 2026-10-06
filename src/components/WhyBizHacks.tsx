"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Sparkles, Flame, TrendingUp } from "lucide-react";

export default function WhyBizHacks() {
  const principles = [
    {
      num: "01",
      title: "Strategy Before Noise",
      subtitle: "Zero vanity metrics. Maximum intent.",
      desc: "Anyone can buy fake clicks or post generic clips. We begin by architecting your core narrative, identifying cultural whitespace, and engineering hooks that convert casual scrollers into paying evangelists.",
      icon: Target,
      highlight: "Intent-First Architecture",
    },
    {
      num: "02",
      title: "Content With Purpose",
      subtitle: "Editorial craftsmanship meets algorithmic science.",
      desc: "We don't post to fill a quota. Every video, graphic, and carousel is crafted with cinematic aesthetic standards and psychological retention pacing to trigger platform recommendation engines.",
      icon: Sparkles,
      highlight: "High-Retention Output",
    },
    {
      num: "03",
      title: "Creators With Influence",
      subtitle: "Real cultural authority, not billboard placers.",
      desc: "Our roster and partners are trusted taste-makers with engaged, loyal followings. We craft authentic narratives where brands seamlessly integrate into culture rather than intruding on it.",
      icon: Flame,
      highlight: "Authentic Integration",
    },
    {
      num: "04",
      title: "Growth That Compounds",
      subtitle: "Building enduring commercial assets.",
      desc: "Viral spikes are meaningless without sustainable monetization. We establish email captures, community hubs, digital product ecosystems, and recurring brand retainers that pay dividends for years.",
      icon: TrendingUp,
      highlight: "Compounding ROI",
    },
  ];

  return (
    <section className="relative py-16 sm:py-32 bg-[#070709] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[500px] bg-burgundy-950/20 blur-[130px] sm:blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-gold font-semibold mb-3 block">
            // The BizHacks Philosophy
          </span>
          <h2 className="section-title font-display text-white uppercase">
            NOT JUST <br />
            <span className="text-zinc-500">MARKETING.</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-crimson via-red-500 to-brand-gold">
              MOMENTUM.
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-lg mt-4 sm:mt-6 leading-relaxed max-w-xl">
            We reject lazy playbooks. Here are the four foundational principles that separate
            BizHacks Media from traditional marketing agencies.
          </p>
        </div>

        {/* 4 Large Editorial Principle Cards with Animated Lines */}
        <div className="flex flex-col gap-4 sm:gap-8">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#0F0F13] border border-white/[0.08] hover:border-brand-crimson/50 transition-all duration-500 overflow-hidden"
              >
                {/* Animated Top Border Line */}
                <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-brand-crimson transition-all duration-700" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-start">
                  
                  {/* Left: Number + Title */}
                  <div className="lg:col-span-5 flex flex-col">
                    <div className="flex items-center gap-3 mb-2.5 sm:mb-4">
                      <span className="font-mono text-xs font-bold text-brand-gold bg-brand-gold/10 px-2.5 py-0.5 rounded-full border border-brand-gold/20">
                        PRINCIPLE {item.num}
                      </span>
                      <span className="text-[11px] font-mono uppercase text-zinc-500">
                        {item.highlight}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-xl sm:text-3xl text-white group-hover:text-brand-crimson transition-colors leading-tight">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Right: Description & Icon */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full">
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>

                    <div className="mt-5 sm:mt-8 pt-4 sm:pt-6 border-t border-white/[0.06] flex items-center justify-between">
                      <span className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase tracking-wider">
                        BizHacks Standardized Core
                      </span>
                      <div className="p-2 rounded-full bg-white/[0.04] group-hover:bg-brand-crimson/20 group-hover:text-brand-crimson text-zinc-400 transition-colors">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
