import { Metadata } from "next";
import Image from "next/image";
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
  openGraph: {
    title: "About Us: DevOps Engineers for SMBs",
    description:
      "Meet the team behind Keni Engineering. Senior DevOps engineers who have built platforms for companies like Motorola and Swisscom. We handle your ops so your team ships faster.",
    url: "https://kenitech.io/about",
    siteName: "Keni Engineering",
    locale: "en_US",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://kenitech.io",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://kenitech.io/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[800px] mx-auto text-center">
            <FadeIn>
              <Image
                src="/logo.png"
                alt="Keni Engineering"
                width={56}
                height={56}
                className="w-14 h-14 mx-auto mb-20"
              />
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-8">
                Keni Engineering
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Origin */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <FadeIn>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                Born from years of building internal development platforms across companies in the US and Europe.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light mt-10">
                We have designed CI/CD pipelines for mission-critical systems, managed infrastructure serving millions of users, and rebuilt legacy platforms from the ground up. The environments change. The problems do not.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light mt-10">
                Manual deploys. No monitoring. Infrastructure knowledge locked in one person&apos;s head. Cloud costs growing with no explanation. We have seen it at every scale, from 5-person startups to Fortune 500 companies. The fix is always more straightforward than people expect.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* How we work */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <FadeIn>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                Every engagement starts with a deep review of your repositories, pipelines, cloud accounts, and workflows. No assumptions. No templates. Just your system, understood completely before anything is changed.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light mt-10">
                We deliver fixed-price engagements with senior engineers only. The people on the call are the people doing the work. No handoffs, no juniors learning on your time, no hourly billing designed to extend the project.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light mt-10">
                When we step back, your team owns everything. Open tools, documented systems, no vendor lock-in. The goal is not a dependency on us. The goal is an infrastructure your team can run with confidence.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <CTASection
        headline="Let's find out how much your infrastructure is really costing you."
        buttonText="Let's talk"
        buttonHref="/contact"
      />
    </main>
  );
}
