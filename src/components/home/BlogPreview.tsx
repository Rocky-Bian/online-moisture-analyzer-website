"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { getFeaturedPosts } from "@/content/blog";
import { formatDate } from "@/lib/utils";
import { FadeIn } from "@/components/ui/AnimatedCounter";

export function BlogPreview() {
  const posts = getFeaturedPosts(4);

  return (
    <Section className="bg-surface">
      <SectionHeader
        label="Technical Blog"
        title="Engineering Insights & Application Guides"
        description="Expert articles on moisture measurement technology, industry applications, and best practices."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post, i) => (
          <FadeIn key={post.slug} delay={i * 0.08}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block rounded-sm border border-border bg-white p-6 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 text-xs text-muted-light">
                <span className="rounded-sm bg-accent/10 px-2 py-0.5 font-semibold text-accent">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-primary group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-muted-light">
                  {formatDate(post.publishedAt)} · {post.author}
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  Read
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
        >
          View All Articles
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
