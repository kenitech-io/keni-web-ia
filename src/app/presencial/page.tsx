import { Metadata } from "next";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Presencial: una semana de implantación con tu equipo",
  description:
    "Una semana en sitio. Trabajamos con tu equipo sobre sus tareas reales y los dejamos usando IA con métricas de antes y después. Implantación acompañada, no workshop.",
  alternates: {
    canonical: "https://ia.kenitech.io/presencial",
  },
  openGraph: {
    title: "Presencial: una semana de implantación con tu equipo",
    description:
      "Una semana en sitio. Tu equipo sale usando IA en su trabajo real, con métricas.",
    url: "https://ia.kenitech.io/presencial",
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
      name: "Presencial",
      item: "https://ia.kenitech.io/presencial",
    },
  ],
};

const days = [
  {
    label: "Día 1",
    title: "Diagnóstico y fundamentos",
    body: "Mapeamos el trabajo real del equipo. Instalamos, configuramos accesos, levantamos el primer agente con cada persona. Al cierre del día todos saben qué tienen en las manos.",
  },
  {
    label: "Día 2",
    title: "Terminal guiada",
    body: "Cada empleado con su agente sobre sus tareas reales del puesto. Acompañamiento uno a uno. Sin ejercicios de juguete, sin demos prefabricadas.",
  },
  {
    label: "Día 3",
    title: "Sesiones por rol",
    body: "Tracks separados para perfiles tec y no tec. Cada track resuelve los casos típicos del rol con el agente, en su flujo de trabajo real.",
  },
  {
    label: "Día 4",
    title: "Autonomía supervisada",
    body: "El empleado lidera. Nosotros corregimos cuando hace falta. Empezamos a medir tareas terminadas con agente y tiempo recuperado por persona.",
  },
  {
    label: "Día 5",
    title: "Métricas y roadmap",
    body: "Cierre con datos: antes y después por persona, capacidad nueva, próximos pasos. Entregamos el roadmap a 30 días para sostener la adopción.",
  },
];

const includes = [
  "Diagnóstico previo de roles, accesos y casos de uso por equipo.",
  "Cinco días de implantación acompañada en tus oficinas.",
  "Tracks paralelos para empleados tec y no tec.",
  "Métricas individuales de antes y después por empleado.",
  "Roadmap a 30 días con responsables y criterios de éxito.",
  "Configuración de los agentes y plantillas listas para producción.",
];

const deliverables = [
  "Cada empleado del grupo termina la semana usando IA en su trabajo real.",
  "Reporte cuantitativo: horas recuperadas, tareas nuevas, adopción medida con uso.",
  "Plantillas de agente por rol y por departamento, listas para reutilizar.",
  "Plan de continuidad para los siguientes 30 días, con o sin nosotros.",
];

const faqs = [
  {
    q: "¿Cuánta gente entra en una semana?",
    a: "Cohorte recomendada: 6 a 12 personas. Más de eso comprometemos el acompañamiento uno a uno que es la diferencia con un workshop. Si tu equipo es más grande, hacemos varias semanas escalonadas.",
  },
  {
    q: "¿Necesitamos perfiles técnicos en el grupo?",
    a: "No. La semana funciona con grupos mixtos o con grupos enteramente no técnicos. Los tracks del día 3 se adaptan a la composición real.",
  },
  {
    q: "¿Qué necesitamos tener listo antes?",
    a: "Cuentas y accesos básicos. Si la empresa todavía no compró IA, lo coordinamos en el diagnóstico previo. Sala con buena conexión y proyector.",
  },
  {
    q: "¿Quién imparte la semana?",
    a: "Los socios fundadores. La semana presencial es la primera entrega de cada cliente nuevo, va con seniority arriba sin excepción.",
  },
  {
    q: "¿Cómo medimos resultado al final?",
    a: "Tres números por persona: horas semanales recuperadas, tareas que ahora puede hacer y antes no, y uso real medido con telemetría del agente. Sin encuestas.",
  },
];

export default function PresencialPage() {
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
                Modalidad presencial
              </p>
              <h1
                className="text-foreground font-light tracking-tight mb-8"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: 1.1,
                }}
              >
                Una semana en sitio.
                <br />
                Tu equipo sale usando IA.
              </h1>
              <p className="text-body text-foreground-secondary/70 font-light leading-relaxed">
                Implantación acompañada en tus oficinas. Trabajamos con tus
                empleados sobre sus tareas reales, medimos el antes y el después
                y dejamos a cada persona operando con autonomía.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Agenda 5 días */}
      <section className="py-24 md:py-40 bg-surface">
        <Container>
          <FadeIn>
            <div className="max-w-[640px] mb-16">
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
                La semana, día por día
              </p>
              <h2
                className="text-foreground font-light tracking-tight"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  lineHeight: 1.15,
                }}
              >
                Cinco días. Una sola promesa: autonomía.
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-12 md:space-y-10">
            {days.map((day, i) => (
              <FadeIn key={day.label} delay={i * 0.06}>
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-12 border-t border-border-color pt-8">
                  <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light pt-1">
                    {day.label}
                  </p>
                  <div>
                    <h3
                      className="text-foreground font-light tracking-tight mb-3"
                      style={{
                        fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                        lineHeight: 1.2,
                      }}
                    >
                      {day.title}
                    </h3>
                    <p className="text-sm text-foreground-secondary/70 leading-loose font-light max-w-[640px]">
                      {day.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Qué incluye / Entregables */}
      <section className="py-24 md:py-40">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <FadeIn>
              <div>
                <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
                  Qué incluye
                </p>
                <ul className="space-y-5">
                  {includes.map((line) => (
                    <li
                      key={line}
                      className="text-sm text-foreground-secondary/80 leading-loose font-light flex gap-3"
                    >
                      <span className="text-foreground/40">·</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
                  Qué te llevas
                </p>
                <ul className="space-y-5">
                  {deliverables.map((line) => (
                    <li
                      key={line}
                      className="text-sm text-foreground-secondary/80 leading-loose font-light flex gap-3"
                    >
                      <span className="text-foreground/40">·</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-40 border-t border-border-color">
        <Container>
          <div className="max-w-[820px] mx-auto">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
                Preguntas frecuentes
              </p>
              <h2
                className="text-foreground font-light tracking-tight mb-12"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  lineHeight: 1.15,
                }}
              >
                Lo que nos preguntan sobre la semana.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <FAQAccordion faqs={faqs} />
            </FadeIn>
          </div>
        </Container>
      </section>

      <CTASection
        headline="Bloquea una semana con nosotros."
        subtext="Una llamada de 30 minutos para ver si tu caso encaja. Sin pitch, sin slides."
        buttonText="Agenda una llamada"
        buttonHref="/book"
      />
    </main>
  );
}
