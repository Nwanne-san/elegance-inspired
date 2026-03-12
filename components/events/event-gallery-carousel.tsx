"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface EventGalleryCarouselProps {
  images: string[];
  title: string;
  className?: string;
}

export default function EventGalleryCarousel({
  images,
  title,
  className = "",
}: EventGalleryCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
  });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  const slides = images.length ? images : ["/placeholder.svg?height=600&width=800"];

  return (
    <div className={`relative rounded-lg overflow-hidden bg-muted ${className}`}>
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {slides.map((src, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 relative aspect-video"
            >
              <Image
                src={src}
                alt={`${title} - Image ${index + 1}`}
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 p-2.5 rounded-full shadow-md transition-colors"
            onClick={scrollPrev}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 p-2.5 rounded-full shadow-md transition-colors"
            onClick={scrollNext}
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>

          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`h-2 rounded-full transition-all ${
                  index === selectedIndex
                    ? "bg-primary w-6"
                    : "bg-white/70 hover:bg-white/90 w-2"
                }`}
                aria-label={`Go to image ${index + 1}`}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
