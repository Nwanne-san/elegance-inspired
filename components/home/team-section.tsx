"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { team } from "@/data/index";
import { useEffect, useState } from "react";
import { Carousel, CarouselSlideResponsive } from "@/components/ui/carousel";

export default function TeamSection() {
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

  // Only show first 4 team members on home page
  const displayedTeam = team.slice(0, 4);

  const renderTeamCard = (member: (typeof team)[0], index: number) => (
    <Card className="overflow-hidden bg-card border-border/50 h-full hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden group">
        <Link href="/about#creative-team" className="block">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            width={400}
            height={400}
            className="w-full  object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
        </Link>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent sm:opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end justify-center p-6">
          <div className="flex space-x-5 sm:space-x-3">
            <a
              href={member.social.instagram}
              className="bg-white/20 p-2 rounded-full hover:bg-[#FF6600] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Instagram className="h-4 w-4 text-white" />
            </a>
            <a
              href={member.social.facebook}
              className="bg-white/20 p-2 rounded-full hover:bg-[#FF6600] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Facebook className="h-4 w-4 text-white" />
            </a>
            <a
              href={member.social.twitter}
              className="bg-white/20 p-2 rounded-full hover:bg-[#FF6600] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Twitter className="h-4 w-4 text-white" />
            </a>
            <a
              href={member.social.linkedin}
              className="bg-white/20 p-2 rounded-full hover:bg-[#FF6600] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Linkedin className="h-4 w-4 text-white" />
            </a>
          </div>
        </div>
      </div>
      <Link href="/about#creative-team" className="block">
        <CardContent className="text-center pt-6">
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-muted-foreground">{member.position}</p>
        </CardContent>
      </Link>
    </Card>
  );

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="text-secondary">Our Dedicated Team:</span> Your
            Trusted Partners in Branding
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Our team is dedicated to helping businesses enhance their brand
            identity, reach their target audience, and achieve remarkable
            success in the marketplace.
          </motion.p>
        </div>

        {isMobile ? (
          <Carousel
            className="mb-8"
            autoplay={true}
            autoplayInterval={5000}
            options={{
              loop: true,
              dragFree: true,
            }}
          >
            {displayedTeam.map((member, index) => (
              <CarouselSlideResponsive key={index} className="px-2">
                {renderTeamCard(member, index)}
              </CarouselSlideResponsive>
            ))}
          </Carousel>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {displayedTeam.map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                {renderTeamCard(member, index)}
              </motion.div>
            ))}
          </motion.div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/about#creative-team"
            className="text-primary hover:text-secondary text-lg font-medium"
          >
            Meet the entire team →
          </Link>
        </div>
      </div>
    </section>
  );
}
