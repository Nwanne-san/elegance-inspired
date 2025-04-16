"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {useIsMobile} from "@/hooks/use-mobile"

interface ServiceItem {
  title: string
  description: string
  href: string
  position: string
}

const services: ServiceItem[] = [
  {
    title: "Creative Branding",
    description: "Develop key messages & define a brand's purpose, values, and target audience",
    href: "/services#creative-branding",
    position: "top-[25%] left-[5%]",
  },
  {
    title: "Digital Transformation",
    description: "Develop marketing strategies and campaigns across different channels",
    href: "/services#digital-transformation",
    position: "top-[25%] right-[5%]",
  },
  {
    title: "Quality Printing",
    description: "High-quality printing options to effectively represent your brand",
    href: "/services#quality-printing",
    position: "bottom-[25%] left-[5%]",
  },
  {
    title: "Strategic Advertising",
    description: "Advert design, media planning and placement for maximum impact",
    href: "/services#strategic-advertising",
    position: "bottom-[25%] right-[5%]",
  },
  {
    title: "HR Consulting",
    description: "Customizable HR solutions for businesses at every stage",
    href: "/services#consulting",
    position: "bottom-[2%] left-[50%] transform -translate-x-1/2",
  },
]

export default function LightbulbServices() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const isMobile = useIsMobile()
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  // For responsive positioning
  const getPosition = (position: string): string => {
    if (isMobile) {
      // Different positions for mobile layout
      const positionMap: Record<string, string> = {
        "top-[25%] left-[5%]": "top-[10%] left-[50%] transform -translate-x-1/2",
        "top-[25%] right-[5%]": "top-[30%] left-[50%] transform -translate-x-1/2",
        "bottom-[25%] left-[5%]": "top-[50%] left-[50%] transform -translate-x-1/2",
        "bottom-[25%] right-[5%]": "top-[70%] left-[50%] transform -translate-x-1/2",
        "bottom-[2%] left-[50%] transform -translate-x-1/2": "top-[90%] left-[50%] transform -translate-x-1/2",
      }
      return positionMap[position] || position
    }
    return position
  }

  const lightbulbVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const serviceVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -30 : 30,
      y: index === 4 ? 30 : 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const pointerVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 + index * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  }

  return (
    <div
      ref={ref}
      className="relative w-full mx-auto mt-6 mb-16"
      style={{
        height: isMobile ? "600px" : "400px",
      }}
    >
      {/* Lightbulb Center */}
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={lightbulbVariants}
      >
        <div className="relative w-40 h-40 md:w-48 md:h-48">
          {/* Lightbulb SVG */}
          <div className="bg-primary rounded-full w-full h-full flex items-center justify-center">
            <div className="w-1/2 h-1/3 bg-secondary rounded-b-3xl"></div>
          </div>
        </div>
      </motion.div>

      {/* Service Items */}
      {services.map((service, index) => (
        <div key={index} className={`absolute ${getPosition(service.position)}`}>
          <Link href={service.href}>
            {/* Connecting line/pointer */}
            <motion.div
              className={`absolute ${
                isMobile
                  ? index < 4
                    ? "h-6 w-1 bg-secondary left-1/2 -translate-x-1/2 -top-6"
                    : "w-6 h-1 bg-secondary top-1/2 -translate-y-1/2 -left-6"
                  : index === 4
                    ? "h-10 w-1 bg-secondary left-1/2 -translate-x-1/2 -top-10"
                    : index % 2 === 0
                      ? "w-10 h-1 bg-secondary top-1/2 -translate-y-1/2 -right-10"
                      : "w-10 h-1 bg-secondary top-1/2 -translate-y-1/2 -left-10"
              }`}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={pointerVariants}
              custom={index}
            />

            <motion.div
              className={`bg-background rounded-lg p-4 border border-border/40 shadow-lg 
                        ${hoveredService === service.title ? "ring-2 ring-secondary shadow-lg" : ""}`}
              style={{ width: isMobile ? "240px" : "260px" }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={serviceVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              custom={index}
              onHoverStart={() => setHoveredService(service.title)}
              onHoverEnd={() => setHoveredService(null)}
            >
              <h3 className={`text-lg font-bold mb-1 ${hoveredService === service.title ? "text-secondary" : ""}`}>
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </motion.div>
          </Link>
        </div>
      ))}
    </div>
  )
}
