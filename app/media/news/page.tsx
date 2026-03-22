import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { generateMetadata } from "@/lib/seo-config";
import PageHeader from "@/components/page-header";
import CTASection from "@/components/home/cta-section";
import NewsGrid from "@/components/news/news-grid";

export const metadata: Metadata = generateMetadata(
  "News - Elegance Inspired Limited",
  "Insights on branding, design, and the psychology of colour. Stay informed with thought leadership from Elegance Inspired Limited.",
  "/images/news-og.jpg",
  ["news", "branding insights", "colour psychology", "brand strategy", "Elegance Inspired"]
);

export const revalidate = 3600;

export default function NewsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <PageHeader
        title="News"
        description="Insights, thought leadership, and updates from Elegance Inspired Limited."
      />

      <section className="py-16 md:py-24 bg-background">
        <NewsGrid />
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
