"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { accordionData } from "@/data";


export default function WhyChooseUs() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative md:-mr-10"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/choose-us.jpeg"
                alt="Professional team collaboration"
                className="w-full h-[400px]  md:h-[560px] object-cover scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative md:-ml-10"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-primary/90 to-primary/90 rounded-2xl transform rotate-1"></div>
            <div className="relative bg-gradient-tobr from-primary via-primary/95 to-secondary rounded-2xl p-8 md:p-10 text-white">
              {/* Header */}
              <div className="mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center gap-4 mb-4"
                >
                  <span className="text-secondary font-semibold">
                    Why Choose Us
                  </span>
                  <div className="flex gap-2">
                    <div className="w-8 h-1 bg-secondary rounded-full"></div>
                    <div className="w-4 h-1 bg-secondary/60 rounded-full"></div>
                  </div>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  What Sets Us Apart
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-white/90 text-lg"
                >
                  We love what we do, and we do it with passion.
                </motion.p>
              </div>

              {/* Accordion */}
              <div className="space-y-4">
                {accordionData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="border-b border-white/20 last:border-b-0"
                  >
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full flex items-center justify-between py-4 text-left group hover:text-secondary transition-colors duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <motion.div
                          animate={{
                            backgroundColor:
                              openAccordion === item.id ? "#ffffff" : "#000000",
                            scale: openAccordion === item.id ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.3 }}
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                        >
                          <motion.div
                            animate={{
                              rotate: openAccordion === item.id ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {openAccordion === item.id ? (
                              <Minus className="w-5 h-5 text-primary" />
                            ) : (
                              <Plus className="w-5 h-5 text-secondary" />
                            )}
                          </motion.div>
                        </motion.div>
                        <span className="text-xl font-semibold">
                          {item.title}
                        </span>
                      </div>
                    </button>

                    <AnimatePresence>
                      {openAccordion === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <motion.div
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            exit={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="pb-6 pl-14"
                          >
                            <p className="text-white/90 leading-relaxed">
                              {item.content}
                            </p>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
