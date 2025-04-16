import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NProgressProvider } from "@/components/nprogress-provider"
import { AppProvider } from "@/components/app-provider"
import { LenisScrollProvider } from "@/components/lenis-scroll-provider";
import ScrollToTop from "@/components/scroll-to-top";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elegance Inspired Limited - Corporate Branding Agency",
  description:
    "Elegance Inspired Limited is a leading corporate branding agency dedicated to helping businesses achieve their full potential in the ever-evolving marketplace.",
    icons: {
      icon: "/ICONS.jpg",
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
        <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <AppProvider>
            <LenisScrollProvider>
              <NProgressProvider>
                {children}
                <ScrollToTop />
                <Toaster position="top-right" richColors />
              </NProgressProvider>
            </LenisScrollProvider>
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
