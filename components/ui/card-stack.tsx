"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface CardStackProps {
  children: ReactNode[];
  className?: string;
  /** Distance from the top of the viewport where the stack pins (px). */
  top?: number;
  /** Extra offset added per card so the stack fans out like a folder (px). */
  step?: number;
  /** How much each covered card shrinks (0–1). */
  shrink?: number;
}

/**
 * Folder-style stacking cards for narrow screens.
 *
 * Each child sticks near the top of the viewport; as the next card scrolls
 * up over it, the covered card scales down and dims slightly, so the pile
 * reads like sheets being dropped into a folder. Driven by GSAP ScrollTrigger
 * with scrub, so it follows the finger exactly and reverses cleanly.
 */
export function CardStack({
  children,
  className,
  top = 96,
  step = 14,
  shrink = 0.05,
}: CardStackProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const cards = gsap.utils.toArray<HTMLElement>(":scope > *", el);

      cards.forEach((card, i) => {
        const offset = top + i * step;
        gsap.set(card, {
          position: "sticky",
          top: offset,
          zIndex: i + 1,
          transformOrigin: "top center",
        });

        const next = cards[i + 1];
        if (!next) return;

        // Shrink this card while the next one slides up and covers it.
        gsap.to(card, {
          scale: 1 - shrink * (cards.length - 1 - i),
          opacity: 0.7,
          ease: "none",
          scrollTrigger: {
            trigger: next,
            start: "top bottom",
            end: `top ${offset + step}px`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });
    },
    { scope: ref, dependencies: [top, step, shrink] }
  );

  return (
    <div ref={ref} className={cn("flex flex-col gap-5", className)}>
      {children}
    </div>
  );
}
