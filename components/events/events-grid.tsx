"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import { eventsData } from "@/data/events-data";
import OptimizedImage from "../optimized-image";

export default function EventsGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {eventsData.map((event) => (
          <motion.div key={event.id} variants={itemVariants}>
            <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
              <Link href={`/media/events/${event.slug}`} className="group">
                <div className="relative overflow-hidden aspect-video">
                  <OptimizedImage
                    src={event.image}
                    alt={event.title}
                    width={600}
                    height={400}
                    showLoadingIndicator
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
                      <Calendar className="h-4 w-4 shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {event.title}
                    </h3>
                  </div>
                </div>
              </Link>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  <span>{event.location}</span>
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {event.excerpt}
                </p>
                <Link
                  href={`/media/events/${event.slug}`}
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                >
                  View Event Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
