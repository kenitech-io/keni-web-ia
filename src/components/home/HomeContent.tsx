import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

const capabilities = [
  {
    badge: "Plan IA",
    category: "Estrategia",
    title: "Plan de transformación con IA",
    tagline: "Saber dónde estás para planear a dónde vas.",
    body: "En un sprint, auditamos tu estado de IA, construimos el plan y arrancamos contigo.",
    href: "/plan-transformacion-ia",
    // Sunset peach / coral / lavanda — estilo OpenAI "flor"
    bg: "radial-gradient(at 28% 72%, #ff6585 0%, transparent 65%), radial-gradient(at 78% 22%, #ff9d5c 0%, transparent 65%), radial-gradient(at 55% 45%, #a855f7 0%, transparent 65%), linear-gradient(135deg, #ffc1cd, #ffdfc6)",
  },
  {
    badge: "Capacitación",
    category: "Capacitación",
    title: "Capacitación de equipos",
    tagline: "La IA se adopta trabajando, no en una presentación.",
    body: "Workshops que activan a cada equipo para que opere con IA en su trabajo diario, sin importar el rol.",
    href: "/capacitacion-equipos",
    // Sky / mint — estilo OpenAI "hoja"
    bg: "radial-gradient(at 40% 65%, #34d399 0%, transparent 65%), radial-gradient(at 75% 28%, #60a5fa 0%, transparent 65%), radial-gradient(at 18% 80%, #67e8f9 0%, transparent 65%), linear-gradient(135deg, #b8e6cd, #cfe6f5)",
  },
  {
    badge: "Automatizar",
    category: "Ejecución",
    title: "Automatización de flujos",
    tagline: "Identificar dónde los agentes aportan más valor.",
    body: "Priorizamos, prototipamos y entregamos un plan para escalar.",
    href: "/automatizacion-flujos",
    // Lavender / pink / sky — estilo OpenAI "translúcido"
    bg: "radial-gradient(at 30% 70%, #c084fc 0%, transparent 65%), radial-gradient(at 72% 28%, #f472b6 0%, transparent 65%), radial-gradient(at 55% 50%, #818cf8 0%, transparent 65%), linear-gradient(135deg, #e6d2fb, #f7d4e7)",
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

      {/* 1. Hero — split 50/50 alto contraste, paleta Axel Vervoordt */}
      <section
        data-dark-section
        data-split-hero
        className="grid grid-cols-1 lg:grid-cols-2 h-[100svh] min-h-[600px]"
      >
        {/* Izquierda: blanco, solo headline */}
        <div className="flex items-center justify-center px-6 md:px-[8%] lg:px-[10%] py-16 lg:py-0 bg-background">
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

        {/* Derecha: casi negro, subline + micro + botón */}
        <div
          className="flex items-center justify-center px-6 md:px-[8%] lg:px-[10%] py-16 lg:py-0"
          style={{ backgroundColor: "#1E1E1E" }}
        >
          <FadeIn className="w-full max-w-[480px] mx-auto text-center" delay={0.15}>
            <p
              className="text-white font-light tracking-tight mb-10 lg:mb-12"
              style={{
                fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                lineHeight: 1.35,
              }}
            >
              Keni convierte tu inversión en IA en transformación del equipo y ROI.
            </p>

            <Link
              href="/book"
              className="inline-flex items-center gap-2.5 px-7 py-3 border border-white/35 hover:border-white/90 hover:bg-white/5 text-white text-sm font-light tracking-wide rounded-full transition-all duration-300"
            >
              Agenda una llamada
              <span aria-hidden className="opacity-50">→</span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* 2. Trusted by — marquee infinito (placeholder, ver TODO arriba) */}
      <section className="bg-background text-foreground py-16 md:py-20 overflow-hidden">
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

      {/* 5. Caso Keni — cita Mikel (split layout, fondo blanco) */}
      <section className="bg-background text-foreground overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] md:min-h-[520px]">
          {/* Left: solo quote + atribución */}
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 py-16 md:py-20 flex items-center">
            <div className="max-w-[640px] w-full">
              <FadeIn>
                <p
                  className="font-medium tracking-tight text-foreground mb-6"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.375rem)",
                    lineHeight: 1.2,
                  }}
                >
                  “Nuestro objetivo es que la fluidez con IA sea el estándar, no
                  una ventaja competitiva de unos pocos.”
                </p>
                <p className="text-sm font-light text-foreground-secondary/70">
                  Mikel Martin, CTO
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Right: retrato Mikel */}
          <div className="relative min-h-[440px] md:min-h-full bg-surface">
            <img
              src="/team/mikel.jpg"
              alt="Mikel Martin, cofundador de Keni"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* 4. Centro de mando — estructura Section AI, centrado (honesto) */}
      <section className="bg-background py-24 md:py-36 px-6 overflow-hidden">
        <div className="max-w-[1100px] mx-auto text-center">
          <FadeIn>
            <h2
              className="text-foreground font-medium tracking-tight mb-7"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: 1.1,
              }}
            >
              Tu centro de mando
            </h2>
            <p className="text-foreground-secondary/80 text-base md:text-lg font-light leading-relaxed max-w-[600px] mx-auto">
              Gestionamos y medimos cada paso: del diagnóstico y el roadmap a los
              agentes operando en producción.
            </p>
          </FadeIn>
        </div>

        {/* ⚠️ MAQUETA FICTICIA — Keni no tiene este producto software (validación).
            Ilustración tipo Section AI HQ. Reemplazar/quitar antes de producción. */}
        <FadeIn delay={0.2}>
          <div className="mt-16 md:mt-24 max-w-[1180px] mx-auto">
            <div className="bg-white overflow-hidden text-left rounded-xl border border-border-color shadow-[0_24px_70px_-30px_rgba(0,0,0,0.25)]">
              {/* Top bar */}
              <div className="flex items-center justify-between px-5 md:px-7 py-3.5 border-b border-black/[0.06]">
                <span className="text-xs font-medium tracking-tight text-foreground">
                  Keni
                </span>
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-300 to-pink-300" />
                  <span className="text-[11px] font-light text-foreground hidden sm:inline">
                    Emilia Fernández
                  </span>
                  <span aria-hidden className="w-3.5 h-3.5 rounded-[3px] border border-black/20 relative">
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-rose-500" />
                  </span>
                </div>
              </div>

              <div className="flex">
                {/* Sidebar */}
                <div className="hidden sm:flex flex-col gap-6 py-7 px-5 border-r border-black/[0.06] text-[10px] text-muted">
                  {[
                    {
                      label: "Inicio",
                      active: false,
                      icon: "M3 10.2 12 3l9 7.2V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z",
                    },
                    {
                      label: "Analítica",
                      active: true,
                      icon: "M4 20V4M4 20h16M8 17v-5M13 17V8M18 17v-9",
                    },
                    {
                      label: "Roadmap",
                      active: false,
                      icon: "M6 21V4M6 4h11l-2.5 3.5L17 11H6",
                    },
                    {
                      label: "Recursos",
                      active: false,
                      icon: "M5 4h12a2 2 0 0 1 2 2v15H7a2 2 0 0 1-2-2zM5 18h14",
                    },
                    {
                      label: "Ajustes",
                      active: false,
                      icon: "M4 7h16M4 17h16M10 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0",
                    },
                  ].map(({ label, active, icon }) => (
                    <div
                      key={label}
                      className={`flex flex-col items-center gap-1.5 ${
                        active ? "text-foreground" : "text-muted/55"
                      }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-[18px] h-[18px]"
                        aria-hidden
                      >
                        <path d={icon} />
                      </svg>
                      {label}
                    </div>
                  ))}
                </div>

                {/* Main */}
                <div className="flex-1 p-5 md:p-8">
                  {/* header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm md:text-lg font-medium tracking-tight text-foreground">
                      Uso de IA
                    </span>
                    <span className="text-[10px] md:text-xs font-light text-muted border border-black/10 rounded-full px-3 py-1.5">
                      Este mes ▾
                    </span>
                  </div>

                  {/* stat cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-5">
                    {[
                      ["Usuarios activos / día", "41%", "▲ 9%", "1.920 usuarios", true],
                      ["Usuarios activos / semana", "63%", "▲ 12%", "2.948 usuarios", true],
                      ["Mensajes totales", "2.087", "▼ 1,8%", "1.920 usuarios", false],
                      ["Media mensajes / día", "7,2", "", "1.920 usuarios", true],
                    ].map(([label, value, delta, sub, up]) => (
                      <div
                        key={label as string}
                        className="border border-black/[0.07] rounded-xl p-3 md:p-4"
                      >
                        <p className="text-[9px] md:text-[11px] text-muted leading-tight mb-2">
                          {label}
                        </p>
                        <p className="text-lg md:text-2xl font-medium tracking-tight text-foreground mb-2">
                          {value}
                        </p>
                        <div className="flex items-center gap-1.5">
                          {delta ? (
                            <span
                              className={`text-[8px] md:text-[10px] px-1.5 py-0.5 rounded ${
                                up
                                  ? "bg-emerald-100 text-emerald-700"
                                  : "bg-rose-100 text-rose-700"
                              }`}
                            >
                              {delta}
                            </span>
                          ) : null}
                          <span className="text-[8px] md:text-[10px] text-muted/70">
                            {sub}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* two panels */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
                    {/* line chart */}
                    <div className="border border-black/[0.07] rounded-xl p-4 md:p-5">
                      <p className="text-xs md:text-sm font-medium text-foreground mb-1">
                        Uso en el tiempo
                      </p>
                      <p className="text-[9px] md:text-[10px] text-muted mb-4">
                        WAU y DAU como % del total
                      </p>
                      <svg viewBox="0 0 320 110" className="w-full h-[90px] md:h-[110px]">
                        <polyline
                          fill="none"
                          stroke="#6366f1"
                          strokeWidth="2"
                          points="5,82 50,71 95,58 140,63 185,46 230,51 275,37 315,43"
                        />
                        <polyline
                          fill="none"
                          stroke="#111"
                          strokeWidth="2"
                          points="5,93 50,79 95,84 140,61 185,67 230,53 275,56 315,41"
                        />
                      </svg>
                      <div className="flex items-center gap-4 mt-3 text-[9px] text-muted">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-indigo-500" /> DAU
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-black" /> WAU
                        </span>
                      </div>
                    </div>

                    {/* department bars */}
                    <div className="border border-black/[0.07] rounded-xl p-4 md:p-5">
                      <div className="flex items-start justify-between mb-1">
                        <p className="text-xs md:text-sm font-medium text-foreground">
                          Por departamento
                        </p>
                        <span className="w-4 h-4 rounded-full border border-black/15 text-[8px] text-muted/70 flex items-center justify-center shrink-0">
                          ?
                        </span>
                      </div>
                      <p className="text-[9px] md:text-[10px] text-muted mb-5">
                        Usuarios activos semanales
                      </p>
                      <div className="space-y-4">
                        {[
                          ["Marketing", 68, 8, true],
                          ["Producto", 57, 3, true],
                          ["Soporte", 49, 7, false],
                          ["Ventas", 33, 4, false],
                        ].map(([dep, pct, delta, up]) => (
                          <div
                            key={dep as string}
                            className="flex items-center gap-2 md:gap-2.5"
                          >
                            <span className="text-[9px] md:text-[10px] text-foreground w-12 md:w-14 shrink-0">
                              {dep}
                            </span>
                            <span
                              className={`text-[7px] md:text-[9px] px-1.5 py-0.5 rounded shrink-0 ${
                                up
                                  ? "bg-emerald-100 text-emerald-700"
                                  : "bg-rose-100 text-rose-700"
                              }`}
                            >
                              {up ? "▲" : "▼"} {delta as number}%
                            </span>
                            <span className="flex-1 h-2 rounded-full bg-black/[0.06] overflow-hidden">
                              <span
                                className="block h-full rounded-full bg-indigo-500"
                                style={{ width: `${pct}%` }}
                              />
                            </span>
                            <span className="text-[9px] md:text-[10px] text-foreground w-7 md:w-8 text-right shrink-0">
                              {pct as number}%
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center mt-6">
                        <span className="inline-flex items-center gap-1.5 bg-foreground text-white text-[9px] md:text-[11px] font-light px-5 py-2 rounded-full">
                          Ampliar <span aria-hidden>→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 3. Aceleramos tu transformación — capacidades estratégicas */}
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

          <div className="space-y-20 md:space-y-32 max-w-[1100px] mx-auto">
            {capabilities.map((cap, i) => {
              const reverse = i % 2 === 1;
              return (
                <FadeIn key={cap.title} delay={0.05}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
                    {/* Imagen (gradiente con badge) */}
                    <Link
                      href={cap.href}
                      className={`group relative aspect-square rounded-2xl overflow-hidden transition-transform duration-500 hover:scale-[1.01] ${
                        reverse ? "md:order-2" : "md:order-1"
                      }`}
                      style={{ background: cap.bg }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center px-6">
                        <span
                          className="text-white font-medium tracking-tight text-center"
                          style={{
                            fontSize: "clamp(1.75rem, 3.8vw, 3rem)",
                            lineHeight: 1.05,
                            textShadow: "0 1px 18px rgba(0,0,0,0.18)",
                          }}
                        >
                          {cap.badge}
                        </span>
                      </div>
                    </Link>

                    {/* Texto */}
                    <div className={`flex flex-col ${reverse ? "md:order-1" : "md:order-2"}`}>
                      <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-4">
                        {cap.category}
                      </p>
                      <h3
                        className="text-foreground font-medium tracking-tight mb-5"
                        style={{
                          fontSize: "clamp(1.5rem, 2.6vw, 2.125rem)",
                          lineHeight: 1.2,
                        }}
                      >
                        {cap.title}
                      </h3>
                      <p
                        className="text-foreground/90 font-light mb-5 leading-relaxed"
                        style={{
                          fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
                          lineHeight: 1.45,
                        }}
                      >
                        {cap.tagline}
                      </p>
                      <p className="text-sm text-foreground-secondary/80 font-light mb-8 leading-loose">
                        {cap.body}
                      </p>
                      <Link
                        href={cap.href}
                        className="self-start text-sm text-foreground font-medium underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-all"
                      >
                        Saber más →
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 6. CTA cierre — banda oscura (gris portada) */}
      <section data-dark-section className="bg-[#1E1E1E] py-32 md:py-52 px-6">
        <FadeIn>
          <div className="max-w-[1000px] mx-auto text-center">
            <p
              className="text-white font-light tracking-tight mb-12"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                lineHeight: 1.2,
              }}
            >
              ¿Tu empresa escalará la IA o volverá a estancarse?
            </p>
            <Link
              href="/book"
              className="inline-block bg-white hover:bg-white/90 text-[#1E1E1E] px-9 py-4 text-sm font-light tracking-wide rounded-full transition-colors"
            >
              Agenda una llamada
            </Link>
          </div>
        </FadeIn>
      </section>

    </main>
  );
}
