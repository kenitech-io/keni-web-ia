import { Metadata } from "next";
import HealthCheckContent from "@/components/HealthCheckContent";

export const metadata: Metadata = {
  title: "Free DevOps Maturity Assessment",
  description:
    "Score your DevOps maturity in 2 minutes. A free self-assessment across deployments, CI/CD, monitoring, infrastructure as code, secrets management, and disaster recovery.",
  alternates: {
    canonical: "https://kenitech.io/healthcheck",
  },
  openGraph: {
    title: "Free DevOps Maturity Assessment",
    description:
      "Score your DevOps maturity in 2 minutes. A free self-assessment across deployments, CI/CD, monitoring, infrastructure as code, secrets management, and disaster recovery.",
    url: "https://kenitech.io/healthcheck",
    siteName: "Keni Engineering",
    locale: "en_US",
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
      name: "Home",
      item: "https://kenitech.io",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "DevOps Health Check",
      item: "https://kenitech.io/healthcheck",
    },
  ],
};

export default function HealthCheckPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HealthCheckContent />
    </>
  );
}
