import { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services | Keni",
  description:
    "End-to-end DevOps and Platform Engineering services. From assessment to implementation to ongoing support.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero — centered */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-display md:text-display-lg font-medium tracking-tight text-foreground mb-8">
                What We Do
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg md:text-xl leading-relaxed text-foreground-secondary/70">
                End-to-end DevOps and Platform Engineering. From assessment to
                implementation to ongoing support.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Services as cards */}
      <section className="pb-section">
        <Container>
          <div className="flex flex-col gap-6">
            {services.map((service, index) => (
              <FadeIn key={service.slug} type="up" delay={index * 0.08}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative block rounded-2xl border border-white/[0.06] overflow-hidden transition-all duration-500 hover:border-white/[0.12]"
                >
                  <div className="absolute inset-0 mesh-gradient-strong opacity-30" />
                  <div className="absolute inset-0 noise" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-accent/[0.04] via-transparent to-accent-blue/[0.04]" />

                  <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 md:p-10">
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-medium text-foreground mb-2 transition-colors duration-300 group-hover:text-accent">
                        {service.name}
                      </h2>
                      <p className="text-sm md:text-base text-foreground-secondary/60 max-w-xl">
                        {service.shortDescription}
                      </p>
                    </div>

                    <span className="text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300 shrink-0 flex items-center gap-2">
                      Learn more &rarr;
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection
        headline="Not sure where to start?"
        buttonText="Let's Talk"
        buttonHref="/contact"
      />
    </main>
  );
}
