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
      if (onOpenChange) onOpenChange(false);
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-md lg:max-w-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Request a Call Back
              </h2>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We’re passionate about Elevating your brand. Let’s call you to
                discuss your needs.
              </p>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 lg:grid-cols-2 gap-4"
              >
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="organization">Organization</Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Your organization"
                    className={errors.organization ? "border-red-500" : ""}
                  />
                  {errors.organization && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.organization}
                    </p>
                  )}
                </div>

                <div className="lg:col-span-2">
                  <Label htmlFor="location">Location</Label>
                  <Popover open={locationOpen} onOpenChange={setLocationOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        id="location"
                        variant="outline"
                        role="combobox"
                        aria-expanded={locationOpen}
                        className={cn(
                          "w-full justify-between font-normal",
                          errors.location && "border-red-500"
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
                  className="w-full lg:col-span-2 bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Call Back"}
                </Button>
              </form>
              <p className="dark:text-white/70 text-primary  text-center mt-3">
                {" "}
                Our team will reach out to you within 24hrs
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default RequestCallbackModal;
