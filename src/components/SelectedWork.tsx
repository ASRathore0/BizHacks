"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, TrendingUp, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  fullStory: string;
  metrics: { label: string; value: string }[];
  image: string;
  span: string; // Tailwind grid span
  accentColor: string;
}

interface SelectedWorkProps {
  onOpenContact: () => void;
}

export default function SelectedWork({ onOpenContact }: SelectedWorkProps) {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "us-launch",
      title: "BizHacks Media US // Global Expansion",
      client: "BizHacks International Agency",
      category: "Full-Funnel Digital Marketing",
      description:
        "End-to-end multi-channel market entry positioning BizHacks Media in Los Angeles & North America, turning creator attention into high-ticket enterprise brand deals.",
      fullStory:
        "Leveraging high-impact visual creative, direct response architecture, and international influencer networks, BizHacks Media US established commercial operations spanning content marketing, social amplification, and cross-border creator representation.",
      metrics: [
        { label: "Target Market", value: "US & Global" },
        { label: "Retainers", value: "150+ Brands" },
        { label: "Organic Reach", value: "Multi-Million" },
      ],
      image: "/assets/campaign_main.jpg",
      span: "lg:col-span-8",
      accentColor: "#E11D48",
    },
    {
      id: "creator-gear",
      title: "The Art of Capture // Tech Launch",
      client: "Creative Gear & Studio Collective",
      category: "Brand Collaboration & Launch",
      description:
        "Synchronized creator co-creation campaign pairing studio cinematographers with high-end audio & camera hardware to sell out launch inventory.",
      fullStory:
        "We designed a multi-phase teaser campaign where 12 top-tier creators released high-retention cinematic shorts showcasing the product in raw creative environments, achieving top-of-feed virality.",
      metrics: [
        { label: "Views", value: "4.8M+" },
        { label: "Sellout", value: "48 Hours" },
        { label: "ROAS", value: "6.2x" },
      ],
      image: "/assets/campaign_gear.jpg",
      span: "lg:col-span-4",
      accentColor: "#F59E0B",
    },
    {
      id: "strategy-war-room",
      title: "Algorithmic Growth Sprint",
      client: "D2C Apparel Brand",
      category: "Content Planning & Viral Growth",
      description:
        "Data-driven content architecture sprint that overhauled organic reels strategy, achieving compounding weekly follower growth.",
      fullStory:
        "By systematically replacing safe, corporate postings with hook-engineered creator-style short videos, the brand saw explosive comment section momentum and massive reductions in customer acquisition cost.",
      metrics: [
        { label: "Growth", value: "+340%" },
        { label: "Avg ER", value: "9.8%" },
        { label: "Inbound DMs", value: "12x Spike" },
      ],
      image: "/assets/team_collaboration.jpg",
      span: "lg:col-span-4",
      accentColor: "#7E1B20",
    },
    {
      id: "viral-analytics",
      title: "Performance Sourcing Engine",
      client: "High-Growth Creator Network",
      category: "Talent Management & Monetization",
      description:
        "Built customized monetization pipelines for rising talent, securing long-term brand equity retainers over transactional one-off promos.",
      fullStory:
        "Our strategic team negotiated exclusive brand partnerships while standardizing production workflows, allowing creators to double their output with zero creative burnout.",
      metrics: [
        { label: "Earnings", value: "3.5x Lift" },
        { label: "Deals", value: "100% Retainer" },
        { label: "Retention", value: "94%" },
      ],
      image: "/assets/growth_analytics.jpg",
      span: "lg:col-span-8",
      accentColor: "#E11D48",
    },
  ];

  return (
    <section id="work" className="relative py-16 sm:py-32 bg-[#0B0B0E] border-t border-white/[0.06] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-burgundy-950/40 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6 sm:gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest uppercase text-brand-crimson font-semibold mb-3">
              // SELECTED CASE STUDIES
            </div>
            <h2 className="section-title font-display text-white uppercase max-w-xl">
              WORK THAT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-crimson via-red-400 to-brand-gold">
                GETS NOTICED.
              </span>
            </h2>
          </div>

          <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
            Every campaign is custom engineered to capture attention, build cultural relevance, and deliver measurable commercial ROI.
          </p>
        </div>

        {/* Varied Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className={`${proj.span} group rounded-3xl bg-[#141418] border border-white/10 hover:border-brand-crimson/50 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-2xl relative`}
            >
              {/* Media Container */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141418] via-transparent to-black/40" />

                {/* Category Pill */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-brand-gold">
                    {proj.category}
                  </span>
                </div>

                {/* Accent Watermark */}
                <div className="absolute bottom-3.5 right-3.5 flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-zinc-300 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  <TrendingUp className="w-3 h-3 text-brand-crimson" />
                  <span>BizHacks™ Signature</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                    {proj.client}
                  </span>
                  <h3 className="font-display font-extrabold text-xl sm:text-3xl text-white group-hover:text-brand-crimson transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-2.5 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                {/* Metrics Bar */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                  <div className="grid grid-cols-3 sm:flex items-center gap-3 sm:gap-6 w-full sm:w-auto">
                    {proj.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="font-display font-bold text-sm sm:text-lg text-white">
                          {m.value}
                        </div>
                        <div className="text-[9px] sm:text-[10px] uppercase font-mono text-zinc-500">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveModalProject(proj)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-display font-bold text-brand-gold hover:text-white transition-colors group/btn pt-1 sm:pt-0"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl rounded-3xl bg-[#141418] border border-white/20 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 border border-white/20 text-white hover:bg-brand-crimson transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Header */}
              <div className="relative aspect-[16/9] w-full flex-shrink-0">
                <Image
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141418] via-transparent to-black/60" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <span className="text-[10px] sm:text-xs font-mono uppercase text-brand-gold tracking-widest block mb-1">
                    {activeModalProject.category}
                  </span>
                  <h3 className="font-display font-black text-xl sm:text-3xl text-white">
                    {activeModalProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-8 overflow-y-auto flex flex-col gap-5">
                <div>
                  <h4 className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-1.5">
                    Executive Strategy &amp; Overview
                  </h4>
                  <p className="text-zinc-200 text-sm sm:text-base leading-relaxed">
                    {activeModalProject.fullStory}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-surface border border-white/10 grid grid-cols-3 gap-3 text-center">
                  {activeModalProject.metrics.map((m, i) => (
                    <div key={i}>
                      <div className="font-display font-black text-lg sm:text-2xl text-brand-gold">
                        {m.value}
                      </div>
                      <div className="text-[10px] uppercase font-mono text-zinc-400 mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-white/10">
                  <div className="text-xs text-zinc-400 font-mono">
                    Client: {activeModalProject.client}
                  </div>
                  <button
                    onClick={() => {
                      setActiveModalProject(null);
                      onOpenContact();
                    }}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-burgundy-800 to-brand-crimson text-white font-display font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity text-center"
                  >
                    Discuss Similar Campaign →
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
