"use client";

import { forwardRef, useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Activity,
  AppWindow,
  ArrowRight,
  Mail,
  Globe,
  LifeBuoy,
  MonitorSmartphone,
  Server,
  ServerCog,
  Smartphone,
  Workflow,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardStack } from "@/components/ui/card-stack";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { DotPattern } from "@/components/ui/dot-pattern";
import { BorderBeam } from "@/components/ui/border-beam";
import { Programming } from "@/components/illustrations/programming";
import { ProgressiveApp } from "@/components/illustrations/progressive-app";
import { MobileApp } from "@/components/illustrations/mobile-app";
import { Maintenance } from "@/components/illustrations/maintenance";
import { cn } from "@/lib/utils";

const BRAND_BLUE = "#003EAD";
const BRAND_ORANGE = "#FF6600";

const techServices = [
  {
    title: "Website Design & Development",
    description:
      "Corporate websites, landing pages, e-commerce stores and content-managed sites. Responsive, fast and search-ready.",
    icon: <MonitorSmartphone className="h-10 w-10 text-primary" />,
    illustration: ProgressiveApp,
  },
  {
    title: "Web Application Development",
    description:
      "Custom portals, dashboards, internal tools and SaaS products, with APIs and integrations to payments, CRM, email and existing systems.",
    icon: <AppWindow className="h-10 w-10 text-primary" />,
    illustration: Programming,
  },
  {
    title: "Mobile App Development",
    description:
      "iOS and Android apps, native or cross-platform. Design, development, testing, store submission and ongoing releases.",
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    illustration: MobileApp,
  },
  {
    title: "Managed Hosting, Maintenance & Support",
    description:
      "Hosting, domains and SSL, security patches, backups, uptime monitoring, content updates and support, on a monthly retainer.",
    icon: <ServerCog className="h-10 w-10 text-primary" />,
    illustration: Maintenance,
  },
];

const techProcess = [
  {
    number: "01 · Discover",
    title: "Requirements",
    description:
      "Brief, users, content and the systems to be connected.",
  },
  {
    number: "02 · Design & build",
    title: "Design & development",
    description:
      "Designs in the brand identity, developed and reviewed in stages.",
  },
  {
    number: "03 · Launch",
    title: "Deployment",
    description:
      "Hosting, domain, SSL, analytics and app store submission.",
  },
  {
    number: "04 · Run & support",
    title: "Maintenance",
    description:
      "Monitoring, backups, security updates, content changes and support on a monthly plan.",
  },
];

/* ---------- Build-and-run diagram ---------- */

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
Node.displayName = "Node";

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
      <BorderBeam size={160} duration={10} colorFrom={BRAND_BLUE} colorTo={BRAND_ORANGE} />

      <div className="relative mb-6 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <span>We build</span>
        <span>We run</span>
      </div>

      <div ref={containerRef} className="relative flex items-center justify-between gap-4">
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

/* ---------- Section ---------- */

export default function Technology() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const renderServiceCard = (service: (typeof techServices)[0]) => {
    const Illustration = service.illustration;
    return (
      <Card className="h-full overflow-hidden border-border/50 transition-shadow duration-300 md:hover:shadow-md">
        <div className="flex h-40 items-center justify-center bg-primary/[0.04] px-8 pt-6">
          <Illustration className="h-full w-auto" aria-hidden />
        </div>
        <CardHeader>
          <div className="mb-4">{service.icon}</div>
          <CardTitle>{service.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{service.description}</p>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="technology" className="scroll-mt-20 bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Technology</h2>
            <div className="space-y-4">
              <p>
                We design and develop websites, web applications and mobile
                apps for businesses of every size, built to the client&apos;s
                brand identity and ready for search, speed and scale.
              </p>
              <p>
                We also host, monitor, maintain and support what we build, so
                the client has one team for development and for everything
                after launch.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full" navigate>
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href="mailto:tech@eleganceinspired.org">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <BuildAndRunDiagram />
          </motion.div>
        </div>

        <motion.ol
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {techProcess.map((step) => (
            <li
              key={step.number}
              className="rounded-xl border border-border/50 bg-card/60 p-5"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                {step.number}
              </span>
              <h4 className="mt-2 font-bold">{step.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </motion.ol>

        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center text-2xl font-bold"
          >
            What we build and manage:
          </motion.h3>

          {isMobile ? (
            <CardStack className="mb-8">
              {techServices.map((service) => (
                <div key={service.title}>
                  {renderServiceCard(service)}
                </div>
              ))}
            </CardStack>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {techServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {renderServiceCard(service)}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
