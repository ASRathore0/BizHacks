"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, TrendingUp, CheckCircle2, ShieldCheck } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] pt-24 pb-16 sm:pt-36 sm:pb-28 overflow-hidden flex flex-col justify-center bg-radial-gradient"
    >
      {/* Cinematic Background Video Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center opacity-30 sm:opacity-40 scale-105 filter saturate-125 contrast-110"
        >
          <source src="/assets/bizhack_video.mp4" type="video/mp4" />
          <source src="/assets/BizHack%20Video.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Vignette & Deep Dark Overlays for maximum text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/90 via-[#09090B]/65 to-[#09090B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090B]/75 via-transparent to-[#09090B]/75" />
      </div>

      {/* Dynamic Background Atmospheric Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[550px] bg-burgundy-900/25 blur-[120px] sm:blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -left-20 sm:-left-32 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-brand-crimson/15 blur-[100px] sm:blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-brand-gold/10 blur-[120px] sm:blur-[150px] pointer-events-none rounded-full" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Bold Editorial Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            
            {/* Status & Credibility Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md mb-6 max-w-full justify-center"
            >
              <span className="w-2 h-2 rounded-full bg-brand-crimson animate-ping flex-shrink-0" />
              <span className="text-[11px] sm:text-xs font-mono tracking-wider uppercase text-zinc-300">
                Partnered with <span className="text-white font-bold">150+ brands</span>
              </span>
              <span className="text-zinc-600 hidden xs:inline">•</span>
              <span className="text-[11px] sm:text-xs font-mono text-brand-gold items-center gap-1 font-medium hidden xs:inline-flex flex-shrink-0">
                <Sparkles className="w-3 h-3" /> Worldwide Agency
              </span>
            </motion.div>

            {/* Main Headline - Centered on Mobile, Left-aligned on Desktop */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[2.25rem] xs:text-[2.75rem] sm:text-5xl md:text-6xl lg:hero-title font-display text-white mb-5 uppercase tracking-tight leading-[0.98] w-full text-center lg:text-left"
            >
              WE MAKE <br />
              <span className="text-zinc-300">CREATORS</span> <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-crimson via-red-500 to-brand-gold pb-1">
                BRANDS.
                <span className="absolute bottom-0 left-0 w-full h-[4px] sm:h-[6px] bg-gradient-to-r from-brand-crimson via-brand-darkRed to-transparent rounded-full" />
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-xl text-zinc-300 font-normal max-w-xl leading-relaxed mb-8 text-center lg:text-left mx-auto lg:mx-0"
            >
              Digital marketing, creator growth and brand collaborations built to turn
              <span className="text-white font-semibold"> digital attention </span> into lasting
              <span className="text-white font-semibold"> commercial influence</span>.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto"
            >
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full font-display font-bold text-xs sm:text-sm tracking-wide text-white bg-gradient-to-r from-burgundy-800 via-burgundy-700 to-brand-crimson hover:from-burgundy-700 hover:to-brand-red border border-white/20 shadow-xl shadow-burgundy-950/80 hover:shadow-brand-crimson/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 group"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#work"
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full font-display font-semibold text-xs sm:text-sm tracking-wide text-zinc-200 bg-[#141417]/90 hover:bg-[#1f1f24] border border-white/10 hover:border-white/25 transition-all duration-300 flex items-center justify-center gap-2 group text-center"
              >
                <span>See Our Work</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-crimson group-hover:scale-150 transition-transform" />
              </a>
            </motion.div>

            {/* Quick Meta Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-2 sm:gap-8 w-full max-w-lg text-center lg:text-left mx-auto lg:mx-0"
            >
              <div>
                <div className="font-display font-extrabold text-xl sm:text-3xl text-white">150+</div>
                <div className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider mt-0.5 font-medium">Brand Deals</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-xl sm:text-3xl text-brand-gold">747+</div>
                <div className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider mt-0.5 font-medium">Active Creators</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-xl sm:text-3xl text-brand-crimson">100%</div>
                <div className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider mt-0.5 font-medium">Organic Growth</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Art-Directed Media Wall Showcase */}
          <div className="lg:col-span-5 w-full mt-4 lg:mt-0">
            
            {/* Mobile-Optimized Editorial Composition (< lg screens) */}
            <div className="block lg:hidden w-full">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#121215] shadow-2xl">
                <div className="relative aspect-[4/3] xs:aspect-[16/10] w-full">
                  <Image
                    src="/assets/campaign_main.jpg"
                    alt="BizHacks Media US Digital Marketing Campaign"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-black/30 to-transparent" />
                  
                  {/* Top Mobile Pill */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase text-brand-gold font-bold">
                      Official Campaign
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-brand-crimson/90 backdrop-blur-md text-white text-[10px] font-mono uppercase font-bold">
                      Los Angeles • Global
                    </span>
                  </div>

                  {/* Bottom Mobile Info Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono text-zinc-300">Growth Architecture</div>
                      <div className="font-display font-extrabold text-sm text-white">BizHacks Media US</div>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 border border-white/10 text-[10px] font-mono text-brand-gold">
                      <TrendingUp className="w-3 h-3 text-brand-crimson" />
                      <span>10x Lift</span>
                    </div>
                  </div>
                </div>

                {/* Sub-strip on mobile with creator thumbnail & war room thumbnail */}
                <div className="p-3 bg-[#16161B] border-t border-white/10 grid grid-cols-2 gap-2.5">
                  <div className="flex items-center gap-2 p-1.5 rounded-xl bg-black/40 border border-white/5">
                    <div className="relative w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src="/assets/creator_1.jpg"
                        alt="Creator Sasha"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-display font-bold text-white truncate">Sasha Vance</div>
                      <div className="text-[9px] font-mono text-zinc-400 truncate">Streetwear Talent</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-1.5 rounded-xl bg-black/40 border border-white/5">
                    <div className="relative w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src="/assets/growth_analytics.jpg"
                        alt="Viral Analytics"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-display font-bold text-white truncate">Viral Funnels</div>
                      <div className="text-[9px] font-mono text-brand-gold truncate">150+ Brands</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Parallax Media Wall (>= lg screens) */}
            <div className="hidden lg:flex relative h-[580px] w-full items-center justify-center">
              {/* Card 1: Official BizHacks US Campaign Poster */}
              <motion.div
                style={{ y: y1 }}
                className="absolute left-0 top-8 w-[270px] rounded-2xl overflow-hidden border border-white/15 bg-[#121215] shadow-2xl shadow-black/80 z-20 group hover:border-brand-crimson/60 hover:z-30 transition-all duration-500"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src="/assets/campaign_main.jpg"
                    alt="BizHacks Media US Digital Marketing Campaign"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <div>
                      <span className="text-[10px] uppercase font-mono text-brand-gold block">Official Campaign</span>
                      <span className="font-display font-bold text-sm">BizHacks Media US</span>
                    </div>
                    <span className="p-1.5 rounded-full bg-white/10 backdrop-blur-md">
                      <TrendingUp className="w-3.5 h-3.5 text-brand-crimson" />
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Editorial Creator Talent */}
              <motion.div
                style={{ y: y2 }}
                className="absolute right-0 top-0 w-[250px] rounded-2xl overflow-hidden border border-white/15 bg-[#141417] shadow-2xl shadow-black/90 z-10 group hover:border-brand-gold/60 hover:z-30 transition-all duration-500"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src="/assets/creator_1.jpg"
                    alt="Creator Talent Portfolio"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase font-mono text-zinc-400 block">Talent Roster</span>
                    <span className="font-display font-bold text-sm">Streetwear &amp; Culture</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Floating Strategy & Analytics Badge */}
              <motion.div
                style={{ y: y3 }}
                className="absolute bottom-8 left-6 z-30 p-4 rounded-2xl bg-[#111114]/90 border border-white/15 backdrop-blur-xl shadow-2xl max-w-[250px]"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-brand-gold">
                    <Image
                      src="/assets/growth_analytics.jpg"
                      alt="Analytics"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1">
                      Viral Distribution
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-crimson" />
                    </div>
                    <div className="text-[10px] text-zinc-400 font-mono">10x Engagement Lift</div>
                  </div>
                </div>
                <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-brand-crimson to-brand-gold h-full w-[84%] rounded-full" />
                </div>
              </motion.div>

              {/* Card 4: Team Collaboration Session */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-0 right-4 z-20 w-[180px] rounded-xl overflow-hidden border border-brand-crimson/30 shadow-2xl group hover:border-brand-crimson transition-colors"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src="/assets/team_collaboration.jpg"
                    alt="Creative Team Session"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center p-3 text-center">
                    <span className="font-display font-bold text-[11px] text-white tracking-wide uppercase">
                      Strategic War Room
                    </span>
                  </div>
                </div>
              </motion.div>

              <div className="absolute w-36 h-36 rounded-full bg-burgundy-700/20 blur-3xl pointer-events-none" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
