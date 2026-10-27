"use client";

import Image from "next/image";
import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/utils";

interface ServiceVisualProps {
  /** Photograph in /public. */
  src: string;
  alt: string;
  /** unDraw illustration component from components/illustrations. */
  illustration: ComponentType<SVGProps<SVGSVGElement>>;
  /** Short caption under the illustration sticker. */
  label: string;
  className?: string;
}

/**
 * Side visual for a service section: a real photograph with a small
 * illustrated "sticker" card overlapping its lower-left corner. The sticker
 * uses an unDraw illustration tinted to brand blue via --color-primary.
 */
export function ServiceVisual({
  src,
  alt,
  illustration: Illustration,
  label,
  className,
}: ServiceVisualProps) {
  return (
    <div className={cn("relative pb-8 pl-3 sm:pl-6", className)}>
      <Image
        src={src}
        alt={alt}
        width={1400}
        height={934}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="h-[300px] w-full rounded-lg object-cover object-center shadow-xl sm:h-[460px]"
      />
      <div className="absolute bottom-0 left-0 w-[46%] max-w-[250px] rounded-xl border border-border/60 bg-card p-4 shadow-xl sm:p-5">
        <Illustration className="h-auto w-full" aria-hidden />
        <p className="mt-3 text-center text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
      </div>
    </div>
  );
}
