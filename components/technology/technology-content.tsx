"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/home/cta-section";
import TechnologyHero from "@/components/technology/technology-hero";
import TechnologyCapabilities from "@/components/technology/technology-capabilities";
import TechnologyProcess from "@/components/technology/technology-process";
import TechnologyWhyUs from "@/components/technology/technology-why-us";
import TechnologyIndustries from "@/components/technology/technology-industries";
import TechnologyFAQ from "@/components/technology/technology-faq";

export default function TechnologyContent() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Navbar />
      <TechnologyHero />
      <TechnologyCapabilities />
      <TechnologyProcess />
      <TechnologyWhyUs />
      <TechnologyIndustries />
      <TechnologyFAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
