import { Suspense } from "react";
import { Metadata } from "next";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us: DevOps Consultation",
  description:
    "Tell us about your infrastructure challenges. Keni Engineering helps small teams set up CI/CD, automate deploys, and build internal development platforms.",
  alternates: {
    canonical: "https://kenitech.io/contact",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://kenitech.io",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: "https://kenitech.io/contact",
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
