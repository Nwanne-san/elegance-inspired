"use client";

import { useState, useEffect, useRef } from "react";
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
  const modalTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Clear any existing timers when component mounts or unmounts
    return () => {
      if (modalTimerRef.current) {
        clearTimeout(modalTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Only run this effect after component has mounted to prevent double execution
    if (!isMounted) return;

    // Check if this is the first visit or if it's been more than 24 hours
    const lastVisit = localStorage.getItem("lastVisit");
    const now = new Date();
    const today = now.toDateString();

    // Check if we should show the modal (first visit of the day)
    const shouldShowModal = !lastVisit || lastVisit !== today;

    if (shouldShowModal) {
      // First visit today, show modal after 45 seconds
      modalTimerRef.current = setTimeout(() => {
        setShowCallbackModal(true);
        // Save current timestamp to localStorage
        localStorage.setItem("lastVisit", today);
      }, 45000); // 45 seconds
    }
  }, [isMounted]);

  return (
    <main className="w-full">
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
      />
    </main>
  );
}
