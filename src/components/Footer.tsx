"use client";

import React from "react";
import Image from "next/image";
import { Phone, Globe } from "lucide-react";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from "./SocialIcons";

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const currentYear = 2026;

  return (
    <footer className="relative bg-[#09090B] border-t border-white/[0.08] text-white pt-14 sm:pt-20 pb-10 sm:pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 sm:pb-16 border-b border-white/[0.08]">

          {/* Brand Identity & Tagline */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a href="#" className="flex items-center gap-3 group mb-4 sm:mb-6">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-white p-0.5 border border-white/20 group-hover:border-brand-crimson transition-colors shadow-lg flex-shrink-0">
                <Image
                  src="/assets/logo.jpg"
                  alt="BizHacks Media Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-white block">
                  BizHacks<span className="text-brand-crimson">Media</span>
                  <span className="text-xs text-brand-gold ml-1">™</span>
                </span>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-zinc-400">
                  Global Creator Growth
                </span>
              </div>
            </a>

            <p className="font-display font-semibold text-base sm:text-xl text-zinc-200 mb-2 sm:mb-3">
              &ldquo;We Make Creators Brands.&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed mb-4 sm:mb-6">
              A premier digital marketing and creator-growth agency helping brands, founders, and creators engineer enduring cultural authority and commercial scale.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-brand-crimson" />
              <span>Los Angeles • International Operations</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 flex flex-col gap-2.5 sm:gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-gold font-bold mb-1 sm:mb-2">
              Navigation
            </span>
            <a href="#work" className="text-xs sm:text-sm text-zinc-300 hover:text-white transition-colors py-0.5">
              Selected Work
            </a>
            <a href="#services" className="text-xs sm:text-sm text-zinc-300 hover:text-white transition-colors py-0.5">
              Core Services
            </a>
            <a href="#about" className="text-xs sm:text-sm text-zinc-300 hover:text-white transition-colors py-0.5">
              About BizHacks
            </a>
            <a href="#creators" className="text-xs sm:text-sm text-zinc-300 hover:text-white transition-colors py-0.5">
              Creator Roster
            </a>
            <a href="#process" className="text-xs sm:text-sm text-zinc-300 hover:text-white transition-colors py-0.5">
              Our Process
            </a>
            <button
              onClick={onOpenContact}
              className="text-left text-xs sm:text-sm text-brand-crimson hover:text-white transition-colors py-0.5 font-semibold"
            >
              Contact &amp; Bookings →
            </button>
          </div>

          {/* Social Channels & Contact */}
          <div className="lg:col-span-4 flex flex-col gap-3.5 sm:gap-4">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-gold font-bold">
              Connect &amp; Inquiries
            </span>

            {/* Contact Details */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-surface border border-white/10 flex flex-col gap-2">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200">
                <Phone className="w-4 h-4 text-brand-crimson flex-shrink-0" />
                <a
                  href="tel:+912269622235"
                  className="hover:text-brand-gold transition-colors font-mono"
                >
                  +91 2269622235
                </a>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200">
                <Globe className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span className="font-mono">bizhacksmedia.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://instagram.com/bizhacks_media"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 sm:p-3 rounded-xl bg-[#141418] hover:bg-brand-crimson/20 border border-white/10 hover:border-brand-crimson text-zinc-300 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://wa.me/912269622235"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 sm:p-3 rounded-xl bg-[#141418] hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500 text-zinc-300 hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              </a>
              <a
                href="https://linkedin.com/company/bizhacksmedia"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 sm:p-3 rounded-xl bg-[#141418] hover:bg-blue-600/20 border border-white/10 hover:border-blue-500 text-zinc-300 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright and Legal Notice */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs font-mono text-zinc-500">
          <p>© {currentYear} BizHacks Media. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="hover:text-zinc-300 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-zinc-300 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="text-zinc-400">Los Angeles // Global</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
