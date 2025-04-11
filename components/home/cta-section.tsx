"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
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
            a <span className="font-bold text-xl  text-secondary">free 1hr</span>{" "}
            strategy{" "}
            <span className="font-bold text-xl  text-secondary">consultation</span>{" "}
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
              asChild
              size="lg"
              className="bg-black hover:bg-black/60 duration-200 text-white rounded-full"
              navigate={true}
            >
              <Link href="/contact">Request a Call Back</Link>
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
              <Link href="/services">Explore Services</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
