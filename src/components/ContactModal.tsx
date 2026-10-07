"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Send,
  Sparkles,
  MessageCircle,
  Phone,
  CheckCircle2,
  ArrowRight,
  User,
  Building2,
  Zap,
  ShieldCheck,
  Clock,
  ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

const SERVICES = [
  "Social Media Marketing",
  "Influencer Marketing",
  "Talent Management",
  "Content Marketing",
  "Brand Collaborations",
  "Viral Growth & Funnels",
  "Marketing Strategy & Analysis",
  "Content Planning",
];

const BUDGET_TIERS = [
  { label: "$1.5K – $2.5K / mo", desc: "Emerging" },
  { label: "$2.5K – $5K / mo", desc: "Growth (Popular)" },
  { label: "$5K – $15K / mo", desc: "Scale" },
  { label: "$15K+ / Enterprise", desc: "Custom" },
];

const ENTITY_TYPES = [
  { id: "brand", label: "Brand / Business", icon: Building2 },
  { id: "creator", label: "Creator / Influencer", icon: Sparkles },
  { id: "agency", label: "Agency / Partner", icon: Zap },
];

export default function ContactModal({
  isOpen,
  onClose,
  preselectedService = "",
}: ContactModalProps) {
  const [entityType, setEntityType] = useState("brand");
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
    brandOrHandle: "",
    service: preselectedService || SERVICES[0],
    budget: BUDGET_TIERS[1].label,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Sync preselectedService when passed
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppLink = () => {
    const text = `Hi BizHacks Media! I'd like to initiate a project.\n\n👤 Type: ${entityType.toUpperCase()}\n📛 Name: ${formData.name || "Client"}\n🏢 Brand/Handle: ${formData.brandOrHandle || "N/A"}\n📞 Contact: ${formData.contactInfo || "N/A"}\n🎯 Service: ${formData.service}\n💰 Investment Tier: ${formData.budget}\n📝 Objectives: ${formData.message || "Looking to scale visibility and growth."}`;
    return `https://wa.me/912269622235?text=${encodeURIComponent(text)}`;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6 bg-black/90 backdrop-blur-xl">
        {/* Backdrop click to close */}
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-2xl rounded-2xl sm:rounded-3xl bg-[#121216] border border-white/15 shadow-2xl shadow-black/90 p-5 sm:p-8 md:p-9 max-h-[94vh] sm:max-h-[90vh] overflow-y-auto z-10 scrollbar-thin scrollbar-thumb-zinc-700"
        >
          {/* Top Close Button */}
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/[0.08] hover:bg-brand-crimson text-zinc-300 hover:text-white transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="pr-10">
                <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-brand-gold font-semibold mb-2">
                  <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>START A PROJECT // BIZHACKS MEDIA™</span>
                </div>
                <h3 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                  Let&apos;s Build Something Unstoppable.
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 leading-relaxed">
                  Brief us on your goals. Our growth team responds within 24 hours with an actionable roadmap.
                </p>
              </div>

              {/* Instant WhatsApp Quick Banner */}
              <div className="mt-5 mb-6 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#17171E] via-[#1C1C24] to-[#17171E] border border-emerald-500/25 flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      Need Immediate Answers?
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <div className="text-[11px] text-zinc-400 font-mono truncate">
                      WhatsApp Direct: +91 2269622235
                    </div>
                  </div>
                </div>
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 sm:py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 flex-shrink-0 shadow-md shadow-emerald-950/40"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Structured Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
                
                {/* STEP 1: Entity Type Selector */}
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2 font-medium">
                    1. Tell Us Who You Are
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {ENTITY_TYPES.map((type) => {
                      const Icon = type.icon;
                      const isSelected = entityType === type.id;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setEntityType(type.id)}
                          className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all flex flex-col sm:flex-row items-start sm:items-center gap-2 ${
                            isSelected
                              ? "bg-brand-crimson/20 border-brand-crimson text-white shadow-lg shadow-brand-crimson/20"
                              : "bg-[#0B0B0E] border-white/10 text-zinc-400 hover:border-white/20 hover:text-zinc-200"
                          }`}
                        >
                          <Icon className={`w-4 h-4 flex-shrink-0 ${isSelected ? "text-brand-crimson" : "text-zinc-500"}`} />
                          <span className="text-[11px] sm:text-xs font-medium leading-tight">{type.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* STEP 2: Contact Essentials */}
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2 font-medium">
                    2. Primary Details
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl bg-[#0B0B0E] border border-white/10 focus:border-brand-crimson focus:ring-1 focus:ring-brand-crimson/30 text-white text-base sm:text-sm outline-none transition-all placeholder:text-zinc-500"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Brand Name or Social Handle"
                        value={formData.brandOrHandle}
                        onChange={(e) => setFormData({ ...formData, brandOrHandle: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl bg-[#0B0B0E] border border-white/10 focus:border-brand-crimson focus:ring-1 focus:ring-brand-crimson/30 text-white text-base sm:text-sm outline-none transition-all placeholder:text-zinc-500"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <input
                        type="text"
                        required
                        placeholder="WhatsApp Number or Email Address *"
                        value={formData.contactInfo}
                        onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl bg-[#0B0B0E] border border-white/10 focus:border-brand-crimson focus:ring-1 focus:ring-brand-crimson/30 text-white text-base sm:text-sm outline-none transition-all placeholder:text-zinc-500"
                      />
                    </div>
                  </div>
                </div>

                {/* STEP 3: Service Protocol & Budget */}
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2 font-medium">
                    3. Service Scope &amp; Budget
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    
                    {/* Service Selector */}
                    <div>
                      <span className="text-[10px] text-zinc-400 block mb-1">Target Service</span>
                      <div className="relative">
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full appearance-none px-3.5 py-3 pr-10 rounded-xl bg-[#0B0B0E] border border-white/10 focus:border-brand-crimson text-white text-base sm:text-sm outline-none transition-all cursor-pointer font-sans"
                        >
                          {SERVICES.map((serv) => (
                            <option key={serv} value={serv} className="bg-[#121216] text-white">
                              {serv}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Budget Tier Selector */}
                    <div>
                      <span className="text-[10px] text-zinc-400 block mb-1">Investment Tier</span>
                      <div className="relative">
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full appearance-none px-3.5 py-3 pr-10 rounded-xl bg-[#0B0B0E] border border-white/10 focus:border-brand-crimson text-white text-base sm:text-sm outline-none transition-all cursor-pointer font-sans"
                        >
                          {BUDGET_TIERS.map((tier) => (
                            <option key={tier.label} value={tier.label} className="bg-[#121216] text-white">
                              {tier.label} — {tier.desc}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                  </div>
                </div>

                {/* STEP 4: Project Vision Message */}
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1.5 font-medium">
                    4. Brief Us on Your Vision &amp; Current Footprint
                  </label>
                  <textarea
                    rows={3}
                    placeholder="E.g., We want to scale our brand's Instagram reach, collaborate with top 10 creators, and launch next month..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl bg-[#0B0B0E] border border-white/10 focus:border-brand-crimson focus:ring-1 focus:ring-brand-crimson/30 text-white text-base sm:text-sm outline-none transition-all resize-none placeholder:text-zinc-500"
                  />
                </div>

                {/* Submit Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 sm:py-4 px-6 rounded-xl bg-gradient-to-r from-burgundy-800 via-burgundy-700 to-brand-crimson hover:from-burgundy-700 hover:to-brand-red text-white font-display font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-burgundy-950/70 hover:shadow-brand-crimson/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Submit Project Brief</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="py-3.5 sm:py-4 px-5 rounded-xl bg-[#1A1A22] hover:bg-[#242430] border border-white/10 hover:border-white/20 text-zinc-200 text-xs font-mono flex items-center justify-center gap-2 transition-all text-center"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Send on WhatsApp</span>
                  </a>
                </div>

                {/* Trust Badges Bar */}
                <div className="pt-2 border-t border-white/[0.06] flex items-center justify-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] font-mono text-zinc-400 text-center">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                    <span>100% Confidential</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-brand-crimson" />
                    <span>24h Partner Response</span>
                  </span>
                  <span className="hidden xs:inline">•</span>
                  <span className="hidden xs:inline text-zinc-400">Zero Obligation Call</span>
                </div>

              </form>
            </div>
          ) : (
            /* Celebration Success State */
            <div className="py-6 sm:py-10 text-center flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-4 rounded-full bg-brand-crimson/20 border border-brand-crimson/40 text-brand-crimson mb-5"
              >
                <CheckCircle2 className="w-12 h-12" />
              </motion.div>
              
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-2">
                Project Brief Received!
              </h3>
              
              <p className="text-zinc-300 text-xs sm:text-sm max-w-md leading-relaxed mb-6">
                Thank you, <span className="text-white font-bold">{formData.name || "there"}</span>.
                Our strategy team at BizHacks Media has logged your brief for{" "}
                <span className="text-brand-gold font-semibold">{formData.service}</span>.
              </p>

              {/* Summary recap pill */}
              <div className="mb-6 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-left text-xs font-mono text-zinc-300 max-w-sm w-full space-y-1">
                <div><span className="text-zinc-500">Service:</span> {formData.service}</div>
                <div><span className="text-zinc-500">Investment Tier:</span> {formData.budget}</div>
                {formData.contactInfo && <div><span className="text-zinc-500">Contact:</span> {formData.contactInfo}</div>}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Follow Up Now on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-zinc-300 text-xs font-mono transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
