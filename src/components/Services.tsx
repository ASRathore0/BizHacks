"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Check, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  const services = [
    {
      num: "01",
      title: "Social Media Marketing",
      tagline: "Omnichannel presence & community cultivation",
      desc: "Full-funnel organic and paid management across Instagram, YouTube, TikTok, and LinkedIn with relentless testing and trend-jacking.",
      deliverables: ["Channel Architecture", "Algorithmic Distribution", "Community Ops"],
      image: "/assets/campaign_main.jpg",
      badge: "Flagship Service",
    },
    {
      num: "02",
      title: "Content Marketing",
      tagline: "High-retention storytelling & visual craftsmanship",
      desc: "We write, storyboard, edit, and produce content formats designed to capture high watch-time and trigger shares across modern feeds.",
      deliverables: ["Editorial Calendars", "Short-Form Video (Reels/Shorts)", "Long-Form Thought Leadership"],
      image: "/assets/campaign_gear.jpg",
      badge: "Viral Content",
    },
    {
      num: "03",
      title: "Influencer Marketing",
      tagline: "Authentic endorsement at scale",
      desc: "Vetted creator matching based on audience integrity, sentiment, and conversion efficiency rather than hollow vanity metrics.",
      deliverables: ["Creator Sourcing", "Contract Negotiation", "Performance Tracking"],
      image: "/assets/creator_1.jpg",
      badge: "High ROI",
    },
    {
      num: "04",
      title: "Brand Collaborations",
      tagline: "Strategic cultural unions",
      desc: "We engineer win-win partnerships between disruptive creators and legacy or venture-backed brands to launch co-branded campaigns.",
      deliverables: ["Sponsorship Brokering", "Product Placement", "Cross-Platform Synergies"],
      image: "/assets/team_collaboration.jpg",
      badge: "150+ Partnerships",
    },
    {
      num: "05",
      title: "Talent Management",
      tagline: "360° career architecture for top-tier creators",
      desc: "Dedicated representation helping creators monetize beyond ad revenue: licensing, appearances, equity deals, and venture incubations.",
      deliverables: ["Full Representation", "Legal & Rights Management", "Brand Identity Building"],
      image: "/assets/creator_2.jpg",
      badge: "Exclusive Roster",
    },
    {
      num: "06",
      title: "Marketing Strategy",
      tagline: "Data-backed commercial roadmaps",
      desc: "Audience psychographics, competitive benchmarking, and monetization modeling designed to convert views into repeat customers.",
      deliverables: ["Market Research", "Positioning Blueprint", "Funnel Architecture"],
      image: "/assets/growth_analytics.jpg",
      badge: "Strategic Core",
    },
    {
      num: "07",
      title: "Content Planning",
      tagline: "Predictable, repeatable production engines",
      desc: "Removing burnout and guesswork through systematized batch ideation, asset repurposing matrices, and editorial rhythms.",
      deliverables: ["Sprint Pipelines", "Hook Libraries", "Asset Repurposing Workflows"],
      image: "/assets/creator_3.jpg",
      badge: "Zero Friction",
    },
    {
      num: "08",
      title: "Viral Growth",
      tagline: "Engineering breakout moments",
      desc: "Harnessing psychological triggers, cultural memes, and algorithm timing to generate sudden exponential spikes in brand recognition.",
      deliverables: ["Format Experimentation", "Audience Arbitrage", "Momentum Amplification"],
      image: "/assets/campaign_main.jpg",
      badge: "Breakout Scale",
    },
  ];

  const handleRowClick = (idx: number, serviceTitle: string) => {
    // On touch/mobile: toggle expansion smoothly
    if (window.innerWidth < 1024) {
      setHoveredIndex(hoveredIndex === idx ? null : idx);
    } else {
      onSelectService(serviceTitle);
    }
  };

  return (
    <section id="services" className="relative py-16 sm:py-32 bg-[#0B0B0E] border-t border-white/[0.06] overflow-hidden">
      {/* Dynamic Ambient Background */}
      <div className="absolute top-1/4 left-1/3 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-burgundy-950/30 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-brand-gold/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 sm:gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-gold font-semibold mb-3 block">
              // Capabilities &amp; Disciplines
            </span>
            <h2 className="section-title font-display text-white uppercase max-w-xl">
              BUILT FOR <br />
              <span className="text-brand-crimson">ATTENTION.</span> <br />
              DESIGNED FOR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-brand-gold">
                GROWTH.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              We do not provide generic boilerplate retainers. Every engagement is an art-directed, high-impact growth campaign built to dominate digital feeds.
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs font-mono text-brand-gold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tap any service on mobile to expand overview</span>
            </div>
          </div>
        </div>

        {/* Large Interactive Vertical Service List with Split Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left: 8 Interactive Service Rows */}
          <div className="lg:col-span-7 flex flex-col">
            {services.map((srv, idx) => {
              const isHovered = hoveredIndex === idx;

              return (
                <div
                  key={srv.num}
                  onMouseEnter={() => {
                    if (window.innerWidth >= 1024) setHoveredIndex(idx);
                  }}
                  onClick={() => handleRowClick(idx, srv.title)}
                  className={`service-row py-4 sm:py-6 cursor-pointer transition-all duration-300 relative rounded-xl ${
                    isHovered
                      ? "bg-white/[0.04] border-brand-crimson/40 px-3.5 sm:px-6"
                      : "border-white/[0.08] hover:bg-white/[0.02] px-2 sm:px-4"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 sm:gap-4">
                    <div className="flex items-baseline gap-3 sm:gap-6 min-w-0">
                      <span
                        className={`font-mono text-xs sm:text-sm font-bold flex-shrink-0 transition-colors ${
                          isHovered ? "text-brand-gold" : "text-zinc-500"
                        }`}
                      >
                        {srv.num}
                      </span>
                      <div className="min-w-0">
                        <h3
                          className={`font-display font-extrabold text-lg sm:text-2xl md:text-3xl tracking-tight transition-all duration-300 ${
                            isHovered
                              ? "text-white sm:translate-x-2"
                              : "text-zinc-300"
                          }`}
                        >
                          {srv.title}
                        </h3>
                        <p className="text-xs text-zinc-400 font-mono mt-0.5 hidden sm:block truncate">
                          {srv.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                      <span className="hidden sm:inline-block text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 text-zinc-400">
                        {srv.badge}
                      </span>
                      <div
                        className={`p-2 rounded-full transition-all duration-300 ${
                          isHovered
                            ? "bg-brand-crimson text-white rotate-45 scale-105 shadow-md shadow-brand-crimson/50"
                            : "bg-white/[0.05] text-zinc-400"
                        }`}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Mobile expansion when tapped/active */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-4 pt-4 border-t border-white/10 text-zinc-300 text-xs sm:text-sm leading-relaxed"
                    >
                      {/* Mobile Inline Image Thumbnail (< lg) */}
                      <div className="block lg:hidden relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-3 border border-white/10">
                        <Image
                          src={srv.image}
                          alt={srv.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <span className="absolute bottom-2.5 left-2.5 text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black/70 text-brand-gold border border-white/10">
                          {srv.badge}
                        </span>
                      </div>

                      <p className="text-zinc-300">{srv.desc}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                        {srv.deliverables.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-brand-darkRed/30 border border-brand-crimson/30 text-zinc-200"
                          >
                            <Check className="w-3 h-3 text-brand-gold flex-shrink-0" />
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* Mobile Action Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectService(srv.title);
                        }}
                        className="w-full mt-4 py-2.5 rounded-xl bg-gradient-to-r from-burgundy-800 to-brand-crimson text-white font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 lg:hidden shadow-lg"
                      >
                        <span>Inquire About {srv.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Sticky Live Image & Deliverable Preview Panel (Desktop >= lg) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <div className="p-6 rounded-3xl bg-[#141418] border border-white/15 shadow-2xl overflow-hidden relative">
              <AnimatePresence mode="wait">
                {hoveredIndex !== null && (
                  <motion.div
                    key={hoveredIndex}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="flex flex-col gap-5"
                  >
                    {/* Visual Preview Image */}
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/15">
                      <Image
                        src={services[hoveredIndex].image}
                        alt={services[hoveredIndex].title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase tracking-wider text-brand-gold">
                        {services[hoveredIndex].badge}
                      </div>
                    </div>

                    {/* Service Details */}
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                        <span>SERVICE {services[hoveredIndex].num} // OVERVIEW</span>
                        <span className="text-brand-crimson font-bold">ACTIVE PROTOCOL</span>
                      </div>
                      <h4 className="font-display font-extrabold text-2xl text-white">
                        {services[hoveredIndex].title}
                      </h4>
                      <p className="text-zinc-300 text-sm mt-2 leading-relaxed">
                        {services[hoveredIndex].desc}
                      </p>
                    </div>

                    {/* Deliverables tags */}
                    <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                        Core Agency Deliverables
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {services[hoveredIndex].deliverables.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-surface border border-white/10 text-zinc-200"
                          >
                            <Check className="w-3.5 h-3.5 text-brand-gold" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA button */}
                    <button
                      onClick={() => onSelectService(services[hoveredIndex].title)}
                      className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-burgundy-800 to-brand-crimson hover:from-burgundy-700 hover:to-brand-red font-display font-bold text-xs uppercase tracking-wider text-white shadow-lg transition-all flex items-center justify-center gap-2 group"
                    >
                      <span>Inquire About {services[hoveredIndex].title}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
