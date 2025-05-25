"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="py-16 md:py-24 bg-background scroll-mt-20 w-full"
    >
      <div className="container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            <div className="space-y-4 text-justif">
              <p>
                Elegance Inspired is a leading corporate branding agency
                dedicated to helping businesses achieve their full potential in
                the ever-evolving marketplace. We are passionate about helping
                businesses elevate their brands, connect with their customers,
                and achieve their desired outcomes.
              </p>
              <p>
                The Elegance Inspired Limited was established in February 2021
                and is incorporated under the companies and Allied Matters
                Decree of 1990 and issued the registration number 1753361.
              </p>
              <p>
                We have helped numerous businesses across various industries
                establish a strong brand presence, amplify their message, and
                drive meaningful engagement.
              </p>
              <p>
                Branding creates value, trust, and loyalty in the services or
                products you offer. We have built a reputation for successfully
                building and refining our clients' brands to captivate new
                audiences, increase awareness, drive growth, and launch new
                endeavors. Let's make your brand a success.
              </p>
              <p>
                Join us on this journey of creativity and success, and let's
                inspire the world together.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-6 w-full">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 rounded-br-3xl sm:rounded-full"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <a
                href="/Elegance Inspired Ltd Brochure.pdf"
                download
                className="bg-secondary text-black dark:text-white hover:bg-secondary/90 rounded-tl-3xl sm:rounded-full px-6 py-2 text-sm font-medium transition-colors"
              >
                Download Brochure
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src="/DSCF6162.jpg"
              alt="Elegance Inspired Team"
              width={600}
              height={500}
              className="rounded-lg shadow-xl object-cover md:-mt-16"
            />
            <div className="absolute -bottom-6 lg:-bottom-12  -left-8 bg-white dark:bg-gray-800 p-3 sm:p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl sm:text-4xl font-bold text-primary mb-1">4+</div>
                  <div className="text-xs sm:text-sm">Years of Experience</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-4xl font-bold text-primary mb-1">
                    100+
                  </div>
                  <div className="text-xs sm:text-sm">Satisfied Clients</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-4xl font-bold text-primary mb-1">30+</div>
                  <div className="text-xs sm:text-sm">Industries Served</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
