"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { services } from "@/data/services";

export default function ServicesPreview() {
  return (
    <section className="py-section-sm">
      <Container>
        {/* Cards grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service, index) => (
            <FadeIn key={service.slug} type="up" delay={index * 0.06} className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-12px)]">
              <Link
                href={`/services/${service.slug}`}
                className="group relative block p-6 md:p-8 rounded-2xl border border-white/[0.06] overflow-hidden transition-all duration-500 hover:border-white/[0.12]"
              >
                {/* Mesh gradient background matching hero */}
                <div className="absolute inset-0 mesh-gradient-strong opacity-60" />
                <div className="absolute inset-0 noise" />
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/[0.05] via-transparent to-accent-blue/[0.05]" />

                <div className="relative">
                  <h3 className="text-base font-medium text-foreground mb-3 transition-colors duration-300 group-hover:text-accent">
                    {service.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground-secondary/70">
                    {service.shortDescription}
                  </p>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                    <span className="text-xs font-medium tracking-wide">Learn more</span>
                    <span className="text-sm">&rarr;</span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Explore all link */}
        <FadeIn type="up" delay={0.4}>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="text-accent hover:text-accent-hover transition-colors duration-300 text-sm inline-flex items-center gap-2"
            >
              Explore all services
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
