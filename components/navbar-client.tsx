"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./theme-toggle";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { RequestCallbackModal } from "./request-callback-modal";
import { navLinks } from "@/data";

export default function NavbarClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lastScrollY = useRef(0);
  const { theme } = useTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc =
    theme === "dark" ? "/Elegance-logo-white.png" : "/Elegance logo.png";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const openModal = () => {
    setIsModalOpen(true);
    closeMenu();
  };

  // Check if the current path matches a link or its dropdown items
  const isLinkActive = (link: any) => {
    if (pathname === link.path) return true;
    if (pathname.startsWith("/portfolio/") && link.path === "/portfolio")
      return true;
    if (link.dropdown) {
      return link.dropdown.some((item: any) => pathname === item.path);
    }
    return false;
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white/80 dark:bg-gray-900/80",
          // scrolled
          //   ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md"
          //   : "bg-transparent",
          hidden ? "-translate-y-full" : "translate-y-0"
        )}
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="relative z-10">
            <div className="relative h-10 sm:h-12 w-40">
              {mounted && (
                <Image
                  src={logoSrc}
                  alt="Elegance Inspired Limited"
                  width={160}
                  height={40}
                  className="h-8 sm:h-10 w-auto"
                />
              )}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <nav className="flex items-center">
              <ul className="flex space-x-1">
                {navLinks.map((link) => (
                  <li key={link.name} className="relative group">
                    {link.dropdown ? (
                      <>
                        <button
                          className={cn(
                            "px-3 py-2 rounded-md text-sm font-medium flex items-center",
                            "hover:text-secondary dark:hover:text-secondary transition-colors",
                            isLinkActive(link)
                              ? "text-secondary dark:text-secondary"
                              : "text-gray-800 dark:text-white"
                          )}
                        >
                          {link.name}
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </button>
                        {/* Show dropdown on hover for desktop */}
                        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                          <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                          >
                            {link.dropdown.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className={cn(
                                  "block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-secondary",
                                  pathname === item.href
                                    ? "text-secondary dark:text-secondary"
                                    : "text-gray-700 dark:text-gray-200"
                                )}
                                role="menuitem"
                                onClick={closeMenu}
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={cn(
                          "px-3 py-2 rounded-md text-sm font-medium block",
                          "hover:text-secondary dark:hover:text-secondary transition-colors",
                          pathname === link.href
                            ? "text-secondary dark:text-secondary"
                            : "text-gray-800 dark:text-white"
                        )}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center space-x-3 ml-4">
              <ThemeToggle />
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
                onClick={openModal}
              >
                <Phone className="h-4 w-4" />
                <span>Elevate your brand</span>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md",
                scrolled
                  ? "text-gray-800 dark:text-gray-200"
                  : "text-gray-800 dark:text-white"
              )}
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white dark:bg-gray-900 shadow-lg overflow-hidden"
            >
              <div className="container mx-auto px-4 py-3">
                <nav>
                  <ul className="space-y-2">
                    {navLinks.map((link) => (
                      <li key={link.name} className="py-1">
                        {link.dropdown ? (
                          <div>
                            <button
                              className={cn(
                                "flex justify-between items-center w-full py-2 font-medium",
                                isLinkActive(link)
                                  ? "text-secondary dark:text-secondary"
                                  : "text-gray-800 dark:text-white"
                              )}
                              onClick={() => handleDropdownToggle(link.name)}
                            >
                              {link.name}
                              <ChevronDown
                                className={`h-4 w-4 transition-transform ${
                                  activeDropdown === link.name
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>
                            <AnimatePresence>
                              {activeDropdown === link.name && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="pl-4 space-y-2 mt-1"
                                >
                                  {link.dropdown.map((item) => (
                                    <a
                                      key={item.name}
                                      href={item.href}
                                      className={cn(
                                        "block py-2 hover:text-secondary dark:hover:text-secondary",
                                        pathname === item.href
                                          ? "text-secondary dark:text-secondary"
                                          : "text-gray-600 dark:text-gray-300"
                                      )}
                                      onClick={closeMenu}
                                    >
                                      {item.name}
                                    </a>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={link.href}
                            className={cn(
                              "block py-2 font-medium hover:text-secondary dark:hover:text-secondary",
                              pathname === link.href
                                ? "text-secondary dark:text-secondary"
                                : "text-gray-800 dark:text-white"
                            )}
                            onClick={closeMenu}
                          >
                            {link.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="mt-4 mb-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full flex items-center justify-center gap-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
                    onClick={openModal}
                  >
                    <Phone className="h-4 w-4" />
                    <span>Elevate your brand</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <RequestCallbackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
