"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { newsItems } from "@/data/news-data";

export default function NewsGrid() {
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
        {newsItems.map((item) => (
          <motion.div key={item.id} variants={itemVariants}>
            <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
              <Link href={`/media/news/${item.slug}`} className="group">
                {item.images.length > 0 ? (
                  <div className="relative overflow-hidden aspect-video">
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="relative overflow-hidden aspect-video bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">No image</span>
                  </div>
                )}
              </Link>
              <CardContent className="p-6">
                {item.category && (
                  <span className="text-xs font-medium text-primary mb-2 block">
                    {item.category}
                  </span>
                )}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 shrink-0" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{item.excerpt}</p>
                <Link
                  href={`/media/news/${item.slug}`}
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                >
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
