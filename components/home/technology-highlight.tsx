"use client";

/**
 * Homepage teaser for the Technology service.
 *
 * Photo: "Diverse team collaborating around a laptop in office" by Vitaly
 * Gariev on Unsplash (Unsplash License, free for commercial use).
 * https://unsplash.com/photos/diverse-team-collaborating-around-a-laptop-in-office-yd_RKGH_RH4
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
          >
            <Image
              src="/technology-team.jpg"
              alt="A team gathered around a laptop reviewing work together"
              width={1400}
              height={788}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-[300px] w-full rounded-lg object-cover object-center shadow-xl sm:h-[480px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
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
                  Explore Technology
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full" navigate>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
