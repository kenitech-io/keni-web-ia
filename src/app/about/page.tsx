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
      <section className="pt-32 pb-20 md:pt-48 md:pb-32">
        <Container>
          <div className="max-w-[800px] mx-auto text-center">
            <FadeIn>
              <h1
                className="text-foreground font-light tracking-tight"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  lineHeight: 1.05,
                }}
              >
                About
              </h1>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-body text-foreground-secondary/70 font-light mt-8 max-w-[560px] mx-auto leading-relaxed">
                Keni Engineering is a DevOps consultancy built by engineers, for engineers. We design and implement internal development platforms so your team can focus on what matters: shipping product.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Vision - two columns */}
      <section className="py-24 md:py-40">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
            <div className="max-w-[480px]">
              <FadeIn>
                <h2
                  className="text-foreground font-light tracking-tight mb-8"
                  style={{
                    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                    lineHeight: 1.15,
                  }}
                >
                  We have seen the same problems everywhere
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light mb-6">
                  Born from years of building platforms across the US and Europe. Motorola, Swisscom, and dozens of growing companies. The environments change. The problems do not.
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Manual deploys. No monitoring. Infrastructure knowledge locked in one person&apos;s head. We have seen it at every scale. The fix is always more straightforward than people expect.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.1}>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/about-vision.jpg"
                  alt="Motion and nature"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Statement */}
      <section className="py-24 md:py-40">
        <Container>
          <FadeIn>
            <p
              className="max-w-[900px] mx-auto text-center text-foreground font-light tracking-tight leading-snug"
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              }}
            >
              We build platforms that your team can run with confidence. Open tools, documented systems, no vendor lock-in. The goal is not a dependency on us. The goal is your independence.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* How we work */}
      <section className="py-24 md:py-40">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <FadeIn>
              <h2
                className="text-foreground font-light tracking-tight mb-12"
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  lineHeight: 1.15,
                }}
              >
                How we work
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light mb-8">
                Every engagement starts with a deep review of your repositories, pipelines, cloud accounts, and workflows. No assumptions. No templates. Just your system, understood completely before anything is changed.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light mb-8">
                We deliver fixed-price engagements with senior engineers only. The people on the call are the people doing the work. No handoffs, no juniors learning on your time, no hourly billing designed to extend the project.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                When we step back, your team owns everything. Open tools, documented systems, no vendor lock-in.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Learn more */}
      <section className="py-24 md:py-40">
        <Container>
          <FadeIn>
            <h2
              className="text-foreground font-light tracking-tight mb-12"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                lineHeight: 1.15,
              }}
            >
              Learn more about what we do
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card 1 */}
            <FadeIn delay={0}>
              <Link href="/blog/why-smbs-need-devops" className="group block">
                <div className="relative rounded-xl aspect-[4/3] mb-4 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image src="/about-art-1.jpg" alt="Landscape with the Fall of Icarus by Bruegel" fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                </div>
                <h3 className="text-sm font-medium text-foreground leading-snug mb-2">Why 53% of SMBs Still Don&apos;t Have DevOps</h3>
                <p className="text-xs text-muted font-light">DevOps</p>
              </Link>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn delay={0.08}>
              <Link href="/blog/devops-audit-what-to-expect" className="group block">
                <div className="relative rounded-xl aspect-[4/3] mb-4 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image src="/about-art-2.jpg" alt="The Astronomer by Vermeer" fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                </div>
                <h3 className="text-sm font-medium text-foreground leading-snug mb-2">What Happens During a DevOps Infrastructure Audit</h3>
                <p className="text-xs text-muted font-light">Infrastructure</p>
              </Link>
            </FadeIn>

            {/* Card 3 */}
            <FadeIn delay={0.16}>
              <Link href="/blog/how-much-does-devops-cost" className="group block">
                <div className="relative rounded-xl aspect-[4/3] mb-4 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image src="/about-art-3.jpg" alt="The School of Athens by Raphael" fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                </div>
                <h3 className="text-sm font-medium text-foreground leading-snug mb-2">How Much Does DevOps Cost in 2026?</h3>
                <p className="text-xs text-muted font-light">DevOps</p>
              </Link>
            </FadeIn>

            {/* Card 4 */}
            <FadeIn delay={0.24}>
              <Link href="/blog/devops-checklist-for-startups" className="group block">
                <div className="relative rounded-xl aspect-[4/3] mb-4 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image src="/about-art-4.jpg" alt="Studies of machinery by Leonardo da Vinci" fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                </div>
                <h3 className="text-sm font-medium text-foreground leading-snug mb-2">The DevOps Checklist for Startups</h3>
                <p className="text-xs text-muted font-light">DevOps</p>
              </Link>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-block border border-border-color hover:border-foreground text-foreground px-6 py-2.5 text-sm font-light rounded-full transition-colors"
              >
                Read more
              </Link>
            </div>
          </FadeIn>
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
