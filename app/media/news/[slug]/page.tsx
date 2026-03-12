import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/home/cta-section";
import EventGalleryCarousel from "@/components/events/event-gallery-carousel";
import { getNewsBySlug, getAllNewsSlugs } from "@/data/news-data";
import { generateMetadata as genMeta } from "@/lib/seo-config";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllNewsSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) return {};
  return genMeta(item.title, item.excerpt, undefined, ["news", "Elegance Inspired"]);
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);

  if (!item) notFound();

  const hasImages = item.images && item.images.length > 0;
  const useCarousel = item.images.length > 1;

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <article className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14 max-w-4xl">
          <Link href="/media/news" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News
          </Link>

          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-4">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {item.date}
              </span>
              {item.category && (
                <span className="font-medium text-primary">{item.category}</span>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{item.title}</h1>
            <p className="text-lg text-muted-foreground">{item.excerpt}</p>
          </header>

          {hasImages && (
            <div className="mb-10">
              {useCarousel ? (
                <EventGalleryCarousel images={item.images} title={item.title} />
              ) : (
                <div className="relative rounded-lg overflow-hidden aspect-video bg-muted">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          )}

          {item.paragraphs.length > 0 && (
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-muted-foreground">
              {item.paragraphs.map((block, i) =>
                block.type === "h3" ? (
                  <h3 key={i} className="text-xl font-semibold text-foreground mt-8">
                    {block.text}
                  </h3>
                ) : (
                  <p key={i}>{block.text}</p>
                )
              )}
              {item.closing && (
                <p className="font-medium text-foreground pt-4 whitespace-pre-line">
                  {item.closing}
                </p>
              )}
            </div>
          )}

          {item.milestoneSections && item.milestoneSections.length > 0 && (
            <div className={item.paragraphs.length > 0 ? "mt-16" : ""}>
              {item.milestoneTitle && (
                <h2 className="text-2xl font-bold mb-2">{item.milestoneTitle}</h2>
              )}
              {item.milestoneSubtitle && (
                <p className="text-lg text-muted-foreground mb-8">{item.milestoneSubtitle}</p>
              )}
              <div className="space-y-10">
                {item.milestoneSections.map((section) => (
                  <div key={section.year} className="border-l-4 border-primary pl-6">
                    <h3 className="text-lg font-bold text-foreground mb-3">{section.year}</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {section.items.map((itemText, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary mt-1.5">●</span>
                          <span>{itemText}</span>
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
