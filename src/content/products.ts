import { productImages } from "@/lib/images";

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  accuracy: string;
  method: string;
  applications: string[];
  features: string[];
  specifications: Record<string, string>;
  bestFor?: string[];
  benefits?: string[];
  integration?: string[];
  referenceIndustries?: string[];
  heroImage: string;
  image: string;
}

export const products: Product[] = [
  {
    slug: "online-nir-moisture-analyzer",
    name: "Online NIR Moisture Analyzer",
    tagline: "Non-contact inline moisture control for dryers, conveyors, and powder process lines",
    description:
      "This online NIR moisture analyzer uses spectral absorption to convert moisture-related optical changes into stable electrical signals for continuous process control. It supports non-contact measurement through a sight glass, delivers up to 60 checks per second, and helps manufacturers replace manual sampling with faster, more consistent moisture management.",
    accuracy: "±0.1% moisture",
    method: "Near-Infrared (NIR) Spectroscopy",
    applications: [
      "Corn starch and modified starch drying",
      "Grain deep processing and noodle drying rooms",
      "Soda ash, baking soda, and calcium carbonate lines",
      "Ceramic powder spray drying",
      "PVC additives, rubber additives, and pigment intermediates",
      "Washed sand, sinter mix, wood fiber, and viscose staple fiber",
    ],
    features: [
      "Non-contact, non-destructive measurement through a viewing window",
      "Up to 60 measurements per second for real-time process feedback",
      "Repeatability up to ±0.02% depending on material model",
      "Automatic recognition of material and background changes",
      "Configurable response time from 1 to 80 seconds",
      "Configurable sample time from 1 to 99 seconds",
      "7-inch color touchscreen for local operation",
      "Designed for networking and remote data transmission",
      "Aluminum alloy housing for industrial installation",
    ],
    specifications: {
      "Measurement Range": "0% – 60% moisture without free water",
      "Measurement Accuracy": "±0.1% depending on material",
      "Repeatability": "±0.02% depending on material",
      "Working Distance": "250 mm ± 50 mm",
      "Response Time": "1 – 80 seconds, user configurable",
      "Sampling Time": "1 – 99 seconds, user configurable",
      "Built-In Temperature Accuracy": "±0.1°C",
      "Built-In Temperature Range": "-10°C to 70°C",
      "Ambient Operating Temperature": "-20°C to 50°C",
      "Display": "7-inch color LCD",
      "Outputs": "RS232 standard, 4-20mA optional, Ethernet optional, Wi-Fi custom",
      "Power Supply": "100-240VAC, 50/60Hz, 60W",
      "Housing Material": "Aluminum alloy",
    },
    bestFor: [
      "Drying sections where manual grab sampling is too slow",
      "Powder and granule lines that need continuous moisture trends",
      "Processes where over-drying increases energy cost or quality risk",
      "Plants that want to network moisture data back to PLC or MES systems",
    ],
    benefits: [
      "Replace manual sampling and subjective hand-feel checks with continuous online values",
      "Stabilize final product moisture and improve qualified product rate",
      "Reduce over-drying, energy consumption, and operator workload",
      "Support tighter process control in harsh, dusty, or high-throughput environments",
    ],
    integration: [
      "RS232 for basic digital communication",
      "4-20mA output for retrofit control loops",
      "Ethernet option for plant networking and data sharing",
      "Custom Wi-Fi output for wireless projects",
    ],
    referenceIndustries: [
      "Corn starch and dextrin",
      "Baking soda and soda ash",
      "Nano calcium carbonate",
      "Ceramic raw materials",
      "PVC additives and rubber additives",
      "Washed sand and sinter mix",
    ],
    heroImage: "nir-analyzer",
    image: productImages["online-nir-moisture-analyzer"],
  },
  {
    slug: "microwave-moisture-system",
    name: "Microwave Moisture Measurement System",
    tagline: "Deep-penetration microwave sensing for dense bulk materials",
    description:
      "ALZRO microwave moisture systems penetrate deep into bulk material layers, providing accurate moisture readings for dense powders, pellets, and high-moisture applications where surface-only methods fail.",
    accuracy: "±0.15% moisture",
    method: "Microwave Transmission Technology",
    applications: [
      "Dense powder processing",
      "Pellet and granule production",
      "High-moisture food products",
      "Chemical reactor feed monitoring",
    ],
    features: [
      "Deep material penetration",
      "Multi-point measurement arrays",
      "SCADA integration ready",
      "Temperature compensated",
      "Explosion-proof options available",
    ],
    specifications: {
      "Measurement Range": "0.1% – 80% moisture",
      "Accuracy": "±0.15% (typical)",
      "Penetration Depth": "Up to 300 mm",
      "Response Time": "< 0.5 seconds",
      "Enclosure Rating": "IP66 / ATEX optional",
      "Communication": "Profibus, Modbus, OPC UA, HART",
      "Power Supply": "24V DC / 110-230V AC",
      "Array Configuration": "1–8 sensor points",
    },
    heroImage: "microwave-system",
    image: productImages["microwave-moisture-system"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
