"use client";

import { motion } from "framer-motion";
import OptimizedImage from "@/components/optimized-image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { clients, testimonials } from "@/data";
import { useEffect, useState, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function ClientsSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Initialize carousel and autoplay
  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    onSelect();

    // Set up autoplay
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

  // Handle mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Handle dot click
  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Clients & Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            At Elegance, our clients' success is our top priority. We work
            closely with our clients to develop tailored branding solutions that
            resonate and make a lasting impact.
          </motion.p>
        </div>

        {/* Client Logos */}
        <div className="mb-20 overflow-hidden">
          <div className="logo-marquee-container">
            <div
              className="logo-marquee  items-center justify-center"
              onMouseEnter={() =>
                document
                  .querySelectorAll(".logo-marquee")
                  .forEach((el) => el.classList.add("paused"))
              }
              onMouseLeave={() =>
                document
                  .querySelectorAll(".logo-marquee")
                  .forEach((el) => el.classList.remove("paused"))
              }
            >
              {/* First set of logos */}
              {clients.map((logo, index) => (
                <div key={`first-${index}`} className="logo-item flex items-center justify-center">
                  <div className="bg-white p-2 rounded-2xl flex items-center justify-center h- w-[180px]">
                    <OptimizedImage
                      src={logo || "/placeholder.svg"}
                      alt={`Client ${index + 1}`}
                      width={140}
                      height={70}
                      className="h- w-auto object-contain object-center flex items-center hover:-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}

              {/* Duplicate logos for seamless loop */}
              {clients.map((logo, index) => (
                <div key={`second-${index}`} className="logo-item">
                  <div className="bg-white p-2 rounded-2xl flex items-center justify-center h-24 w-[180px]">
                    <OptimizedImage
                      fallback="/placeholder.svg"
                      src={logo || "/placeholder.svg"}
                      alt={`Client ${index + 1}`}
                      width={140}
                      height={70}
                      className="h-16 w-auto object-contain transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
          >
            What Our Clients are Saying
          </motion.h2>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] md:flx-[0_0_33.333%] px-2"
                >
                  <Card className="h-full">
                    <CardContent className="pt-6 pb-6">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="mb-6 italic text-muted-foreground">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center">
                        <OptimizedImage
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className="rounded-full h-12 w-12 object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedIndex
                    ? "bg-secondary w-4"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
