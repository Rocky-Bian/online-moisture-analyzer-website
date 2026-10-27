import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: ["Googlebot", "Bingbot", "OAI-SearchBot", "*"].map((userAgent) => ({
      userAgent,
      allow: "/",
      disallow: ["/api/", "/admin/"],
    })),
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
