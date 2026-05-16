import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Plan de transformación con IA",
  description:
    "Saber dónde estás para planear a dónde vas. En un sprint, auditamos tu estado de IA, construimos el plan y arrancamos contigo.",
  alternates: {
    canonical: "https://ia.kenitech.io/plan-transformacion-ia",
  },
  openGraph: {
    title: "Plan de transformación con IA",
    description:
      "En un sprint, auditamos tu estado de IA, construimos el plan y arrancamos contigo.",
    url: "https://ia.kenitech.io/plan-transformacion-ia",
    siteName: "Keni",
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
      name: "Plan de transformación con IA",
      item: "https://ia.kenitech.io/plan-transformacion-ia",
    },
  ],
};

export default function PlanTransformacionIAPage() {
  return (
    <main className="bg-[#1E1E1E]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section
        data-dark-section
        className="pt-32 pb-20 md:pt-48 md:pb-32 bg-[#1E1E1E]"
      >
        <Container>
          <div className="max-w-[820px] mx-auto text-center">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-white/45 font-light mb-6">
                Estrategia
              </p>
              <h1
                className="text-white font-medium tracking-tight mb-8"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: 1.1,
                }}
              >
                Plan de transformación con IA
              </h1>
              <p
                className="text-white font-light tracking-tight mb-6"
                style={{
                  fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                  lineHeight: 1.35,
                }}
              >
                Saber dónde estás para planear a dónde vas.
              </p>
              <p className="text-body text-white/60 font-light leading-relaxed max-w-[620px] mx-auto">
                En un sprint, auditamos tu estado de IA, construimos el plan y
                arrancamos contigo.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Otros servicios */}
      <section
        data-dark-section
        className="py-20 md:py-28 bg-[#1E1E1E] border-t border-white/10"
      >
        <Container>
          <FadeIn>
            <p className="text-label uppercase tracking-[0.25em] text-white/45 font-light mb-8 text-center">
              Explora también
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
              <Link
                href="/capacitacion-equipos"
                className="text-sm text-white/80 font-light underline underline-offset-4 decoration-white/25 hover:decoration-white transition-all"
              >
                Capacitación de equipos →
              </Link>
              <Link
                href="/automatizacion-flujos"
                className="text-sm text-white/80 font-light underline underline-offset-4 decoration-white/25 hover:decoration-white transition-all"
              >
                Automatización de flujos →
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      <CTASection
        headline="Hablemos de tu caso."
        subtext="Una llamada de 30 minutos. Vemos si encajamos antes de hablar de precio."
        buttonText="Agenda una llamada"
        buttonHref="/book"
        dark
      />
    </main>
  );
}
