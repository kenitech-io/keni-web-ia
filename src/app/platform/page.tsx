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

export default function PlatformPage() {
  return <PlatformPageContent />;
}
