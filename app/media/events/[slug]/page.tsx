import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/home/cta-section";
import EventGalleryCarousel from "@/components/events/event-gallery-carousel";
import {
  getEventBySlug,
  getAllEventSlugs,
} from "@/data/events-data";
import { generateMetadata as genMeta } from "@/lib/seo-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllEventSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};
  return genMeta(
    event.title,
    event.excerpt,
    undefined,
    ["events", "Elegance Inspired", event.location]
  );
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <article className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14 max-w-4xl">
          <Link
            href="/media/events"
            className="inline-flex items-center text-primary hover:text-primary/80 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Events
          </Link>

          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-4">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {event.date}
              </span>
              <span className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {event.location}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {event.title}
            </h1>
            <p className="text-lg text-muted-foreground">{event.excerpt}</p>
          </header>

          <div className="mb-10">
            <EventGalleryCarousel
              images={event.images?.length ? event.images : [event.image]}
              title={event.title}
            />
          </div>

          {event.paragraphs.length > 0 && (
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            {event.paragraphs.map((block, i) =>
              block.type === "h3" ? (
                <h3
                  key={i}
                  className="text-xl font-semibold text-foreground mt-8"
                >
                  {block.text}
                </h3>
              ) : (
                <p key={i}>{block.text}</p>
              )
            )}
            {event.closing && (
              <p className="font-medium text-foreground pt-4 whitespace-pre-line">
                {event.closing}
              </p>
            )}
          </div>
          )}

          {event.milestoneSections.length > 0 && (
            <div className={event.paragraphs.length > 0 ? "mt-16" : ""}>
              {event.milestoneTitle && (
                <h2 className="text-2xl font-bold mb-2">{event.milestoneTitle}</h2>
              )}
              {event.milestoneSubtitle && (
                <p className="text-lg text-muted-foreground mb-8">
                  {event.milestoneSubtitle}
                </p>
              )}
              <div className="space-y-10">
                {event.milestoneSections.map((section) => (
                  <div
                    key={section.year}
                    className="border-l-4 border-primary pl-6"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {section.year}
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary mt-1.5">●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <CTASection />
      <Footer />
    </main>
  );
}
