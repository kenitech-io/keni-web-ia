import { Metadata } from "next";
import PlatformPageContent from "@/components/PlatformPageContent";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "See what a modern internal development platform looks like. Architecture reference for teams shipping software with CI/CD, monitoring, and infrastructure automation.",
};

export default function PlatformPage() {
  return <PlatformPageContent />;
}
