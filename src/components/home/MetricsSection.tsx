import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

const results = [
  {
    company: "Digital agency, 63 clients",
    metric: "45min → 60s",
    description: "Deploy time reduced from 45 minutes of manual work to 60 seconds, fully automated.",
  },
  {
    company: "5-developer team",
    metric: "20h/week recovered",
    description: "Engineers stopped managing servers and went back to building product features.",
  },
  {
    company: "220 services, 18 servers",
    metric: "0 failures",
    description: "Zero deploy failures from human error. One engineer manages everything.",
  },
];

export default function MetricsSection() {
  return (
    <section className="px-6 md:px-[8%] lg:px-[10%]">
      <div className="py-16 md:py-24 pb-32 md:pb-48">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 max-w-[900px] mx-auto">
            {results.map((r) => (
              <div key={r.company} className="text-center">
                <p className="text-[11px] text-muted font-light mb-3">{r.company}</p>
                <p className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-3">{r.metric}</p>
                <p className="text-xs text-foreground-secondary/70 font-light leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-col md:flex-row items-center justify-center mt-14 md:mt-20 max-w-[800px] mx-auto gap-4">
            <p className="text-xs md:text-sm text-foreground font-light tracking-tight">
              Real results. Real infrastructure.
            </p>
            <Link
              href="/takeover"
              className="inline-block bg-foreground hover:bg-foreground/85 text-background px-5 py-1.5 text-xs font-light tracking-wide rounded-full transition-colors"
            >
              See how it works
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
