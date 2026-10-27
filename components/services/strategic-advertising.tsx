"use client";

// Photo: blank billboard by Kate Trysh on Unsplash (Unsplash License). https://unsplash.com/photos/rectangular-blank-billboard-Dnkr_lmdKi8

import { motion } from "framer-motion";
import { ServiceVisual } from "@/components/services/service-visual";
import { OnlineAd } from "@/components/illustrations/online-ad";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LayoutDashboardIcon as LayoutBillboard,
  Radio,
  Megaphone,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { CardStack } from "@/components/ui/card-stack";

const advertisingServices = [
  {
    title: "Billboards",
    description:
      "We provide print or digital advertising boards placements to promote a brand, an offering, or a marketing campaign.",
    icon: <LayoutBillboard className="h-10 w-10 text-primary" />,
  },
  {
    title: "Paid Ads",
    description:
      "We provide paid ads on search engines such as Google and also on social media to promote a brand, offering, or a marketing campaign.",
    icon: <Megaphone className="h-10 w-10 text-primary" />,
  },
  {
    title: "TV/Radio",
    description:
      "We provide Promotions, interviews placement on various TV/Radio stations.",
    icon: <Radio className="h-10 w-10 text-primary" />,
  },
  {
    title: "PR",
    description:
      "We help you build and maintain positive relationships with the media and key stakeholders by providing publications & promotions on various Print media & News platforms.",
    icon: <Users className="h-10 w-10 text-primary" />,
  },
];

export default function StrategicAdvertising() {
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
    service: (typeof advertisingServices)[0],
    index: number
  ) => (
    <Card className="h-full border-border/50 md:hover:shadow-md transition-shadow duration-300">
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
      id="strategic-advertising"
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
              src="/services-advertising.jpg"
              alt="A large roadside billboard against the sky"
              illustration={OnlineAd}
              label="Media placement"
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
              Strategic Advertising
            </h2>
            <div className="space-y-4">
              <p>
                We offer both online and offline advertising services to help
                clients reach their target audience through various mediums of
                advertising.
              </p>
              <p>
                We provide advert design, media planning, and placement to
                maximize the impact of advertising efforts.
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
            We offer the following Advertising solutions:
          </motion.h3>

          <>
            {isMobile ? (
              <CardStack className="mb-8">
                {advertisingServices.map((service, index) => (
                  <div key={index}>
                    {renderServiceCard(service, index)}
                  </div>
                ))}
              </CardStack>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {advertisingServices.map((service, index) => (
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
          </>
        </div>
      </div>
    </section>
  );
}
