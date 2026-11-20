"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LogoDesign } from "@/components/illustrations/logo-design";
import { Maintenance } from "@/components/illustrations/maintenance";
import { Programming } from "@/components/illustrations/programming";
import { SocialMedia } from "@/components/illustrations/social-media";

type Reason = {
  title: string;
  description: string;
  illustration: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const reasons: Reason[] = [
  {
    title: "Built on your brand",
    description:
      "As a branding agency first, your product looks and feels like the rest of your identity.",
    illustration: LogoDesign,
  },
  {
    title: "Shipped in sprints",
    description:
      "Short, reviewed cycles so progress is visible every week, not just at the end.",
    illustration: Programming,
  },
  {
    title: "Safe by default",
    description:
      "Managed hosting, backups and monitoring keep your product steady after launch.",
    illustration: Maintenance,
  },
  {
    title: "A long-term partner",
    description:
      "Retainer support keeps us close, so what we build keeps improving with your business.",
    illustration: SocialMedia,
  },
];

export default function TechnologyWhyUs() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Why Elegance for technology
          </span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            A different kind of software partner
          </h2>
          <p className="mt-4 text-muted-foreground">
            We approach every product as part of a brand, not a one-off build,
            which changes how the work looks, feels and performs.
          </p>
        </motion.div>

        {/* Feature banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mt-12 overflow-hidden rounded-3xl border border-border/60 bg-primary text-primary-foreground shadow-xl"
        >
          <Image
            src="/choose-us.jpeg"
            alt="The Elegance Inspired team at work"
            fill
            sizes="100vw"
            className="object-cover opacity-60"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-secondary/50" />

          <div className="relative grid grid-cols-1 gap-8 p-8 md:grid-cols-5 md:gap-10 md:p-12">
            <div className="md:col-span-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/80">
                The Elegance difference
              </span>
              <h3 className="mt-3 text-2xl font-bold leading-tight md:text-4xl">
                One team, from first sketch to every update after launch.
              </h3>
              <p className="mt-4 max-w-xl text-sm text-primary-foreground/90 md:text-base">
                Design, development, hosting and support live under one roof,
                so nothing is lost between brief and build, or build and
                support.
              </p>
            </div>

            <dl className="grid grid-cols-3 gap-4 md:col-span-2 md:gap-6">
              <div>
                <dt className="text-xs uppercase tracking-wider text-primary-foreground/70">
                  Teams
                </dt>
                <dd className="mt-1 text-3xl font-bold md:text-4xl">1</dd>
                <p className="mt-1 text-xs text-primary-foreground/80">
                  under one roof
                </p>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-primary-foreground/70">
                  Services
                </dt>
                <dd className="mt-1 text-3xl font-bold md:text-4xl">4</dd>
                <p className="mt-1 text-xs text-primary-foreground/80">
                  design to support
                </p>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-primary-foreground/70">
                  Monitoring
                </dt>
                <dd className="mt-1 text-3xl font-bold md:text-4xl">24/7</dd>
                <p className="mt-1 text-xs text-primary-foreground/80">
                  after launch
                </p>
              </div>
            </dl>
          </div>
        </motion.div>

        {/* Reason cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Illustration = reason.illustration;
            return (
              <motion.article
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-shadow duration-300 md:hover:shadow-md"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-primary/10 blur-2xl transition-colors md:group-hover:bg-secondary/15" />
                <div className="relative mb-5 flex h-28 items-center justify-center rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5">
                  <Illustration className="h-full w-auto p-3" aria-hidden />
                </div>
                <h3 className="relative text-lg font-bold">{reason.title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
