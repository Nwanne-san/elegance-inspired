import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo-config";
import TechnologyContent from "@/components/technology/technology-content";

export const metadata: Metadata = generateMetadata(
  "Technology - Website, Web App & Mobile App Development",
  "Websites, web applications and mobile apps built on your brand identity, with hosting, maintenance and support from the same team after launch.",
  "/technology-ecommerce.jpg",
  [
    "website design",
    "web development",
    "web application development",
    "mobile app development",
    "ios android app development",
    "website maintenance",
    "managed hosting",
    "software agency nigeria",
  ]
);

export default function TechnologyPage() {
  return <TechnologyContent />;
}
