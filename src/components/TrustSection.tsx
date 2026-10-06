"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Globe, Rocket } from "lucide-react";

export default function TrustSection() {
  const categories = [
    { name: "Direct-to-Consumer Brands", reach: "Tier 1 Retail & E-com" },
    { name: "Tech & SaaS Innovators", reach: "Global Product Launches" },
    { name: "Lifestyle & Apparel Labels", reach: "Viral Cultural Campaigns" },
    { name: "High-Growth Creators", reach: "Cross-Platform Monetization" },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#0C0C0E] border-b border-white/[0.06] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-burgundy-950/40 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-gold font-semibold mb-4 block">
              // Credibility &amp; Scale
            </span>
            <h2 className="section-title font-display text-white uppercase max-w-3xl">
              150+ BRANDS. <br />
              <span className="text-zinc-400">COUNTLESS STORIES.</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-crimson to-brand-gold">
                ONE GROWTH MINDSET.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="p-6 rounded-2xl bg-[#141417] border border-white/10 shadow-xl relative overflow-hidden group hover:border-brand-crimson/50 transition-colors">
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-brand-crimson/10 rounded-full blur-2xl group-hover:bg-brand-crimson/20 transition-all" />
              
              <div className="flex items-baseline gap-2">
                <span className="font-display font-black text-5xl sm:text-6xl text-white tracking-tight">
                  150
                </span>
                <span className="font-display font-black text-4xl sm:text-5xl text-brand-gold">
                  +
                </span>
              </div>
              <p className="font-display font-bold text-base text-zinc-200 mt-2">
                Brands &amp; Creators Scaled
              </p>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Across North America, Europe, UAE, and Asia Pacific with organic campaigns and bespoke creator deals.
              </p>
            </div>
          </div>
        </div>

        {/* Clean Typographic Collaboration Sectors (Without fabricating trademarks) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-surface-card/60 border border-white/[0.07] hover:border-white/20 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider group-hover:text-brand-crimson transition-colors">
                  Sector 0{i + 1}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              </div>
              <h3 className="font-display font-bold text-lg text-white group-hover:text-zinc-100 transition-colors mb-1.5">
                {cat.name}
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                {cat.reach}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Agency Pillars Strip */}
        <div className="mt-12 pt-10 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-6 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span>Guaranteed Contractual Transparency</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-brand-crimson" />
            <span>Senior Media Strategy Direction</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-brand-gold" />
            <span>International Campaign Network</span>
          </div>
          <div className="flex items-center gap-2">
            <Rocket className="w-4 h-4 text-brand-crimson" />
            <span>Full-Funnel Creator Monetization</span>
          </div>
        </div>

      </div>
    </section>
  );
}
