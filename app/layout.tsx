import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./nprogress.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NProgressProvider } from "@/components/nprogress-provider";
import { AppProvider } from "@/components/app-provider";
import { LenisScrollProvider } from "@/components/lenis-scroll-provider";
import ScrollToTop from "@/components/scroll-to-top";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elegance Inspired Limited - Corporate Branding Agency",
  description:
    "Elegance Inspired Limited is a leading corporate branding agency dedicated to helping businesses achieve their full potential in the ever-evolving marketplace.",
  icons: {
    icon: "/ICONS.jpg",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    images: [
      {
        url: "https://eleganceinspired.org/og-image-two.jpg",
        width: 1200,
        height: 630,
        alt: "Elegance Inspired Limited",
      },
    ],
  },
  twitter: {
    images: ["https://eleganceinspired.org/og-image-two.jpg"],
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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AppProvider>
            <LenisScrollProvider>
              <NProgressProvider>
                {children}
                <Analytics />
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
