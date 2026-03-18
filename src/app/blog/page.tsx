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
      <section className="pt-40 pb-20 md:pt-48 md:pb-28">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <FadeIn>
              <h1 className="text-display text-foreground mb-8">Blog</h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-body text-foreground-secondary">
                Practical guides and honest takes on DevOps, infrastructure, and
                platform engineering for small teams.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="pb-section">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <div className="space-y-16">
              {blogPosts.map((post, index) => (
                <FadeIn key={post.slug} delay={index * 0.1}>
                  <article>
                    <Link href={`/blog/${post.slug}`} className="group block">
                      <p className="text-label uppercase tracking-widest text-muted mb-3">
                        {post.category}
                      </p>
                      <h2 className="text-heading text-foreground group-hover:text-muted transition-colors mb-4">
                        {post.title}
                      </h2>
                      <p className="text-body text-foreground-secondary mb-4">
                        {post.description}
                      </p>
                      <p className="text-label text-muted">
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
