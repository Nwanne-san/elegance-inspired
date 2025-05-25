"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "framer-motion";
import Image from "next/image";

interface ServiceItem {
  title: string;
  description: string;
  href: string;
  position: string;
}

const services: ServiceItem[] = [
  {
    title: "Corporate Branding",
    description:
      "Develop key messages & define a brand's purpose, values, and target audience",
    href: "/services#corporate-branding",
    position: "top-[25%] left-0",
  },
  {
    title: "Digital Marketing",
    description:
      "Develop marketing strategies and campaigns across different channels",
    href: "/services#digital-marketing",
    position: "top-[25%] right-0",
  },
  {
    title: "Premium Printing",
    description:
      "High-quality printing options to effectively represent your brand",
    href: "/services#premium-printing",
    position: "bottom-[25%] left-0",
  },
  {
    title: "Strategic Advertising",
    description:
      "Advert design, media planning and placement for maximum impact",
    href: "/services#strategic-advertising",
    position: "bottom-[25%] right-0",
  },
  {
    title: "HR Consulting",
    description: "Customizable HR solutions for businesses at every stage",
    href: "/services#consulting",
    position: "bottom-0 left-1/2 transform -translate-x-1/2",
  },
];

export default function LightbulbServices() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  // Preload the image
  useEffect(() => {
    const img = new window.Image();
    img.src = "/bulb and header.svg";
    img.onload = () => setImageLoaded(true);
  }, []);

  const getServiceStyle = (position: string) => {
    // Map positions to match the image layout
    const positionStyles: Record<string, React.CSSProperties> = {
      "top-[25%] left-0": {
        position: "absolute",
        top: "30%",
        left: "35%",
        transform: "translateX(-100%)",
        textAlign: "right",
        maxWidth: "200px",
      },
      "top-[25%] right-0": {
        position: "absolute",
        top: "30%",
        right: "35%",
        transform: "translateX(100%)",
        textAlign: "left",
        maxWidth: "200px",
      },
      "bottom-[25%] left-0": {
        position: "absolute",
        bottom: "18%",
        left: "32%",
        transform: "translateX(-100%)",
        textAlign: "right",
        maxWidth: "200px",
      },
      "bottom-[25%] right-0": {
        position: "absolute",
        bottom: "15%",
        right: "32%",
        transform: "translateX(100%)",
        textAlign: "left",
        maxWidth: "200px",
      },
      "bottom-0 left-1/2 transform -translate-x-1/2": {
        position: "absolute",
        bottom: "-15%",
        left: "50%",
        transform: "translateX(-50%)",
        textAlign: "center",
        maxWidth: "200px",
      },
    };

    return positionStyles[position] || {};
  };

  const getLineStyle = (position: string) => {
    // Map positions for the connecting lines
    const lineStyles: Record<string, React.CSSProperties> = {
      "top-[25%] left-0": {
        position: "absolute",
        top: "50%",
        right: "-30%",
        width: "40px",
        height: "3px",
        backgroundColor: "bg-secondary",
        transform: "translateY(-50%)",
      },
      "top-[25%] right-0": {
        position: "absolute",
        top: "50%",
        left: "-30%",
        width: "40px",
        height: "3px",
        backgroundColor: "bg-secondary",
        transform: "translateY(-50%)",
      },
      "bottom-[25%] left-0": {
        position: "absolute",
        top: "50%",
        right: "-30%",
        width: "40px",
        height: "3px",
        backgroundColor: "bg-secondary",
        transform: "translateY(-50%)",
      },
      "bottom-[25%] right-0": {
        position: "absolute",
        top: "50%",
        left: "-30%",
        width: "40px",
        height: "3px",
        backgroundColor: "bg-secondary",
        transform: "translateY(-50%)",
      },
      "bottom-0 left-1/2 transform -translate-x-1/2": {
        position: "absolute",
        top: "-30px",
        left: "50%",
        width: "3px",
        height: "30px",
        backgroundColor: "bg-secondary",
        transform: "translateX(-50%)",
      },
    };

    return lineStyles[position] || {};
  };

  const serviceVariants = {
    hidden: { opacity: 0 },
    visible: (index: number) => ({
      opacity: 1,
      transition: {
        delay: 0.3 + index * 0.1,
        duration: 0.6,
      },
    }),
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0, originX: 0.5, originY: 0.5 },
    visible: (index: number) => ({
      scaleX: 1,
      opacity: 1,
      transition: {
        delay: 0.02 + index * 0.1,
        duration: 0.4,
      },
    }),
  };

  const verticalLineVariants = {
    hidden: { scaleY: 0, opacity: 0, originX: 0.5, originY: 0 },
    visible: (index: number) => ({
      scaleY: 1,
      opacity: 1,
      transition: {
        delay: 0.2 + index * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <div
      ref={ref}
      className="relative w-full mx-auto py-16 px-4"
      style={{ minHeight: "600px" }}
    >
      <div className="max-w-4xl mx-auto relative">
        {/* Main Lightbulb Image */}
        <motion.div
          className="relative mx-auto max-sm:w-[150px] max-sm:h-[200px] sm:w-[300px] sm:h-[400px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/bulb and header.svg"
            alt="Services Lightbulb"
            width={300}
            height={400}
            className="w-full h-auto"
            priority
            onLoad={() => setImageLoaded(true)}
          />
        </motion.div>

        {/* Service Items with connecting lines */}
        {services.map((service, index) => (
          <motion.div
            key={index}
            style={getServiceStyle(service.position)}
            initial="hidden"
            animate={isInView && imageLoaded ? "visible" : "hidden"}
            variants={serviceVariants}
            custom={index}
            className={`${
              hoveredService === service.title ? "text-secondary" : ""
            } relative`}
            onMouseEnter={() => setHoveredService(service.title)}
            onMouseLeave={() => setHoveredService(null)}
          >
            {/* Connecting line */}
            <motion.div
              style={getLineStyle(service.position)}
              initial="hidden"
              animate={isInView && imageLoaded ? "visible" : "hidden"}
              variants={
                service.position.includes("bottom-0")
                  ? verticalLineVariants
                  : lineVariants
              }
              custom={index}
              className={getLineStyle(service.position).backgroundColor}
            />

            <a
              href={service.href}
              className="hover:text-secondary transition-colors"
            >
              <h3 className="text-lg font-bold mb-1">{service.title}</h3>
              <p className="text-sm text-muted-foreground hidden md:block">
                {service.description}
              </p>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
