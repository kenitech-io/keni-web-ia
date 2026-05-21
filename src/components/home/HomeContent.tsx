import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

const capabilities = [
  {
    badge: "Plan IA",
    category: "Estrategia",
    title: "Plan de transformación con IA",
    tagline: "Primero la verdad. Después el rumbo.",
    body: "En un sprint, auditamos tu estado de IA, construimos el plan y arrancamos contigo.",
    href: "/plan-transformacion-ia",
    // Marrón arena - el más claro de la familia
    bg: "radial-gradient(at 28% 72%, #cda26a 0%, transparent 70%), radial-gradient(at 78% 22%, #e0bd87 0%, transparent 72%), radial-gradient(at 55% 45%, #bf935a 0%, transparent 78%), linear-gradient(135deg, #f0d5a7, #f6dcb0)",
  },
  {
    badge: "Capacitación",
    category: "Capacitación",
    title: "Capacitación de equipos",
    tagline: "La IA se adopta trabajando, no en una presentación.",
    body: "Workshops que activan a cada equipo para que opere con IA en su trabajo diario, sin importar el rol.",
    href: "/capacitacion-equipos",
    // Marrón terracota / arcilla - el medio de la familia
    bg: "radial-gradient(at 40% 65%, #bf8453 0%, transparent 70%), radial-gradient(at 75% 28%, #d49f67 0%, transparent 72%), radial-gradient(at 18% 80%, #ad6e3e 0%, transparent 78%), linear-gradient(135deg, #eccb9d, #f2d5a7)",
  },
  {
    badge: "Automatizar",
    category: "Ejecución",
    title: "Automatización de flujos",
    tagline: "Identificar dónde los agentes aportan más valor.",
    body: "Priorizamos, prototipamos y entregamos un plan para escalar.",
    href: "/automatizacion-flujos",
    // Marrón café / topo - el más profundo de la familia
    bg: "radial-gradient(at 30% 70%, #9c7046 0%, transparent 70%), radial-gradient(at 72% 28%, #b88959 0%, transparent 72%), radial-gradient(at 55% 50%, #845c38 0%, transparent 78%), linear-gradient(135deg, #e4c597, #edcea0)",
  },
];

// ⚠️ PLACEHOLDER: 3 de estos 4 nombres son inventados. Reemplazar por logos
// reales (SVG) antes de publicar en producción (riesgo de marketing engañoso).
// Cada entrada simula el wordmark propio de la marca mediante CSS hasta que
// haya un logo real.
const trustedBy: { name: string; className: string }[] = [
  { name: "AMX CONTENIDO", className: "font-bold tracking-wider" },
  { name: "lumen studios", className: "font-light italic tracking-tight" },
  { name: "Vertix Group", className: "font-serif font-medium" },
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

      {/* 1. Hero - split 50/50, derecha en gris oscuro */}
      <section
        data-dark-section
        data-split-hero
        className="grid grid-cols-1 lg:grid-cols-2 h-[100svh] min-h-[600px] bg-background"
      >
        {/* Izquierda: headline */}
        <div className="flex items-center justify-center px-6 md:px-[8%] lg:px-[10%] py-16 lg:py-0">
          <FadeIn className="w-full max-w-[560px] mx-auto text-center">
            <h1
              className="text-foreground font-medium tracking-tight"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                lineHeight: 1.15,
              }}
            >
              <span className="block">Compraste IA,</span>
              <span className="block font-light">eso fue lo fácil.</span>
            </h1>
          </FadeIn>
        </div>

        {/* Derecha: estrofa + CTA sobre gris oscuro */}
        <div
          className="flex items-center justify-center px-6 md:px-[8%] lg:px-[10%] py-16 lg:py-0"
          style={{ backgroundColor: "#1E1E1E" }}
        >
          <FadeIn className="w-full max-w-[480px] mx-auto text-center" delay={0.15}>
            {/* F: Estrofa en piedra (Holzer / Wool) - invertida sobre gris */}
            <div className="mb-12 lg:mb-14">
              <p
                className="text-white uppercase font-light"
                style={{
                  fontSize: "clamp(0.95rem, 1.55vw, 1.1875rem)",
                  lineHeight: 2,
                  letterSpacing: "0.18em",
                }}
              >
                <span className="block">Keni convierte</span>
                <span className="block">tu inversión en IA</span>
                <span className="block mt-[1em]">en transformación</span>
                <span className="block">del equipo y ROI.</span>
              </p>
            </div>

            <Link
              href="/book"
              className="group inline-flex items-center gap-2 py-3 text-white/70 hover:text-white transition-colors duration-300"
            >
              <span className="text-[11px] font-light uppercase tracking-[0.22em] leading-none">
                Agenda una llamada
              </span>
              <span
                aria-hidden
                className="text-[11px] font-light transition-transform duration-500 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* 2. Trusted by - marquee infinito (placeholder, ver TODO arriba) */}
      <section className="bg-background text-foreground pt-16 md:pt-20 pb-16 md:pb-20 overflow-hidden">
        <Container>
          <FadeIn>
            <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-10 text-center">
              Trusted by
            </p>
          </FadeIn>
        </Container>

        {/* Marquee: dos copias concatenadas, animación -50% loop */}
        <div className="relative w-full overflow-hidden">
          {/* Máscara de bordes que desvanecen el inicio y final */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10"
          />

          <div
            className="flex animate-marquee whitespace-nowrap"
            style={{ width: "max-content" }}
          >
            {[...trustedBy, ...trustedBy].map((brand, i) => (
              <span
                key={`${brand.name}-${i}`}
                aria-hidden={i >= trustedBy.length}
                className={`flex-shrink-0 mx-10 md:mx-16 text-foreground/70 ${brand.className}`}
                style={{
                  fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
                }}
              >
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Aceleramos tu transformación - capacidades estratégicas */}
      <section id="como" className="py-24 md:py-40 bg-background">
        <Container>
          <FadeIn>
            <div className="max-w-[820px] mx-auto text-center mb-16 md:mb-24">
              <h2
                className="text-foreground font-medium tracking-tight mb-6"
                style={{
                  fontSize: "clamp(1.875rem, 3.8vw, 3rem)",
                  lineHeight: 1.15,
                }}
              >
                Aceleramos tu transformación con apoyo estratégico.
              </h2>
              <p
                className="font-light text-foreground-secondary/80"
                style={{
                  fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)",
                  lineHeight: 1.4,
                }}
              >
                Un equipo de IA de primera línea. Junto al tuyo.
              </p>
            </div>
          </FadeIn>
        </Container>

        {/* Filas a sangre: panel de color con esquinas vivas + texto, como la foto de Mikel */}
        <div>
          {capabilities.map((cap) => {
            return (
              <FadeIn key={cap.title} delay={0.05}>
                <Link
                  href={cap.href}
                  aria-label={cap.title}
                  className="group relative block w-full overflow-hidden md:min-h-[620px]"
                  style={{ background: cap.bg, color: "#2c2c2c" }}
                >
                  {/* Centro: categoría + título + enlace, todo centrado con aire */}
                  <div className="flex min-h-[520px] md:min-h-[620px] flex-col items-center justify-center px-8 py-28 text-center">
                    <span className="mb-10 text-[0.7rem] font-light uppercase tracking-[0.45em] opacity-70">
                      {cap.category}
                    </span>
                    <h3
                      className="max-w-2xl font-light leading-[1.1] tracking-tight transition-transform duration-700 ease-out group-hover:-translate-y-1"
                      style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
                    >
                      {cap.title}
                    </h3>
                    <span className="mt-10 inline-block text-sm font-light tracking-wide opacity-70 transition-opacity group-hover:opacity-100">
                      Saber más →
                    </span>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* 5. Caso Keni - cita Mikel (franja centrada, fondo blanco) */}
      <section className="bg-background text-foreground py-28 md:py-40 px-6">
        <FadeIn>
          <div className="max-w-[900px] mx-auto text-center">
            <p
              className="font-medium tracking-tight text-foreground mb-8"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.375rem)",
                lineHeight: 1.25,
              }}
            >
              “Nuestro objetivo es que la fluidez con IA sea el estándar, no la
              ventaja competitiva de unos pocos.”
            </p>
            <p className="text-sm font-light text-foreground-secondary/70">
              Mikel Martin, CTO
            </p>
          </div>
        </FadeIn>
      </section>

      {/* 6. CTA cierre - FLUIDEZ a sangre: la aspiración de la marca */}
      <section className="bg-background pt-32 md:pt-52 pb-24 md:pb-36 px-6 overflow-hidden">
        <div className="max-w-[1300px] mx-auto">
          <FadeIn>
            <p className="text-muted font-light tracking-[0.25em] uppercase text-xs mb-6 md:mb-8 pl-1">
              Capacidad, no dependencia
            </p>

            <h2
              className="text-foreground font-medium leading-[0.82] w-full"
              style={{ fontSize: "clamp(2.5rem, 13.5vw, 12.5rem)", letterSpacing: "-0.04em", whiteSpace: "nowrap" }}
            >
              AUTONOMÍA
            </h2>

            <div className="mt-12 md:mt-16 pl-1">
              <Link
                href="/book"
                className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-foreground hover:bg-charcoal text-background transition-all duration-300"
              >
                Agenda una llamada
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}
