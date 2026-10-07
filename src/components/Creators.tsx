"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Flame, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface CreatorsProps {
  onOpenContact: () => void;
}

export default function Creators({ onOpenContact }: CreatorsProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Creators", "Influencers", "Talent", "Brand Partnerships"];

  const showcaseItems = [
    {
      id: 1,
      name: "Alone Royal",
      category: "Creators",
      niche: "Content Creator & High-Energy Media",
      handle: "@alonearoyal",
      audience: "6M+ Network",
      engagement: "Top Tier Virality",
      image: "/assets/creator_alone_royal.jpg",
      quote: "Signed with BizHacks Media to engineer exponential audience engagement and premium brand co-creations.",
      tags: ["6M+ Network", "Content Creator", "Viral Reach"],
    },
    {
      id: 2,
      name: "Dalal Comedians",
      category: "Talent",
      niche: "Entertainment Exclusive & Comedy",
      handle: "@dalalcomedians",
      audience: "2M+ Network",
      engagement: "Viral Sensation",
      image: "/assets/creator_dalal_comedians.jpg",
      quote: "BizHacks turned our comedy skits into massive cross-platform network reach and national sponsor integration.",
      tags: ["2M+ Network", "Entertainment", "Comedy Skits"],
    },
    {
      id: 3,
      name: "GS Sonu Saifi",
      category: "Influencers",
      niche: "BizHacks Comedy Exclusive",
      handle: "@gssonusaifi",
      audience: "100K+ Network",
      engagement: "High-Intent Reach",
      image: "/assets/creator_sonu_saifi.jpg",
      quote: "Strategic career representation, sponsorship positioning, and community scaling powered by BizHacks.",
      tags: ["100K+ Network", "Comedy Exclusive", "Influencer"],
    },
    {
      id: 4,
      name: "Apex Sound Labs x Creators",
      category: "Brand Partnerships",
      niche: "Global Hardware Co-Creation",
      handle: "@bizhacks_media",
      audience: "3.4M Impressions",
      engagement: "14.8% Sales Conversion",
      image: "/assets/campaign_gear.jpg",
      quote: "Integrated 14 audio creators into a synchronized launch that sold out in 48 hours.",
      tags: ["Hardware", "Launch", "Co-Branding"],
    },
    {
      id: 5,
      name: "BizHacks US Strategy Collective",
      category: "Brand Partnerships",
      niche: "Enterprise Growth & Creator Sourcing",
      handle: "@bizhacks_media.us",
      audience: "150+ Brands",
      engagement: "100% Organic",
      image: "/assets/campaign_main.jpg",
      quote: "Connecting international brands with culturally fluent digital storytellers.",
      tags: ["Agency", "Strategy", "Global"],
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? showcaseItems
      : showcaseItems.filter((item) => item.category === activeCategory);

  return (
    <section id="creators" className="relative py-16 sm:py-32 bg-[#09090B] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-brand-crimson/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6 sm:gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-crimson/10 border border-brand-crimson/20 text-[11px] font-mono tracking-widest uppercase text-brand-crimson font-semibold mb-3">
              <Flame className="w-3.5 h-3.5 text-brand-gold" />
              TALENT &amp; CULTURE NETWORK
            </div>
            <h2 className="section-title font-display text-white uppercase max-w-2xl">
              CREATORS ARE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-crimson via-red-400 to-brand-gold">
                THE NEW MEDIA.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              We connect creators with brands that make sense — building partnerships that feel
              authentic, perform naturally and create long-term value.
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-display font-bold tracking-wide whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-burgundy-800 to-brand-crimson text-white shadow-lg shadow-burgundy-950 border border-white/20"
                  : "bg-surface-card text-zinc-400 hover:text-white border border-white/[0.06] hover:border-white/15"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Scrolling Editorial Creator Showcase */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 sm:pb-8 pt-2 no-scrollbar snap-x snap-mandatory">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[280px] xs:w-[320px] sm:w-[360px] snap-start rounded-3xl bg-[#121216] border border-white/10 hover:border-brand-crimson/40 transition-all duration-500 overflow-hidden group flex flex-col justify-between shadow-2xl"
            >
              {/* Image Container with Editorial Composition */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-black/30" />

                {/* Category & Handle Badges */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-wider text-brand-gold">
                    {item.category}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono text-zinc-300 bg-black/65 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    {item.handle}
                  </span>
                </div>

                {/* Bottom Stats Overlay inside image */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[9px] sm:text-[10px] uppercase font-mono text-zinc-400 block">Audience Reach</span>
                    <span className="font-display font-extrabold text-xs sm:text-base text-white">
                      {item.audience}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] sm:text-[10px] uppercase font-mono text-brand-gold block">Impact</span>
                    <span className="font-display font-bold text-xs sm:text-sm text-brand-crimson">
                      {item.engagement}
                    </span>
                  </div>
                </div>
              </div>

              {/* Editorial Description Card */}
              <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-white group-hover:text-brand-crimson transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs font-mono text-brand-gold mt-0.5">
                    {item.niche}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-2.5 italic leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between">
                  <div className="flex gap-1.5 flex-wrap">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onOpenContact}
                    className="p-2 rounded-full bg-white/[0.06] hover:bg-brand-crimson text-white transition-colors"
                    aria-label={`Partner with ${item.name}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 sm:mt-12 p-5 sm:p-8 rounded-2xl bg-gradient-to-r from-burgundy-950/50 via-[#141418] to-burgundy-950/30 border border-brand-crimson/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 sm:p-3 rounded-xl bg-brand-crimson/20 border border-brand-crimson/40 flex-shrink-0">
              <Sparkles className="w-5 h-5 text-brand-gold" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base sm:text-lg text-white">
                Ready to scale into a media brand?
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400">
                Join our talent network for brand representation &amp; sponsorship pipelines.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black font-display font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors whitespace-nowrap text-center"
          >
            Apply for Representation →
          </button>
        </div>

      </div>
    </section>
  );
}
