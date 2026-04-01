import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { generateMetadata } from "@/lib/seo-config";
import PageHeader from "@/components/page-header";
import CTASection from "@/components/home/cta-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Mic2, Users, Video } from "lucide-react";

export const metadata: Metadata = generateMetadata(
  "Webinar - Elegance Inspired Limited",
  "Branding Beyond Logos: live webinar on Zoom with Elegance Inspired — identity systems that scale.",
  "/images/events-og.jpg",
  ["webinar", "webinars", "Elegance Inspired", "branding webinars"]
);

export const revalidate = 3600;

const REGISTER_URL = "https://luma.com/85ia0fn8";

export default function WebinarPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <PageHeader
        title="Events"
        description="Live sessions on branding, strategy, and design."
      />

      <section className="pb-6 bg-background">
        <div className="container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14 max-w-4xl">
          <div className="rounded-xl border bg-card overflow-hidden shadow-lg">
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-2 text-primary mb-4">
                <Video className="h-6 w-6" />
                <span className="font-semibold tracking-wide uppercase text-xs text-secondary">
                  Live webinar
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-balance">
                Branding Beyond Logos
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Building identity systems that scale
              </p>
              <p className="text-muted-foreground mb-8">
                Join us for an in-depth session on how strong identity systems
                shape perception, emotion, and recognition — and how to apply
                these ideas to your brand.
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 shrink-0 text-primary" />
                  Friday 24 April 2026 · 4:00 PM WAT
                </span>
                <span className="flex items-center gap-2">
                  <Video className="h-4 w-4 shrink-0 text-primary" />
                  Live on Zoom
                </span>
              </div>

              <div className="p-4">
                <div className="relative mx-auto rounded-lg border border-border overflow-hidden shadow-md">
                  <Image
                    src="/webinar-flyer.png"
                    alt="Branding Beyond Logos webinar flyer — Zoom, 24 April 2026, 4pm WAT"
                    width={900}
                    height={1273}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, 640px"
                    priority
                  />
                </div>
              </div>

              <div className="rounded-lg border bg-muted/30 p-5 mb-8 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  Speakers
                </p>
                <div className="flex flex-row justify-between gap-2">
                  <div className="flex gap-3">
                    <Mic2 className="h-5 w-5 shrink-0 text-secondary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">
                        Temitope Ruth Jacob
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Speaker · CEO, Elegance Inspired Limited
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Users className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">
                        Emmanuel Cornelius
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Moderator · COO, Elegance Inspired Limited
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Button asChild className="rounded-full">
                <Link href={REGISTER_URL}>Register now</Link>
              </Button>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            More webinars will be listed here. Follow us or get in touch to stay
            updated.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
