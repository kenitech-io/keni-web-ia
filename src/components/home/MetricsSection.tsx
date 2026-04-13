import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

const metrics = [
  {
    headline: "90% less time deploying.",
    description: "Developers got their time back. 20 hours recovered per week.",
  },
  {
    headline: "20 hours/week recovered.",
    description: "Your engineers build features, not fix pipelines.",
  },
  {
    headline: "Zero deploy failures.",
    description: "No manual steps means no human error. Every deploy is automated.",
  },
];

export default function MetricsSection() {
  return (
    <section className="px-6 md:px-[10%]">
        <div className="py-16 md:py-24 pb-32 md:pb-48">
          <FadeIn>
            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted mb-2 text-center">Results</p>
            <p className="text-sm md:text-base text-foreground font-light mb-10 max-w-[480px] mx-auto text-center">
              Real numbers from teams running on the Keni platform.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {metrics.map((metric) => (
                <p key={metric.headline} className="text-sm md:text-base text-foreground leading-relaxed">
                  <strong className="font-semibold">{metric.headline}</strong>{" "}
                  <span className="text-foreground-secondary/70 font-light">{metric.description}</span>
                </p>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-col md:flex-row items-center justify-between mt-14 md:mt-20">
              <p className="text-xl md:text-2xl text-foreground font-light tracking-tight">
                Keni clients ship <strong className="font-semibold">10x faster</strong> from day one.
              </p>
              <Link
                href="/devops-consulting"
                className="inline-block mt-6 md:mt-0 bg-foreground hover:bg-foreground/85 text-background px-6 py-2.5 text-sm font-light tracking-wide rounded-full transition-colors"
              >
                Learn more
              </Link>
            </div>
          </FadeIn>
        </div>
    </section>
  );
}
