import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkBackground from "@/components/DarkBackground";
import PostHogProvider from "@/components/PostHogProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kenitech.io"),
  title: {
    default: "DevOps Consulting for SMBs | Keni Engineering",
    template: "%s | Keni Engineering",
  },
  description:
    "DevOps consulting and platform engineering for US software teams with 2-30 developers. We set up CI/CD, automate deploys, and keep your infrastructure running so your team ships faster.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Keni Engineering",
    title: "DevOps Consulting for SMBs | Keni Engineering",
    description:
      "DevOps consulting and platform engineering for US software teams. CI/CD, infrastructure automation, and ongoing maintenance.",
    url: "https://kenitech.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Consulting for SMBs | Keni Engineering",
    description:
      "DevOps consulting and platform engineering for US software teams. CI/CD, infrastructure automation, and ongoing maintenance.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://kenitech.io",
    types: {
      "application/rss+xml": "https://kenitech.io/blog/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://kenitech.io/#organization",
                  name: "Keni Engineering",
                  url: "https://kenitech.io",
                  logo: "https://kenitech.io/logo.png",
                  description:
                    "DevOps consulting and platform engineering for US software teams with 2-30 developers.",
                  contactPoint: {
                    "@type": "ContactPoint",
                    email: "ugarte@kenitech.io",
                    contactType: "sales",
                  },
                  sameAs: [
                    "https://www.linkedin.com/company/keniengineering/",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://kenitech.io/#website",
                  url: "https://kenitech.io",
                  name: "Keni Engineering",
                  publisher: {
                    "@id": "https://kenitech.io/#organization",
                  },
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://kenitech.io/#service",
                  name: "Keni Engineering",
                  url: "https://kenitech.io",
                  description:
                    "DevOps consulting, infrastructure audits, CI/CD pipeline setup, and platform engineering for SMBs.",
                  provider: {
                    "@id": "https://kenitech.io/#organization",
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "United States",
                  },
                  serviceType: [
                    "DevOps Consulting",
                    "Infrastructure Audit",
                    "Platform Engineering",
                    "CI/CD Pipeline Setup",
                    "Cloud Infrastructure Management",
                  ],
                },
              ],
            }),
          }}
        />
        <PostHogProvider>
          <DarkBackground />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </PostHogProvider>
      </body>
    </html>
  );
}
