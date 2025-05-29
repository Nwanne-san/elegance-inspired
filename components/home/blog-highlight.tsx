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
import OptimizedImage from "../optimized-image";

const blogPosts = [
  {
    title: "10 Essential Branding Tips for Startups",
    excerpt:
      "Learn the key branding strategies that can help your startup stand out in a competitive market.",
    image: "/blog image 1.jpg",
    date: "April 5, 2023",
    author: "Temitope Ruth Jacob",
    slug: "branding-tips-for-startups",
  },
  {
    title: "The Psychology of Color in Branding",
    excerpt:
      "Discover how different colors can influence customer perception and behavior towards your brand.",
    image: "/blog image 2.jpg",
    date: "March 18, 2023",
    author: "Cornelius Emmanuel",
    slug: "psychology-of-color-in-branding",
  },
  {
    title: "Digital Marketing Trends to Watch in 2023",
    excerpt:
      "Stay ahead of the curve with these emerging digital marketing trends that are shaping the industry.",
    image: "/blog image 3.jpg",
    date: "February 22, 2023",
    author: "Rebecca Jumoke Kinrin",
    slug: "digital-marketing-trends",
  },
];

export default function BlogHighlight() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
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

  // Set up autoplay
  useEffect(() => {
    if (!emblaApi) return;

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
    };
  }, [emblaApi]);

  return (
    <section className="py-16 md:py-24 bg-">
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
          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className={`${
                    isMobile ? "flex-[0_0_100%]" : "flex-[0_0_33.333%]"
                  } px-4`}
                >
                  <Card className="h-full overflow-hidden">
                    <div className="overflow-hidden">
                      <OptimizedImage
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={500}
                        height={300}
                        showLoadingIndicator={true}
                        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardHeader className="p-4">
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
                        <h3 className="text-xl font-bold mb-1">{post.title}</h3>
                      </Link>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
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
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors z-10"
            onClick={scrollPrev}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          <button
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors z-10"
            onClick={scrollNext}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
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
