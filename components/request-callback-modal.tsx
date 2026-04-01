"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { toast } from "sonner";

const callbackSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  organization: z
    .string()
    .min(2, { message: "Please enter your organization name" }),
  location: z.string().min(1, { message: "Please select your location" }),
});

const locationOptions = [
  "Abia - Umuahia, Nigeria",
  "Adamawa - Yola, Nigeria",
  "Akwa Ibom - Uyo, Nigeria",
  "Anambra - Awka, Nigeria",
  "Bauchi - Bauchi, Nigeria",
  "Bayelsa - Yenagoa, Nigeria",
  "Benue - Makurdi, Nigeria",
  "Borno - Maiduguri, Nigeria",
  "Cross River - Calabar, Nigeria",
  "Delta - Asaba, Nigeria",
  "Ebonyi - Abakaliki, Nigeria",
  "Edo - Benin City, Nigeria",
  "Ekiti - Ado Ekiti, Nigeria",
  "Enugu - Enugu, Nigeria",
  "Gombe - Gombe, Nigeria",
  "Imo - Owerri, Nigeria",
  "Jigawa - Dutse, Nigeria",
  "Kaduna - Kaduna, Nigeria",
  "Kano - Kano, Nigeria",
  "Katsina - Katsina, Nigeria",
  "Kebbi - Birnin Kebbi, Nigeria",
  "Kogi - Lokoja, Nigeria",
  "Kwara - Ilorin, Nigeria",
  "Lagos - Ikeja, Nigeria",
  "Nasarawa - Lafia, Nigeria",
  "Niger - Minna, Nigeria",
  "Ogun - Abeokuta, Nigeria",
  "Ondo - Akure, Nigeria",
  "Osun - Osogbo, Nigeria",
  "Oyo - Ibadan, Nigeria",
  "Plateau - Jos, Nigeria",
  "Rivers - Port Harcourt, Nigeria",
  "Sokoto - Sokoto, Nigeria",
  "Taraba - Jalingo, Nigeria",
  "Yobe - Damaturu, Nigeria",
  "Zamfara - Gusau, Nigeria",
  "Federal Capital Territory - Abuja, Nigeria",
  "California - Sacramento, USA",
  "New York - Albany, USA",
] as const;

// Update the form data type
type CallbackFormData = z.infer<typeof callbackSchema>;

interface RequestCallbackModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  show?: boolean;
}

export function RequestCallbackModal({
  isOpen,
  onClose,
  open,
  onOpenChange,
  show,
}: RequestCallbackModalProps) {
  // Handle different prop naming conventions
  const isModalOpen = isOpen || open || show || false;
  const handleClose = () => {
    if (onClose) onClose();
    if (onOpenChange) onOpenChange(false);
  };

  const [formData, setFormData] = useState<CallbackFormData>({
    name: "",
    phone: "",
    email: "",
    organization: "",
    location: "",
  });
  const [errors, setErrors] = useState<Partial<CallbackFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);

  // Check if modal should be shown on first visit
  // useEffect(() => {
  //   const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");
  //   const lastVisitDate = localStorage.getItem("lastVisitDate");
  //   const today = new Date().toDateString();

  //   if (!hasVisitedBefore || (lastVisitDate && lastVisitDate !== today)) {
  //     // Only show on first visit of the day
  //     setTimeout(() => {
  //       if (onOpenChange) onOpenChange(true);
  //       // This is just for the demo, in production we would open the modal
  //     }, 5000);
  //     localStorage.setItem("hasVisitedBefore", "true");
  //     localStorage.setItem("lastVisitDate", today);
  //   }
  // }, [onOpenChange]);

  // Update the handleChange function to handle all input types
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof CallbackFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleLocationChange = (value: string) => {
    setFormData((prev) => ({ ...prev, location: value }));

    if (errors.location) {
      setErrors((prev) => ({ ...prev, location: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate form data
      callbackSchema.parse(formData);

      setIsSubmitting(true);

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          to: "hello@eleganceinspired.org",
          subject: "Call Back Requested",
          name: formData.name,
          phone: formData.phone,
          email: formData.email || "No email provided",
          organization: formData.organization,
          location: formData.location,
          formType: "callback",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      toast.success("Thank you! We'll call you back shortly.");
      localStorage.setItem("formSubmitted", "true");
      handleClose();

      setFormData({
        name: "",
        phone: "",
        email: "",
        organization: "",
        location: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<CallbackFormData> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof CallbackFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast.error("Failed to send your request. Please try again.");
        console.error("Error sending email:", error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-[2px]"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="bg-card text-card-foreground rounded-2xl shadow-2xl shadow-primary/10 border border-border w-full max-w-md lg:max-w-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-primary text-primary-foreground px-5 py-5 lg:px-6">
              <div
                className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary opacity-90"
                aria-hidden
              />
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/80 mb-1">
                    Elegance Inspired
                  </p>
                  <h2 className="text-xl font-bold tracking-tight">
                    Request a call back
                  </h2>
                </div>
                <button
                  onClick={handleClose}
                  className="shrink-0 rounded-full p-1.5 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/50"
                  type="button"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="p-6 lg:p-8 bg-gradient-to-b from-muted/30 to-card">
              <p className="text-muted-foreground mb-6 text-[15px] leading-relaxed">
                We’re passionate about elevating your brand. Share your details
                and we’ll call you to discuss your needs.
              </p>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 lg:grid-cols-2 gap-4"
              >
                <div>
                  <Label htmlFor="name" className="text-foreground/90">
                    Full name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`mt-1.5 rounded-lg border-border bg-background focus-visible:ring-primary ${errors.name ? "border-destructive" : ""}`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground/90">
                    Phone number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className={`mt-1.5 rounded-lg border-border bg-background focus-visible:ring-primary ${errors.phone ? "border-destructive" : ""}`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground/90">
                    Email address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className={`mt-1.5 rounded-lg border-border bg-background focus-visible:ring-primary ${errors.email ? "border-destructive" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="organization" className="text-foreground/90">
                    Organization
                  </Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Your organization"
                    className={`mt-1.5 rounded-lg border-border bg-background focus-visible:ring-primary ${errors.organization ? "border-destructive" : ""}`}
                  />
                  {errors.organization && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.organization}
                    </p>
                  )}
                </div>

                <div className="lg:col-span-2">
                  <Label htmlFor="location" className="text-foreground/90">
                    Location
                  </Label>
                  <Popover open={locationOpen} onOpenChange={setLocationOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        id="location"
                        variant="outline"
                        role="combobox"
                        aria-expanded={locationOpen}
                        className={cn(
                          "mt-1.5 w-full justify-between rounded-lg font-normal border-border hover:bg-muted/60 hover:border-primary/40",
                          errors.location && "border-destructive"
                        )}
                      >
                        {formData.location || "Select your location"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      side="bottom"
                      align="start"
                      sideOffset={8}
                      avoidCollisions={false}
                      className="w-[--radix-popover-trigger-width] p-0"
                    >
                      <Command>
                        <CommandInput placeholder="Search location..." />
                        <CommandList
                          className="max-h-48 overflow-y-scroll overscroll-contain"
                          onWheel={(e) => e.stopPropagation()}
                        >
                          <CommandEmpty>No location found.</CommandEmpty>
                          <CommandGroup>
                            {locationOptions.map((location) => (
                              <CommandItem
                                key={location}
                                value={location}
                                onSelect={() => {
                                  handleLocationChange(location);
                                  setLocationOpen(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    formData.location === location
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {location}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  {errors.location && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.location}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full lg:col-span-2 rounded-full bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg transition-shadow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting…" : "Request call back"}
                </Button>
              </form>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Our team will reach out within{" "}
                <span className="font-medium text-secondary">24 hours</span>.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default RequestCallbackModal;
