import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { PageBanner } from "@/components/ui/PageBanner";
import { CTASection } from "@/components/ui/CTASection";
import { siteImages } from "@/lib/images";
import { createMetadata } from "@/lib/seo";
import { blogPosts } from "@/content/blog";
import { formatDate } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Technical Blog",
  description:
    "Expert articles on industrial moisture measurement, NIR and microwave technology, lithium battery moisture control, and process optimization.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageBanner
        image={siteImages.blogBanner}
        label="Technical Blog"
        title="Engineering Insights & Application Guides"
        description="Expert knowledge on moisture measurement technology, industry applications, and best practices."
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-sm border border-border bg-white shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300 overflow-hidden"
            >
              <div className="relative aspect-[21/9] w-full overflow-hidden bg-surface">
                <Image
                  src={siteImages.blogBanner}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs text-muted-light">
                  <span className="rounded-sm bg-accent/10 px-2 py-0.5 font-semibold text-accent">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="mt-3 text-lg font-bold text-primary group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs text-muted-light">
                    {formatDate(post.publishedAt)}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    Read Article
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection
        headline="Need Application-Specific Guidance?"
        description="Our engineers publish insights based on real-world deployment experience across 500+ installations."
        primaryLabel="Talk to Engineer"
        primaryHref="/contact?type=engineer"
      />
    </>
  );
}
