"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Brush, TrendingUp, Globe, Printer, Users } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Carousel, CarouselSlideResponsive } from "@/components/ui/carousel";
import ServicesLightbulb from "./services-lightbulb";

const services = [
  {
    icon: <Brush className="h-10 w-10 text-white" />,
    title: "Corporate Branding",
    description:
      "We develop key messages & define a brand's purpose, values, and target audience.",
    number: "01",
    href: "/services#corporate-branding",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-white" />,
    title: "Strategic Advertising",
    description:
      "We provide advert design, media planning, and placement to maximize the impact of advertising efforts.",
    number: "02",
    href: "/services#strategic-advertising",
  },
  {
    icon: <Globe className="h-10 w-10 text-white" />,
    title: "Digital Marketing",
    description:
      "We develop marketing strategies and campaigns to promote products or services across different channels.",
    number: "03",
    href: "/services#digital-marketing",
  },
  {
    icon: <Printer className="h-10 w-10 text-white" />,
    title: "Premium Printing",
    description:
      "We offer high-quality printing options to ensure that the printed materials effectively represent the client's brand.",
    number: "04",
    href: "/services#premium-printing",
  },
  {
    icon: <Users className="h-10 w-10 text-white" />,
    title: "HR Consulting",
    description:
      "We offer customizable HR solutions to support businesses at every stage, from startups to established enterprises.",
    number: "05",
    href: "/services#consulting",
  },
];

export default function ServicesHighlight() {
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

  const renderServiceCard = (service: (typeof services)[0], index: number) => (
    <Card className="h-full bg-transparent relative text-center rounded-xl sm:hover:-mt-4  shadow-md p-6 flex flex-col items-start sm:items-center gap-4 transition-all duration-300 hover:shadow-lg max-w-[340px] sm:max-w-[300px]">
      <div className="bg-primary absolute -top-[20%] left-[15%] rounded-full p-5 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20">
        {service.icon}
      </div>
      <CardHeader className="pt-5 sm:pt-8 pb-0 px-0">
        <CardTitle className="text-xl font-extrabold leading-tight">
          {service.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 text-start sm:text-center ">
        <CardDescription className="text-muted-foreground text-sm">
          {service.description}
        </CardDescription>
      </CardContent>
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
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            We Make Brands Exceptional
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Elegance Inspired Limited offers a range of services to help you
            build a strong and sophisticated brand presence.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center gap-12 sm:gap-8"
        >
          {services.slice(0, 4).map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              {renderServiceCard(service, index)}
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 rounded-full"
            navigate={true}
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
