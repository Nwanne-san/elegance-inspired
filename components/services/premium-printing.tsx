"use client";

// Photo: printing press by Bank Phrom on Unsplash (Unsplash License). https://unsplash.com/photos/printing-machine-Tzm3Oyu_6sk

import { motion } from "framer-motion";
import { ServiceVisual } from "@/components/services/service-visual";
import { PrintingInvoices } from "@/components/illustrations/printing-invoices";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Signpost, FileText, Package, Shirt, Printer } from "lucide-react";
import { useEffect, useState } from "react";
import { CardStack } from "@/components/ui/card-stack";

const printingServices = [
  {
    title: "Signages",
    description: "Outdoor, Indoor, Tradeshows & Events",
    icon: <Signpost className="h-10 w-10 text-primary" />,
  },
  {
    title: "Stationaries",
    description: "Letter-Heads, Business Cards, Invoices, Folders, Flyers",
    icon: <FileText className="h-10 w-10 text-primary" />,
  },
  {
    title: "Corporate Branding",
    description: "Packaging, Catalogs, Souvenirs, Brochures",
    icon: <Package className="h-10 w-10 text-primary" />,
  },
  {
    title: "Fabrics",
    description: "T-Shirts, Caps, Textile Wax, Uniforms",
    icon: <Shirt className="h-10 w-10 text-primary" />,
  },
  {
    title: "Large Format",
    description: "Banners, Books & Magazine",
    icon: <Printer className="h-10 w-10 text-primary" />,
  },
];

export default function PremiumPrinting() {
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

  const renderServiceCard = (
    service: (typeof printingServices)[0],
    index: number
  ) => (
    <Card className="h-full border-border/50 hover:shadow-md transition-shadow duration-300">
      <CardHeader>
        <div className="mb-4">{service.icon}</div>
        <CardTitle>{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{service.description}</p>
      </CardContent>
    </Card>
  );

  return (
    <section
      id="premium-printing"
      className="py-16 md:py-24 bg-background scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative order-2 lg:order-2"
          >
            <ServiceVisual
              src="/services-printing.jpg"
              alt="Printed sheets running through an offset printing press"
              illustration={PrintingInvoices}
              label="Print production"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Premium Printing
            </h2>
            <div className="space-y-4">
              <p>
                We offer high-quality printing options to ensure that the
                printed materials effectively represent the client's brand.
              </p>
              <p>
                We provide printing services for various marketing & merchandise
                materials.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-8 text-center"
          >
            We provide printing services for various materials such as:
          </motion.h3>

          {isMobile ? (
            <CardStack className="mb-8">
              {printingServices.map((service, index) => (
                <div key={index}>
                  {renderServiceCard(service, index)}
                </div>
              ))}
            </CardStack>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {printingServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {renderServiceCard(service, index)}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
