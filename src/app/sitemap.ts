import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { getProductSlugs } from "@/content/products";
import { getIndustrySlugs } from "@/content/industries";
import { blogPosts } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = [
    "",
    "/products",
    "/industries",
    "/technology",
    "/faq",
    "/blog",
    "/about",
    "/contact",
    "/resources/online-vs-halogen-moisture-analyzer",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const productPages = getProductSlugs().map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const industryPages = getIndustrySlugs().map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages, ...industryPages, ...blogPages];
}
