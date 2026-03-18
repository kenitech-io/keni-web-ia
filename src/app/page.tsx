import { Metadata } from "next";
import HomeContent from "@/components/home/HomeContent";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://kenitech.io",
  },
};

export default function Home() {
  return <HomeContent />;
}
