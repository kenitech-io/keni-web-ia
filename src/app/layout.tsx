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
  metadataBase: new URL("https://ia.kenitech.io"),
  title: {
    default: "Keni · Tu equipo usando IA en su trabajo diario",
    template: "%s | Keni",
  },
  description:
    "Formación AI-native para empresas LATAM hispano y ES. Llevamos a tus empleados a usar IA en su trabajo real con métricas de antes y después. Sin slides, sin teoría.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Keni",
    title: "Keni · Tu equipo usando IA en su trabajo diario",
    description:
      "Formación AI-native para empresas LATAM hispano y ES. Tu equipo termina usando IA en su trabajo real.",
    url: "https://ia.kenitech.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keni · Tu equipo usando IA en su trabajo diario",
    description:
      "Formación AI-native para empresas LATAM hispano y ES. Tu equipo termina usando IA en su trabajo real.",
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
    canonical: "https://ia.kenitech.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://ia.kenitech.io/#organization",
                  name: "Keni Engineering",
                  url: "https://ia.kenitech.io",
                  logo: "https://ia.kenitech.io/logo.png",
                  description:
                    "Formación AI-native para empresas LATAM hispano y ES. Llevamos al empleado a usar IA en su trabajo diario.",
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
                  "@id": "https://ia.kenitech.io/#website",
                  url: "https://ia.kenitech.io",
                  name: "Keni",
                  publisher: {
                    "@id": "https://ia.kenitech.io/#organization",
                  },
                  inLanguage: "es",
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://ia.kenitech.io/#service",
                  name: "Keni · Formación AI-native",
                  url: "https://ia.kenitech.io",
                  description:
                    "Implantación acompañada de IA en empresas. Modalidad presencial de una semana y modalidad web en tres fases hasta la autonomía.",
                  provider: {
                    "@id": "https://ia.kenitech.io/#organization",
                  },
                  areaServed: [
                    { "@type": "Country", name: "Mexico" },
                    { "@type": "Country", name: "Spain" },
                    { "@type": "Place", name: "LATAM" },
                  ],
                  serviceType: [
                    "Formación en IA para empresas",
                    "Implantación AI-native",
                    "Adopción de Claude Code",
                    "Onboarding técnico y no técnico",
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
