"use client";

import { type ReactNode, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface LenisScrollProviderProps {
  children: ReactNode;
}

function runScrollRevealCheck() {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  animatedElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight * 0.8;

    if (isVisible) {
      element.classList.add("is-visible");
    }
  });
}

function attachScrollReveal() {
  const handleScroll = () => runScrollRevealCheck();
  window.addEventListener("scroll", handleScroll, { passive: true });
  setTimeout(handleScroll, 200);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}

export function LenisScrollProvider({ children }: LenisScrollProviderProps) {
  const lenisRef = useRef<{
    destroy: () => void;
    raf: (time: number) => void;
    scrollTo: (value: number, options?: { immediate?: boolean }) => void;
  } | null>(null);
  const rafRef = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }

    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      return attachScrollReveal();
    }

    let cancelled = false;
    let innerCleanup: (() => void) | undefined;

    const startLenis = () => {
      void import("@studio-freight/lenis").then(({ default: Lenis }) => {
        if (cancelled) return;

        const lenis = new Lenis({
          duration: 1.6,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: "vertical",
          gestureDirection: "vertical",
          smooth: true,
          smoothTouch: false,
          touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        const handleScroll = () => runScrollRevealCheck();

        function raf(time: number) {
          if (cancelled) return;
          lenis.raf(time);
          rafRef.current = requestAnimationFrame(raf);
        }

        rafRef.current = requestAnimationFrame(raf);
        window.addEventListener("scroll", handleScroll, { passive: true });
        setTimeout(handleScroll, 200);

        innerCleanup = () => {
          cancelAnimationFrame(rafRef.current);
          window.removeEventListener("scroll", handleScroll);
          lenis.destroy();
          if (lenisRef.current === lenis) {
            lenisRef.current = null;
          }
        };

        if (cancelled) {
          innerCleanup();
          innerCleanup = undefined;
        }
      });
    };

    let idleHandle: number;
    if ("requestIdleCallback" in window) {
      idleHandle = window.requestIdleCallback(startLenis, { timeout: 2500 });
    } else {
      idleHandle = window.setTimeout(startLenis, 1) as unknown as number;
    }

    return () => {
      cancelled = true;
      if ("cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleHandle);
      } else {
        window.clearTimeout(idleHandle);
      }
      innerCleanup?.();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <>{children}</>;
}
