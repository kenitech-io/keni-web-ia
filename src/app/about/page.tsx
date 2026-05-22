import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Acerca de nosotros: por qué existe la línea IA de Keni",
  description:
    "Keni Engineering opera AI-native. Cada departamento tiene su propio agente. Llevamos a otras empresas a hacer lo mismo: usar IA en su trabajo real, con métricas.",
  alternates: {
    canonical: "https://ia.kenitech.io/about",
  },
  openGraph: {
    title: "Acerca de nosotros: por qué existe la línea IA de Keni",
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
      name: "Acerca de nosotros",
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
  },
  {
    name: "Mikel Martin",
    role: "CTO",
    href: "https://www.linkedin.com/in/mikelm20/",
    photo: "/team/mikel.jpg",
    imgFilter: "grayscale-[95%] contrast-[110%] brightness-[97%]",
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
                Empresa
              </p>
              <h1
                className="text-foreground font-medium tracking-tight mb-8"
                style={{
                  fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                  lineHeight: 1.1,
                }}
              >
                Acerca de Nosotros
              </h1>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Visión - dos columnas (estructura kenitech.io) */}
      <section className="py-24 md:py-40">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
            <div className="max-w-[480px]">
              <FadeIn>
                <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
                  Por qué existimos
                </p>
                <h2
                  className="text-foreground font-light tracking-tight mb-8"
                  style={{
                    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                    lineHeight: 1.15,
                  }}
                >
                  Tu empresa ya tiene IA. Apenas la usa.
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light mb-6">
                  La IA va a redefinir cómo trabaja cada empresa. No es una
                  herramienta más: es la forma en que se hará el trabajo.
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Nuestro objetivo es que la fluidez con IA sea el estándar, no
                  la ventaja competitiva de unos pocos. Que cualquier equipo
                  pueda operar con ella, sin importar su tamaño. Esa transición
                  ya empezó. Existimos para ayudar a que llegue a todos.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.1}>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/about-vision.jpg"
                  alt="Estructura de ladrillo en espiral, vista aérea"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Statement centrado (estructura kenitech.io) */}
      <section className="py-24 md:py-40 bg-surface">
        <Container>
          <FadeIn>
            <p
              className="max-w-[900px] mx-auto text-center text-foreground font-light tracking-tight leading-snug"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            >
              Construimos capacidad, no dependencia. Cuando nos retiramos, tu
              equipo opera la IA por su cuenta. Ese es el objetivo: tu
              autonomía, no tu dependencia de nosotros.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Equipo (versión IA) */}
      <section className="py-24 md:py-40">
        <Container>
          <FadeIn>
            <h2
              className="text-foreground font-light tracking-tight mb-16 md:mb-24 text-center"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                lineHeight: 1.15,
              }}
            >
              El equipo
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
