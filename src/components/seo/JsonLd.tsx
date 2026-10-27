interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
  id?: string;
}

export function JsonLd({ data, id }: JsonLdProps) {
  const schemas = Array.isArray(data) ? data : [data];
  const types = schemas.map((item) => String(item["@type"] ?? "schema")).join("-");
  return (
    <script
      id={id ?? `jsonld-${types.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ALZRO",
    legalName: "Shandong Hangyi Energy Conversation Technology Co., Ltd.",
    url: "https://www.alzro.com",
    logo: "https://www.alzro.com/icon.svg",
    description:
      "Online NIR and microwave moisture analyzers for industrial process control, plus halogen moisture analyzers for laboratory quality control, method development, and reference testing.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "rocky@alzro.com",
        telephone: "+86 15165848866",
        availableLanguage: ["English", "Chinese"],
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "reya@alzro.com",
        availableLanguage: ["English", "Chinese"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zibo",
      addressRegion: "Shandong",
      streetAddress: "Electronic Information Industrial Park",
      addressCountry: "CN",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ALZRO",
    url: "https://www.alzro.com",
    publisher: {
      "@type": "Organization",
      name: "ALZRO",
      url: "https://www.alzro.com",
    },
    inLanguage: "en",
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function productSchema(product: {
  name: string;
  description: string;
  slug: string;
  category?: "online" | "laboratory";
  image?: string;
  model?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: { "@type": "Brand", name: "ALZRO" },
    manufacturer: { "@type": "Organization", name: "ALZRO" },
    model: product.model ?? product.name,
    sku: product.model ?? product.slug,
    image: product.image
      ? new URL(product.image, "https://www.alzro.com").toString()
      : undefined,
    url: `https://www.alzro.com/products/${product.slug}`,
    category:
      product.category === "laboratory"
        ? "Laboratory Moisture Analyzer"
        : "Industrial Online Moisture Analyzer",
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema(article: {
  title: string;
  excerpt: string;
  slug: string;
  author: string;
  publishedAt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    author: { "@type": "Organization", name: article.author },
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    image: "https://www.alzro.com/images/site-real/online-moisture-measurement-blog-diagram.png",
    mainEntityOfPage: `https://www.alzro.com/blog/${article.slug}`,
    publisher: {
      "@type": "Organization",
      name: "ALZRO",
      logo: { "@type": "ImageObject", url: "https://www.alzro.com/icon.svg" },
    },
    url: `https://www.alzro.com/blog/${article.slug}`,
  };
}
