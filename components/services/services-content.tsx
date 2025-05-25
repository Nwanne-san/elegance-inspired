"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import ServicesIntro from "@/components/services/services-intro";
import CorporateBranding from "@/components/services/corporate-branding";
import StrategicAdvertising from "@/components/services/strategic-advertising";
import DigitalMarketing from "@/components/services/digital-marketing";
import PremiumPrinting from "@/components/services/premium-printing";
import HrConsulting from "@/components/services/hr-consulting";
import CTASection from "@/components/home/cta-section";

export default function ServicesContent() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [pathname]);

  return (
    <main className="flex min-h-screen flex-col w-full">
      <Navbar />
      <PageHeader
        title="Our Services"
        className="!pb-6"
        description="Explore our comprehensive range of services designed to elevate your brand."
      />
      <ServicesIntro />
      <CorporateBranding />
      <StrategicAdvertising />
      <DigitalMarketing />
      <PremiumPrinting />
      <HrConsulting />
      <CTASection />
      <Footer />
    </main>
  );
}
