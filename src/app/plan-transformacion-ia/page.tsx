import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Plan de transformación con IA",
  description:
    "Estrategia, capacitación y automatización en un mismo recorrido. De tener IA a trabajar con ella: auditamos tu estado, construimos el plan y dejamos a tu equipo operando solo.",
  alternates: {
    canonical: "https://ia.kenitech.io/plan-transformacion-ia",
  },
  openGraph: {
    title: "Plan de transformación con IA",
    description:
      "Estrategia, capacitación y automatización en un mismo recorrido. De tener IA a trabajar con ella.",
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

// Las tres piezas del plan completo. Cada una enlaza a su página de detalle.
const pillars = [
  {
    n: "01",
    category: "Estrategia",
    tagline: "Saber dónde estás para planear a dónde vas.",
    body: "Auditamos el estado real de IA de tu equipo y construimos el plan: dónde aporta valor primero, en qué orden y con qué medirlo.",
    href: "/plan-transformacion-ia",
  },
  {
    n: "02",
    category: "Capacitación",
    tagline: "La IA se adopta trabajando, no en una presentación.",
    body: "El equipo aprende usando su propio agente en sus tareas reales, desde el primer día. Sin jerga, sin código a la vista.",
    href: "/capacitacion-equipos",
  },
  {
    n: "03",
    category: "Automatización",
    tagline: "Donde los agentes aportan más valor.",
    body: "Identificamos los flujos con mayor retorno, los prototipamos y dejamos la capacidad instalada para que escales sin nosotros.",
    href: "/automatizacion-flujos",
  },
];

// El recorrido, en lenguaje público (un sprint), sin exponer estructura interna.
const journey = [
  {
    n: "1",
    title: "Diagnóstico",
    body: "Escuchamos al equipo y observamos cómo trabaja hoy.",
  },
  {
    n: "2",
    title: "Plan",
    body: "Priorizamos dónde la IA aporta antes y lo aterrizamos en un plan a tu medida.",
  },
  {
    n: "3",
    title: "Formación en el flujo",
    body: "Una semana guiada: el equipo trabaja con su agente en sus propias tareas, con soporte a demanda.",
  },
  {
    n: "4",
    title: "Capacidad instalada",
    body: "El equipo sigue solo. Medimos el antes y el después.",
  },
];

const principles = [
  {
    title: "Capacidad, no dependencia.",
    body: "Te dejamos operando tu negocio con IA, no atado a nosotros.",
  },
  {
    title: "Herramientas reales, no maquetas.",
    body: "El equipo aprende con los flujos que ya tiene entre manos.",
  },
  {
    title: "El antes y el después.",
    body: "Medimos el punto de partida y el avance real, no la asistencia a un curso.",
  },
];

// Entregables concretos del recorrido: lo que queda instalado en el equipo.
const deliverables = [
  {
    title: "Un plan a tu medida",
    body: "Dónde aporta la IA en tu operación, en qué orden y con qué medirlo.",
  },
  {
    title: "Tu equipo operando con IA",
    body: "Cada persona trabajando con su agente en sus tareas reales, sin depender de nosotros.",
  },
  {
    title: "Flujos automatizados",
    body: "Los procesos de mayor retorno, prototipados y listos para escalar.",
  },
  {
    title: "El antes y el después",
    body: "La medición de tu punto de partida y del avance real del equipo.",
  },
];

export default function PlanTransformacionIAPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero — mismo fondo que la tarjeta "Estrategia / Plan IA" de la home */}
      <section
        className="pt-32 pb-20 md:pt-48 md:pb-28"
        style={{
          background:
            "radial-gradient(at 28% 72%, #cdb088 0%, transparent 70%), radial-gradient(at 78% 22%, #e0cdad 0%, transparent 72%), radial-gradient(at 55% 45%, #bfa074 0%, transparent 78%), linear-gradient(135deg, #f0e7d6, #f6efe2)",
        }}
      >
        <Container>
          <div className="max-w-[820px] mx-auto text-center">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
                Estrategia
              </p>
              <h1
                className="text-foreground font-medium tracking-tight mb-8"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: 1.1,
                }}
              >
                Plan de transformación con IA
              </h1>
              <p
                className="text-foreground font-light tracking-tight mb-6"
                style={{
                  fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                  lineHeight: 1.35,
                }}
              >
                Saber dónde estás para planear a dónde vas.
              </p>
              <p className="text-body text-foreground-secondary/70 font-light leading-relaxed max-w-[620px] mx-auto">
                Estrategia, capacitación y automatización en un mismo recorrido.
                De tener IA a trabajar con ella.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* El punto de partida */}
      <section className="py-20 md:py-28 border-t border-border-color">
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
                Tener IA es lo fácil. La diferencia la marca lo que tu equipo
                hace con ella.
              </p>
              <p className="text-body text-foreground-secondary/70 font-light leading-relaxed max-w-[600px] mx-auto">
                Las herramientas se compran en una tarde. El hábito de usarlas
                —en las tareas reales, por todo el equipo, sin depender de
                nadie— se construye. Ese es el trabajo que hacemos contigo.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Las tres piezas del plan */}
      <section className="py-20 md:py-28 border-t border-border-color">
        <Container>
          <FadeIn>
            <div className="max-w-[760px] mx-auto text-center mb-16 md:mb-20">
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-8">
                Un plan, tres piezas
              </p>
              <p
                className="text-foreground font-light tracking-tight"
                style={{
                  fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)",
                  lineHeight: 1.35,
                }}
              >
                El recorrido completo. Cada pieza se sostiene en la anterior.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 max-w-[1080px] mx-auto">
            {pillars.map((p) => (
              <FadeIn key={p.n} delay={0.05}>
                <Link
                  href={p.href}
                  className="group block h-full md:px-2"
                  aria-label={p.category}
                >
                  <span className="block text-sm font-light text-foreground/20 mb-5 tabular-nums">
                    {p.n}
                  </span>
                  <h3 className="text-foreground font-medium tracking-tight mb-3 text-lg">
                    {p.category}
                  </h3>
                  <p className="text-foreground font-light leading-snug mb-4">
                    {p.tagline}
                  </p>
                  <p className="text-sm text-foreground-secondary/70 font-light leading-relaxed mb-6">
                    {p.body}
                  </p>
                  <span className="inline-block text-sm font-light text-foreground/70 transition-colors group-hover:text-foreground">
                    Saber más →
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Cómo es el recorrido */}
      <section className="py-20 md:py-28 border-t border-border-color">
        <Container>
          <FadeIn>
            <div className="max-w-[760px] mx-auto text-center mb-16 md:mb-20">
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-8">
                Cómo es el recorrido
              </p>
              <p
                className="text-foreground font-light tracking-tight"
                style={{
                  fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)",
                  lineHeight: 1.35,
                }}
              >
                Un sprint. Empezamos contigo y terminamos con tu equipo
                operando solo.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-[1080px] mx-auto">
            {journey.map((step) => (
              <FadeIn key={step.n} delay={0.05}>
                <div className="md:min-h-[140px]">
                  <span className="block text-lg font-light text-foreground/[0.12] mb-4 tabular-nums">
                    {step.n}
                  </span>
                  <h3 className="text-foreground font-medium tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary/70 font-light leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Qué te llevas */}
      <section className="py-20 md:py-28 border-t border-border-color">
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
                Al final del recorrido, esto se queda contigo.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12 max-w-[860px] mx-auto">
            {deliverables.map((d, idx) => (
              <FadeIn key={d.title} delay={0.05}>
                <div className="flex gap-5">
                  <span className="text-sm font-light text-foreground/20 tabular-nums pt-1">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-foreground font-medium tracking-tight mb-2 text-lg">
                      {d.title}
                    </h3>
                    <p className="text-sm text-foreground-secondary/70 font-light leading-relaxed">
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
      <section className="py-20 md:py-28 border-t border-border-color">
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
                  <p className="text-sm text-foreground-secondary/70 font-light leading-relaxed">
                    {pr.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Otros servicios */}
      <section className="py-20 md:py-28 border-t border-border-color">
        <Container>
          <FadeIn>
            <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-8 text-center">
              Explora también
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
              <Link
                href="/capacitacion-equipos"
                className="text-sm text-foreground font-light underline underline-offset-4 decoration-border-color hover:decoration-foreground transition-all"
              >
                Capacitación de equipos →
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
