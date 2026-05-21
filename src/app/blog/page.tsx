import { Metadata } from "next";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog: notas de campo sobre formación AI-native",
  description:
    "Notas de campo sobre cómo llevamos a equipos a usar IA en su trabajo diario. Patrones, anti-patrones y métricas reales de implantación.",
  alternates: {
    canonical: "https://ia.kenitech.io/blog",
  },
  openGraph: {
    title: "Blog: notas de campo sobre formación AI-native",
    description:
      "Notas de campo sobre cómo llevamos a equipos a usar IA en su trabajo diario.",
    url: "https://ia.kenitech.io/blog",
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
      name: "Blog",
      item: "https://ia.kenitech.io/blog",
    },
  ],
};

export default function BlogPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="pt-32 pb-20 md:pt-48 md:pb-32">
        <Container>
          <div className="max-w-[820px] mx-auto text-center">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
                Blog
              </p>
              <h1
                className="text-foreground font-light tracking-tight mb-8"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                  lineHeight: 1.1,
                }}
              >
                Notas de campo sobre formación AI-native.
              </h1>
              <p className="text-body text-foreground-secondary/70 font-light leading-relaxed">
                Patrones, anti-patrones y métricas reales de implantación.
                Escribimos lo que aprendemos cliente a cliente.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {blogPosts.length === 0 ? (
        <section className="py-24 md:py-40 bg-surface">
          <Container>
            <FadeIn>
              <div className="max-w-[640px] mx-auto text-center">
                <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
                  Próximamente
                </p>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  El primer post sale cuando cierre el primer piloto presencial.
                  Mientras tanto, lo que pensamos lo publicamos en LinkedIn.
                </p>
                <a
                  href="https://www.linkedin.com/company/keniengineering/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-8 text-sm text-foreground font-light underline underline-offset-4 decoration-border-color hover:decoration-foreground transition-all duration-300"
                >
                  Síguenos en LinkedIn
                </a>
              </div>
            </FadeIn>
          </Container>
        </section>
      ) : null}

      <CTASection
        headline="¿Tu equipo paga IA y no la usa? Hablemos."
        buttonText="Agenda una llamada"
        buttonHref="/book"
      />
    </main>
  );
}
