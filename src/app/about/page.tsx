import { Metadata } from "next";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About | Keni",
  description:
    "So your team can breathe. We've built and operated the systems we help you design. Learn about our team and philosophy.",
};

const values = [
  {
    title: "Boring is beautiful",
    text: "The best infrastructure is the one you never think about. When deployments are boring and alerts are quiet — we've done our job.",
  },
  {
    title: "Open standards, always",
    text: "We use battle-tested technologies and open tools. No lock-in, no proprietary frameworks. Your stack stays yours.",
  },
  {
    title: "We leave you stronger",
    text: "We work alongside your team, join your standups, and make sure that when we leave, your team feels calm, capable, and in control.",
  },
];

const reasons = [
  {
    title: "We've been on your side of the table",
    text: "We've been the on-call engineer at 3 AM. We've inherited undocumented infra. We build for the people who have to live with it.",
  },
  {
    title: "No vendor lock-in",
    text: "We use open-source, industry-standard tools. When we're done, everything belongs to you — code, docs, pipelines, all of it.",
  },
  {
    title: "Remote-first, timezone-flexible",
    text: "We work async by default and overlap with US business hours. Same Slack, same repos, no friction.",
  },
  {
    title: "You keep the knowledge",
    text: "We don't just deliver and disappear. We pair with your team, write runbooks, and make sure your engineers own the system.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero — centered, big, clean */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-display md:text-display-lg font-medium tracking-tight text-foreground mb-8">
                So your team can <span className="gradient-text">breathe</span>.
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg md:text-xl leading-relaxed text-foreground-secondary/70">
                With years of hands-on experience in platform engineering and DevOps,
                we understand the challenges of scaling infrastructure, meeting tight
                deadlines, and maintaining reliability. We bring that expertise to
                every engagement.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Values — dark card like ApproachSection */}
      <section className="py-12">
        <Container>
          <FadeIn>
            <div className="relative rounded-3xl bg-[#0E1220]/90 border border-white/[0.05] overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent" />

              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">
                {values.map((value, index) => (
                  <FadeIn key={value.title} type="up" delay={index * 0.1}>
                    <div className="p-8 md:p-10">
                      <h3 className="text-base font-medium text-foreground mb-4">
                        {value.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-foreground-secondary/60">
                        {value.text}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Why Keni */}
      <section className="py-section">
        <Container>
          <FadeIn>
            <h2 className="text-display-sm font-medium text-foreground text-center mb-16">
              Why Keni
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {reasons.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="relative rounded-2xl border border-white/[0.06] overflow-hidden p-8 md:p-10">
                  <div className="absolute inset-0 mesh-gradient-strong opacity-40" />
                  <div className="absolute inset-0 noise" />
                  <div className="relative">
                    <h3 className="text-base font-medium text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-foreground-secondary/60">
                      {item.text}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready for infrastructure you don't have to worry about?"
        buttonText="Let's Talk"
        buttonHref="/contact"
      />
    </main>
  );
}
