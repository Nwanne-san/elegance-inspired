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
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import MetaPixelTracker from "./MetaPixelTracker";

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
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;
                n=f.fbq=function(){
                  n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)
                };
                if(!f._fbq)f._fbq=n;
                n.push=n;
                n.loaded=!0;
                n.version='2.0';
                n.queue=[];
                t=b.createElement(e);
                t.async=!0;
                t.src=v;
                s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
              }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

              fbq('init', '1472613567853328');
              fbq('track', 'PageView');
              fbq('track', 'Lead');
              fbq('track', 'Purchase', { value: 100, currency: 'USD' });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1472613567853328&ev=PageView&noscript=1"
          />
        </noscript>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AppProvider>
            <LenisScrollProvider>
              <NProgressProvider>
                <MetaPixelTracker />
                {children}
                <SpeedInsights />
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
