"use client";

import { forwardRef, useRef, type ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Activity,
  AppWindow,
  Compass,
  Globe,
  LifeBuoy,
  PenTool,
  Rocket,
  Server,
  Smartphone,
  Wrench,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { DotPattern } from "@/components/ui/dot-pattern";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";

const BRAND_BLUE = "#003EAD";
const BRAND_ORANGE = "#FF6600";

const steps: { icon: LucideIcon; stage: string; title: string; description: string }[] = [
  {
    icon: Compass,
    stage: "Discover",
    title: "Brief and requirements",
    description:
      "We work with you to map the audience, content, systems and success measures before a line of code is written.",
  },
  {
    icon: PenTool,
    stage: "Design & build",
    title: "Designs and development in sprints",
    description:
      "Designs in your brand identity, built and reviewed in stages so you see progress and feed back as we go.",
  },
  {
    icon: Rocket,
    stage: "Launch",
    title: "Deployment and go-live",
    description:
      "Hosting, domain, SSL, analytics, app store submission and a careful hand-off checklist on launch day.",
  },
  {
    icon: Wrench,
    stage: "Run & support",
    title: "Maintenance and partnership",
    description:
      "Monitoring, backups, security updates and content changes on a monthly plan, with priority support when you need it.",
  },
];

const Node = forwardRef<
  HTMLDivElement,
  { icon: ReactNode; label: string; className?: string; accent?: boolean }
>(({ icon, label, className, accent }, ref) => (
  <div className={cn("flex flex-col items-center gap-2", className)}>
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border bg-card shadow-md sm:size-14",
        accent
          ? "border-primary/30 text-primary"
          : "border-border text-foreground/80"
      )}
    >
      {icon}
    </div>
    <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground sm:text-xs">
      {label}
    </span>
  </div>
));
Node.displayName = "TechProcessNode";

function BuildAndRunDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centre = useRef<HTMLDivElement>(null);
  const website = useRef<HTMLDivElement>(null);
  const webApp = useRef<HTMLDivElement>(null);
  const mobile = useRef<HTMLDivElement>(null);
  const integrations = useRef<HTMLDivElement>(null);
  const hosting = useRef<HTMLDivElement>(null);
  const monitoring = useRef<HTMLDivElement>(null);
  const support = useRef<HTMLDivElement>(null);

  const inputs = [
    { ref: website, icon: <Globe className="size-5" />, label: "Website" },
    { ref: webApp, icon: <AppWindow className="size-5" />, label: "Web App" },
    { ref: mobile, icon: <Smartphone className="size-5" />, label: "Mobile App" },
    { ref: integrations, icon: <Workflow className="size-5" />, label: "Integrations" },
  ];
  const outputs = [
    { ref: hosting, icon: <Server className="size-5" />, label: "Hosting" },
    { ref: monitoring, icon: <Activity className="size-5" />, label: "Monitoring" },
    { ref: support, icon: <LifeBuoy className="size-5" />, label: "Support" },
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/80 p-6 shadow-xl backdrop-blur sm:p-8">
      <DotPattern
        width={22}
        height={22}
        cr={1}
        className="text-primary/20 [mask-image:radial-gradient(60%_60%_at_50%_50%,white,transparent)]"
      />
      <BorderBeam
        size={160}
        duration={10}
        colorFrom={BRAND_BLUE}
        colorTo={BRAND_ORANGE}
      />

      <div className="relative mb-6 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <span>We build</span>
        <span>We run</span>
      </div>

      <div
        ref={containerRef}
        className="relative flex items-center justify-between gap-4"
      >
        <div className="flex flex-col gap-6">
          {inputs.map((n) => (
            <Node key={n.label} ref={n.ref} icon={n.icon} label={n.label} />
          ))}
        </div>

        <Node
          ref={centre}
          accent
          label="Elegance Inspired"
          className="mx-2"
          icon={
            <span className="flex size-9 items-center justify-center overflow-hidden rounded-full sm:size-10">
              <Image
                src="/ICON.jpg"
                alt="Elegance Inspired"
                width={40}
                height={40}
                className="size-full scale-[2.4] object-cover"
              />
            </span>
          }
        />

        <div className="flex flex-col gap-8">
          {outputs.map((n) => (
            <Node key={n.label} ref={n.ref} icon={n.icon} label={n.label} />
          ))}
        </div>

        {inputs.map((n, i) => (
          <AnimatedBeam
            key={n.label}
            containerRef={containerRef}
            fromRef={n.ref}
            toRef={centre}
            curvature={i < 2 ? -40 : 40}
            duration={4}
            delay={i * 0.6}
            pathColor={BRAND_BLUE}
            pathOpacity={0.15}
            gradientStartColor={BRAND_BLUE}
            gradientStopColor={BRAND_ORANGE}
          />
        ))}
        {outputs.map((n, i) => (
          <AnimatedBeam
            key={n.label}
            containerRef={containerRef}
            fromRef={centre}
            toRef={n.ref}
            curvature={i === 0 ? -40 : i === 2 ? 40 : 0}
            duration={4}
            delay={1.2 + i * 0.6}
            pathColor={BRAND_ORANGE}
            pathOpacity={0.15}
            gradientStartColor={BRAND_ORANGE}
            gradientStopColor={BRAND_BLUE}
          />
        ))}
      </div>
    </div>
  );
}

export default function TechnologyProcess() {
  return (
    <section id="process" className="scroll-mt-20 bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              How we work
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              A process built for predictable launches
            </h2>
            <p className="mt-4 text-muted-foreground">
              We&apos;ve ironed out the hand-offs between design, development
              and operations so that your project moves forward without the
              usual agency chaos.
            </p>

            <ul className="mt-8 space-y-6">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <motion.li
                    key={step.stage}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="relative flex gap-4 rounded-xl border border-border/60 bg-card/60 p-5"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <StepIcon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                        {step.stage}
                      </p>
                      <h3 className="mt-1 font-bold">{step.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              One team, build and run
            </span>
            <h3 className="mt-2 text-2xl font-bold md:text-3xl">
              We don&apos;t hand you off at launch
            </h3>
            <p className="mt-3 text-muted-foreground">
              The same team that designs and builds your product keeps it
              running, so nothing is lost in translation.
            </p>

            <div className="mt-8">
              <BuildAndRunDiagram />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
