import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Capacitación de equipos",
  description:
    "La IA se adopta trabajando, no en una presentación. Workshops que activan a cada equipo para que opere con IA en su trabajo diario, sin importar el rol.",
  alternates: {
    canonical: "https://ia.kenitech.io/capacitacion-equipos",
  },
  openGraph: {
    title: "Capacitación de equipos",
    description:
      "Workshops que activan a cada equipo para que opere con IA en su trabajo diario, sin importar el rol.",
    url: "https://ia.kenitech.io/capacitacion-equipos",
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
      name: "Capacitación de equipos",
      item: "https://ia.kenitech.io/capacitacion-equipos",
    },
  ],
};

export default function CapacitacionEquiposPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero — mismo fondo que la tarjeta "Capacitación" de la home */}
      <section
        className="pt-32 pb-20 md:pt-48 md:pb-32"
        style={{
          background:
            "radial-gradient(at 40% 65%, #bf8f6b 0%, transparent 70%), radial-gradient(at 75% 28%, #d4ad84 0%, transparent 72%), radial-gradient(at 18% 80%, #ad7850 0%, transparent 78%), linear-gradient(135deg, #ecddc9, #f2e7d6)",
        }}
      >
        <Container>
          <div className="max-w-[820px] mx-auto text-center">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
                Capacitación
              </p>
              <h1
                className="text-foreground font-medium tracking-tight mb-8"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: 1.1,
                }}
              >
                Capacitación de equipos
              </h1>
              <p
                className="text-foreground font-light tracking-tight mb-6"
                style={{
                  fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                  lineHeight: 1.35,
                }}
              >
                La IA se adopta trabajando, no en una presentación.
              </p>
              <p className="text-body text-foreground-secondary/70 font-light leading-relaxed max-w-[620px] mx-auto">
                Workshops que activan a cada equipo para que opere con IA en su
                trabajo diario, sin importar el rol.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Otros servicios */}
      <section className="py-20 md:py-28 bg-surface border-t border-border-color">
        <Container>
          <FadeIn>
            <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-8 text-center">
              Explora también
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
              <Link
                href="/plan-transformacion-ia"
                className="text-sm text-foreground font-light underline underline-offset-4 decoration-border-color hover:decoration-foreground transition-all"
              >
                Plan de transformación con IA →
              </Link>
              <Link
                href="/automatizacion-flujos"
                className="text-sm text-foreground font-light underline underline-offset-4 decoration-border-color hover:decoration-foreground transition-all"
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
      />
    </main>
  );
}
