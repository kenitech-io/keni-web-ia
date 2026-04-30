import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

const phases = [
  {
    label: "Fase 1",
    title: "Fundamentos",
    body: "Qué es un agente, qué es la terminal, cuándo conviene usar uno. El empleado entiende qué tiene en las manos antes de tocar nada.",
  },
  {
    label: "Fase 2",
    title: "Terminal guiada",
    body: "Sesiones acompañadas resolviendo trabajo real del puesto. Sin ejercicios de juguete. Su tarea, su agente, nuestro acompañamiento.",
  },
  {
    label: "Fase 3",
    title: "Autonomía",
    body: "El empleado opera IA en su día a día sin nosotros. Hito medible: tareas terminadas con agente, horas recuperadas, capacidad nueva.",
  },
];

const modalities = [
  {
    eyebrow: "Modalidad presencial",
    title: "Una semana en sitio.",
    body: "Implantación acompañada en tus oficinas. Trabajamos con tu equipo sobre sus tareas reales y validamos la tesis con métricas antes de escalar.",
    href: "/presencial",
    cta: "Ver presencial",
  },
  {
    eyebrow: "Modalidad web",
    title: "Tres fases sobre VM Firecracker.",
    body: "Cada empleado entra desde el navegador a una terminal real, avanza por las tres fases y termina con autonomía verificable.",
    href: "/web",
    cta: "Ver web",
  },
];

const notManifesto = [
  "No es un curso de prompting.",
  "No es badges ni certificados de LinkedIn.",
  "No es teoría sobre IA.",
  "No es para reducir headcount.",
];

const kpis = [
  {
    metric: "Antes y después",
    label: "Horas semanales recuperadas por empleado",
  },
  {
    metric: "Tareas nuevas",
    label: "Trabajo que el empleado puede hacer y antes no",
  },
  {
    metric: "Adopción real",
    label: "Medida con uso, no con encuestas",
  },
];

const audience = [
  "Empresas LATAM hispano y ES que ya pagan IA o la están evaluando.",
  "Equipos tec y no tec, incluido C-suite.",
  "Sin capacidad interna de formar a su gente.",
];

const notForUs = [
  "Quien busca un workshop de dos horas.",
  "Quien quiere reemplazar personas por agentes.",
];

const faqs = [
  {
    q: "¿Funciona con empleados no técnicos?",
    a: "Sí. La mitad del valor del método es bajar la terminal y los agentes a cualquier rol. Redactores, productores, analistas y C-suite hacen las mismas tres fases con tareas adaptadas a su trabajo real.",
  },
  {
    q: "¿Necesitamos pagar IA antes de empezar?",
    a: "No para el primer diagnóstico. Para llegar a autonomía sí, porque el empleado sale operando con su propio acceso. Lo aclaramos en la llamada según tu caso.",
  },
  {
    q: "¿Esto reemplaza a mi proveedor de capacitación?",
    a: "No reemplaza, complementa. Ellos enseñan conceptos. Nosotros llevamos al empleado a hacer su trabajo con IA. Son problemas distintos.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "El precio depende del tamaño del equipo, la modalidad y los criterios de éxito. Lo definimos en la primera llamada con un alcance cerrado, no por hora.",
  },
  {
    q: "¿En cuánto tiempo veo resultado?",
    a: "En presencial, una semana hasta autonomía del primer grupo. En web, depende del ritmo del empleado, con hitos medibles desde la primera fase.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://ia.kenitech.io/#webpage",
  url: "https://ia.kenitech.io",
  name: "Keni · Tu equipo usando IA en su trabajo diario",
  description:
    "Formación AI-native para empresas LATAM hispano y ES. Llevamos al empleado a usar IA en su trabajo real con métricas de antes y después.",
  inLanguage: "es",
};

export default function HomeContent() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* 1. Hero */}
      <section
        data-dark-section
        className="relative h-[88vh] min-h-[620px] overflow-hidden bg-black"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70"
        />

        <div className="relative z-10 h-full flex items-end pb-20 md:pb-28">
          <Container>
            <div className="max-w-[920px] mx-auto text-center">
              <FadeIn>
                <p className="text-label uppercase tracking-[0.25em] text-white/60 font-light mb-8">
                  Formación AI-native para empresas
                </p>
                <h1
                  className="text-white font-light tracking-tight mb-8"
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                    lineHeight: 1.05,
                  }}
                >
                  Compraste IA.
                  <br />
                  Lo difícil viene ahora.
                </h1>
                <p className="text-body text-white/75 font-light leading-relaxed max-w-[640px] mx-auto mb-12">
                  Llevamos a tu equipo a usar IA en su trabajo diario. Sin
                  slides, sin teoría. Con su terminal, sus tareas y sus
                  métricas.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/book"
                    className="inline-block bg-white hover:bg-white/85 text-black px-8 py-3 text-sm font-light tracking-wide rounded-full transition-colors"
                  >
                    Agenda una llamada
                  </Link>
                  <Link
                    href="#como"
                    className="inline-block text-sm text-white/70 font-light underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all duration-300 py-3"
                  >
                    Ver cómo funciona
                  </Link>
                </div>
              </FadeIn>
            </div>
          </Container>
        </div>
      </section>

      {/* 2. Antagonista */}
      <section
        data-dark-section
        className="bg-foreground text-background py-24 md:py-32"
      >
        <Container>
          <div className="max-w-[820px] mx-auto">
            <FadeIn>
              <p
                className="font-light tracking-tight mb-12 text-background"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  lineHeight: 1.25,
                }}
              >
                Tu empresa paga licencias de IA. Tus empleados las usan para
                resumir correos. Eso no es transformación, es decoración.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-16">
              {[
                "Compraste IA. No la operas.",
                "Capacitaste con webinars. Nadie cambió cómo trabaja.",
                "Mediste con encuestas. No con tareas reales.",
              ].map((line, i) => (
                <FadeIn key={line} delay={i * 0.08}>
                  <p className="text-sm font-light text-background/70 leading-relaxed border-l border-background/20 pl-5">
                    {line}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Cómo lo hacemos */}
      <section id="como" className="py-24 md:py-40">
        <Container>
          <FadeIn>
            <div className="max-w-[640px] mb-20">
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
                Cómo lo hacemos
              </p>
              <h2
                className="text-foreground font-light tracking-tight"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.15,
                }}
              >
                Tres fases hasta la autonomía.
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            {phases.map((phase, i) => (
              <FadeIn key={phase.title} delay={i * 0.08}>
                <div>
                  <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-4">
                    {phase.label}
                  </p>
                  <h3
                    className="text-foreground font-light tracking-tight mb-4"
                    style={{
                      fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                      lineHeight: 1.2,
                    }}
                  >
                    {phase.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                    {phase.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Modalidades */}
      <section className="py-24 md:py-40 bg-surface">
        <Container>
          <FadeIn>
            <div className="max-w-[640px] mb-20">
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
                Modalidades
              </p>
              <h2
                className="text-foreground font-light tracking-tight"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.15,
                }}
              >
                Mismo método. Dos formatos.
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modalities.map((m, i) => (
              <FadeIn key={m.href} delay={i * 0.1}>
                <Link
                  href={m.href}
                  className="block border border-border-color hover:border-foreground/40 rounded-xl p-8 md:p-10 transition-colors duration-300 h-full"
                >
                  <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
                    {m.eyebrow}
                  </p>
                  <h3
                    className="text-foreground font-light tracking-tight mb-6"
                    style={{
                      fontSize: "clamp(1.4rem, 2.5vw, 1.875rem)",
                      lineHeight: 1.2,
                    }}
                  >
                    {m.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary/70 leading-loose font-light mb-8">
                    {m.body}
                  </p>
                  <span className="text-sm text-foreground font-light underline underline-offset-4 decoration-border-color">
                    {m.cta}
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Esto NO es */}
      <section className="py-24 md:py-40">
        <Container>
          <div className="max-w-[820px] mx-auto">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
                Esto no es
              </p>
              <ul className="space-y-5 mb-12">
                {notManifesto.map((line, i) => (
                  <li
                    key={line}
                    className="text-foreground/90 font-light tracking-tight"
                    style={{
                      fontSize: "clamp(1.25rem, 2.25vw, 1.75rem)",
                      lineHeight: 1.3,
                      animationDelay: `${i * 80}ms`,
                    }}
                  >
                    {line}
                  </li>
                ))}
              </ul>
              <p
                className="text-foreground font-light tracking-tight"
                style={{
                  fontSize: "clamp(1.25rem, 2.25vw, 1.75rem)",
                  lineHeight: 1.3,
                }}
              >
                Es para que tus empleados usen IA en su trabajo. Punto.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* 6. Cómo medimos resultado */}
      <section className="py-24 md:py-40 border-t border-border-color">
        <Container>
          <FadeIn>
            <div className="max-w-[640px] mb-20">
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
                Cómo medimos resultado
              </p>
              <h2
                className="text-foreground font-light tracking-tight"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.15,
                }}
              >
                Tres números, no encuestas.
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            {kpis.map((kpi, i) => (
              <FadeIn key={kpi.label} delay={i * 0.08}>
                <div className="border-l border-border-color pl-6">
                  <p
                    className="text-foreground font-light tracking-tight mb-3"
                    style={{
                      fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                      lineHeight: 1.2,
                    }}
                  >
                    {kpi.metric}
                  </p>
                  <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                    {kpi.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <p className="text-xs text-muted/60 font-light mt-16 max-w-[640px]">
              Publicamos los números reales en /casos cuando cierre cada
              implantación. Hasta entonces, esto es la promesa, no la prueba.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* 7. Para quién es */}
      <section className="py-24 md:py-40 bg-surface">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            <FadeIn>
              <div>
                <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
                  Para quién es
                </p>
                <ul className="space-y-5">
                  {audience.map((line) => (
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
                  No trabajamos con
                </p>
                <ul className="space-y-5">
                  {notForUs.map((line) => (
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

      {/* 8. Dogfooding */}
      <section className="py-24 md:py-40">
        <Container>
          <div className="max-w-[820px] mx-auto">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
                Cómo trabajamos nosotros
              </p>
              <p
                className="text-foreground font-light tracking-tight mb-8"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  lineHeight: 1.25,
                }}
              >
                Operamos AI-native. Cada departamento de Keni tiene su propio
                agente con su contexto y sus instrucciones. Usamos Claude Code
                como mesa de trabajo.
              </p>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                Vendemos lo que operamos. Si nuestro propio equipo trabaja así
                de hecho, podemos llevar al tuyo a hacer lo mismo.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* 9. FAQ */}
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
                  fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.15,
                }}
              >
                Lo que nos preguntan antes de la llamada.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <FAQAccordion faqs={faqs} />
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* 10. CTA final */}
      <CTASection
        headline="¿Tu equipo paga IA y no la usa? Hablemos."
        subtext="Una llamada de 30 minutos. Vemos si encajamos antes de hablar de precio."
        buttonText="Agenda una llamada"
        buttonHref="/book"
      />
    </main>
  );
}
