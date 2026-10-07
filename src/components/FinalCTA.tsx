"use client";

import React from "react";
import { ArrowUpRight, MessageSquare, Zap } from "lucide-react";
import { motion } from "framer-motion";

interface FinalCTAProps {
  onOpenContact: () => void;
}

export default function FinalCTA({ onOpenContact }: FinalCTAProps) {
  return (
    <section className="relative py-20 sm:py-40 bg-[#070709] border-t border-white/[0.08] overflow-hidden">
      {/* Background Subtle Moving Large Typography */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none overflow-hidden">
        <span className="font-display font-black text-[22vw] leading-none tracking-tighter text-white whitespace-nowrap">
          BIZHACKS
        </span>
      </div>

      {/* Atmospheric Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[550px] bg-burgundy-900/35 blur-[140px] sm:blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-brand-gold/10 blur-[120px] sm:blur-[150px] pointer-events-none rounded-full" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10 text-center flex flex-col items-center">

        {/* Top Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-crimson/15 border border-brand-crimson/30 text-brand-gold text-[11px] sm:text-xs font-mono uppercase tracking-widest font-semibold mb-6 sm:mb-8 shadow-lg shadow-burgundy-950/60"
        >
          <Zap className="w-3.5 h-3.5 text-brand-gold fill-brand-gold animate-bounce" />
          <span>START YOUR GROWTH PROTOCOL</span>
        </motion.div>

        {/* Large Dominant Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-display text-white uppercase tracking-tight mb-5 sm:mb-8 leading-[1.02]"
        >
          READY TO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-crimson via-red-500 to-brand-gold drop-shadow-sm">
            MAKE SOME NOISE?
          </span>
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-base sm:text-2xl text-zinc-300 max-w-2xl font-normal leading-relaxed mb-8 sm:mb-12"
        >
          Let&apos;s turn your brand, content or audience into something people remember.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-5 w-full sm:w-auto"
        >
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 sm:px-9 py-4 sm:py-5 rounded-full font-display font-black text-xs sm:text-sm tracking-wide text-white bg-gradient-to-r from-burgundy-800 via-burgundy-700 to-brand-crimson hover:from-burgundy-700 hover:to-brand-red border border-white/20 shadow-2xl shadow-burgundy-950/80 hover:shadow-brand-crimson/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 group"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          <a
            href="https://wa.me/912269622235?text=Hi%20BizHacks%20Media%2C%20I%20would%20like%20to%20discuss%20a%20marketing%20partnership."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-7 sm:px-8 py-4 sm:py-5 rounded-full font-display font-bold text-xs sm:text-sm tracking-wide text-zinc-100 bg-[#141418] hover:bg-[#1c1c22] border border-white/15 hover:border-brand-gold/50 shadow-xl transition-all duration-300 flex items-center justify-center gap-2.5 group text-center"
          >
            <MessageSquare className="w-4 h-4 text-brand-gold flex-shrink-0" />
            <span>Talk to BizHacks</span>
            <span className="text-[11px] sm:text-xs font-mono text-zinc-400 group-hover:text-white">
              (WhatsApp)
            </span>
          </a>
        </motion.div>

        {/* Quick Contact Footer Bar */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Accepting 3 new brand retainers for Q2/Q3</span>
          </div>
          <div className="hidden sm:inline">•</div>
          <div>Direct Hotline: +91 2269622235</div>
          <div className="hidden sm:inline">•</div>
          <div>International Hub: Los Angeles / Global</div>
        </div>

      </div>
    </section>
  );
}
