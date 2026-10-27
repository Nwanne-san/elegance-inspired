import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo-config";
import ServicesContent from "@/components/services/services-content";

export const metadata: Metadata = generateMetadata(
  "Our Services - Branding, Advertising, Marketing & More",
  "Explore our comprehensive range of services including Corporate Branding, Strategic Advertising, Digital Marketing, Premium Printing, and Technology — website, web and mobile app development with managed hosting and support.",
  "/images/services-og.jpg",
  [
    "branding services",
    "advertising services",
    "digital marketing",
    "printing services",
    "technology services",
    "web development",
    "app development",
    "website maintenance",
  ]
);

export default function ServicesPage() {
  return <ServicesContent />;
}
