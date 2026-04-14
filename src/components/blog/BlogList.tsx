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
      {/* Category filters */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        <button
          onClick={() => setActive(null)}
          className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors ${
            active === null
              ? "bg-foreground text-background"
              : "text-muted hover:text-foreground border border-[#eaeaea] dark:border-[#333]"
          }`}
        >
          All Posts
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(active === cat ? null : cat)}
            className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors ${
              active === cat
                ? "bg-foreground text-background"
                : "text-muted hover:text-foreground border border-[#eaeaea] dark:border-[#333]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts grid */}
      {/* Featured: first 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-[#eaeaea] dark:border-[#333]">
        {filtered.slice(0, 3).map((post, index) => (
          <FadeIn key={post.slug} delay={index * 0.03}>
            <Link
              href={`/blog/${post.slug}`}
              prefetch={false}
              className="group block border-b border-r border-[#eaeaea] dark:border-[#333] p-6 md:p-10 hover:bg-[#fafafa] dark:hover:bg-[#111] transition-colors h-full min-h-[380px] flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <p className="text-[11px] text-muted font-medium">{post.category}</p>
                <p className="text-[11px] text-muted font-light">
                  {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                </p>
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight mb-4 group-hover:text-foreground/70 transition-colors leading-tight">
                {post.title}
              </h2>
              <p className="text-sm text-foreground-secondary/60 font-light leading-relaxed line-clamp-5 mt-auto">
                {post.description}
              </p>
            </Link>
          </FadeIn>
        ))}
      </div>

      {/* Rest */}
      {filtered.length > 3 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-[#eaeaea] dark:border-[#333]">
          {filtered.slice(3).map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.03}>
              <Link
                href={`/blog/${post.slug}`}
                prefetch={false}
                className="group block border-b border-r border-[#eaeaea] dark:border-[#333] p-6 md:p-10 hover:bg-[#fafafa] dark:hover:bg-[#111] transition-colors h-full min-h-[300px] flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[11px] text-muted font-medium">{post.category}</p>
                  <p className="text-[11px] text-muted font-light">
                    {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                  </p>
                </div>
                <h2 className="text-lg md:text-xl font-semibold text-foreground tracking-tight mb-4 group-hover:text-foreground/70 transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-[13px] text-foreground-secondary/60 font-light leading-relaxed line-clamp-4 mt-auto">
                  {post.description}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      )}
    </>
  );
}
