"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "How much does a website, web app or mobile app cost?",
    a: "Every brief is different, so we quote per project after a short discovery call. Typical starting ranges are: brochure websites from the low six-figures (Naira) for small businesses, content-managed and e-commerce sites a tier above, and custom web or mobile apps scoped against features, integrations and timelines. Hosting and support run on a monthly retainer.",
  },
  {
    q: "How long does a project take from brief to launch?",
    a: "A standard marketing website runs about 4 to 8 weeks, e-commerce 6 to 10, and web or mobile apps anywhere from 8 weeks to several months depending on scope. We agree a phased plan up front and ship in sprints so you see progress regularly, not just at the end.",
  },
  {
    q: "Who owns the code, design files and domain?",
    a: "You do. At project close we hand over source code, repositories, design files, content and credentials. Domains and hosting accounts stay in your name. We make this explicit in the contract so there are no surprises.",
  },
  {
    q: "Can you work with our in-house team or existing agency?",
    a: "Yes. We regularly collaborate with in-house product, brand and marketing teams, as well as other agencies. We can slot into your tooling (GitHub, Figma, Slack, Trello, Jira) or work on ours.",
  },
  {
    q: "Do you handle hosting, security and ongoing updates?",
    a: "Yes. Our managed hosting, maintenance and support plans cover hosting, domains, security, daily backups, routine updates, uptime monitoring and a pool of hours for content changes and small enhancements every month.",
  },
  {
    q: "Where are you based and who do you work with?",
    a: "We're a Lagos-based agency serving clients across Nigeria and internationally. We work with everyone from early-stage founders to established organisations in finance, retail, education, hospitality and the public sector.",
  },
];

export default function TechnologyFAQ() {
  return (
    <section id="faq" className="scroll-mt-20 bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Frequently asked
          </span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Answers before the kickoff call
          </h2>
          <p className="mt-4 text-muted-foreground">
            The questions clients ask us most often about cost, timing and how
            we work.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border/60 bg-card/80 p-2 shadow-sm sm:p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.q}
                value={`item-${index}`}
                className="border-border/60 last:border-b-0"
              >
                <AccordionTrigger className="px-4 text-left text-base font-semibold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 text-sm text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full" navigate>
            <Link href="/contact">
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <a href="mailto:tech@eleganceinspired.org">
              <Mail className="mr-2 h-4 w-4" />
              Email the Tech Team
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
