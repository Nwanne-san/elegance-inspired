"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import { Suspense, type ReactNode } from "react";

export function NProgressProviderClient() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize NProgress on mount
  useEffect(() => {
    // Import CSS directly to ensure it's loaded
    // import("../app/nprogress.css");

    // Configure NProgress with higher z-index to appear above navbar
    NProgress.configure({
      minimum: 0.1,
      showSpinner: false,
      trickleSpeed: 200,
      easing: "ease",
      speed: 500,
      // Increase the z-index to ensure it appears above the navbar
      template:
        '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
    });

    // Add click event listener for navigation links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a") as HTMLAnchorElement;

      // Check if it's an internal navigation link
      if (
        link &&
        link.href &&
        link.href.startsWith(window.location.origin) &&
        !link.target &&
        !link.download &&
        !link.rel?.includes("external") &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.shiftKey
      ) {
        // Start progress when link is clicked
        NProgress.start();
      }
    };

    // Add click event listener for buttons that trigger navigation
    const handleButtonClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest("button") as HTMLButtonElement;

      // Check if it has a data attribute indicating it will navigate
      if (button && button.dataset.navigate) {
        NProgress.start();
      }
    };

    document.addEventListener("click", handleLinkClick);
    document.addEventListener("click", handleButtonClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
      document.removeEventListener("click", handleButtonClick);
      NProgress.done();
    };
  }, []);

  // Handle route changes
  useEffect(() => {
    // Start progress on route change
    NProgress.start();

    // Complete the progress bar
    const timer = setTimeout(() => {
      NProgress.done();
    }, 500);

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [pathname, searchParams]);

  return null;
}

interface NProgressProviderProps {
  children: ReactNode;
}

export function NProgressProvider({ children }: NProgressProviderProps) {
  return (
    <Suspense fallback={null}>
      <NProgressProviderClient />
      {children}
    </Suspense>
  );
}
