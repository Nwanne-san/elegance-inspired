import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { generateMetadata } from "@/lib/seo-config";
import PageHeader from "@/components/page-header";
import CTASection from "@/components/home/cta-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, MapPin, Video } from "lucide-react";

export const metadata: Metadata = generateMetadata(
  "Events - Webinars | Elegance Inspired Limited",
  "Join our webinars on branding, design, and strategy. Stay updated on upcoming sessions from Elegance Inspired Limited.",
  "/images/events-og.jpg",
  ["webinars", "events", "Elegance Inspired", "branding webinars"]
);

export default function EventsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <PageHeader
        title="Events"
        description="Webinars and live sessions on branding, strategy, and design."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14 max-w-3xl">
          <div className="rounded-xl border bg-card p-8 md:p-10 shadow-lg">
            <div className="flex items-center gap-2 text-primary mb-4">
              <Video className="h-6 w-6" />
              <span className="font-semibold">Webinar</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              The Psychology of Colour in Branding
            </h2>
            <p className="text-muted-foreground mb-6">
              Join us for an in-depth session on how colour influences perception,
              emotion, and brand recognition—and how to apply these principles to
              your own brand identity.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                April 10, 2026. 5:00 PM - 6:00 PM WAT
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Online
              </span>
            </div>
            <Button asChild className="rounded-full">
              <Link href="https://luma.com/85ia0fn8">
                Register your interest
              </Link>
            </Button>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            More webinars will be listed here. Follow us or get in touch to stay updated.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
