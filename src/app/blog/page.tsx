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
      <section className="pt-28 pb-24 md:pt-36 md:pb-32 px-6 md:px-12 lg:px-20">
          <BlogList posts={blogPosts} />
      </section>

      <CTASection
        headline="Want to know where your team stands?"
        buttonText="Let's talk"
        buttonHref="/contact"
      />
    </main>
  );
}
