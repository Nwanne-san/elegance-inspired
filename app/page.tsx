"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/home/hero-section";
import ServicesHighlight from "@/components/home/services-highlight";
import AboutSection from "@/components/home/about-section";
import PackagesHighlight from "@/components/home/packages-highlight";
import TeamSection from "@/components/home/team-section";
import ClientsSection from "@/components/home/clients-section";
import PortfolioHighlight from "@/components/home/portfolio-highlight";
import BlogHighlight from "@/components/home/blog-highlight";
import CTASection from "@/components/home/cta-section";
import ScrollToTop from "@/components/scroll-to-top";
import { RequestCallbackModal } from "@/components/request-callback-modal";

export default function Home() {
  const [showCallbackModal, setShowCallbackModal] = useState(false);

  useEffect(() => {
    // Check if this is the first visit today
    const lastVisit = localStorage.getItem("lastVisit");
    const today = new Date().toDateString();

    if (!lastVisit || lastVisit !== today) {
      // First visit today, show modal after a short delay
      const timer = setTimeout(() => {
        setShowCallbackModal(true);
        // Save today's date to localStorage
        localStorage.setItem("lastVisit", today);
      }, 2000); // Adjust delay as needed

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesHighlight />
      <AboutSection />
      <PackagesHighlight />
      <TeamSection />
      <ClientsSection />
      <PortfolioHighlight />
      <BlogHighlight />
      <CTASection />
      <Footer />
      <ScrollToTop />
      <RequestCallbackModal
        show={showCallbackModal}
        onClose={() => setShowCallbackModal(false)}
        isOpen={false}
      />
    </>
  );
}
