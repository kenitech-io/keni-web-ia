import { Metadata } from "next";
import PlatformPageContent from "@/components/PlatformPageContent";

export const metadata: Metadata = {
  title: "Internal Developer Platform Architecture",
  description:
    "See what a modern internal development platform looks like. Reference architecture with CI/CD pipelines, container orchestration, monitoring, and automated deployments for software teams.",
  alternates: {
    canonical: "https://kenitech.io/platform",
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
      name: "Platform",
      item: "https://kenitech.io/platform",
    },
  ],
};

export default function PlatformPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PlatformPageContent />
    </>
  );
}
