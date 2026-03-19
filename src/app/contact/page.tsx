import { Metadata } from "next";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us: Book a Free DevOps Consultation",
  description:
    "Book a free 30-minute DevOps consultation with Keni Engineering. No pitch, no pressure. Tell us about your infrastructure challenges and we will show you how to fix them.",
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
      <ContactPageContent />
    </>
  );
}
