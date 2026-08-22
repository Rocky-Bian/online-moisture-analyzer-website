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
    slug: "green-coffee-moisture-control-drying-storage",
    title: "Green Coffee Moisture Control: From Drying Endpoint to Storage-Ready Beans",
    excerpt:
      "How coffee processors can define a traceable green-bean moisture reference, use online measurement at a representative transfer point, and protect drying consistency without confusing a live process trend with the export test result.",
    content: "technical guide",
    category: "Application Guide",
    author: "Application Engineering Team",
    publishedAt: "2026-08-23",
    readTime: "9 min",
    tags: [
      "green coffee moisture control",
      "coffee bean drying endpoint",
      "green coffee storage moisture",
      "online NIR moisture analyzer",
      "bulk coffee moisture measurement",
      "ISO 6673 coffee moisture",
      "coffee dryer process control",
    ],
  },
  {
    slug: "soda-ash-moisture-control-post-dryer-caking",
    title: "Soda Ash Moisture Control: Detecting Post-Dryer Pickup Before Caking and Glass Batch",
    excerpt:
      "How soda-ash producers can distinguish dryer-outlet moisture from post-dryer humidity pickup, choose a representative online measurement point, and calibrate against a reference method that separates water from bicarbonate-related loss on heating.",
    content: "technical guide",
    category: "Application Guide",
    author: "Application Engineering Team",
    publishedAt: "2026-08-21",
    readTime: "9 min",
    tags: [
      "soda ash moisture control",
      "sodium carbonate caking prevention",
      "soda ash dryer outlet measurement",
      "online NIR moisture analyzer",
      "microwave bulk moisture measurement",
      "glass batch raw materials",
      "ASTM E359 soda ash analysis",
    ],
  },
  {
    slug: "wheat-tempering-moisture-control-roller-milling",
    title: "Wheat Tempering Moisture Control: Measuring the Control Variable Before Roller Milling",
    excerpt:
      "How flour mills can define tempered-wheat moisture, verify water addition and equilibration, and use representative online data to support consistent roller-mill performance without treating one target as universal.",
    content: "technical guide",
    category: "Application Guide",
    author: "Application Engineering Team",
    publishedAt: "2026-08-16",
    readTime: "9 min",
    tags: [
      "wheat tempering moisture control",
      "roller milling moisture measurement",
      "flour mill water addition",
      "online NIR grain moisture",
      "wheat moisture equilibration",
      "bulk solids moisture monitoring",
      "milling process control",
    ],
  },
  {
    slug: "glass-fiber-roving-drying-moisture-control",
    title: "Glass-Fiber Roving Drying: Moisture Control from Wet Package to Finished Strand",
    excerpt:
      "How glass-fiber producers can define a meaningful moisture reference, choose a representative online measurement point, and use continuous trends to manage drying without treating one residual-moisture value as universal.",
    content: "technical guide",
    category: "Application Guide",
    author: "Application Engineering Team",
    publishedAt: "2026-08-14",
    readTime: "9 min",
    tags: [
      "glass fiber roving drying",
      "glass fiber moisture control",
      "textile glass moisture measurement",
      "online NIR moisture analyzer",
      "microwave bulk moisture measurement",
      "glass fiber sizing cure",
      "industrial dryer control",
    ],
  },
  {
    slug: "precipitated-silica-moisture-rubber-compounding",
    title: "Precipitated Silica Moisture in Rubber Compounding: A Better Control Point for Silanization",
    excerpt:
      "How to define and trend precipitated-silica volatile content before rubber mixing, select a representative online measurement point, and use the signal to manage feed consistency without treating one moisture value as universal.",
    content: "technical guide",
    category: "Application Guide",
    author: "Application Engineering Team",
    publishedAt: "2026-08-12",
    readTime: "9 min",
    tags: [
      "precipitated silica moisture",
      "silica rubber compounding",
      "silanization process control",
      "rubber additive moisture measurement",
      "online NIR moisture analyzer",
      "microwave bulk moisture measurement",
      "silica dryer control",
    ],
  },
  {
    slug: "wood-chip-boiler-fuel-moisture-control-wet-basis",
    title: "Wood-Chip Boiler Fuel Moisture Control: Why Wet-Basis Measurement Matters",
    excerpt:
      "A practical guide to defining wood-chip moisture on the right basis, choosing a representative online measurement point, and using continuous data to protect boiler fuel consistency without treating one target as universal.",
    content: "technical guide",
    category: "Application Guide",
    author: "Application Engineering Team",
    publishedAt: "2026-08-10",
    readTime: "9 min",
    tags: [
      "wood chip moisture control",
      "biomass boiler fuel moisture",
      "wet basis moisture measurement",
      "online microwave moisture measurement",
      "wood chip drying control",
      "biomass fuel quality",
      "bulk solids moisture monitoring",
    ],
  },
  {
    slug: "gypsum-calcination-free-water-crystal-water-control",
    title: "Gypsum Calcination Moisture Control: Separating Free Water from Crystal Water",
    excerpt:
      "A technical guide to measuring gypsum through drying and calcination, defining a useful reference value, and using online trends without confusing surface moisture with water of crystallization.",
    content: "technical guide",
    category: "Application Guide",
    author: "Application Engineering Team",
    publishedAt: "2026-08-06",
    readTime: "9 min",
    tags: [
      "gypsum calcination moisture control",
      "gypsum free water measurement",
      "gypsum crystal water",
      "stucco quality control",
      "online NIR moisture analyzer",
      "microwave bulk moisture measurement",
      "gypsum wallboard process",
    ],
  },
  {
    slug: "ceramic-press-feed-moisture-silo-equalization",
    title: "Ceramic Press-Feed Moisture: Why Silo Equalization Matters After Spray Drying",
    excerpt:
      "A practical guide to controlling the moisture and distribution of spray-dried ceramic powder between dryer discharge and press feed, with calibration and installation considerations for online measurement.",
    content: "technical guide",
    category: "Application Guide",
    author: "Application Engineering Team",
    publishedAt: "2026-08-04",
    readTime: "8 min",
    tags: [
      "ceramic press feed moisture",
      "spray dried ceramic powder",
      "ceramic powder silo equalization",
      "online NIR moisture measurement",
      "microwave bulk moisture measurement",
      "porcelain stoneware processing",
      "green tile density control",
    ],
  },
  {
    slug: "viscose-staple-fiber-moisture-regain-control",
    title: "Viscose Staple Fiber Moisture Regain: From Dryer Outlet to Bale Control",
    excerpt:
      "Why viscose-fiber moisture must be managed as a dynamic process variable—and how a representative online measurement can support conditioning, bale consistency, and disciplined quality verification.",
    content: "technical guide",
    category: "Application Guide",
    author: "Application Engineering Team",
    publishedAt: "2026-08-02",
    readTime: "8 min",
    tags: [
      "viscose staple fiber moisture",
      "viscose moisture regain control",
      "online NIR moisture measurement",
      "textile fiber conditioning",
      "fiber dryer outlet control",
      "bale moisture consistency",
      "regenerated cellulose fiber",
    ],
  },
  {
    slug: "calcium-carbonate-moisture-control-polymer-compounding",
    title: "Calcium Carbonate Moisture Control for High-Filler Polymer Compounding",
    excerpt:
      "Why residual water in calcium-carbonate-filled compounds needs a defined control strategy—and how representative online measurement can support drying, storage, and extrusion decisions.",
    content: "technical guide",
    category: "Application Guide",
    author: "Application Engineering Team",
    publishedAt: "2026-07-31",
    readTime: "9 min",
    tags: [
      "calcium carbonate moisture control",
      "high filler polymer compounding",
      "PVC additive moisture measurement",
      "online NIR moisture analyzer",
      "microwave bulk moisture measurement",
      "calcium carbonate drying",
      "polymer extrusion quality",
    ],
  },
  {
    slug: "foundry-green-sand-moisture-control-compactability",
    title: "Foundry Green Sand Moisture Control: From Water Percentage to Compactability",
    excerpt:
      "Why green-sand moisture needs to be managed with clay activity, temperature, and compactability—and how an online trend can support faster, more disciplined muller control.",
    content: "technical guide",
    category: "Application Guide",
    author: "Application Engineering Team",
    publishedAt: "2026-07-29",
    readTime: "9 min",
    tags: [
      "foundry green sand moisture control",
      "molding sand compactability",
      "online NIR moisture measurement",
      "bentonite green sand",
      "foundry sand testing",
      "sand casting quality",
      "muller moisture control",
    ],
  },
  {
    slug: "dried-noodle-moisture-control-drying-curve",
    title: "Dried Noodle Moisture Control: Managing the Drying Curve and Final Moisture",
    excerpt:
      "How noodle manufacturers can use continuous moisture trends to protect drying uniformity, reduce cracking risk, and verify a product-specific final-moisture target before packaging.",
    content: "technical guide",
    category: "Application Guide",
    author: "Application Engineering Team",
    publishedAt: "2026-07-27",
    readTime: "9 min",
    tags: [
      "dried noodle moisture control",
      "noodle drying curve",
      "online NIR moisture measurement",
      "instant noodle moisture",
      "food drying process control",
      "noodle crack prevention",
      "final moisture verification",
    ],
  },
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
