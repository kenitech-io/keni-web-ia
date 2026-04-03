import { Metadata } from "next";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";
import BlogList from "@/components/blog/BlogList";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "DevOps Blog: Guides and Best Practices",
  description:
    "Practical DevOps guides for small software teams. CI/CD pipelines, infrastructure automation, monitoring, and deployment best practices from senior engineers.",
  alternates: {
    canonical: "https://kenitech.io/blog",
  },
  openGraph: {
    title: "DevOps Blog: Guides and Best Practices",
    description:
      "Practical DevOps guides for small software teams. CI/CD pipelines, infrastructure automation, monitoring, and deployment best practices from senior engineers.",
    url: "https://kenitech.io/blog",
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
      name: "Blog",
      item: "https://kenitech.io/blog",
    },
  ],
};

const blogListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: blogPosts.map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `https://kenitech.io/blog/${post.slug}`,
    name: post.title,
  })),
};

export default function BlogPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListJsonLd) }}
      />
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[640px] mx-auto text-center">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
                Blog
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h1 className="text-heading text-foreground font-light tracking-wide mb-8">
                Guides & Best Practices
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                Practical guides and honest takes on DevOps, infrastructure, and
                platform engineering for small teams.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <BlogList posts={blogPosts} />
          </div>
        </Container>
      </section>

      <CTASection
        headline="Want to know where your team stands?"
        buttonText="Let's talk"
        buttonHref="/contact"
      />
    </main>
  );
}
