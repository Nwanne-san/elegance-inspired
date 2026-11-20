"use client";

import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Truck,
  Users2,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { ProgressiveApp } from "@/components/illustrations/progressive-app";
import { cn } from "@/lib/utils";

type Industry = {
  icon: LucideIcon;
  name: string;
  note: string;
};

const industries: Industry[] = [
  {
    icon: Landmark,
    name: "Finance & fintech",
    note: "Investor sites, portals and member apps",
  },
  {
    icon: ShoppingBag,
    name: "Retail & e-commerce",
    note: "Storefronts, catalogues and checkouts",
  },
  {
    icon: GraduationCap,
    name: "Education",
    note: "School sites and learning platforms",
  },
  {
    icon: Users2,
    name: "Non-profit & associations",
    note: "Membership portals and donation flows",
  },
  {
    icon: UtensilsCrossed,
    name: "Hospitality & food",
    note: "Booking sites and ordering apps",
  },
  {
    icon: Truck,
    name: "Logistics & services",
    note: "Dispatch dashboards and tracking tools",
  },
  {
    icon: HeartPulse,
    name: "Health & wellness",
    note: "Clinic sites and booking workflows",
  },
  {
    icon: Building2,
    name: "Corporate & B2B",
    note: "Investor-ready websites and intranets",
  },
];

export default function TechnologyIndustries() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Feature side */}
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Industries we serve
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Different sectors, the same thoughtful build
            </h2>
            <p className="mt-4 text-muted-foreground">
              Some of the organisations we build websites, web applications and
              mobile apps for. Yours not on the list? We&apos;d still like to
              talk.
            </p>

            <div className="relative mt-8 overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 p-6">
              <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-primary/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 size-40 rounded-full bg-secondary/15 blur-3xl" />
              <ProgressiveApp className="relative mx-auto h-56 w-auto md:h-64" aria-hidden />
            </div>
          </motion.aside>

          {/* Industry list */}
          <motion.ol
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.li
                  key={industry.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className={cn(
                    "group flex items-center gap-4 border-b border-border/60 py-5 transition-colors md:gap-6 md:py-6",
                    "last:border-b-0",
                    "md:hover:bg-muted/40"
                  )}
                >
                  <span
                    className={cn(
                      "flex size-12 shrink-0 items-center justify-center rounded-2xl transition-colors md:size-14",
                      index % 2 === 0
                        ? "bg-primary/10 text-primary md:group-hover:bg-primary md:group-hover:text-primary-foreground"
                        : "bg-secondary/10 text-secondary md:group-hover:bg-secondary md:group-hover:text-secondary-foreground"
                    )}
                  >
                    <Icon className="size-6" />
                  </span>

                  <div className="flex-1">
                    <h3 className="text-base font-bold md:text-lg">
                      {industry.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {industry.note}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
