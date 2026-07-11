import Script from "next/script";

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id={`jsonld-${JSON.stringify(data).slice(0, 20)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ALZRO",
    url: "https://www.alzro.com",
    logo: "https://www.alzro.com/logo.png",
    description:
      "Industrial moisture measurement solutions for drying, powder processing, bulk solids, chemicals, minerals, and building-material applications.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "sales@alzro.com",
      availableLanguage: ["English", "Chinese"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "CN",
    },
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
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: { "@type": "Brand", name: "ALZRO" },
    url: `https://www.alzro.com/products/${product.slug}`,
    category: "Industrial Moisture Analyzer",
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
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: { "@type": "Person", name: article.author },
    datePublished: article.publishedAt,
    publisher: {
      "@type": "Organization",
      name: "ALZRO",
      logo: { "@type": "ImageObject", url: "https://www.alzro.com/logo.png" },
    },
    url: `https://www.alzro.com/blog/${article.slug}`,
  };
}
