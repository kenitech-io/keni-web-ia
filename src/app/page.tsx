import { Metadata } from "next";
import HomeContent from "@/components/home/HomeContent";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://ia.kenitech.io",
  },
  openGraph: {
    title: "Keni · Tu equipo usando IA en su trabajo diario",
    description:
      "Formación AI-native para empresas LATAM hispano y ES. Llevamos a tu equipo a usar IA en su trabajo real, con métricas de antes y después.",
    url: "https://ia.kenitech.io",
    siteName: "Keni",
    locale: "es_MX",
    type: "website",
  },
};

export default function Home() {
  return <HomeContent />;
}
