"use client";

import React from "react";
import { HeroSection } from "@/components/sections/hero";
import { TrustedSection } from "@/components/sections/trusted";
import { ProblemSection } from "@/components/sections/problem";
import { FeaturesSection } from "@/components/sections/features";
import { ShowcaseSection } from "@/components/sections/showcase";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { SecuritySection } from "@/components/sections/security";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { PricingSection } from "@/components/sections/pricing";
import { FAQSection } from "@/components/sections/faq";
import { FinalCTASection } from "@/components/sections/final-cta";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <main className="relative z-10 w-full min-h-screen bg-white">
      {/* Subtle page-wide grid overlays */}
      <div className="absolute inset-0 medical-grid pointer-events-none opacity-[0.4]" />

      <HeroSection />
      <TrustedSection />
      <ProblemSection />
      <FeaturesSection />
      <ShowcaseSection />
      <HowItWorksSection />
      <SecuritySection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <SiteFooter />
    </main>
  );
}
