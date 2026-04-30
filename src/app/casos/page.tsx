import { Metadata } from "next";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Casos: resultados medidos de cada implantación",
  description:
    "Cada caso publicado lleva quote del comprador, KPIs reales de adopción y línea de tiempo por fases. Aquí publicamos las implantaciones cerradas, no los pilotos prometidos.",
  alternates: {
    canonical: "https://ia.kenitech.io/casos",
  },
  openGraph: {
    title: "Casos: resultados medidos de cada implantación",
    description:
      "KPIs reales de adopción de IA, quote del comprador y línea de tiempo por fases.",
    url: "https://ia.kenitech.io/casos",
    siteName: "Keni Engineering",
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
      name: "Casos",
      item: "https://ia.kenitech.io/casos",
    },
  ],
};

export default function CasosPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="pt-32 pb-20 md:pt-48 md:pb-32">
        <Container>
          <div className="max-w-[800px] mx-auto text-center">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
                Casos
              </p>
              <h1
                className="text-foreground font-light tracking-tight mb-8"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  lineHeight: 1.1,
                }}
              >
                Solo publicamos lo que ya cerró.
              </h1>
              <p className="text-body text-foreground-secondary/70 font-light leading-relaxed">
                Cada caso lleva tres KPIs reales, quote del comprador y línea de
                tiempo por fases. Si no hay implantación cerrada, no hay caso.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-40">
        <Container>
          <FadeIn>
            <div className="max-w-[640px] mx-auto text-center">
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
                Primer caso publicado en breve
              </p>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                Estamos cerrando el primer piloto presencial. Cuando termine,
                aquí va la historia con números.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <CTASection
        headline="¿Quieres ser el primer caso?"
        buttonText="Agenda una llamada"
        buttonHref="/book"
      />
    </main>
  );
}
