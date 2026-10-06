"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Compass, Video, Megaphone, TrendingUp, ArrowRight } from "lucide-react";

export default function Process() {
  const steps = [
    {
      step: "01",
      name: "DISCOVER",
      tagline: "Diagnostic & Whitespace",
      desc: "Understand the brand, audience psychographics, competitors and untapped algorithmic opportunity.",
      icon: Search,
    },
    {
      step: "02",
      name: "STRATEGIZE",
      tagline: "Architecture & Playbook",
      desc: "Build the distinctive positioning, creator alignment matrix, and high-velocity growth roadmap.",
      icon: Compass,
    },
    {
      step: "03",
      name: "CREATE",
      tagline: "Production & Hooks",
      desc: "Produce cinematic, high-retention content formats and visuals that earn authentic attention.",
      icon: Video,
    },
    {
      step: "04",
      name: "AMPLIFY",
      tagline: "Distribution & Talent",
      desc: "Deploy vetted creator networks, strategic media campaigns, and community flywheels to expand reach.",
      icon: Megaphone,
    },
    {
      step: "05",
      name: "GROW",
      tagline: "Iteration & Scaling",
      desc: "Measure multi-platform analytics, optimize conversion funnels, and scale commercial monetization.",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="process" className="relative py-16 sm:py-32 bg-[#09090B] border-t border-white/[0.06] overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brand-crimson/5 blur-[130px] sm:blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest uppercase text-brand-gold font-semibold mb-3">
            // EXECUTION ENGINE
          </div>
          <h2 className="section-title font-display text-white uppercase">
            A SYSTEM BUILT FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-crimson via-red-400 to-brand-gold">
              PREDICTABLE TRACTION.
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-lg mt-3 sm:mt-4 max-w-xl">
            From initial creative audit to global creator distribution — here is how we turn brands into cultural forces.
          </p>
        </div>

        {/* Clean Process Stages: Horizontal on Desktop, Timeline on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 relative">
          
          {/* Subtle Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-[1px] bg-gradient-to-r from-brand-crimson via-brand-gold to-white/20 -z-0 opacity-40" />

          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="group relative p-5 sm:p-7 rounded-2xl bg-[#121216] border border-white/[0.08] hover:border-brand-crimson/60 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Step Number Badge & Icon */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <span className="font-mono text-xs font-bold text-white bg-white/[0.06] group-hover:bg-brand-crimson group-hover:text-white transition-colors px-3 py-1 rounded-full border border-white/10">
                      STAGE {item.step}
                    </span>
                    <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] group-hover:bg-brand-gold/15 transition-colors">
                      <Icon className="w-4 h-4 text-brand-gold" />
                    </div>
                  </div>

                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-white group-hover:text-brand-crimson transition-colors tracking-tight">
                    {item.name}
                  </h3>
                  
                  <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mt-0.5 sm:mt-1">
                    {item.tagline}
                  </span>

                  <p className="text-xs sm:text-sm text-zinc-300 mt-3 sm:mt-4 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500 group-hover:text-brand-gold transition-colors">
                  <span>Phase {item.step} // 05</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
