"use client";

import React, { useState } from "react";
import { X, Send, Sparkles, MessageCircle, Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  preselectedService = "",
}: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
    brandOrCreator: "",
    budget: "$2,500 – $5,000 / mo",
    service: preselectedService || "Social Media Marketing",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppLink = () => {
    const text = `Hi BizHacks Media! I am reaching out to start a project.\nName: ${formData.name || "Client"}\nBrand/Creator: ${formData.brandOrCreator || "N/A"}\nService: ${formData.service}\nBudget: ${formData.budget}\nMessage: ${formData.message || "Looking to scale growth."}`;
    return `https://wa.me/9122962262235?text=${encodeURIComponent(text)}`;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl rounded-3xl bg-[#121216] border border-white/20 shadow-2xl p-6 sm:p-10 max-h-[92vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/[0.06] hover:bg-brand-crimson text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-gold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                INITIATE PROJECT // BIZHACKS MEDIA™
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                Let&apos;s Build Something Unstoppable.
              </h3>
              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                Tell us about your brand or creator vision. Our strategy directors respond within 24 hours.
              </p>

              {/* Direct WhatsApp Callout */}
              <div className="my-6 p-4 rounded-2xl bg-gradient-to-r from-[#17171C] via-[#1A1A22] to-[#17171C] border border-brand-gold/30 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Prefer instant chat?</div>
                    <div className="text-[11px] text-zinc-400 font-mono">
                      WhatsApp Hotline: +91 22962262235
                    </div>
                  </div>
                </div>
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider transition-colors whitespace-nowrap"
                >
                  WhatsApp Now →
                </a>
              </div>

              {/* In-depth Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                      Your Name / Entity *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#09090B] border border-white/10 focus:border-brand-crimson text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                      Phone / WhatsApp / Handle *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="+1 (555) 000-0000 or @handle"
                      value={formData.contactInfo}
                      onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#09090B] border border-white/10 focus:border-brand-crimson text-white text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                      Service Protocol
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#09090B] border border-white/10 focus:border-brand-crimson text-white text-sm outline-none transition-colors cursor-pointer"
                    >
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="Content Marketing">Content Marketing</option>
                      <option value="Influencer Marketing">Influencer Marketing</option>
                      <option value="Brand Collaborations">Brand Collaborations</option>
                      <option value="Talent Management">Talent Management</option>
                      <option value="Marketing Strategy">Marketing Strategy</option>
                      <option value="Content Planning">Content Planning</option>
                      <option value="Viral Growth">Viral Growth</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                      Estimated Investment Tier
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#09090B] border border-white/10 focus:border-brand-crimson text-white text-sm outline-none transition-colors cursor-pointer"
                    >
                      <option value="$1,500 – $2,500 / mo">Emerging ($1,500 – $2,500 / mo)</option>
                      <option value="$2,500 – $5,000 / mo">Growth ($2,500 – $5,000 / mo)</option>
                      <option value="$5,000 – $15,000 / mo">Scale ($5,000 – $15,000 / mo)</option>
                      <option value="$15,000+ / Custom Enterprise">Enterprise ($15,000+ / mo)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                    Project Vision &amp; Current Footprint
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your objectives, existing channels, target timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#09090B] border border-white/10 focus:border-brand-crimson text-white text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-4 rounded-xl bg-gradient-to-r from-burgundy-800 via-burgundy-700 to-brand-crimson hover:from-burgundy-700 hover:to-brand-red text-white font-display font-bold text-sm uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <span>Submit Project Brief</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-5 py-4 rounded-xl bg-[#1A1A20] hover:bg-[#22222a] border border-white/15 text-zinc-200 text-xs font-mono flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Send on WhatsApp</span>
                  </a>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="p-4 rounded-full bg-brand-crimson/20 border border-brand-crimson/40 text-brand-crimson mb-6">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="font-display font-black text-3xl text-white mb-2">
                Brief Received!
              </h3>
              <p className="text-zinc-300 text-sm max-w-md leading-relaxed mb-8">
                Thank you, <span className="text-white font-semibold">{formData.name}</span>.
                Our executive team at BizHacks Media has logged your brief and will review your requirements for{" "}
                <span className="text-brand-gold">{formData.service}</span>.
              </p>

              <div className="flex items-center gap-4">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Follow Up Instantly on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-3 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-zinc-300 text-xs font-mono"
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
