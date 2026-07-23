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
    slug: "sinter-mix-moisture-control-granulation-permeability",
    title: "Sinter Mix Moisture Control: Stabilizing Granulation and Bed Permeability",
    excerpt:
      "Why sinter-water control must follow ore blend and particle size, and how an online bulk-moisture signal can support more stable granulation and bed permeability.",
    content: "technical guide",
    category: "Application Guide",
    author: "Application Engineering Team",
    publishedAt: "2026-07-23",
    readTime: "8 min",
    tags: [
      "sinter mix moisture control",
      "iron ore granulation",
      "sinter bed permeability",
      "online microwave moisture measurement",
      "ironmaking process control",
      "bulk solids moisture",
      "ore blend management",
    ],
  },
  {
    slug: "carbon-black-pellet-drying-moisture-control",
    title: "Carbon Black Pellet Drying: Moisture Control Without Sacrificing Pellet Quality",
    excerpt:
      "A practical guide to measuring residual moisture after carbon black pellet drying, selecting a suitable online method, and commissioning the signal for reliable process control.",
    content: "technical guide",
    category: "Application Guide",
    author: "Application Engineering Team",
    publishedAt: "2026-07-21",
    readTime: "8 min",
    tags: [
      "carbon black pellet drying",
      "carbon black moisture control",
      "online microwave moisture measurement",
      "rotary dryer control",
      "rubber carbon black",
      "bulk solids moisture",
      "ASTM D1509",
    ],
  },
  {
    slug: "wood-fiberboard-hot-press-moisture-control",
    title: "Wood Fiberboard Hot Pressing: A Practical Guide to Moisture Control",
    excerpt:
      "How continuous wood-fiber moisture measurement can help MDF and particleboard plants stabilize mat preparation, pressing, and final board quality.",
    content: "technical guide",
    category: "Application Guide",
    author: "Application Engineering Team",
    publishedAt: "2026-07-20",
    readTime: "8 min",
    tags: [
      "wood fiberboard",
      "MDF moisture control",
      "particleboard pressing",
      "wood fiber moisture",
      "online NIR measurement",
      "hot press process",
      "bulk solids control",
    ],
  },
  {
    slug: "corn-starch-drying-moisture-control",
    title: "Corn Starch Drying Moisture Control with Online NIR Measurement",
    excerpt:
      "How online moisture data helps starch plants reduce manual sampling, stabilize drying, and improve final product consistency.",
    content: "case study",
    category: "Case Study",
    author: "Application Engineering Team",
    publishedAt: "2026-07-08",
    readTime: "6 min",
    tags: ["corn starch", "drying", "online NIR"],
  },
  {
    slug: "baking-soda-moisture-measurement-guide",
    title: "Why Baking Soda Producers Need Faster Moisture Measurement",
    excerpt:
      "A practical guide to replacing long lab cycles with inline moisture feedback in sodium bicarbonate production.",
    content: "application guide",
    category: "Application Guide",
    author: "Application Engineering Team",
    publishedAt: "2026-07-06",
    readTime: "5 min",
    tags: ["baking soda", "sodium bicarbonate", "moisture control"],
  },
  {
    slug: "nano-calcium-carbonate-drying-quality",
    title: "Moisture Control in Nano Calcium Carbonate Drying",
    excerpt:
      "How better residual-moisture control helps protect whiteness, flowability, and drying efficiency in calcium carbonate lines.",
    content: "case study",
    category: "Case Study",
    author: "Application Engineering Team",
    publishedAt: "2026-07-03",
    readTime: "6 min",
    tags: ["calcium carbonate", "drying", "powder quality"],
  },
  {
    slug: "ceramic-spray-drying-moisture-stability",
    title: "Ceramic Spray Drying: Why Moisture Stability Matters",
    excerpt:
      "A closer look at how online moisture measurement supports granule quality and more stable ceramic powder production.",
    content: "application guide",
    category: "Application Guide",
    author: "Process Solutions Team",
    publishedAt: "2026-06-29",
    readTime: "5 min",
    tags: ["ceramics", "spray drying", "granule moisture"],
  },
  {
    slug: "washed-sand-moisture-for-concrete-batching",
    title: "Washed Sand Moisture Control for More Accurate Concrete Batching",
    excerpt:
      "Why continuous sand-moisture data can help batching plants adjust water faster and keep concrete performance more stable.",
    content: "case study",
    category: "Case Study",
    author: "Process Solutions Team",
    publishedAt: "2026-06-26",
    readTime: "5 min",
    tags: ["washed sand", "concrete batching", "aggregates"],
  },
  {
    slug: "how-to-choose-nir-vs-microwave-moisture-measurement",
    title: "How to Choose Between NIR and Microwave Moisture Measurement",
    excerpt:
      "A simple selection guide based on installation method, material type, penetration depth, and process goals.",
    content: "technology",
    category: "Technology",
    author: "Technical Marketing Team",
    publishedAt: "2026-06-22",
    readTime: "7 min",
    tags: ["NIR", "microwave", "selection guide"],
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
