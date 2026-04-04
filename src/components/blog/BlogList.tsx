"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
}

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<string | null>(null);

  const categories = Array.from(new Set(posts.map((p) => p.category))).sort();
  const filtered = active ? posts.filter((p) => p.category === active) : posts;

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-2 mb-24">
        <button
          onClick={() => setActive(null)}
          className={`text-xs font-light transition-all pb-1 border-b ${
            active === null ? "text-foreground border-foreground/20" : "text-muted/35 border-transparent hover:text-muted/60 hover:border-foreground/10"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(active === cat ? null : cat)}
            className={`text-xs font-light transition-all pb-1 border-b ${
              active === cat ? "text-foreground border-foreground/20" : "text-muted/35 border-transparent hover:text-muted/60 hover:border-foreground/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div>
        {filtered.map((post, index) => (
          <FadeIn key={post.slug} delay={index * 0.05}>
            <article>
              {index > 0 && (
                <div className="my-14 border-t border-border-color w-full md:w-[130%] md:-ml-[15%]"></div>
              )}
              <Link
                href={`/blog/${post.slug}`}
                prefetch={false}
                className="group block"
              >
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
                  })}
                </p>
              </Link>
            </article>
          </FadeIn>
        ))}
      </div>
    </>
  );
}
