"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, TrendingUp, CheckCircle2, ShieldCheck } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroProps {
  onOpenContact: () => void;
}

const officialInstaPosts = [
  {
    id: "alone-royal",
    name: "Alone Royal",
    reach: "6M+ Network",
    tag: "Content Creator",
    badge: "6M+ Network",
    image: "/assets/creator_alone_royal.jpg",
  },
  {
    id: "dalal-comedians",
    name: "Dalal Comedians",
    reach: "2M+ Network",
    tag: "Entertainment Exclusive",
    badge: "2M+ Network",
    image: "/assets/creator_dalal_comedians.jpg",
  },
  {
    id: "sonu-saifi",
    name: "GS Sonu Saifi",
    reach: "100K+ Network",
    tag: "Comedy Exclusive",
    badge: "100K+ Network",
    image: "/assets/creator_sonu_saifi.jpg",
  },
];

export default function Hero({ onOpenContact }: HeroProps) {
  const [selectedPost, setSelectedPost] = useState(0);
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
          className="w-full h-full object-cover object-center opacity-80 sm:opacity-80 scale-105 filter saturate-125 contrast-110"
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

          {/* Right Column: Official Instagram Creator Showcase */}
          <div className="lg:col-span-5 w-full mt-4 lg:mt-0">
            
            {/* Creator Post Selector Pills */}
            <div className="flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2 mb-3 sm:mb-4 overflow-x-auto pb-1">
              {officialInstaPosts.map((post, idx) => (
                <button
                  key={post.id}
                  onClick={() => setSelectedPost(idx)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 flex-shrink-0 ${
                    selectedPost === idx
                      ? "bg-brand-crimson text-white font-bold shadow-lg shadow-brand-crimson/30 border border-brand-crimson"
                      : "bg-[#141417]/80 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${selectedPost === idx ? "bg-white animate-pulse" : "bg-zinc-500"}`} />
                  <span>{post.name}</span>
                  <span className="text-[10px] opacity-75 font-normal">({post.reach})</span>
                </button>
              ))}
            </div>

            {/* Mobile-Optimized Editorial Composition (< lg screens) */}
            <div className="block lg:hidden w-full">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#121215] shadow-2xl">
                <div className="relative aspect-[3/4] w-full max-h-[460px]">
                  <Image
                    src={officialInstaPosts[selectedPost].image}
                    alt={`${officialInstaPosts[selectedPost].name} - ${officialInstaPosts[selectedPost].reach}`}
                    fill
                    className="object-contain bg-black"
                    priority
                  />
                  
                  {/* Top Mobile Pill */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase text-brand-gold font-bold">
                      Instagram Post
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-brand-crimson/90 backdrop-blur-md text-white text-[10px] font-mono uppercase font-bold">
                      {officialInstaPosts[selectedPost].badge}
                    </span>
                  </div>

                  {/* Bottom Mobile Info Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-2xl bg-black/85 backdrop-blur-md border border-white/10">
                    <div>
                      <div className="text-[10px] font-mono text-zinc-300">{officialInstaPosts[selectedPost].tag}</div>
                      <div className="font-display font-extrabold text-sm text-white">{officialInstaPosts[selectedPost].name}</div>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-crimson/20 border border-brand-crimson/40 text-[11px] font-mono font-bold text-brand-gold">
                      <TrendingUp className="w-3.5 h-3.5 text-brand-crimson" />
                      <span>{officialInstaPosts[selectedPost].reach}</span>
                    </div>
                  </div>
                </div>

                {/* Sub-strip on mobile with the other 2 creator posts */}
                <div className="p-2.5 bg-[#16161B] border-t border-white/10 grid grid-cols-2 gap-2">
                  {officialInstaPosts
                    .filter((_, idx) => idx !== selectedPost)
                    .map((post) => (
                      <button
                        key={post.id}
                        onClick={() => setSelectedPost(officialInstaPosts.findIndex((p) => p.id === post.id))}
                        className="flex items-center gap-2 p-1.5 rounded-xl bg-black/50 border border-white/5 hover:border-brand-crimson/40 transition-colors text-left"
                      >
                        <div className="relative w-9 h-11 rounded-lg overflow-hidden flex-shrink-0 bg-black">
                          <Image
                            src={post.image}
                            alt={post.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[11px] font-display font-bold text-white truncate">{post.name}</div>
                          <div className="text-[9px] font-mono text-brand-gold truncate">{post.reach}</div>
                        </div>
                      </button>
                    ))}
                </div>
              </div>
            </div>

            {/* Desktop Parallax Media Wall (>= lg screens) */}
            <div className="hidden lg:flex relative h-[560px] w-full items-center justify-center">
              {/* Card 1: Main Official BizHacks Creator Instagram Poster */}
              <motion.div
                key={officialInstaPosts[selectedPost].id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                style={{ y: y1 }}
                className="absolute left-0 top-2 w-[280px] rounded-2xl overflow-hidden border border-white/20 bg-[#121215] shadow-2xl shadow-black/90 z-20 group hover:border-brand-crimson transition-all duration-300"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                  <Image
                    src={officialInstaPosts[selectedPost].image}
                    alt={`${officialInstaPosts[selectedPost].name} - ${officialInstaPosts[selectedPost].reach}`}
                    fill
                    className="object-contain"
                    priority
                  />
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                    <span className="px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[9px] font-mono uppercase text-brand-gold font-bold">
                      Official Post
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-brand-crimson backdrop-blur-md text-white text-[9px] font-mono uppercase font-bold">
                      {officialInstaPosts[selectedPost].reach}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-white">
                    <div>
                      <span className="text-[9px] uppercase font-mono text-zinc-400 block">{officialInstaPosts[selectedPost].tag}</span>
                      <span className="font-display font-bold text-xs">{officialInstaPosts[selectedPost].name}</span>
                    </div>
                    <span className="p-1 rounded-full bg-brand-crimson/20 border border-brand-crimson/30">
                      <TrendingUp className="w-3 h-3 text-brand-gold" />
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Companion Creator Post (Click to swap) */}
              {(() => {
                const companionPost = officialInstaPosts[(selectedPost + 1) % officialInstaPosts.length];
                const companionIdx = (selectedPost + 1) % officialInstaPosts.length;
                return (
                  <motion.div
                    style={{ y: y2 }}
                    onClick={() => setSelectedPost(companionIdx)}
                    className="absolute right-0 top-0 w-[230px] rounded-2xl overflow-hidden border border-white/15 bg-[#141417] shadow-2xl shadow-black/90 z-10 cursor-pointer group hover:border-brand-gold/70 hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                      <Image
                        src={companionPost.image}
                        alt={companionPost.name}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors" />
                      <div className="absolute top-2 right-2">
                        <span className="px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[9px] font-mono uppercase text-brand-gold font-bold">
                          Click to View
                        </span>
                      </div>
                      <div className="absolute bottom-2 left-2 right-2 p-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/10 text-white">
                        <span className="text-[9px] uppercase font-mono text-zinc-400 block">{companionPost.tag}</span>
                        <div className="flex items-center justify-between">
                          <span className="font-display font-bold text-xs">{companionPost.name}</span>
                          <span className="text-[10px] font-mono text-brand-gold">{companionPost.reach}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}

              {/* Card 3: Third Creator Thumbnail / Viral Reach Counter */}
              {(() => {
                const thirdPost = officialInstaPosts[(selectedPost + 2) % officialInstaPosts.length];
                const thirdIdx = (selectedPost + 2) % officialInstaPosts.length;
                return (
                  <motion.div
                    style={{ y: y3 }}
                    onClick={() => setSelectedPost(thirdIdx)}
                    className="absolute bottom-6 right-2 z-30 p-2.5 rounded-2xl bg-[#111114]/95 border border-white/15 backdrop-blur-xl shadow-2xl cursor-pointer hover:border-brand-crimson/60 hover:scale-[1.02] transition-all duration-300 max-w-[210px]"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="relative w-10 h-13 rounded-lg overflow-hidden border border-brand-gold/40 flex-shrink-0 bg-black">
                        <Image
                          src={thirdPost.image}
                          alt={thirdPost.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-bold text-white truncate flex items-center gap-1">
                          {thirdPost.name}
                          <CheckCircle2 className="w-3 h-3 text-brand-crimson flex-shrink-0" />
                        </div>
                        <div className="text-[10px] text-brand-gold font-mono">{thirdPost.reach}</div>
                        <div className="text-[9px] text-zinc-400">BizHacks Exclusive</div>
                      </div>
                    </div>
                    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-brand-crimson to-brand-gold h-full w-[90%] rounded-full" />
                    </div>
                  </motion.div>
                );
              })()}

              {/* Subtle background glow */}
              <div className="absolute w-44 h-44 rounded-full bg-burgundy-700/20 blur-3xl pointer-events-none" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
