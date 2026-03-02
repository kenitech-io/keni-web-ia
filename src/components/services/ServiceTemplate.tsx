"use client";

import { Service } from "@/data/services";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";


interface ServiceTemplateProps {
  service: Service;
}

export default function ServiceTemplate({ service }: ServiceTemplateProps) {
  return (
    <main>
      {/* Hero — centered */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-display md:text-display-lg font-medium tracking-tight text-foreground mb-8">
                {service.name}
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg md:text-xl leading-relaxed text-foreground-secondary/70">
                {service.hero}
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* The Problem — dark card */}
      <section className="py-12">
        <Container>
          <FadeIn>
            <div className="relative rounded-3xl bg-[#0E1220]/90 border border-white/[0.05] overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent" />

              <div className="p-8 md:p-14 max-w-2xl mx-auto text-center">
                <p className="text-xs uppercase tracking-[0.25em] text-accent mb-6 font-medium">
                  The Problem
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground-secondary/70">
                  {service.problem}
                </p>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Our Approach — steps */}
      <section className="py-section">
        <Container>
          <FadeIn>
            <h2 className="text-display-sm font-medium text-foreground text-center mb-16">
              Our Approach
            </h2>
          </FadeIn>
          <div className="max-w-2xl mx-auto space-y-0">
            {service.approach.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="relative flex gap-6 pb-12 last:pb-0">
                  {/* Vertical line */}
                  {index < service.approach.length - 1 && (
                    <div className="absolute left-[15px] top-[34px] bottom-0 w-px bg-gradient-to-b from-accent/20 to-transparent" />
                  )}

                  {/* Step number */}
                  <div className="shrink-0 w-[31px] h-[31px] rounded-full border border-accent/30 flex items-center justify-center mt-[2px]">
                    <span className="text-[11px] text-accent font-medium">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-base font-medium text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-foreground-secondary/60">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Tools & Deliverables — two columns in dark card */}
      <section className="py-12">
        <Container>
          <FadeIn>
            <div className="relative rounded-3xl bg-[#0E1220]/90 border border-white/[0.05] overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent" />

              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">
                {/* Tools */}
                <div className="p-8 md:p-10">
                  <p className="text-xs uppercase tracking-[0.25em] text-accent mb-6 font-medium">
                    Tools & Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        className="inline-flex items-center rounded-full px-3 py-1.5 text-xs text-foreground-secondary/70 border border-white/[0.06] bg-white/[0.02]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="p-8 md:p-10">
                  <p className="text-xs uppercase tracking-[0.25em] text-accent mb-6 font-medium">
                    What You Get
                  </p>
                  <ul className="space-y-3">
                    {service.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-accent mt-1.5 text-[8px]">●</span>
                        <span className="text-sm text-foreground-secondary/70 leading-relaxed">
                          {deliverable}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
            </div>
          </FadeIn>
        </Container>
      </section>

    </main>
  );
}
