"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { toast } from "sonner";

// Update the schema to include email
const callbackSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    // .or(z.literal("")),
});

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

  // Update the initial state to include email
  const [formData, setFormData] = useState<CallbackFormData>({
    name: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState<Partial<CallbackFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if modal should be shown on first visit
  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");
    const lastVisitDate = localStorage.getItem("lastVisitDate");
    const today = new Date().toDateString();

    if (!hasVisitedBefore || (lastVisitDate && lastVisitDate !== today)) {
      // Only show on first visit of the day
      setTimeout(() => {
        if (onOpenChange) onOpenChange(true);
        // This is just for the demo, in production we would open the modal
      }, 5000);
      localStorage.setItem("hasVisitedBefore", "true");
      localStorage.setItem("lastVisitDate", today);
    }
  }, [onOpenChange]);

  // Update the handleChange function to handle all input types
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof CallbackFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate form data
      callbackSchema.parse(formData);

      setIsSubmitting(true);

      // Send email using a server action or API endpoint
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Update the API request body to include email
        body: JSON.stringify({
          to: "hello@eleganceinspired.org",
          subject: "Call Back Requested",
          name: formData.name,
          phone: formData.phone,
          email: formData.email || "No email provided",
          formType: "callback",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      // Success
      toast.success("Thank you! We'll call you back shortly.");
      handleClose();
      // Reset form to include email
      setFormData({
        name: "",
        phone: "",
        email: "",
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
            className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-md overflow-hidden"
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

              <form onSubmit={handleSubmit} className="space-y-4">
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

                {/* Add the email field to the form */}
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

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Call Back"}
                </Button>
              </form>
              <p className="text-white/70 text-center mt-3"> Our team will reach out to you within 24hrs</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// For backwards compatibility
export default RequestCallbackModal;
