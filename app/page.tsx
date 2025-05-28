import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/home/hero-section";
import ServicesHighlight from "@/components/home/services-highlight";
import AboutSection from "@/components/home/about-section";
import PackagesHighlight from "@/components/home/packages-highlight";
import TeamSection from "@/components/home/team-section";
import ClientsSection from "@/components/home/clients-section";
import PortfolioHighlight from "@/components/home/portfolio-highlight";
import BlogHighlight from "@/components/home/blog-highlight";
import CTASection from "@/components/home/cta-section";
import ScrollToTop from "@/components/scroll-to-top";
import WhyChooseUs from "@/components/home/why-choose-us";

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
      <ScrollToTop />
    </main>
  );
}
