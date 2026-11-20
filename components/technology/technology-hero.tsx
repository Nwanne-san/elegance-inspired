"use client";

/**
 * Hero photo: "a person typing on a laptop on a table" by Shoper on Unsplash
 * (Unsplash License, free for commercial use).
 * https://unsplash.com/photos/slLo94wES2M
 */

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Gauge,
  HeartHandshake,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import { DotPattern } from "@/components/ui/dot-pattern";

const BRAND_BLUE = "#003EAD";
const BRAND_ORANGE = "#FF6600";

const heroStats = [
  { label: "Design-led", value: "On-brand from day one" },
  { label: "End to end", value: "Build, launch and run" },
  { label: "After launch", value: "Hosting & support" },
];

export default function TechnologyHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background pb-16 pt-32 md:pb-24 md:pt-40">
      <DotPattern
        width={28}
        height={28}
        cr={1}
        className="text-primary/25 [mask-image:radial-gradient(60%_60%_at_50%_30%,white,transparent)]"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Technology at Elegance
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Websites and apps,{" "}
              <span className="text-primary">built</span> and{" "}
              <span className="text-secondary">managed</span> by the same team.
            </h1>

            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              We design and develop websites, web applications and mobile apps
              on your brand identity, then host, monitor and support them after
              launch, so you deal with one partner from first sketch to every
              update.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="rounded-full" navigate>
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full"
              >
                <a href="mailto:tech@eleganceinspired.org">
                  <Mail className="mr-2 h-4 w-4" />
                  Talk to our Tech Team
                </a>
              </Button>
            </div>

            <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border/60 bg-card/60 p-4 backdrop-blur"
                >
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-foreground">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            {/* Laptop-style frame */}
            <div className="relative mx-auto max-w-xl">
              <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl">
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 border-b border-border/60 bg-muted/50 px-4 py-2.5">
                  <span className="size-2.5 rounded-full bg-red-400/80" />
                  <span className="size-2.5 rounded-full bg-amber-400/80" />
                  <span className="size-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-3 flex-1 truncate rounded-md bg-background/80 px-3 py-1 text-[11px] text-muted-foreground">
                    https://your-brand.com
                  </span>
                </div>

                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/technology-ecommerce.jpg"
                    alt="A website shown on a laptop with an online store open"
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                </div>

                <BorderBeam
                  size={200}
                  duration={10}
                  colorFrom={BRAND_BLUE}
                  colorTo={BRAND_ORANGE}
                />
              </div>

              {/* Floating badge: speed */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -left-4 -top-4 hidden rounded-xl border border-border/60 bg-card/95 p-3 shadow-xl backdrop-blur sm:flex sm:items-center sm:gap-3"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Gauge className="size-5" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Built for speed
                  </p>
                  <p className="text-sm font-semibold">Core Web Vitals ready</p>
                </div>
              </motion.div>

              {/* Floating badge: security */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -bottom-4 -right-4 hidden rounded-xl border border-border/60 bg-card/95 p-3 shadow-xl backdrop-blur sm:flex sm:items-center sm:gap-3"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <ShieldCheck className="size-5" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Hosted & secured
                  </p>
                  <p className="text-sm font-semibold">SSL · backups · uptime</p>
                </div>
              </motion.div>

              {/* Floating badge: craft */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute -right-6 top-1/2 hidden -translate-y-1/2 rounded-xl border border-border/60 bg-card/95 p-3 shadow-xl backdrop-blur md:flex md:items-center md:gap-3"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <HeartHandshake className="size-5" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    One team
                  </p>
                  <p className="text-sm font-semibold">Build, launch, support</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
