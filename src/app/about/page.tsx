import { Metadata } from "next";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us: DevOps Engineers for SMBs",
  description:
    "Meet the team behind Keni Engineering. Senior DevOps engineers who have built platforms for companies like Motorola and Swisscom. We handle your ops so your team ships faster.",
  alternates: {
    canonical: "https://kenitech.io/about",
  },
};

const values = [
  {
    title: "Boring is beautiful",
    text: "The best deploy is the one nobody notices. When shipping is boring and alerts are quiet, we've done our job.",
  },
  {
    title: "Open standards, always",
    text: "We use battle-tested technologies and open tools. No lock-in, no proprietary frameworks. Your stack stays yours.",
  },
  {
    title: "We leave you stronger",
    text: "We work alongside your team and make sure that when we step back, your team feels capable and in control.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="pt-40 pb-20 md:pt-48 md:pb-28">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <FadeIn>
              <h1 className="text-display text-foreground mb-8">
                So your team can breathe
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-body text-foreground-secondary">
                We&apos;ve spent years setting up pipelines, automating deploys, and
                keeping production running. We understand what it&apos;s like when
                your team is stuck firefighting instead of shipping. Because
                we&apos;ve been there.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="py-section-sm bg-surface">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <FadeIn>
              <p className="text-label uppercase tracking-widest text-muted mb-12">
                WHAT WE BELIEVE
              </p>
            </FadeIn>
            <div className="space-y-12">
              {values.map((value, index) => (
                <FadeIn key={value.title} delay={index * 0.1}>
                  <div>
                    <h3 className="text-body-lg text-foreground font-normal mb-3">
                      {value.title}
                    </h3>
                    <p className="text-body text-foreground-secondary">
                      {value.text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        headline="Ready to stop firefighting and start shipping?"
        buttonText="Let's Talk"
        buttonHref="/contact"
      />
    </main>
  );
}
