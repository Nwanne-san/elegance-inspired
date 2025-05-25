"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye, Target } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-[#003EAD] text-white">
      <div className="container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src="/aboutus image-two.jpg"
              alt="About Elegance Inspired"
              width={600}
              height={600}
              className="rounded-lg h-[300px] sm:h-[700px] object-center object-cover shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center sm:text-start mb-6 !font-lato">
              We Are Your Reliable Branding Partner
            </h2>

            <p className="mb-6 text-justif">
              Elegance Inspired is a leading corporate branding agency dedicated
              tohelping businesses achieve their full potential in the
              ever-evolving marketplace.
            </p>

            <p className="mb-8 text-justif">
              We have helped numerous businesses across various industries
              establish a strong brand presence, amplify their message, and
              drive meaningful engagement. We have built a reputation for
              successfully building and refining our clients’ brands to
              captivate new audiences, increase awareness, drive growth, and
              launch new endeavors.
            </p>
            <p className="mb-8 text-justif">
              Let’s make your brand a success.
            </p>

            <div className="flex sm:grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">4+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">100+</div>
                <div className="text-sm">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">30+</div>
                <div className="text-sm">Industries Served</div>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white rounded-tl-3xl -full"
            >
              <Link href="/about">Get to Know More About Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
