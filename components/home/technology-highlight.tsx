"use client";

/**
 * Homepage teaser for the Technology service.
 *
 * Photo: "A person typing code on a laptop beside a potted plant and mug"
 * by Nubelson Fernandes on Unsplash (Unsplash License, free for commercial
 * use). https://unsplash.com/photos/person-coding-on-laptop-workspace-UcYBL5V0xWQ
 */

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const points = [
  "Websites, landing pages and e-commerce stores",
  "Web applications and mobile apps for iOS and Android",
  "Hosting, maintenance and support after launch",
];

export default function TechnologyHighlight() {
  return (
    <section id="tech-highlight" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src="/technology-home.jpg"
              alt="A developer writing code on a laptop beside a window"
              width={1120}
              height={1400}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-[320px] w-full rounded-lg object-cover object-center shadow-xl sm:h-[520px]"
            />
            <div className="absolute bottom-4 left-4 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg sm:bottom-6 sm:left-6">
              Build · Host · Support
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="size-1.5 rounded-full bg-secondary" />
              New · Technology
            </span>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Websites and apps, built and managed by the same team
            </h2>

            <p className="mb-6 text-muted-foreground">
              Our technology service takes a brand from identity to a working
              product. We design and develop the website, web application or
              mobile app, then host it, keep it secure and support it, so you
              deal with one partner from first sketch to every update after
              launch.
            </p>

            <ul className="mb-8 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-3.5" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="rounded-full" navigate>
                <Link href="/services#technology">
                  Explore Technology Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <a
                href="mailto:tech@eleganceinspired.org"
                className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                tech@eleganceinspired.org
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
