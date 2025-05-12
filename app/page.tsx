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
    return () => {
      if (modalTimerRef.current) {
        clearTimeout(modalTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const modalClosed = localStorage.getItem("modalClosed");
    const formSubmitted = localStorage.getItem("formSubmitted");

    if (!formSubmitted) {
      const initialTimer = setTimeout(() => {
        setShowCallbackModal(true);
      }, 5000);
      modalTimerRef.current = initialTimer;
    }
    const reappearInterval = setInterval(() => {
      const isFormSubmitted = localStorage.getItem("formSubmitted");
      if (!isFormSubmitted) {
        setShowCallbackModal(true);
      }
    }, 50000);

    return () => {
      clearTimeout(modalTimerRef.current!);
      clearInterval(reappearInterval);
    };
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
