import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/home/hero-section";

export const revalidate = 3600;

function BelowFoldFallback() {
  return (
    <div
      className="min-h-[220px] w-full animate-pulse bg-muted/20"
      aria-hidden
    />
  );
}

const ServicesHighlight = dynamic(
  () => import("@/components/home/services-highlight"),
  { loading: () => <BelowFoldFallback /> }
);

const AboutSection = dynamic(
  () => import("@/components/home/about-section"),
  { loading: () => <BelowFoldFallback /> }
);

const PackagesHighlight = dynamic(
  () => import("@/components/home/packages-highlight"),
  { loading: () => <BelowFoldFallback /> }
);

const WhyChooseUs = dynamic(
  () => import("@/components/home/why-choose-us"),
  { loading: () => <BelowFoldFallback /> }
);

const TeamSection = dynamic(
  () => import("@/components/home/team-section"),
  { loading: () => <BelowFoldFallback /> }
);

const ClientsSection = dynamic(
  () => import("@/components/home/clients-section"),
  { loading: () => <BelowFoldFallback /> }
);

const PortfolioHighlight = dynamic(
  () => import("@/components/home/portfolio-highlight"),
  { loading: () => <BelowFoldFallback /> }
);

const BlogHighlight = dynamic(
  () => import("@/components/home/blog-highlight"),
  { loading: () => <BelowFoldFallback /> }
);

const CTASection = dynamic(
  () => import("@/components/home/cta-section"),
  { loading: () => <BelowFoldFallback /> }
);

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <HeroSection />
      <ServicesHighlight />
      <AboutSection />
      <PackagesHighlight />
      <WhyChooseUs />
      <TeamSection />
      <ClientsSection />
      <PortfolioHighlight />
      <BlogHighlight />
      <CTASection />
      <Footer />
    </main>
  );
}
