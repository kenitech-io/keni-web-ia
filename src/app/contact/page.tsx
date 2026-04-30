import { Suspense } from "react";
import { Metadata } from "next";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contacto: hablamos sin pitch",
  description:
    "Cuéntanos sobre tu equipo y tu caso. Una llamada de 30 minutos para ver si encajamos. Si no, te decimos por qué.",
  alternates: {
    canonical: "https://ia.kenitech.io/contact",
  },
  openGraph: {
    title: "Contacto: hablamos sin pitch",
    description:
      "Cuéntanos sobre tu equipo y tu caso. Una llamada de 30 minutos para ver si encajamos.",
    url: "https://ia.kenitech.io/contact",
    siteName: "Keni",
    locale: "es_MX",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://ia.kenitech.io",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contacto",
      item: "https://ia.kenitech.io/contact",
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Suspense><ContactPageContent /></Suspense>
    </>
  );
}
