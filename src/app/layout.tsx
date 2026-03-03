import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Keni — DevOps & Platform Engineering",
    template: "%s | Keni",
  },
  description:
    "DevOps and Platform Engineering consulting for US companies. CI/CD, Kubernetes, Cloud Migration, Infrastructure as Code, Monitoring, and Cloud Management.",
  keywords: [
    "DevOps consulting",
    "Platform Engineering",
    "Kubernetes",
    "CI/CD",
    "Cloud Migration",
    "Infrastructure as Code",
    "Cloud Management",
    "Monitoring",
    "Observability",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Keni",
    title: "Keni — DevOps & Platform Engineering",
    description:
      "DevOps and Platform Engineering consulting. We analyse, build, and train engineering teams to own their infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-background text-foreground antialiased" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', system-ui, 'Helvetica Neue', sans-serif" }}>
        <div className="mesh-gradient-strong fixed inset-0 z-0" style={{ transform: "translateZ(0)" }} />
        <div className="noise fixed inset-0 z-0" style={{ transform: "translateZ(0)" }} />
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
