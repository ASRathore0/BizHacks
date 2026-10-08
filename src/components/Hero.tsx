"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, TrendingUp, CheckCircle2, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { InstagramIcon } from "./SocialIcons";

interface HeroProps {
  onOpenContact: () => void;
}

const officialInstaPosts = [
  {
    id: "alone-royal",
    name: "Alone Royal",
    reach: "6M+ Network",
    tag: "Content Creator",
    badge: "6M+ Social Reach",
    category: "High-Energy Lifestyle",
    image: "/assets/creator_alone_royal.jpg",
  },
  {
    id: "dalal-comedians",
    name: "Dalal Comedians",
    reach: "2M+ Network",
    tag: "Entertainment Exclusive",
    badge: "2M+ Social Reach",
    category: "Viral Comedy Skits",
    image: "/assets/creator_dalal_comedians.jpg",
  },
  {
    id: "sonu-saifi",
    name: "GS Sonu Saifi",
    reach: "100K+ Network",
    tag: "Comedy Exclusive",
    badge: "100K+ Social Reach",
    category: "Exclusive Influencer",
    image: "/assets/creator_sonu_saifi.jpg",
  },
];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir >= 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: "0%",
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring" as const, stiffness: 320, damping: 32 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.3 },
    },
  },
  exit: (dir: number) => ({
    x: dir >= 0 ? "-100%" : "100%",
    opacity: 0,
    scale: 0.95,
    transition: {
      x: { type: "spring" as const, stiffness: 320, damping: 32 },
      opacity: { duration: 0.25 },
      scale: { duration: 0.25 },
    },
  }),
};

export default function Hero({ onOpenContact }: HeroProps) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const activeIndex = ((page % officialInstaPosts.length) + officialInstaPosts.length) % officialInstaPosts.length;

  const paginate = (newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  };

  const jumpTo = (index: number) => {
    const dir = index > activeIndex ? 1 : -1;
    setPage([index, dir]);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 4500);
    return () => clearInterval(timer);
  }, [page, isPaused]);

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
      className="relative min-h-screen pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-28 lg:pb-14 overflow-hidden flex flex-col justify-center bg-radial-gradient"
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
        {/* Cinematic Vignette & Deep Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/90 via-[#09090B]/65 to-[#09090B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090B]/85 via-transparent to-[#09090B]/85" />
      </div>

      {/* Dynamic Background Atmospheric Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[500px] bg-burgundy-900/25 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -left-20 sm:-left-32 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-brand-crimson/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-brand-gold/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Bold Editorial Typography & CTAs */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            
            {/* Status & Credibility Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-4 max-w-full justify-center shadow-lg shadow-black/30"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-crimson opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-crimson"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-mono tracking-wider uppercase text-zinc-300">
                Partnered with <span className="text-white font-bold">150+ brands</span>
              </span>
              <span className="text-zinc-600 hidden xs:inline">•</span>
              <span className="text-[11px] sm:text-xs font-mono text-brand-gold items-center gap-1 font-medium hidden xs:inline-flex flex-shrink-0">
                <Sparkles className="w-3 h-3" /> Worldwide Agency
              </span>
            </motion.div>

            {/* Main Headline - Balanced 2-line structure on Desktop */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[2.25rem] xs:text-[2.75rem] sm:text-5xl lg:text-[3.35rem] xl:text-[4rem] font-display text-white mb-4 uppercase tracking-tight leading-[1.02] w-full text-center lg:text-left font-black"
            >
              WE MAKE <span className="text-zinc-300">CREATORS</span> <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-crimson via-red-500 to-brand-gold pb-1">
                BRANDS.
                <span className="absolute bottom-0 left-0 w-full h-[4px] sm:h-[5px] bg-gradient-to-r from-brand-crimson via-brand-darkRed to-transparent rounded-full" />
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-zinc-300/90 font-normal max-w-xl leading-relaxed mb-6 text-center lg:text-left mx-auto lg:mx-0"
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
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 w-full sm:w-auto"
            >
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-7 py-3 rounded-full font-display font-bold text-xs sm:text-sm tracking-wide text-white bg-gradient-to-r from-burgundy-800 via-burgundy-700 to-brand-crimson hover:from-burgundy-700 hover:to-brand-red border border-white/20 shadow-xl shadow-burgundy-950/80 hover:shadow-brand-crimson/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 group"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#work"
                className="w-full sm:w-auto px-6 py-3 rounded-full font-display font-semibold text-xs sm:text-sm tracking-wide text-zinc-200 bg-[#141417]/90 hover:bg-[#1f1f24] border border-white/10 hover:border-white/25 transition-all duration-300 flex items-center justify-center gap-2 group text-center"
              >
                <span>See Our Work</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-crimson group-hover:scale-150 transition-transform" />
              </a>
            </motion.div>

            {/* Luxury Stat Micro-Cards with Glass Treatment */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 sm:mt-8 pt-5 border-t border-white/[0.08] grid grid-cols-3 gap-2.5 sm:gap-3.5 w-full max-w-lg text-center lg:text-left mx-auto lg:mx-0"
            >
              <div className="relative p-3.5 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-white/25 transition-all overflow-hidden group shadow-lg">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white/40 to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="font-display font-extrabold text-lg sm:text-xl xl:text-2xl text-white">150+</div>
                <div className="text-[10px] sm:text-[11px] text-zinc-300 uppercase tracking-wider mt-0.5 font-medium">Brand Deals</div>
              </div>
              <div className="relative p-3.5 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-brand-gold/50 transition-all overflow-hidden group shadow-lg">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-gold to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="font-display font-extrabold text-lg sm:text-xl xl:text-2xl text-brand-gold">747+</div>
                <div className="text-[10px] sm:text-[11px] text-zinc-300 uppercase tracking-wider mt-0.5 font-medium">Active Creators</div>
              </div>
              <div className="relative p-3.5 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-brand-crimson/50 transition-all overflow-hidden group shadow-lg">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-crimson to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="font-display font-extrabold text-lg sm:text-xl xl:text-2xl text-brand-crimson">100%</div>
                <div className="text-[10px] sm:text-[11px] text-zinc-300 uppercase tracking-wider mt-0.5 font-medium">Organic Growth</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Modern High-End Creator Spotlight Showcase */}
          <div 
            className="lg:col-span-5 xl:col-span-5 w-full mt-6 lg:mt-0 flex flex-col items-center lg:items-end"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            
            {/* ============================================================== */}
            {/* DESKTOP MODERN SHOWCASE DOCK (>= lg screens)                   */}
            {/* ============================================================== */}
            <div className="hidden lg:block relative w-full max-w-[340px] xl:max-w-[370px]">
              
              {/* Subtle ambient lighting behind showcase */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-brand-crimson/15 blur-[100px] rounded-full pointer-events-none" />

              {/* Top Segmented Selector Pill Dock */}
              <div className="flex items-center justify-between gap-1.5 p-1 rounded-2xl bg-[#131317]/95 border border-white/10 backdrop-blur-xl mb-3 shadow-xl shadow-black/50">
                {officialInstaPosts.map((post, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <button
                      key={post.id}
                      onClick={() => jumpTo(idx)}
                      className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-mono transition-all duration-300 flex flex-col items-center justify-center text-center ${
                        isActive
                          ? "bg-gradient-to-r from-burgundy-800 to-brand-crimson text-white font-bold shadow-md shadow-brand-crimson/30"
                          : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center gap-1 truncate max-w-full">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isActive ? "bg-white animate-pulse" : "bg-zinc-600"}`} />
                        <span className="truncate text-[11px]">{post.name.split(" ")[0]}</span>
                      </div>
                      <span className={`text-[9px] font-mono leading-none mt-0.5 ${isActive ? "text-brand-gold font-bold" : "text-zinc-500"}`}>
                        {post.reach.split(" ")[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Main Framed Spotlight Stage */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 hover:border-brand-crimson/40 bg-[#121216] shadow-2xl shadow-black/90 transition-colors duration-500 group">
                
                {/* Visual Canvas (3:4 Poster Presentation with Drag / Slide Interaction) */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black touch-pan-y select-none">
                  <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                      key={page}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.2}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = Math.abs(offset.x) * velocity.x;
                        if (swipe < -3500 || offset.x < -40) {
                          paginate(1);
                        } else if (swipe > 3500 || offset.x > 40) {
                          paginate(-1);
                        }
                      }}
                      className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                    >
                      <Image
                        src={officialInstaPosts[activeIndex].image}
                        alt={`${officialInstaPosts[activeIndex].name} - ${officialInstaPosts[activeIndex].reach}`}
                        fill
                        className="object-contain pointer-events-none"
                        priority
                      />
                      
                      {/* Floating Top Badges */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[9px] font-mono uppercase text-brand-gold font-bold shadow-lg flex items-center gap-1">
                          <InstagramIcon className="w-2.5 h-2.5 text-brand-crimson" />
                          Official Signing
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-brand-crimson/90 backdrop-blur-md text-white text-[9px] font-mono uppercase font-bold shadow-lg">
                          {officialInstaPosts[activeIndex].badge}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Sleek Creator Info Bar */}
                <div className="p-3 bg-[#15151A] border-t border-white/10 flex items-center justify-between gap-2.5">
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-display font-extrabold text-sm text-white truncate">
                        {officialInstaPosts[activeIndex].name}
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-crimson flex-shrink-0" />
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400 truncate">
                      {officialInstaPosts[activeIndex].tag} • {officialInstaPosts[activeIndex].category}
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-brand-crimson/15 border border-brand-crimson/30 text-brand-gold text-[11px] font-mono font-bold flex items-center gap-1 flex-shrink-0">
                    <TrendingUp className="w-3 h-3 text-brand-crimson" />
                    <span>{officialInstaPosts[activeIndex].reach}</span>
                  </span>
                </div>

                {/* Desktop Interactive Pagination Bar */}
                <div className="px-3 py-2 bg-[#121216] border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {officialInstaPosts.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => jumpTo(idx)}
                        aria-label={`Go to talent slide ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeIndex === idx
                            ? "w-6 bg-gradient-to-r from-brand-crimson to-brand-gold"
                            : "w-2 bg-zinc-700 hover:bg-zinc-500"
                        }`}
                      />
                    ))}
                  </div>

                  <span className="text-[10px] font-mono text-zinc-400">
                    {isPaused ? "Paused" : "Auto-playing (4.5s)"}
                  </span>
                </div>
              </div>

              {/* Floating Orbit Pods */}
              <div className="grid grid-cols-2 gap-2 mt-2.5">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-[#131318]/90 border border-white/10 backdrop-blur-md shadow-md">
                  <div className="w-6 h-6 rounded-lg bg-brand-crimson/20 border border-brand-crimson/40 flex items-center justify-center text-brand-gold flex-shrink-0">
                    <Sparkles className="w-3 h-3 text-brand-gold" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold text-white leading-tight truncate">8.4M+ Network</div>
                    <div className="text-[9px] text-zinc-400 font-mono truncate">Combined Virality</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-xl bg-[#131318]/90 border border-white/10 backdrop-blur-md shadow-md">
                  <div className="w-6 h-6 rounded-lg bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-gold flex-shrink-0">
                    <ShieldCheck className="w-3 h-3 text-brand-gold" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold text-white leading-tight truncate">100% Retainers</div>
                    <div className="text-[9px] text-zinc-400 font-mono truncate">Organic Contracts</div>
                  </div>
                </div>
              </div>

            </div>

            {/* ============================================================== */}
            {/* MOBILE COMPACT SLIDER (< lg screens)                          */}
            {/* ============================================================== */}
            <div className="block lg:hidden max-w-md mx-auto w-full">
              
              {/* Header & Segmented Tabs on Mobile */}
              <div className="mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-brand-gold font-bold flex items-center gap-1.5">
                    <InstagramIcon className="w-3.5 h-3.5 text-brand-crimson" />
                    Official Talent Signings
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-crimson animate-pulse" />
                    <span className="text-white font-bold">0{activeIndex + 1}</span>
                    <span>/</span>
                    <span>0{officialInstaPosts.length}</span>
                  </div>
                </div>

                {/* 3-Column Segmented Tab Bar */}
                {/* <div className="grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-[#141418] border border-white/10 shadow-lg">
                  {officialInstaPosts.map((post, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                      <button
                        key={post.id}
                        onClick={() => jumpTo(idx)}
                        className={`relative py-2 px-1 rounded-xl text-center transition-all duration-300 flex flex-col items-center justify-center ${
                          isActive
                            ? "bg-gradient-to-r from-burgundy-800 to-brand-crimson text-white shadow-lg shadow-brand-crimson/30 font-bold"
                            : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                        }`}
                      >
                        <span className="text-[11px] font-display truncate w-full leading-tight">{post.name}</span>
                        <span className={`text-[9px] font-mono leading-none mt-0.5 ${isActive ? "text-brand-gold font-bold" : "text-zinc-500"}`}>
                          {post.reach}
                        </span>
                      </button>
                    );
                  })}
                </div> */}
              </div>

              {/* Mobile Main Slider Card */}
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#121216] shadow-2xl shadow-black/90">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black touch-pan-y">
                  <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                      key={page}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.2}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = Math.abs(offset.x) * velocity.x;
                        if (swipe < -6000 || offset.x < -50) {
                          paginate(1);
                        } else if (swipe > 6000 || offset.x > 50) {
                          paginate(-1);
                        }
                      }}
                      className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                    >
                      <Image
                        src={officialInstaPosts[activeIndex].image}
                        alt={`${officialInstaPosts[activeIndex].name} - ${officialInstaPosts[activeIndex].reach}`}
                        fill
                        className="object-contain pointer-events-none"
                        priority
                      />
                      
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase text-brand-gold font-bold">
                          Instagram Exclusive
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-brand-crimson backdrop-blur-md text-white text-[10px] font-mono uppercase font-bold shadow-md">
                          {officialInstaPosts[activeIndex].badge}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Mobile Card Footer Bar */}
                <div className="p-3.5 bg-[#15151A] border-t border-white/10 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-display font-extrabold text-sm text-white truncate">
                        {officialInstaPosts[activeIndex].name}
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-crimson flex-shrink-0" />
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400 truncate">
                      {officialInstaPosts[activeIndex].tag} • {officialInstaPosts[activeIndex].category}
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-brand-crimson/15 border border-brand-crimson/30 text-brand-gold text-xs font-mono font-bold flex items-center gap-1 flex-shrink-0">
                    <TrendingUp className="w-3 h-3 text-brand-crimson" />
                    <span>{officialInstaPosts[activeIndex].reach}</span>
                  </span>
                </div>

                {/* Mobile Indicators */}
                <div className="px-3.5 py-2 bg-[#121216] border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {officialInstaPosts.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => jumpTo(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeIndex === idx
                            ? "w-7 bg-gradient-to-r from-brand-crimson to-brand-gold"
                            : "w-2 bg-zinc-700 hover:bg-zinc-500"
                        }`}
                      />
                    ))}
                  </div>

                  <span className="text-[10px] font-mono text-zinc-400">
                    {isPaused ? "Paused" : "Swipe / Auto-advancing"}
                  </span>
                </div>
              </div>

              {/* Mobile Quick Thumbnails */}
              <div className="grid grid-cols-2 gap-2 mt-2.5">
                {officialInstaPosts
                  .filter((_, idx) => idx !== activeIndex)
                  .map((post) => {
                    const targetIdx = officialInstaPosts.findIndex((p) => p.id === post.id);
                    return (
                      <button
                        key={post.id}
                        onClick={() => jumpTo(targetIdx)}
                        className="flex items-center gap-2 p-1.5 rounded-xl bg-[#131317] border border-white/10 hover:border-brand-crimson/50 transition-all text-left group"
                      >
                        <div className="relative w-7 h-9 rounded-lg overflow-hidden flex-shrink-0 bg-black border border-white/10">
                          <Image
                            src={post.image}
                            alt={post.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[11px] font-display font-bold text-white truncate group-hover:text-brand-gold transition-colors">
                            {post.name}
                          </div>
                          <div className="text-[9px] font-mono text-zinc-400 truncate">
                            {post.reach}
                          </div>
                        </div>
                      </button>
                    );
                  })}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
