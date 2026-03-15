"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Twitter, X } from "lucide-react";
import { team } from "@/data";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Carousel, CarouselSlide } from "@/components/ui/carousel";

type TeamMember = (typeof team)[0];

function SocialLinks({
  member,
  variant = "default",
}: {
  member: TeamMember;
  variant?: "default" | "overlay";
}) {
  const links = [
    { key: "instagram", href: member.social.instagram, Icon: Instagram },
    { key: "facebook", href: member.social.facebook, Icon: Facebook },
    {
      key: "twitter",
      href: member.social.twitter,
      Icon: member.social.twitter?.includes("x.com") ? X : Twitter,
    },
    { key: "linkedin", href: member.social.linkedin, Icon: Linkedin },
  ].filter((l) => l.href);

  if (links.length === 0) return null;

  const isOverlay = variant === "overlay";
  const linkClass = isOverlay
    ? "bg-white/20 p-2 rounded-full hover:bg-[#FF6600] transition-colors text-white"
    : "bg-primary/10 p-2.5 rounded-full hover:bg-primary/20 transition-colors text-primary";

  return (
    <div className="flex flex-wrap gap-2">
      {links.map(({ key, href, Icon }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          aria-label={key}
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}

export default function CreativeTeam() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const openMember = (member: TeamMember) => {
    setSelectedMember(member);
    setDialogOpen(true);
  };

  const closeMember = () => {
    setDialogOpen(false);
    setSelectedMember(null);
  };

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

  const renderTeamCard = (member: TeamMember, index: number) => (
    <Card
      className="overflow-hidden bg-card border-border/50 h-full hover:shadow-lg transition-all duration-300 cursor-pointer group"
      onClick={() => openMember(member)}
    >
      <div className="relative overflow-hidden">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          width={400}
          height={400}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end justify-center p-6">
          <div className="flex space-x-3" onClick={(e) => e.stopPropagation()}>
            <SocialLinks member={member} variant="overlay" />
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-muted-foreground mb-3">{member.position}</p>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {member.shortBio}
        </p>
        <Button
          variant="ghost"
          size="sm"
          className="mt-4 text-primary hover:text-primary/80 hover:bg-primary/10 px-0"
          onClick={(e) => {
            e.stopPropagation();
            openMember(member);
          }}
        >
          View more →
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section
      id="team"
      className="py-16 md:py-24 bg-background scroll-mt-20 w-full"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Team
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

        {/* Mobile: carousel only (arrows + swipe) */}
        <div className="md:hidden">
          <Carousel
            options={{ loop: true, align: "start" }}
            showDots={true}
            showArrows={true}
          >
            {team.map((member, index) => (
              <CarouselSlide key={member.id} className="px-2">
                <div onClick={() => openMember(member)}>
                  {renderTeamCard(member, index)}
                </div>
              </CarouselSlide>
            ))}
          </Carousel>
        </div>

        {/* Desktop: grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              onClick={() => openMember(member)}
              className="cursor-pointer"
            >
              {renderTeamCard(member, index)}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={(open) => !open && closeMember()}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <AnimatePresence mode="wait">
            {selectedMember && (
              <motion.div
                key={selectedMember.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative rounded-lg overflow-hidden aspect-square bg-muted">
                    <Image
                      src={selectedMember.image || "/placeholder.svg"}
                      alt={selectedMember.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <DialogHeader>
                      <DialogTitle className="text-2xl">
                        {selectedMember.name}
                      </DialogTitle>
                      <p className="text-primary font-medium mt-1">
                        {selectedMember.position}
                      </p>
                    </DialogHeader>
                    <div className="mt-4">
                      <p className="text-sm font-medium text-muted-foreground mb-2">
                        Connect
                      </p>
                      <SocialLinks member={selectedMember} />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t">
                  {selectedMember.bio.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="rounded-full w-full sm:w-auto"
                  onClick={closeMember}
                >
                  Back to team
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
}
