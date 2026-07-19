import type { Metadata } from "next";

const siteConfig = {
  name: "ALZRO",
  title: "ALZRO — Online Moisture Analyzer for Industrial Process Control",
  description:
    "Online industrial moisture measurement solutions for starch, chemicals, ceramics, aggregates, fibers, and bulk solids. Real-time NIR and microwave sensing systems.",
  url: "https://www.alzro.com",
  ogImage: "/og-image.jpg",
  locale: "en_US",
};

export function createMetadata({
  title,
  description,
  path = "",
  image,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const pageTitle = title ? `${title} | ALZRO` : siteConfig.title;
  const pageDescription = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;
  const ogImage = image ?? siteConfig.ogImage;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: pageTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    keywords: [
      "online moisture analyzer",
      "industrial moisture measurement",
      "NIR moisture sensor",
      "microwave moisture analyzer",
      "starch moisture control",
      "powder drying moisture control",
      "process moisture monitoring",
      "ALZRO",
    ],
  };
}

export { siteConfig };
