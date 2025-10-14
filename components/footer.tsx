"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa6";
import NewsletterForm from "@/components/newsletter-form";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc =
    theme === "dark" ? "/Elegance logo white.svg" : "/Elegance logo.png";

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              {mounted && (
                <Image
                  src={logoSrc}
                  alt="Elegance Inspired Limited"
                  width={160}
                  height={40}
                  className="h-10 w-auto"
                />
              )}
            </Link>
            <p className="text-gray-400 max-w-xs">
              A leading corporate branding agency dedicated to helping
              businesses achieve their full potential in the ever-evolving
              marketplace.
            </p>
            <div>
              <h3 className="font-bold mb-1">Follow Us</h3>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/the_eleganceinspiredlimited?igsh=MW5nd3dsenpmNjE3cA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white/70 hover:text-[#FF6600] transition-colors" />
              </Link>
              <Link
                href="https://www.facebook.com/share/1GK7vWJDjU/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white/70 hover:text-[#FF6600] transition-colors" />
              </Link>
              <Link
                href="https://x.com/eleganceinspltd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-white/70 hover:text-[#FF6600] transition-colors" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/elegance-branding/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white/70 hover:text-[#FF6600] transition-colors" />
              </Link>
              <Link
                href="https://www.tiktok.com/@eleganceinspiredltd?_t=ZM-8vZnlyYuN79&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok className="h-5 w-5 text-white/70 hover:text-[#FF6600] transition-colors" />
              </Link>
              <Link
                href="https://wa.me/2348183135120"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5 text-white/70 hover:text-[#FF6600] transition-colors" />
              </Link>
              <Link
                href="https://youtube.com/@eleganceinspiredlimited?si=4MSE5UfOdUxUmk7C"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-white/70 hover:text-[#FF6600] transition-colors" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-axiforma">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-[#FF6600] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/70 hover:text-[#FF6600] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="text-white/70 hover:text-[#FF6600] transition-colors"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-white/70 hover:text-[#FF6600] transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-[#FF6600] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-axiforma">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="tel:+2348183135120"
                  className="text-white/70 hover:text-[#FF6600] transition-colors"
                >
                  +234 8183 135 120
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+2349032680876"
                  className="text-white/70 hover:text-[#FF6600] transition-colors"
                >
                  +234 9032 680 876
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:hello@eleganceinspired.org"
                  className="text-white/70 hover:text-[#FF6600] transition-colors"
                >
                  hello@eleganceinspired.org
                </Link>
              </li>
              <li className="text-white/70">Abuja, Nigeria</li>
            </ul>
          </div>

          {/* Request Quote */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-axiforma">
              Request Quote
            </h3>
            <p className="text-white/70 mb-4">
              Fill out the form below to get a custom quote for your branding
              needs.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; {currentYear} Elegance Inspired Limited. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="text-white/70 hover:text-[#FF6600] text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-white/70 hover:text-[#FF6600] text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
