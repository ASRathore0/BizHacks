"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Sparkles, Layers, TrendingUp } from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      num: "01",
      title: "Strategy",
      tagline: "Precision targeting & audience architecture",
      desc: "We diagnose market whitespace and position creators and brands with unshakeable narrative clarity.",
      icon: Compass,
    },
    {
      num: "02",
      title: "Content",
      tagline: "Hook-driven, cinematic editorial output",
      desc: "Every asset is engineered for algorithmic lift, emotional retention, and organic conversation.",
      icon: Layers,
    },
    {
      num: "03",
      title: "Influence",
      tagline: "Authentic cultural authority",
      desc: "Bridging creators and forward-thinking enterprises for high-converting, non-cringe brand integrations.",
      icon: Sparkles,
    },
    {
      num: "04",
      title: "Growth",
      tagline: "Compounding scale & monetization",
      desc: "Sustainable digital funnels, IP expansion, and recurring commercial sponsorship pipelines.",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="about" className="relative py-28 sm:py-36 bg-[#09090B] overflow-hidden">
      {/* Background Radial Tint */}
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-burgundy-900/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Asymmetric Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest uppercase text-brand-crimson font-semibold mb-6">
            WHAT WE DO
          </div>
          
          <h2 className="section-title font-display text-white mb-8">
            Attention is easy. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-crimson via-red-400 to-brand-gold">
              Building influence is not.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed border-l-2 border-brand-crimson pl-6">
            BizHacks Media helps creators and brands turn digital attention into meaningful growth.
            From social strategy and content to influencer partnerships and brand collaborations,
            we build systems that make brands impossible to ignore.
          </p>
        </div>

        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Side: Large Art-Directed Creative Image from Supplied Assets */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#121215] shadow-2xl group">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/assets/campaign_main.jpg"
                  alt="BizHacks Media US Marketing System"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                {/* Floating Tag */}
                <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[11px] font-mono text-zinc-200 uppercase tracking-wider">
                  Los Angeles • International
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-mono text-brand-gold uppercase tracking-widest block mb-1">
                    BizHacks Growth System
                  </span>
                  <p className="font-display font-extrabold text-xl leading-tight">
                    Turn your audience into lifelong brand champions.
                  </p>
                  <p className="text-xs text-zinc-400 mt-2 font-mono">
                    Full-funnel digital execution with guaranteed deliverables.
                  </p>
                </div>
              </div>
            </div>

            {/* Accent Floating Badge Behind */}
            <div className="absolute -bottom-6 -right-6 w-36 h-36 rounded-2xl bg-gradient-to-br from-brand-crimson/20 to-brand-gold/10 border border-white/10 -z-10 blur-[2px] hidden sm:block" />
          </div>

          {/* Right Side: 01 to 04 Animated Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {pillars.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="p-6 sm:p-7 rounded-2xl bg-[#121215]/80 hover:bg-[#18181D] border border-white/[0.07] hover:border-brand-crimson/40 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs sm:text-sm font-bold text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded border border-brand-gold/20">
                        {item.num}
                      </span>
                      <h3 className="font-display font-black text-2xl sm:text-3xl text-white group-hover:text-brand-crimson transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <div className="p-2.5 rounded-full bg-white/[0.04] group-hover:bg-brand-crimson/20 transition-colors">
                      <Icon className="w-5 h-5 text-zinc-400 group-hover:text-brand-crimson transition-colors" />
                    </div>
                  </div>

                  <div className="mt-4 pl-1 sm:pl-11">
                    <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1 font-medium">
                      {item.tagline}
                    </p>
                    <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
