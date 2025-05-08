"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PortfolioItem, portfolioItems } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import OptimizedImage from "../optimized-image";

export default function PortfolioGridClient() {
  const searchParams = useSearchParams();
  const [filteredItems, setFilteredItems] = useState(portfolioItems);

  // Get the current category from URL or default to "all"
  const currentCategory = searchParams.get("category") || "all";

  useEffect(() => {
    if (currentCategory === "all") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(
        portfolioItems.filter((item) => item.category === currentCategory)
      );
    }
  }, [currentCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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
    <div className="container mx-auto px-4 py-12">
      {filteredItems.length === 0 ? (
        <div className="text-center py-16">
          <h3 className="text-2xl font-bold mb-4">No projects found</h3>
          <p className="text-muted-foreground">
            We don't have any projects in this category yet. Please check back
            later or explore other categories.
          </p>
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                <Link href={`/portfolio/${item.id}`} className="group">
                  <div className="relative overflow-hidden aspect-video">
                    <OptimizedImage
                      src={item.images[0] || "/placeholder.svg"}
                      alt={item.title}
                      width={600}
                      height={400}
                      showLoadingIndicator={true}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                      <span className="text-sm text-[#FF6600] font-medium mb-2">
                        {item.client}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </Link>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/portfolio/${item.id}`}
                    className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                  >
                    View Project Details
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
      )}
    </div>
  );
}
