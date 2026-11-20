"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  AppWindow,
  ArrowRight,
  Check,
  MonitorSmartphone,
  ServerCog,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Programming } from "@/components/illustrations/programming";
import { ProgressiveApp } from "@/components/illustrations/progressive-app";
import { MobileApp } from "@/components/illustrations/mobile-app";
import { Maintenance } from "@/components/illustrations/maintenance";

type Capability = {
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  illustration: (typeof Programming) | (typeof ProgressiveApp);
  points: string[];
};

const capabilities: Capability[] = [
  {
    title: "Website Design & Development",
    tagline: "Websites that sell your brand",
    description:
      "Corporate sites, landing pages, e-commerce stores and content-managed sites built on your brand identity.",
    icon: MonitorSmartphone,
    illustration: ProgressiveApp,
    points: [
      "Responsive design across every device",
      "Search-ready, analytics-ready, speed-optimised",
      "Easy editing for your team after handover",
      "Payments, bookings and newsletter integrations",
    ],
  },
  {
    title: "Web Application Development",
    tagline: "Custom portals, dashboards and SaaS",
    description:
      "Internal tools, member portals, admin dashboards and SaaS products, wired to the systems your business already runs on.",
    icon: AppWindow,
    illustration: Programming,
    points: [
      "Secure sign-in with roles and permissions",
      "Dashboards, reporting and data exports",
      "Connected to the systems your business runs on",
      "Built to grow with your team and your users",
    ],
  },
  {
    title: "Mobile App Development",
    tagline: "iOS and Android apps, end to end",
    description:
      "Native or cross-platform apps, from design and prototype through testing, store submission and ongoing releases.",
    icon: Smartphone,
    illustration: MobileApp,
    points: [
      "Native-feeling apps for iOS and Android",
      "Push notifications, deep links and analytics",
      "App Store and Google Play submission handled",
      "Ongoing releases and in-app updates",
    ],
  },
  {
    title: "Managed Hosting, Maintenance & Support",
    tagline: "One team, before and after launch",
    description:
      "Hosting, domains and SSL, security patches, backups, uptime monitoring and content updates on a monthly retainer.",
    icon: ServerCog,
    illustration: Maintenance,
    points: [
      "Reliable managed hosting and domain setup",
      "Daily backups and 24/7 uptime monitoring",
      "Routine security and maintenance updates",
      "Content changes and priority support on retainer",
    ],
  },
];

export default function TechnologyCapabilities() {
  return (
    <section
      id="capabilities"
      className="scroll-mt-20 bg-background py-16 md:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            What we build
          </span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Four services, one connected team
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every engagement is scoped, designed and built by the Elegance team,
            with the same hands running it after launch.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            const Illustration = cap.illustration;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="group h-full overflow-hidden border-border/60 transition-shadow duration-300 md:hover:shadow-lg">
                  <div className="relative flex h-44 items-end justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/5 px-10 pt-6">
                    <Illustration
                      className="h-full w-auto transition-transform duration-500 md:group-hover:scale-[1.03]"
                      aria-hidden
                    />
                    <span className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-full bg-background/80 text-primary shadow-sm backdrop-blur">
                      <Icon className="size-5" />
                    </span>
                  </div>

                  <CardHeader className="pb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                      {cap.tagline}
                    </span>
                    <CardTitle className="mt-1 text-xl">{cap.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground">
                      {cap.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {cap.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Check className="size-3" />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild size="lg" className="rounded-full" navigate>
            <Link href="/contact">
              Scope your project with us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
