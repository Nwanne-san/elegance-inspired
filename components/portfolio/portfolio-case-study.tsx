"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface PortfolioCaseStudyProps {
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
  image?: string;
}

export default function PortfolioCaseStudy({
  client,
  industry,
  challenge,
  solution,
  outcome,
  image = "/placeholder.svg?height=400&width=600",
}: PortfolioCaseStudyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <Card className="overflow-hidden border border-border/50 bg-card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative w-full h-[300px] md:h-full">
            <Image
              src={image || "/placeholder.svg"}
              alt={client}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="p-6">
            <CardHeader className="px-0 pt-0">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge className="bg-primary hover:bg-primary/90">{industry}</Badge>
              </div>
              <CardTitle className="text-2xl font-bold">{client}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
              <div>
                <h4 className="text-lg font-bold text-secondary mb-1">Challenge</h4>
                <p className="text-muted-foreground">{challenge}</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-secondary mb-1">Solution</h4>
                <p className="text-muted-foreground">{solution}</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-secondary mb-1">Outcome</h4>
                <p className="text-muted-foreground">{outcome}</p>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
