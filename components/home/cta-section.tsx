"use client";

import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { RequestCallbackModal } from "../request-callback-modal";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);

  return (
    <section
      ref={ref}
      className="py-20 relative bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900"
    >
      <div className="relative container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Let's Elevate your brand
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/80 mb-8 text-lg"
          >
            Let's transform your business into an influential brand. <br /> Get
            a <span className="font-bold text-xl text-secondary">free 1hr</span>{" "}
            strategy{" "}
            <span className="font-bold text-xl text-secondary">
              consultation
            </span>{" "}
            to discuss your needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-black hover:bg-black/60 w-fit duration-200 text-white rounded-full"
              onClick={() => setCallbackModalOpen(true)}
            >
              Request a Call Back
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white rounded-full"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white/10 rounded-full"
            >
              <Link href="/packages" className="flex items-center">
                Explore Packages
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <RequestCallbackModal
        isOpen={callbackModalOpen}
        onClose={() => setCallbackModalOpen(false)}
      />
    </section>
  );
}
