import { Metadata, Viewport } from "next";
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

// Color de la barra del navegador (status/address bar en móvil) igual al tono
// alto del hero, para que la parte de arriba no salga en blanco sobre el degradado.
export const viewport: Viewport = {
  themeColor: "#eccb9d",
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

// Qué aprende el equipo: el arco del currículum en clave pública.
const aprende = [
  {
    title: "Qué es y qué no es la IA",
    body: "Un modelo mental claro, con expectativas calibradas: lo que ayuda, lo que conviene verificar, lo que se queda en casa.",
  },
  {
    title: "Hablar con su agente",
    body: "Pedir bien, leer la respuesta con criterio y corregir el rumbo hasta que el resultado sirva.",
  },
  {
    title: "Trabajar con contexto",
    body: "Darle a su agente lo que necesita saber del trabajo y mantener cada conversación limpia y al día.",
  },
  {
    title: "Dejar trabajo andando solo",
    body: "Convertir lo que se repite en algo reutilizable y delegar tareas con una red de seguridad detrás.",
  },
];

// La formación, paso a paso (lenguaje público).
const formacion = [
  {
    n: "1",
    title: "Una primera victoria",
    body: "Antes de empezar, cada persona ve a su agente responder a una tarea suya de verdad. La primera impresión es “esto entiende mi trabajo”.",
  },
  {
    n: "2",
    title: "Sesiones dentro del flujo",
    body: "Cada día una sesión guiada y corta. El resto de la jornada es el trabajo normal del equipo, ahora con la herramienta cerca.",
  },
  {
    n: "3",
    title: "Acompañamiento a demanda",
    body: "Mientras el equipo trabaja, estamos en la sala. Quien se atasca pregunta y sigue, sin frenar la operación.",
  },
  {
    n: "4",
    title: "Camino a la autonomía",
    body: "El acompañamiento se retira a medida que cada persona toma el control. Lo que queda es un equipo que ya no nos necesita al lado.",
  },
];

// Entregables.
const llevas = [
  {
    title: "Cada persona usando su agente",
    body: "Cada quien con su agente dentro de su trabajo real, no en un ejercicio de demostración.",
  },
  {
    title: "El hábito instalado",
    body: "La IA deja de ser algo que se prueba un día y pasa a ser parte de cómo se trabaja.",
  },
  {
    title: "Sin dependencia de nosotros",
    body: "El equipo opera por su cuenta. Nuestro objetivo es que dejen de necesitarnos.",
  },
  {
    title: "El antes y el después",
    body: "Una lectura honesta de cómo trabajaba el equipo al empezar y cómo trabaja al cerrar.",
  },
];

const principles = [
  {
    title: "Capacidad, no dependencia.",
    body: "El equipo termina operando solo. Si seguimos haciendo falta, no terminamos el trabajo.",
  },
  {
    title: "Herramientas reales, no maquetas.",
    body: "Se aprende sobre el trabajo de cada día, con tareas propias, no con ejemplos de juguete.",
  },
  {
    title: "El antes y el después.",
    body: "Medimos dónde empieza el equipo y dónde acaba. Lo demás son buenas intenciones.",
  },
];

export default function CapacitacionEquiposPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero - mismo fondo que la tarjeta "Capacitación" de la home */}
      <section
        className="pt-32 pb-20 md:pt-48 md:pb-32"
        style={{
          background:
            "radial-gradient(at 40% 65%, #bf8453 0%, transparent 70%), radial-gradient(at 75% 28%, #d49f67 0%, transparent 72%), radial-gradient(at 18% 80%, #ad6e3e 0%, transparent 78%), linear-gradient(135deg, #eccb9d, #f2d5a7)",
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
              <p className="text-body text-foreground-secondary/70 font-light leading-relaxed max-w-[620px] mx-auto">
                Workshops que activan a cada equipo para que opere con IA en su
                trabajo diario, sin importar el rol.
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
                La IA no transforma una empresa. La transforma un equipo que
                sabe usarla.
              </p>
              <p className="text-body text-foreground-secondary/70 font-light leading-relaxed max-w-[600px] mx-auto">
                Esa diferencia no la pone la tecnología, la pone cada persona
                del equipo. Por eso no nos quedamos en explicar qué es la IA:
                llevamos a cada quien a usarla en su trabajo real, hasta que se
                vuelve parte de cómo trabaja.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Qué aprende tu equipo */}
      <section className="py-20 md:py-28 bg-surface">
        <Container>
          <FadeIn>
            <div className="max-w-[760px] mx-auto text-center mb-16 md:mb-20">
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-8">
                Qué aprende tu equipo
              </p>
              <p
                className="text-foreground font-light tracking-tight"
                style={{
                  fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)",
                  lineHeight: 1.35,
                }}
              >
                Del primer contacto con su agente a operar por su cuenta.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-[1080px] mx-auto">
            {aprende.map((it) => (
              <FadeIn key={it.title} delay={0.05}>
                <div>
                  <h3 className="text-foreground font-medium tracking-tight mb-3 text-lg">
                    {it.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary/70 font-light leading-relaxed">
                    {it.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Cómo es la formación */}
      <section className="py-20 md:py-28 bg-surface">
        <Container>
          <FadeIn>
            <div className="max-w-[760px] mx-auto text-center mb-16 md:mb-20">
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-8">
                Cómo es la formación
              </p>
              <p
                className="text-foreground font-light tracking-tight"
                style={{
                  fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)",
                  lineHeight: 1.35,
                }}
              >
                Cinco días dentro del trabajo de siempre, no cinco días fuera de
                él.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-[1080px] mx-auto">
            {formacion.map((step) => (
              <FadeIn key={step.n} delay={0.05}>
                <div className="md:min-h-[160px]">
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
                No un certificado de asistencia, un equipo que ya trabaja
                distinto.
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
