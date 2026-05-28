export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "moisture-control-lithium-battery-production",
    title: "Moisture Control in Lithium Battery Production",
    excerpt:
      "How inline moisture measurement reduces coating defects and improves yield in GWh-scale cathode manufacturing lines.",
    content: "",
    category: "Applications",
    author: "Dr. Wei Zhang",
    publishedAt: "2026-04-15",
    readTime: "8 min",
    tags: ["lithium battery", "moisture control", "cathode"],
  },
  {
    slug: "real-time-moisture-monitoring-explained",
    title: "Real-Time Moisture Monitoring Explained",
    excerpt:
      "A technical guide to continuous moisture measurement technologies, integration strategies, and ROI calculation for industrial plants.",
    content: "",
    category: "Technology",
    author: "James Morrison",
    publishedAt: "2026-03-28",
    readTime: "12 min",
    tags: ["real-time monitoring", "process control"],
  },
  {
    slug: "nir-vs-microwave-moisture-measurement",
    title: "NIR vs Microwave Moisture Measurement",
    excerpt:
      "Comprehensive comparison of NIR and microwave sensing technologies for industrial moisture analysis — selection criteria and application guidelines.",
    content: "",
    category: "Technology",
    author: "Dr. Wei Zhang",
    publishedAt: "2026-03-10",
    readTime: "10 min",
    tags: ["NIR", "microwave", "comparison"],
  },
  {
    slug: "common-industrial-moisture-measurement-mistakes",
    title: "Common Industrial Moisture Measurement Mistakes",
    excerpt:
      "Five critical errors engineers make when implementing online moisture analyzers — and how to avoid them in your next project.",
    content: "",
    category: "Best Practices",
    author: "James Morrison",
    publishedAt: "2026-02-22",
    readTime: "6 min",
    tags: ["best practices", "installation"],
  },
  {
    slug: "ai-assisted-calibration-industrial-sensors",
    title: "AI-Assisted Calibration for Industrial Sensors",
    excerpt:
      "How machine learning algorithms reduce calibration drift and improve long-term measurement stability in harsh industrial environments.",
    content: "",
    category: "Technology",
    author: "Dr. Wei Zhang",
    publishedAt: "2026-02-08",
    readTime: "9 min",
    tags: ["AI", "calibration", "machine learning"],
  },
  {
    slug: "scada-integration-moisture-analyzers",
    title: "SCADA Integration for Moisture Analyzers",
    excerpt:
      "Step-by-step guide to connecting ALZRO moisture analyzers with Siemens WinCC, Ignition, and FactoryTalk SCADA platforms.",
    content: "",
    category: "Integration",
    author: "James Morrison",
    publishedAt: "2026-01-20",
    readTime: "7 min",
    tags: ["SCADA", "integration", "Modbus"],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export function getFeaturedPosts(count = 4): BlogPost[] {
  return blogPosts.slice(0, count);
}
