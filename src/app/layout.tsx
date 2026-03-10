import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Keni — DevOps & Platform Engineering",
    template: "%s | Keni",
  },
  description:
    "We handle your CI/CD, deploys, and ops so your developers can focus on shipping. Diagnosis, design, implementation, and ongoing maintenance.",
  keywords: [
    "DevOps consulting",
    "Platform Engineering",
    "Internal Development Platform",
    "CI/CD",
    "Infrastructure as Code",
    "Cloud Management",
    "Kubernetes",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Keni",
    title: "Keni — DevOps & Platform Engineering",
    description:
      "We handle your CI/CD, deploys, and ops so your developers can focus on shipping.",
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
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-background text-foreground antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
