"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RequestCallbackModal } from "@/components/request-callback-modal";

export default function HeroSectionClient() {
  const textRef = useRef<HTMLSpanElement>(null);
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let typedInstance: InstanceType<
      typeof import("typed.js").default
    > | null = null;
    let idleHandle: number;
    let cancelled = false;

    const startTyped = () => {
      void import("typed.js").then(({ default: Typed }) => {
        if (cancelled || !textRef.current) return;
        const instance = new Typed(textRef.current, {
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
        typedInstance = instance;
        if (cancelled) {
          instance.destroy();
          typedInstance = null;
        }
      });
    };

    if ("requestIdleCallback" in window) {
      idleHandle = window.requestIdleCallback(startTyped, { timeout: 2000 });
    } else {
      idleHandle = window.setTimeout(startTyped, 1) as unknown as number;
    }

    return () => {
      cancelled = true;
      if ("cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleHandle);
      } else {
        window.clearTimeout(idleHandle);
      }
      typedInstance?.destroy();
      typedInstance = null;
    };
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:motion-safe:animate-fade-in"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-secondary rounded-full text-sm sm:text-base font-medium backdrop-blur-sm">
              Welcome to Elegance Inspired Limited
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white md:motion-safe:animate-fade-in"
          >
            <span ref={textRef} className="typed-text">
              WE INSPIRE BRAND <br />
              <span className="text-secondary">GROWTH</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto sm:backdrop-blur-sm sm:bg-black/10 sm:p-4 rounded-lg md:motion-safe:animate-fade-in"
          >
            We are passionate about helping businesses{" "}
            <span className="font-bold text-sm sm:text-xl text-secondary">
              elevate
            </span>{" "}
            their{" "}
            <span className="font-bold text-sm sm:text-xl text-secondary mr-1">
              brands
            </span>
            connect with their customers, and achieve their desired outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-row gap-4 justify-center px- sm:px-0 items-center sm:items-start md:motion-safe:animate-fade-in"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/60 hidden sm:flex w-fit duration-200 text-white  "
              onClick={() => setCallbackModalOpen(true)}
            >
              <Link href={"/contact"}>Elevate your Brand</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-br-3xl  bg-secondary text-xs sm:text-base max-sm:px-5 hover:bg-secondary/60 w-fit duration-300 text-white border-secondary"
              navigate={true}
            >
              <Link href="/packages">Explore Our Packages</Link>
            </Button>
            <Button
              size="lg"
              className="sm:bg-black bg-primary hover:bg-black/60 w-fit text-xs sm:text-base duration-200 text-white max-sm:px-5 rounded-tl-3xl "
              onClick={() => setCallbackModalOpen(true)}
            >
              Request a Call Back
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-2 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
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
          aria-hidden
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>

      <RequestCallbackModal
        isOpen={callbackModalOpen}
        onClose={() => setCallbackModalOpen(false)}
      />
    </>
  );
}
