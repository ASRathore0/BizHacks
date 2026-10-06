"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Creators", href: "#creators" },
    { label: "Process", href: "#process" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-2.5 sm:py-3.5 bg-[#09090B]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/90"
            : "py-4 sm:py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo with uploaded brand identity */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none rounded-lg p-0.5"
          >
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-white p-0.5 shadow-md shadow-black/50 border border-white/20 group-hover:border-brand-crimson transition-all duration-300 flex-shrink-0">
              <Image
                src="/assets/logo.jpg"
                alt="BizHacks Media™ Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-display font-black text-base sm:text-xl tracking-tight text-white flex items-center gap-1 leading-tight">
                BizHacks<span className="text-brand-crimson">Media</span>
                <span className="text-[10px] text-brand-gold font-mono font-bold leading-none">
                  ™
                </span>
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-zinc-400 font-mono font-medium truncate max-w-[160px] sm:max-w-none">
                We Make Creators Brands
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 bg-[#161619]/60 border border-white/[0.06] backdrop-blur-md px-6 py-2 rounded-full shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-brand-darkRed to-brand-crimson transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Action CTA + Mobile Trigger */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-burgundy-800 via-burgundy-700 to-brand-crimson hover:from-burgundy-700 hover:to-brand-red border border-white/10 shadow-lg shadow-burgundy-950/60 hover:shadow-brand-crimson/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 group"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-[#141417] border border-white/10 text-zinc-200 hover:text-white focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-brand-gold" /> : <Menu className="w-5 h-5 text-zinc-100" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#09090B]/98 backdrop-blur-2xl md:hidden transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 pt-24 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-6"
        }`}
      >
        <div className="flex flex-col gap-5">
          <p className="text-[11px] uppercase tracking-widest text-zinc-500 font-mono">
            Navigation // BizHacks Media™
          </p>
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl sm:text-3xl font-display font-extrabold text-white hover:text-brand-crimson transition-colors flex items-center justify-between group py-1"
            >
              <span>{link.label}</span>
              <span className="text-xs font-mono text-zinc-500 group-hover:text-brand-crimson">
                0{idx + 1}
              </span>
            </a>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col gap-4">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full py-4 rounded-xl text-center font-display font-bold text-white bg-gradient-to-r from-burgundy-800 to-brand-crimson shadow-xl flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
            <span>WhatsApp: +91 22962262235</span>
            <span>@bizhacks_media</span>
          </div>
        </div>
      </div>
    </>
  );
}
