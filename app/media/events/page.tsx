import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { generateMetadata } from "@/lib/seo-config";
import PageHeader from "@/components/page-header";
import CTASection from "@/components/home/cta-section";
import EventsGrid from "@/components/events/events-grid";

export const metadata: Metadata = generateMetadata(
  "Events - Elegance Inspired Limited",
  "Discover our events, milestones, and celebrations. Join us as we mark five years of elevating brands and inspiring growth.",
  "/images/events-og.jpg",
  ["events", "anniversary", "milestone", "Elegance Inspired", "branding events"]
);

export default function EventsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <PageHeader
        title="Events"
        description="Our milestones, celebrations, and moments that define our journey."
      />

      <section className="py-16 md:py-24 bg-background">
        <EventsGrid />
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
