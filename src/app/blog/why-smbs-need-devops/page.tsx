import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Why 53% of SMBs Still Don't Have DevOps (And What It's Costing Them)",
  description:
    "Most small software teams know their deployment process is broken. The real question is how much it costs them every week and what a realistic fix looks like without hiring a $175K engineer.",
  alternates: {
    canonical: "https://kenitech.io/blog/why-smbs-need-devops",
  },
  openGraph: {
    title: "Why 53% of SMBs Still Don't Have DevOps",
    description:
      "Most small software teams know their deployment process is broken. Here's what it's actually costing them.",
    url: "https://kenitech.io/blog/why-smbs-need-devops",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Why 53% of SMBs Still Don't Have DevOps (And What It's Costing Them)",
  description:
    "Most small software teams know their deployment process is broken. The real question is how much it costs them every week and what a realistic fix looks like.",
  datePublished: "2026-03-17",
  author: {
    "@type": "Organization",
    name: "Keni Engineering",
    url: "https://kenitech.io",
  },
  publisher: {
    "@type": "Organization",
    name: "Keni Engineering",
    logo: {
      "@type": "ImageObject",
      url: "https://kenitech.io/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kenitech.io/blog/why-smbs-need-devops",
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
      name: "Blog",
      item: "https://kenitech.io/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Why SMBs Need DevOps",
      item: "https://kenitech.io/blog/why-smbs-need-devops",
    },
  ],
};

export default function WhySMBsNeedDevOps() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <article>
        <section className="pt-40 pb-12 md:pt-48 md:pb-16">
          <Container>
            <div className="max-w-[640px] mx-auto">
              <FadeIn>
                <p className="text-label uppercase tracking-widest text-muted mb-4">
                  DEVOPS
                </p>
                <h1 className="text-display-sm text-foreground mb-6">
                  Why 53% of SMBs still don&apos;t have DevOps (and what it&apos;s costing
                  them)
                </h1>
                <p className="text-label text-muted">
                  March 17, 2026 &middot; 6 min read
                </p>
              </FadeIn>
            </div>
          </Container>
        </section>

        <section className="pb-section">
          <Container>
            <div className="max-w-[640px] mx-auto space-y-8">
              <FadeIn delay={0.1}>
                <p className="text-body text-foreground-secondary">
                  90% of Fortune 500 companies have adopted DevOps practices.
                  Among small and mid-sized businesses, that number drops to 47%.
                  That gap is not a coincidence. It is a structural problem, and
                  it is costing small teams more than they realize.
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <h2 className="text-heading text-foreground">
                  The real cost of not having DevOps
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-body text-foreground-secondary">
                  When a team of 10 developers spends 30% of their time on
                  manual deployments, server debugging, and firefighting
                  production issues, that is 3 full-time engineers worth of
                  productivity lost. At US engineering salaries, that is
                  roughly $400K-$500K per year in wasted capacity.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-body text-foreground-secondary">
                  But the cost is not just salary. It is slower feature
                  delivery, more bugs reaching users, longer incident response
                  times, and engineer burnout from doing repetitive, stressful
                  work that should be automated.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-heading text-foreground">
                  Why small teams don&apos;t adopt DevOps
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-body text-foreground-secondary">
                  The answer is almost always the same: they cannot afford a
                  full-time DevOps engineer. The average US DevOps engineer
                  earns $129K-$143K per year in base salary. With benefits and
                  overhead, the total cost to the employer is $175K-$220K or
                  more.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-body text-foreground-secondary">
                  For a company with 5-15 developers, that is a significant
                  investment for a role that may not need to be full-time once
                  the initial setup is done. So the work either falls on the
                  most senior developer (who should be building features) or it
                  simply does not get done.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-heading text-foreground">
                  The hiring problem makes it worse
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-body text-foreground-secondary">
                  Even when SMBs decide to hire, they face a brutal market. 37%
                  of IT decision-makers cite DevOps as their primary skills gap.
                  Nearly 50% of SMB hiring managers say salary expectations are
                  their biggest challenge. And 40% report losing candidates to
                  slow hiring processes.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-body text-foreground-secondary">
                  Big tech companies and well-funded startups offer higher
                  salaries, better perks, and more interesting problems. A
                  20-person SaaS company in Ohio is competing for the same
                  talent pool. They usually lose.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-heading text-foreground">
                  What good looks like for a small team
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-body text-foreground-secondary">
                  The goal is not to replicate what Google or Netflix does. A
                  team of 10 developers does not need Kubernetes clusters across
                  three regions. What they need is the basics done right:
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="space-y-3 text-body text-foreground-secondary">
                  <li className="pl-4 border-l border-border-color">
                    CI/CD that runs tests on every push and deploys automatically
                    on merge to main
                  </li>
                  <li className="pl-4 border-l border-border-color">
                    Environments that match: what works in dev works in
                    production
                  </li>
                  <li className="pl-4 border-l border-border-color">
                    Monitoring that alerts you before your users do
                  </li>
                  <li className="pl-4 border-l border-border-color">
                    Infrastructure defined in code, not tribal knowledge
                  </li>
                  <li className="pl-4 border-l border-border-color">
                    Backups that are tested, not assumed
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-body text-foreground-secondary">
                  Companies with these fundamentals in place deploy 973 times
                  more frequently and recover from failures 6,570 times faster
                  than teams without them. Those numbers come from Google&apos;s
                  DORA research across 39,000 respondents.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-heading text-foreground">
                  The consulting alternative
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-body text-foreground-secondary">
                  The SME DevOps segment is growing at 21.2% CAGR, the fastest
                  of any enterprise size. Part of that growth is driven by
                  companies realizing they do not need a full-time hire. They
                  need someone to set things up right once, and then maintain it
                  at a fraction of the cost.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-body text-foreground-secondary">
                  A typical infrastructure audit costs $10K-$20K. That
                  assessment alone can identify savings of hundreds of
                  thousands. And unlike a full-time hire, there is no ramp-up
                  period, no benefits cost, and no risk of the engineer leaving
                  six months in with all the knowledge in their head.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-body text-foreground-secondary">
                  The question is not whether your team needs DevOps. The
                  question is whether you build the capability in-house or
                  bring in someone who has done it dozens of times before.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="border-t border-border-color pt-8 mt-8">
                  <p className="text-body text-foreground-secondary">
                    Want to see where your team stands?{" "}
                    <Link
                      href="/healthcheck"
                      className="text-foreground hover:text-muted transition-colors"
                    >
                      Take our free DevOps health check
                    </Link>
                    . 7 questions, 2 minutes, instant results.
                  </p>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>
      </article>

      <CTASection
        headline="Want to talk about your setup?"
        subtext="30 minutes. We will look at your situation and tell you what we would change."
        buttonText="Book a Free Consultation"
        buttonHref="/contact"
      />
    </main>
  );
}
