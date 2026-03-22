import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { generateMetadata } from "@/lib/seo-config";
import CTASection from "@/components/home/cta-section";
import PageHeader from "@/components/page-header";
import PortfolioCategories from "@/components/portfolio/portfolio-categories";
import PortfolioGrid from "@/components/portfolio/portfolio-grid";

export const metadata: Metadata = generateMetadata(
  "Our Portfolio - Elegance Inspired Limited",
  "Explore our portfolio of branding, marketing, advertising, and design projects. See how we've helped businesses transform their brands.",
  "/og-image.jpg",
  [
    "portfolio",
    "branding projects",
    "marketing projects",
    "design work",
    "brand identity",
    "event branding",
  ]
);

export const revalidate = 3600;

export default function Portfolio() {
  return (
    <div>
      <Navbar />
      <PageHeader
        title="Our Portfolio"
        description="Explore our recent projects and see how we've helped businesses transform their brands."
      />
      <PortfolioCategories />
      <PortfolioGrid />
      <CTASection />
      <Footer />
    </div>
  );
}
