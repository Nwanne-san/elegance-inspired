"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { Calendar, User, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { blogPosts } from "@/data/blog-posts";

const featuredPosts = blogPosts.slice(0, 4);

export default function BlogCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const imagesLoadedCount = useRef(0);
  const totalImages = featuredPosts.length;

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      featuredPosts.forEach((post) => {
        const img = document.createElement("img");
        img.src = post.image;
        img.onload = () => {
          imagesLoadedCount.current += 1;
          if (imagesLoadedCount.current === totalImages) {
            setImagesLoaded(true);
            setIsLoading(false);
          }
        };
        img.onerror = () => {
          imagesLoadedCount.current += 1;
          if (imagesLoadedCount.current === totalImages) {
            setImagesLoaded(true);
            setIsLoading(false);
          }
        };
      });
    };

    preloadImages();

    // Fallback in case images don't load
    const timer = setTimeout(() => {
      if (!imagesLoaded) {
        setIsLoading(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
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
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Set up autoplay
  useEffect(() => {
    if (!emblaApi || isLoading) return;

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
  }, [emblaApi, onSelect, isLoading]);

  const renderBlogPost = (post: (typeof featuredPosts)[0], index: number) => (
    <div
      className={`${isMobile ? "flex-[0_0_100%]" : "flex-[0_0_33.333%]"} px-4`}
    >
      <Card className="glass-card h-full overflow-hidden">
        <div className="overflow-hidden relative">
          <div
            className={`w-full h-48 bg-gray-200 dark:bg-gray-800 ${
              isLoading ? "animate-pulse" : "hidden"
            }`}
          ></div>
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={500}
            height={300}
            className={`w-full h-48 object-cover transition-transform duration-500 hover:scale-110 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            priority={index < 2} // Prioritize loading the first two images
            onLoad={() => {
              if (index === 0) setIsLoading(false);
            }}
          />
        </div>
        <CardHeader>
          <div className="flex items-center text-sm text-muted-foreground mb-2 space-x-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{post.author}</span>
            </div>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-primary transition-colors"
          >
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
          </Link>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{post.excerpt}</p>
        </CardContent>
        <CardFooter>
          <Link
            href={`/blog/${post.slug}`}
            className="text-primary hover:text-primary/80 font-medium"
          >
            Read More →
          </Link>
        </CardFooter>
      </Card>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Latest from Our Blog
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Discover branding and marketing insights, industry trends, and
            client success stories.
          </motion.p>
        </div>

        <div className="relative">
          {/* Loading Indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-muted/50">
              <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {featuredPosts.map((post, index) => renderBlogPost(post, index))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors z-10"
            onClick={scrollPrev}
            aria-label="Previous slide"
            disabled={isLoading}
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          <button
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors z-10"
            onClick={scrollNext}
            aria-label="Next slide"
            disabled={isLoading}
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {featuredPosts.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedIndex
                    ? "bg-secondary w-4"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => emblaApi?.scrollTo(index)}
                disabled={isLoading}
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
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
