import { Metadata } from "next";
import HomeContent from "@/components/home/HomeContent";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://kenitech.io",
  },
  openGraph: {
    title: "DevOps Consulting for SMBs | Keni Engineering",
    description:
      "DevOps consulting and platform engineering for US software teams with 2-30 developers. We set up CI/CD, automate deploys, and keep your infrastructure running so your team ships faster.",
    url: "https://kenitech.io",
    siteName: "Keni Engineering",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return <HomeContent />;
}
