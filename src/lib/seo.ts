import type { Metadata } from "next";

const siteConfig = {
  name: "ALZRO",
  title: "ALZRO — Online Moisture Analyzer for Industrial Process Control",
  description:
    "AI-driven industrial moisture measurement solutions for lithium battery, powder processing, food, and chemical industries. Real-time NIR and microwave sensing systems.",
  url: "https://www.alzro.com",
  ogImage: "/og-image.jpg",
  locale: "en_US",
  twitterHandle: "@alzro",
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
      creator: siteConfig.twitterHandle,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    keywords: [
      "online moisture analyzer",
      "industrial moisture measurement",
      "NIR moisture sensor",
      "microwave moisture analyzer",
      "lithium battery moisture control",
      "process moisture monitoring",
      "ALZRO",
    ],
  };
}

export { siteConfig };
