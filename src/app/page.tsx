"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import TrustSection from "../components/TrustSection";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import Creators from "../components/Creators";
import SelectedWork from "../components/SelectedWork";
import WhyBizHacks from "../components/WhyBizHacks";
import Process from "../components/Process";
import SocialProof from "../components/SocialProof";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";
import CustomCursor from "../components/CustomCursor";

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState("");

  const handleOpenContact = () => {
    setSelectedServiceForModal("");
    setContactModalOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForModal(serviceName);
    setContactModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#09090B] text-white selection:bg-brand-darkRed selection:text-white relative">
      {/* Sleek Custom Cursor */}
      <CustomCursor />

      {/* Fixed Header Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Hero Section */}
      <Hero onOpenContact={handleOpenContact} />

      {/* Marquee Ticker */}
      <Marquee />

      {/* Trust & Social Proof Stats */}
      <TrustSection />

      {/* About & Positioning */}
      <AboutSection />

      {/* Core Services Section with Hover Previews */}
      <Services onSelectService={handleSelectService} />

      {/* Creator Showcase Section */}
      <Creators onOpenContact={handleOpenContact} />

      {/* Selected Work & Case Studies */}
      <SelectedWork onOpenContact={handleOpenContact} />

      {/* Why BizHacks (The 4 Momentum Principles) */}
      <WhyBizHacks />

      {/* Horizontal Process Section */}
      <Process />

      {/* Social Media Proof & Live Feed Presence */}
      <SocialProof />

      {/* Final Dramatic CTA */}
      <FinalCTA onOpenContact={handleOpenContact} />

      {/* Minimal Agency Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Interactive Contact & WhatsApp Drawer */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        preselectedService={selectedServiceForModal}
      />
    </main>
  );
}
