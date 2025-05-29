"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import OptimizedImage from "@/components/optimized-image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Alphabets, AyencyFoods, EnivedAir, NecciConsult } from "@/public";

const portfolioItems = [
  {
    title: "Brand Identity",
    image: Alphabets,
    category: "Alphabets",
  },
  {
    title: "Event Branding",
    image: NecciConsult,
    category: "Necci Consulting",
  },
  {
    title: "Product Package Design",
    image: AyencyFoods,
    category: "Ayency Foods & Beverages",
  },
  {
    title: "Social Media Designs",
    image: EnivedAir,
    category: "Enived Air Logistics",
  },
];

export default function PortfolioHighlight() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  // Set up autoplay
  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    onSelect();

    // Autoplay function
    const autoplay = () => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    };

    // Start autoplay
    autoplayRef.current = setInterval(autoplay, 5000);

    // Pause autoplay on pointer down (user interaction)
    emblaApi.on("pointerDown", () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    });

    // Resume autoplay on pointer up
    emblaApi.on("pointerUp", () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(autoplay, 5000);
    });

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      emblaApi.off("select", onSelect);
      emblaApi.off("pointerDown", () => {});
      emblaApi.off("pointerUp", () => {});
    };
  }, [emblaApi, onSelect]);

  const renderPortfolioItem = (
    item: (typeof portfolioItems)[0],
    index: number
  ) => (
    <div
      className={`${isMobile ? "flex-[0_0_100%]" : "flex-[0_0_50%]"} px-4`}
      key={item.title}
    >
      <div className="group relative overflow-hidden rounded-lg border shadow-lg h-80">
        <OptimizedImage
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Always visible content instead of only on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
          <span className="text-sm text-[#FF6600] font-medium mb-2">
            {item.category}
          </span>
          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
          <Link
            href="/portfolio"
            className="text-white/80 hover:text-white text-sm underline underline-offset-2"
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Portfolio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our recent projects and see how we've helped businesses
            transform their brands.
          </motion.p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {portfolioItems.map((item, index) =>
                renderPortfolioItem(item, index)
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors z-10"
            onClick={scrollPrev}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors z-10"
            onClick={scrollNext}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === 0
                    ? "bg-secondary w-4"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 rounded-full"
          >
            <Link href="/portfolio">View Full Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
