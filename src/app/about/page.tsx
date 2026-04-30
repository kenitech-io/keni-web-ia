import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Equipo: por qué existe la línea IA de Keni",
  description:
    "Keni Engineering opera AI-native. Cada departamento tiene su propio agente. Llevamos a otras empresas a hacer lo mismo: usar IA en su trabajo real, con métricas.",
  alternates: {
    canonical: "https://ia.kenitech.io/about",
  },
  openGraph: {
    title: "Equipo: por qué existe la línea IA de Keni",
    description:
      "Operamos AI-native. Vendemos lo que hacemos. Cada departamento tiene su propio agente.",
    url: "https://ia.kenitech.io/about",
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
      name: "Equipo",
      item: "https://ia.kenitech.io/about",
    },
  ],
};

const team = [
  {
    name: "Ane Ugarte",
    role: "CEO",
    href: "https://www.linkedin.com/in/aneugarte/",
    photo: "/team/ane.jpg",
    imgFilter: "",
    grain: false,
  },
  {
    name: "Mikel Martin",
    role: "CTO",
    href: "https://www.linkedin.com/in/mikelm20/",
    photo: "/team/mikel.jpg",
    imgFilter: "grayscale-[95%] contrast-[110%] brightness-[97%]",
    grain: false,
  },
];

export default function AboutPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32">
        <Container>
          <div className="max-w-[820px] mx-auto text-center">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
                Equipo
              </p>
              <h1
                className="text-foreground font-light tracking-tight mb-8"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                  lineHeight: 1.1,
                }}
              >
                Operamos AI-native. Vendemos lo que hacemos.
              </h1>
              <p className="text-body text-foreground-secondary/70 font-light leading-relaxed">
                Keni Engineering existe en dos líneas: DevOps y formación AI.
                Esta es la línea IA. Existe porque varios prospects nos
                contrataron por la forma en la que operábamos por dentro, antes
                que por nada que vendiéramos por fuera.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Origen */}
      <section className="py-24 md:py-40 bg-surface">
        <Container>
          <div className="max-w-[820px] mx-auto">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-8">
                Por qué existe esta línea
              </p>
              <p
                className="text-foreground font-light tracking-tight mb-8"
                style={{
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  lineHeight: 1.3,
                }}
              >
                Cada departamento de Keni tiene su propio agente, con su
                contexto y sus instrucciones.
              </p>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light mb-6">
                Sales, marketing, finanzas, legal. Cada uno con su CLAUDE.md,
                su histórico y sus rituales con el agente. Claude Code es la
                mesa de trabajo. Lo usamos todos los días, en todas las
                funciones, antes de pedirle a nadie más que lo haga.
              </p>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                Cuando empezamos a contar cómo trabajábamos, varios clientes
                potenciales engancharon con eso antes que con nuestra oferta
                DevOps. Nos pidieron lo mismo para sus equipos. Convertimos ese
                ángulo en producto propio: el método para llevar al empleado a
                usar IA en su trabajo diario, con autonomía verificable.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Cómo trabajamos */}
      <section className="py-24 md:py-40">
        <Container>
          <div className="max-w-[820px] mx-auto">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-8">
                Cómo trabajamos
              </p>
              <p
                className="text-foreground font-light tracking-tight mb-12"
                style={{
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  lineHeight: 1.3,
                }}
              >
                Si lo que vendemos no se opera todos los días dentro de Keni, no
                se vende.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
              <FadeIn delay={0.05}>
                <div>
                  <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-4">
                    Dogfooding
                  </p>
                  <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                    Usamos Claude Code en marketing, finanzas y legal antes de
                    enseñárselo a otros. El producto refleja cómo trabajamos.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div>
                  <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-4">
                    Seniority arriba
                  </p>
                  <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                    La primera entrega de cada cliente nuevo va con socios
                    fundadores. La presencial no se delega.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div>
                  <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-4">
                    Métrica antes que tesis
                  </p>
                  <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                    Validamos con números reales en cada cliente antes de
                    escalar. Encuestas no, telemetría sí.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* Equipo */}
      <section className="py-24 md:py-40 border-t border-border-color">
        <Container>
          <FadeIn>
            <h2
              className="text-foreground font-light tracking-tight mb-16 md:mb-24 text-center"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                lineHeight: 1.15,
              }}
            >
              Equipo
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 max-w-[640px] mx-auto">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div>
                  <div className="relative w-full aspect-square rounded overflow-hidden mb-6">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={480}
                      height={480}
                      className={`w-full h-full object-cover ${member.imgFilter}`}
                    />
                    {member.grain && (
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-[url('/noise.svg')] bg-repeat opacity-40 mix-blend-overlay"
                      />
                    )}
                  </div>
                  <h3 className="text-foreground font-light tracking-tight text-[1.125rem] md:text-[1.25rem] leading-snug mb-2">
                    <a
                      href={member.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline underline-offset-4 decoration-border-color hover:decoration-foreground transition-all"
                    >
                      {member.name}
                    </a>
                  </h3>
                  <p className="text-label uppercase tracking-[0.25em] text-muted/70 font-medium">
                    {member.role}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        headline="¿Quieres que tu equipo opere así?"
        buttonText="Agenda una llamada"
        buttonHref="/book"
      />
    </main>
  );
}
