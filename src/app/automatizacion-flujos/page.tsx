import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Automatización de flujos",
  description:
    "Identificar dónde los agentes aportan más valor. Priorizamos, prototipamos y entregamos un plan para escalar.",
  alternates: {
    canonical: "https://ia.kenitech.io/automatizacion-flujos",
  },
  openGraph: {
    title: "Automatización de flujos",
    description:
      "Priorizamos, prototipamos y entregamos un plan para escalar.",
    url: "https://ia.kenitech.io/automatizacion-flujos",
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
      name: "Automatización de flujos",
      item: "https://ia.kenitech.io/automatizacion-flujos",
    },
  ],
};

// Dónde aporta más valor la automatización.
const aportan = [
  {
    title: "Trabajo con lenguaje",
    body: "Leer, escribir, resumir o responder: buena parte del día pasa por las palabras.",
  },
  {
    title: "Casos que varían",
    body: "Cuando cada caso es distinto y una sola regla no alcanza para todos.",
  },
  {
    title: "Dentro del flujo diario",
    body: "En el trabajo de cada día del equipo, no en una herramienta aparte.",
  },
  {
    title: "Decisiones con criterio",
    body: "Cuando hay una lógica clara detrás, aunque no quepa en una sola regla.",
  },
];

// Cómo lo hacemos, paso a paso.
const proceso = [
  {
    n: "1",
    title: "Identificar y priorizar",
    body: "Mapeamos el flujo del equipo y ordenamos las oportunidades por el valor que aportan.",
  },
  {
    n: "2",
    title: "Prototipar",
    body: "Construimos lo prioritario primero, en pequeño, para ver cómo se comporta.",
  },
  {
    n: "3",
    title: "Validar en el trabajo real",
    body: "El prototipo se prueba donde sucede el trabajo, con las personas que lo hacen.",
  },
  {
    n: "4",
    title: "Entregar un plan para escalar",
    body: "Dejamos un camino claro y la capacidad para recorrerlo sin nosotros.",
  },
];

// Entregables.
const llevas = [
  {
    title: "Flujos prioritarios prototipados",
    body: "Las oportunidades de más valor, ya construidas y probadas en tu contexto.",
  },
  {
    title: "Un plan para escalar",
    body: "El siguiente paso documentado, listo para que el equipo lo continúe.",
  },
  {
    title: "Capacidad instalada",
    body: "Personas de tu equipo que entienden lo construido y pueden extenderlo.",
  },
  {
    title: "El antes y el después",
    body: "La medición del trabajo como era y como queda, para que el avance se vea.",
  },
];

const principles = [
  {
    title: "Capacidad, no dependencia.",
    body: "Construimos para que el equipo opere y escale por su cuenta.",
  },
  {
    title: "Herramientas reales, no maquetas.",
    body: "Lo que entregamos funciona en el trabajo, no solo en una presentación.",
  },
  {
    title: "El antes y el después.",
    body: "Medimos cómo era el flujo y cómo queda, sin adornar el resultado.",
  },
];

export default function AutomatizacionFlujosPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero - mismo fondo que la tarjeta "Ejecución / Automatización" de la home */}
      <section
        className="pt-32 pb-20 md:pt-48 md:pb-32"
        style={{
          background:
            "radial-gradient(at 30% 70%, #9c7046 0%, transparent 70%), radial-gradient(at 72% 28%, #b88959 0%, transparent 72%), radial-gradient(at 55% 50%, #845c38 0%, transparent 78%), linear-gradient(135deg, #e4c597, #edcea0)",
        }}
      >
        <Container>
          <div className="max-w-[820px] mx-auto text-center">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
                Ejecución
              </p>
              <h1
                className="text-foreground font-medium tracking-tight mb-8"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: 1.1,
                }}
              >
                Automatización de flujos
              </h1>
              <p className="text-body text-foreground-secondary/70 font-light leading-relaxed max-w-[620px] mx-auto">
                Priorizamos, prototipamos y entregamos un plan para escalar.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* El punto de partida */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-[760px] mx-auto text-center">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-8">
                El punto de partida
              </p>
              <p
                className="text-foreground font-light tracking-tight mb-8"
                style={{
                  fontSize: "clamp(1.375rem, 2.6vw, 2rem)",
                  lineHeight: 1.3,
                }}
              >
                Tu equipo vale para más que el trabajo repetitivo.
              </p>
              <p className="text-body text-foreground-secondary/70 font-light leading-relaxed max-w-[600px] mx-auto">
                En cada equipo hay tareas operativas que se repiten y aportan
                poco. Un agente puede encargarse de ellas, y tu equipo recupera
                ese tiempo para el trabajo que de verdad importa. Empezamos por
                encontrar cuáles.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Dónde aportan los agentes */}
      <section className="py-20 md:py-28 bg-surface">
        <Container>
          <FadeIn>
            <div className="max-w-[760px] mx-auto text-center mb-16 md:mb-20">
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-8">
                Dónde aportan
              </p>
              <p
                className="text-foreground font-light tracking-tight"
                style={{
                  fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)",
                  lineHeight: 1.35,
                }}
              >
                Lo repetitivo ya está resuelto. Lo demás es lo interesante.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-[1080px] mx-auto">
            {aportan.map((it) => (
              <FadeIn key={it.title} delay={0.05}>
                <div>
                  <h3 className="text-foreground font-medium tracking-tight mb-3 text-lg">
                    {it.title}
                  </h3>
                  <p className="hidden sm:block text-sm text-foreground-secondary/70 font-light leading-relaxed">
                    {it.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Cómo lo hacemos */}
      <section className="py-20 md:py-28 bg-surface">
        <Container>
          <FadeIn>
            <div className="max-w-[760px] mx-auto text-center mb-16 md:mb-20">
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-8">
                Cómo lo hacemos
              </p>
              <p
                className="text-foreground font-light tracking-tight"
                style={{
                  fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)",
                  lineHeight: 1.35,
                }}
              >
                Primero entender el trabajo, después automatizarlo.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-[1080px] mx-auto">
            {proceso.map((step) => (
              <FadeIn key={step.n} delay={0.05}>
                <div className="md:min-h-[160px]">
                  <span className="block text-lg font-light text-foreground/[0.12] mb-4 tabular-nums">
                    {step.n}
                  </span>
                  <h3 className="text-foreground font-medium tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="hidden sm:block text-sm text-foreground-secondary/70 font-light leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Qué te llevas */}
      <section className="py-20 md:py-28">
        <Container>
          <FadeIn>
            <div className="max-w-[760px] mx-auto text-center mb-16 md:mb-20">
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-8">
                Qué te llevas
              </p>
              <p
                className="text-foreground font-light tracking-tight"
                style={{
                  fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)",
                  lineHeight: 1.35,
                }}
              >
                Flujos que funcionan y un equipo que sabe seguir.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12 max-w-[860px] mx-auto">
            {llevas.map((d, idx) => (
              <FadeIn key={d.title} delay={0.05}>
                <div className="flex gap-5">
                  <span className="text-sm font-light text-foreground/20 tabular-nums pt-1">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-foreground font-medium tracking-tight mb-2 text-lg">
                      {d.title}
                    </h3>
                    <p className="hidden sm:block text-sm text-foreground-secondary/70 font-light leading-relaxed">
                      {d.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Cómo trabajamos */}
      <section className="py-20 md:py-28">
        <Container>
          <FadeIn>
            <div className="max-w-[760px] mx-auto text-center mb-16 md:mb-20">
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-8">
                Cómo trabajamos
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-12 max-w-[920px] mx-auto">
            {principles.map((pr) => (
              <FadeIn key={pr.title} delay={0.05}>
                <div>
                  <h3 className="text-foreground font-light tracking-tight mb-3 text-lg">
                    {pr.title}
                  </h3>
                  <p className="hidden sm:block text-sm text-foreground-secondary/70 font-light leading-relaxed">
                    {pr.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Otros servicios */}
      <section className="py-20 md:py-28 bg-surface">
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
                href="/capacitacion-equipos"
                className="text-sm text-foreground font-light underline underline-offset-4 decoration-border-color hover:decoration-foreground transition-all"
              >
                Capacitación de equipos →
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
