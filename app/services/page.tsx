import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo-config";
import ServicesContent from "@/components/services/services-content";

export const metadata: Metadata = generateMetadata(
  "Our Services - Branding, Advertising, Marketing & More",
  "Explore our comprehensive range of services including Creative Branding, Strategic Advertising, Digital Transformation, Quality Printing, and HR Consulting.",
  "/images/services-og.jpg",
  [
    "branding services",
    "advertising services",
    "digital marketing",
    "printing services",
    "HR consulting",
  ]
);

export default function ServicesPage() {
  return <ServicesContent />;
}
