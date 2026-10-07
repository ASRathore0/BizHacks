"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Send, Bookmark, CheckCircle, ExternalLink } from "lucide-react";
import { InstagramIcon } from "./SocialIcons";

export default function SocialProof() {
  const metrics = [
    { label: "Community", value: "747+", sub: "Engaged creator network" },
    { label: "Brand Deals", value: "150+", sub: "Cross-border collaborations" },
    { label: "Global Reach", value: "Multi-Region", sub: "US, Asia & Europe" },
    { label: "Retention Rate", value: "Top-Tier", sub: "Above-benchmark watch time" },
  ];

  return (
    <section className="relative py-16 sm:py-32 bg-[#0B0B0E] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[500px] bg-brand-crimson/10 blur-[130px] sm:blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6 sm:gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest uppercase text-brand-gold font-semibold mb-3">
              <InstagramIcon className="w-3.5 h-3.5 text-brand-crimson" />
              SOCIAL PULSE &amp; PRESENCE
            </div>
            <h2 className="section-title font-display text-white uppercase max-w-xl">
              THE INTERNET <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-crimson via-red-400 to-brand-gold">
                IS TALKING.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              We practice what we preach. Discover our ongoing campaigns, creator moments, and brand breakthroughs across Instagram and digital feeds.
            </p>
            <a
              href="https://instagram.com/bizhacks_media"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-3 sm:mt-4 text-xs font-mono text-brand-gold hover:text-white transition-colors"
            >
              <span>Follow @bizhacks_media on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4 Core Quantitative Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-10 sm:mb-16">
          {metrics.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-4 sm:p-6 rounded-2xl bg-[#121216] border border-white/[0.08] hover:border-brand-crimson/40 transition-colors group"
            >
              <div className="font-display font-black text-2xl sm:text-4xl text-white group-hover:text-brand-crimson transition-colors">
                {m.value}
              </div>
              <div className="font-display font-bold text-xs sm:text-sm text-zinc-200 mt-1.5 sm:mt-2">
                {m.label}
              </div>
              <div className="text-[10px] sm:text-xs text-zinc-400 mt-0.5 sm:mt-1">
                {m.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Visual Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
          
          {/* Post Card 1: Official BizHacks Media US Post */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-[#131317] border border-white/10 hover:border-brand-crimson/50 transition-all duration-300 overflow-hidden shadow-2xl flex flex-col group"
          >
            {/* Post Header */}
            <div className="p-3.5 sm:p-4 flex items-center justify-between border-b border-white/[0.06]">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-brand-crimson p-0.5 bg-white flex-shrink-0">
                  <Image
                    src="/assets/logo.jpg"
                    alt="BizHacks Media Avatar"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1">
                    bizhacks_media.us
                    <CheckCircle className="w-3 h-3 text-blue-400 fill-blue-400" />
                  </div>
                  <div className="text-[10px] text-zinc-400 font-mono">Los Angeles, California</div>
                </div>
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded border border-brand-gold/20">
                Official Agency
              </span>
            </div>

            {/* Post Creative Visual */}
            <div className="relative aspect-[4/5] w-full bg-black">
              <Image
                src="/assets/campaign_main.jpg"
                alt="BizHacks Media US Campaign Creative"
                fill
                className="object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>

            {/* Action Bar */}
            <div className="p-3.5 sm:p-4 border-t border-white/[0.06] flex flex-col gap-2">
              <div className="flex items-center justify-between text-zinc-300">
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-brand-crimson fill-brand-crimson cursor-pointer" />
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-white" />
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-white" />
                </div>
                <Bookmark className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-white" />
              </div>
              <div className="text-xs text-zinc-200">
                Liked by <span className="font-bold text-white">bizhacks_media</span> and <span className="font-bold text-white">others</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                <span className="font-bold text-white mr-1">bizhacks_media.us</span>
                More than just marketing — we create experiences that build loyalty, spark engagement, and turn your audience into lifelong customers.
              </p>
            </div>
          </motion.div>

          {/* Post Card 2: Strategic War Room Collaboration */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl bg-[#131317] border border-white/10 hover:border-brand-gold/50 transition-all duration-300 overflow-hidden shadow-2xl flex flex-col group"
          >
            <div className="p-3.5 sm:p-4 flex items-center justify-between border-b border-white/[0.06]">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-white/20 bg-zinc-800 flex-shrink-0">
                  <Image
                    src="/assets/creator_2.jpg"
                    alt="Creator Partner"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">creator_growth_collective</div>
                  <div className="text-[10px] text-zinc-400 font-mono">Creative Session</div>
                </div>
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono text-zinc-400">Collaboration</span>
            </div>

            <div className="relative aspect-[4/5] w-full bg-black">
              <Image
                src="/assets/team_collaboration.jpg"
                alt="Strategy meeting"
                fill
                className="object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>

            <div className="p-3.5 sm:p-4 border-t border-white/[0.06] flex flex-col gap-2">
              <div className="flex items-center justify-between text-zinc-300">
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-brand-crimson fill-brand-crimson" />
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <Bookmark className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="text-xs text-zinc-200">
                Backed by <span className="font-bold text-white">BizHacks Strategy Team</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Behind the scenes at the quarterly brand incubator. Structuring cross-creator campaign architectures that drive genuine purchase intent.
              </p>
            </div>
          </motion.div>

          {/* Post Card 3: Official Creator Signing - Alone Royal (6M+ Reach) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-3xl bg-[#131317] border border-white/10 hover:border-brand-crimson/50 transition-all duration-300 overflow-hidden shadow-2xl flex flex-col group"
          >
            <div className="p-3.5 sm:p-4 flex items-center justify-between border-b border-white/[0.06]">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-white/20 bg-zinc-800 flex-shrink-0">
                  <Image
                    src="/assets/creator_alone_royal.jpg"
                    alt="Alone Royal"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">alonearoyal</div>
                  <div className="text-[10px] text-zinc-400 font-mono">Content Creator • 6M+ Reach</div>
                </div>
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono text-brand-crimson font-bold bg-brand-crimson/10 px-2 py-0.5 rounded border border-brand-crimson/20">Official Signing</span>
            </div>

            <div className="relative aspect-[3/4] w-full bg-black">
              <Image
                src="/assets/creator_alone_royal.jpg"
                alt="Alone Royal - 6M+ Network On Social Media"
                fill
                className="object-contain group-hover:scale-102 transition-transform duration-500"
              />
            </div>

            <div className="p-3.5 sm:p-4 border-t border-white/[0.06] flex flex-col gap-2">
              <div className="flex items-center justify-between text-zinc-300">
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-brand-crimson fill-brand-crimson cursor-pointer" />
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-white" />
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-white" />
                </div>
                <Bookmark className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-white" />
              </div>
              <div className="text-xs text-zinc-200">
                Liked by <span className="font-bold text-white">bizhacks_media</span> and <span className="font-bold text-white">thousands more</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                <span className="font-bold text-white mr-1">bizhacks_media</span>
                Welcome to THE BIZHACKS MEDIA! Proud to welcome <span className="text-brand-gold font-bold">Alone Royal</span> (6M+ Network) to our exclusive creator roster. Next-level brand collaborations starting now.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
