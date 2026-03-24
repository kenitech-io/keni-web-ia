import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
      {/* Hero with logo */}
      {/* Statement */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[800px] mx-auto text-center">
            <FadeIn>
              <div className="flex justify-center mb-12">
                <Image
                  src="/logo.png"
                  alt="Keni Engineering"
                  width={104}
                  height={104}
                  className="w-[104px] h-[104px]"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1
                className="text-foreground font-light tracking-wide"
                style={{
                  fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)",
                  lineHeight: 1.4,
                }}
              >
                Obsessed with building, refining, and perfecting
                <br />
                <span className="text-muted">internal development platforms.</span>
              </h1>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[640px] mx-auto text-center">
            <FadeIn>
              <h2 className="text-heading text-foreground font-light tracking-wide mb-8">
                So your team can breathe
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                We&apos;ve spent years setting up pipelines, automating deploys, and
                keeping production running. We understand what it&apos;s like when
                your team is stuck firefighting instead of shipping. Because
                we&apos;ve been there.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light mt-8">
                That is why we offer{" "}
                <Link href="/devops-consulting" className="text-foreground/80 hover:text-foreground transition-colors">
                  DevOps consulting for small teams
                </Link>
                {" "}and a focused{" "}
                <Link href="/infrastructure-audit" className="text-foreground/80 hover:text-foreground transition-colors">
                  infrastructure audit
                </Link>
                {" "}that tells you exactly where you stand and what to fix first.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[900px] mx-auto">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 mb-20 md:mb-24 font-light text-center">
                WHAT WE BELIEVE
              </p>
            </FadeIn>
            <div>
              {values.map((value, index) => (
                <FadeIn key={value.title} delay={index * 0.1}>
                  <div className={`grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4 md:gap-16 py-10 ${
                    index < values.length - 1 ? "border-b border-border-color" : ""
                  }`}>
                    <h3 className="text-body text-foreground font-light tracking-wide">
                      {value.title}
                    </h3>
                    <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
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
        headline="Let's find out how much your infrastructure is really costing you."
        buttonText="Let's talk"
        buttonHref="/contact"
      />
    </main>
  );
}
