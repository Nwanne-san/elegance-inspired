"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WebinarFlyerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WebinarFlyerModal({
  open,
  onOpenChange,
}: WebinarFlyerModalProps) {
  const handleClose = () => onOpenChange(false);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-[2px]"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ type: "spring", damping: 22 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute right-2 top-2 z-10 flex gap-2">
              <Button
                type="button"
                variant="secondary"
                size="icon"
                className="h-9 w-9 rounded-full border border-border bg-background/95 shadow-md hover:bg-secondary hover:text-secondary-foreground"
                onClick={handleClose}
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="max-h-[min(85vh,720px)] overflow-y-auto overscroll-contain pt-10">
              <div className="px-4 pb-4">
                <Image
                  src="/webinar-flyer.png"
                  alt="Branding Beyond Logos — live webinar on Zoom, Friday 24 April 2026, 4pm WAT"
                  width={800}
                  height={1132}
                  className="w-full h-auto rounded-lg border border-border/80"
                  priority
                />
              </div>
              <div className="flex flex-col gap-2 border-t border-border bg-muted/40 px-4 py-4 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  className="rounded-full bg-primary text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
                >
                  <Link href="/webinar" onClick={handleClose}>
                    Event details &amp; register
                  </Link>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-full border-primary/30 !bg-white !text-primary hover:!border-primary hover:!text-primary hover:!bg-slate-300"
                  onClick={handleClose}
                >
                  Maybe later
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default WebinarFlyerModal;
