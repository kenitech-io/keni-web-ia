import { Metadata } from "next";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Web: tres fases hasta la autonomía con IA",
  description:
    "Onboarding web sobre VM Firecracker. Cada empleado entra desde el navegador a una terminal real, avanza por tres fases y termina usando IA en su trabajo sin nosotros.",
  alternates: {
    canonical: "https://ia.kenitech.io/web",
  },
  openGraph: {
    title: "Web: tres fases hasta la autonomía con IA",
    description:
      "Terminal real desde el navegador. Tres fases. Autonomía verificable.",
    url: "https://ia.kenitech.io/web",
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
      name: "Web",
      item: "https://ia.kenitech.io/web",
    },
  ],
};

const phases = [
  {
    label: "Fase 1",
    title: "Fundamentos",
    body: "Qué es un agente, qué es la terminal, cuándo conviene usar uno y cuándo no. El empleado entra a la VM, instala y configura su agente, y termina la fase con un primer caso resuelto.",
    milestone: "Hito: primer caso real terminado con agente.",
  },
  {
    label: "Fase 2",
    title: "Terminal guiada",
    body: "El empleado resuelve casos del puesto con acompañamiento asíncrono. Cada caso se valida contra criterios concretos. La fase no avanza por horas dedicadas, avanza por casos cerrados.",
    milestone: "Hito: tres casos del puesto cerrados sin asistencia directa.",
  },
  {
    label: "Fase 3",
    title: "Autonomía",
    body: "El empleado opera IA en su día a día sin nosotros. Empieza a medir su propio uso. La plataforma reporta tareas terminadas con agente, horas recuperadas y capacidad nueva por persona.",
    milestone: "Hito: dos semanas de uso continuado en su trabajo real.",
  },
];

const platform = [
  "VM Firecracker dedicada por empleado, aislada y persistente.",
  "Terminal real desde el navegador, sin instalar nada en su máquina.",
  "Telemetría de uso para medir adopción objetiva, no encuestas.",
  "Tracks paralelos para perfiles tec y no tec, mismo método.",
];

const faqs = [
  {
    q: "¿Cuánto tarda el empleado en terminar?",
    a: "Depende de la persona y de la intensidad. La fase 1 suele tomar entre 4 y 8 horas. Las fases 2 y 3 avanzan al ritmo del trabajo real, no del calendario. La medición es por hito, no por tiempo.",
  },
  {
    q: "¿Necesitan perfil técnico para la modalidad web?",
    a: "No. El método y la plataforma están pensados para que cualquier rol llegue a autonomía. Los tracks adaptan los casos a tipo de trabajo, no al nivel técnico.",
  },
  {
    q: "¿Por qué Firecracker y no un sandbox cualquiera?",
    a: "Necesitamos que la terminal sea real, persistente entre sesiones y aislada por empleado. Firecracker da microVMs que arrancan en milisegundos, lo que hace viable un entorno por persona.",
  },
  {
    q: "¿Hay acompañamiento humano?",
    a: "Sí, asíncrono. Revisamos cada caso entregado con feedback concreto. La modalidad web es autónoma en ritmo, no en orientación.",
  },
  {
    q: "¿Cómo se compara con la modalidad presencial?",
    a: "Mismo método y mismo hito final. La presencial es más rápida y cara, valida la tesis con métricas en una semana. La web escala mejor y se usa después de que el caso de la empresa ya está validado.",
  },
];

export default function WebPage() {
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
                Modalidad web
              </p>
              <h1
                className="text-foreground font-light tracking-tight mb-8"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: 1.1,
                }}
              >
                Terminal real desde el navegador.
                <br />
                Tres fases hasta la autonomía.
              </h1>
              <p className="text-body text-foreground-secondary/70 font-light leading-relaxed">
                Cada empleado abre su VM dedicada en Firecracker, escribe en su
                terminal, opera con su agente y avanza por fundamentos, terminal
                guiada y autonomía. Sin instalar nada. Sin ejercicios de
                juguete.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* 3 Fases */}
      <section className="py-24 md:py-40 bg-surface">
        <Container>
          <FadeIn>
            <div className="max-w-[640px] mb-16">
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
                Las tres fases
              </p>
              <h2
                className="text-foreground font-light tracking-tight"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  lineHeight: 1.15,
                }}
              >
                Avanza por hitos, no por horas.
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-12 md:space-y-10">
            {phases.map((phase, i) => (
              <FadeIn key={phase.label} delay={i * 0.08}>
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-12 border-t border-border-color pt-8">
                  <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light pt-1">
                    {phase.label}
                  </p>
                  <div>
                    <h3
                      className="text-foreground font-light tracking-tight mb-3"
                      style={{
                        fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                        lineHeight: 1.2,
                      }}
                    >
                      {phase.title}
                    </h3>
                    <p className="text-sm text-foreground-secondary/70 leading-loose font-light max-w-[640px] mb-4">
                      {phase.body}
                    </p>
                    <p className="text-xs text-foreground/70 font-medium uppercase tracking-[0.2em]">
                      {phase.milestone}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Plataforma */}
      <section className="py-24 md:py-40">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <FadeIn>
              <div>
                <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
                  La plataforma
                </p>
                <h2
                  className="text-foreground font-light tracking-tight mb-8"
                  style={{
                    fontSize: "clamp(1.5rem, 2.75vw, 2rem)",
                    lineHeight: 1.2,
                  }}
                >
                  Un entorno real por empleado.
                </h2>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  No es un sandbox de ejercicios. Es la terminal donde tu
                  empleado va a trabajar después. Persistente, aislada, con
                  telemetría que mide adopción real.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <ul className="space-y-5">
                {platform.map((line) => (
                  <li
                    key={line}
                    className="text-sm text-foreground-secondary/80 leading-loose font-light flex gap-3"
                  >
                    <span className="text-foreground/40">·</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
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
                Lo que nos preguntan sobre la modalidad web.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <FAQAccordion faqs={faqs} />
            </FadeIn>
          </div>
        </Container>
      </section>

      <CTASection
        headline="Mira la plataforma con nosotros."
        subtext="Te enseñamos el entorno en vivo y vemos si encaja con tu equipo."
        buttonText="Agenda una llamada"
        buttonHref="/book"
      />
    </main>
  );
}
