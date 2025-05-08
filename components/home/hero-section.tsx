"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { RequestCallbackModal } from "@/components/request-callback-modal";

export default function HeroSection() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({
    desktop: false,
    mobile: false,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Preload images
    const preloadImages = () => {
      const desktopImg = document.createElement("img");
      desktopImg.src = "/DSCF6162.jpg?quality=50";
      desktopImg.onload = () =>
        setImagesLoaded((prev) => ({ ...prev, desktop: true }));

      const mobileImg = document.createElement("img");
      mobileImg.src = "/DSCF6068 (1).jpg?quality=50";
      mobileImg.onload = () =>
        setImagesLoaded((prev) => ({ ...prev, mobile: true }));
    };

    preloadImages();

    const initTextAnimation = async () => {
      try {
        const Typed = (await import("typed.js")).default;

        if (textRef.current) {
          new Typed(textRef.current, {
            strings: [
              "WE INSPIRE BRAND <br><span class='text-secondary'>GROWTH</span>",
              "WE INSPIRE BRAND <br><span class='text-secondary'>VISIBILITY</span>",
              "WE INSPIRE BRAND <br><span class='text-secondary'>SUCCESS</span>",
              "WE INSPIRE BRAND <br><span class='text-secondary'>RESULTS</span>",
              "WE INSPIRE BRAND <br><span class='text-secondary'>EXCELLENCE</span>",
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            startDelay: 500,
            loop: true,
            smartBackspace: true,
            showCursor: true,
            cursorChar: "|",
            autoInsertCss: true,
            contentType: "html",
          });
        }
      } catch (error) {
        console.error("Failed to initialize Typed.js:", error);
      }
    };

    initTextAnimation();

    // Check if this is the first visit of the day
    const checkFirstVisit = () => {
      if (!isClient) return;

      const lastVisit = localStorage.getItem("lastVisit");
      const today = new Date().toDateString();

      if (!lastVisit || lastVisit !== today) {
        // First visit of the day
        setTimeout(() => {
          setCallbackModalOpen(true);
        }, 45000); // Show after 45 seconds (changed from 3 seconds)
        localStorage.setItem("lastVisit", today);
      }
    };

    checkFirstVisit();
  }, [isClient]);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted pt-20 overflow-hidden">
        {/* Loading Placeholder */}
        {(!imagesLoaded.desktop || !imagesLoaded.mobile) && (
          <div className="absolute inset-0 w-full h-full z-0 bg-primary/30 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-primary/65 backdrop-blur-[0.5px] z-10"></div>

          {/* Desktop Image - with quality parameter and priority loading */}
          <Image
            src="/DSCF6162.jpg?quality=50"
            alt="Elegance Inspired Team"
            width={1920}
            height={1080}
            quality={50}
            priority
            className={`sm:block hidden rounded-lg shadow-xl object-cover w-full h-full transition-opacity duration-500 ${
              imagesLoaded.desktop ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() =>
              setImagesLoaded((prev) => ({ ...prev, desktop: true }))
            }
            sizes="(min-width: 640px) 100vw, 0vw"
          />

          {/* Mobile Image - with quality parameter and priority loading */}
          <Image
            src="/DSCF6068 (1).jpg?quality=50"
            alt="Elegance Inspired Team"
            width={640}
            height={960}
            quality={50}
            priority
            className={`sm:hidden block rounded-lg shadow-xl object-center object-cover w-full h-full transition-opacity duration-500 ${
              imagesLoaded.mobile ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() =>
              setImagesLoaded((prev) => ({ ...prev, mobile: true }))
            }
            sizes="(max-width: 639px) 100vw, 0vw"
          />
        </div>

        <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 md:motion-safe:animate-fade-in"
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-secondary rounded-full text-base font-medium backdrop-blur-sm">
                Welcome to Elegance Inspired Limited
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white md:motion-safe:animate-fade-in"
            >
              <span ref={textRef} className="typed-text"></span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto sm:backdrop-blur-sm sm:bg-black/10 sm:p-4 rounded-lg md:motion-safe:animate-fade-in"
            >
              We are passionate about helping businesses{" "}
              <span className="font-bold text-xl text-secondary">elevate</span>{" "}
              their{" "}
              <span className="font-bold text-xl text-secondary">brands</span>,
              connect with their customers, and achieve their desired outcomes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-start md:motion-safe:animate-fade-in"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/60 w-fit duration-200 text-white rounded-full"
              >
                <Link href={"/contact"}>Elevate your Brand</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full bg-secondary hover:bg-secondary/60 w-fit duration-300 text-white border-secondary"
                navigate={true}
              >
                <Link href="/packages">Explore Our Packages</Link>
              </Button>
              <Button
                size="lg"
                className="bg-black hover:bg-black/60 w-fit duration-200 text-white rounded-full"
                onClick={() => setCallbackModalOpen(true)}
              >
                Request a Call Back
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </section>

      <RequestCallbackModal
        isOpen={callbackModalOpen}
        onClose={() => setCallbackModalOpen(false)}
      />
    </>
  );
}
