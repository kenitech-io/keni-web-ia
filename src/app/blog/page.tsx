import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "DevOps Blog: Guides and Best Practices",
  description:
    "Practical DevOps guides for small software teams. CI/CD pipelines, infrastructure automation, monitoring, and deployment best practices from senior engineers.",
  alternates: {
    canonical: "https://kenitech.io/blog",
  },
};

export default function BlogPage() {
  return (
    <main>
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
            <div className="space-y-20">
              {blogPosts.map((post, index) => (
                <FadeIn key={post.slug} delay={index * 0.1}>
                  <article>
                    <Link href={`/blog/${post.slug}`} prefetch={false} className="group block">
                      <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-4">
                        {post.category}
                      </p>
                      <h2 className="text-heading text-foreground font-light tracking-wide group-hover:text-foreground/60 transition-colors mb-6">
                        {post.title}
                      </h2>
                      <p className="text-sm text-foreground-secondary/70 leading-loose font-light mb-4">
                        {post.description}
                      </p>
                      <p className="text-label text-muted/60 font-light">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}{" "}
                        &middot; {post.readTime}
                      </p>
                    </Link>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
