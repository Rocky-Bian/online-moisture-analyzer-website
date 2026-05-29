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
  heroImage: string;
  image: string;
}

export const products: Product[] = [
  {
    slug: "online-nir-moisture-analyzer",
    name: "Online NIR Moisture Analyzer",
    tagline: "Continuous NIR moisture measurement for industrial process lines",
    description:
      "The ALZRO NIR-5000 delivers real-time moisture analysis using near-infrared spectroscopy. Designed for continuous inline monitoring in powder, granule, and bulk material processing with industrial-grade accuracy and minimal maintenance.",
    accuracy: "±0.1% moisture",
    method: "Near-Infrared (NIR) Spectroscopy",
    applications: [
      "Lithium battery cathode/anode materials",
      "Pharmaceutical powder processing",
      "Food ingredient drying lines",
      "Chemical bulk solids",
    ],
    features: [
      "Non-contact measurement",
      "AI-assisted calibration",
      "Modbus/Profibus/OPC UA integration",
      "IP65 industrial enclosure",
      "Self-diagnostic monitoring",
    ],
    specifications: {
      "Measurement Range": "0.01% – 99.9% moisture",
      "Accuracy": "±0.1% (typical)",
      "Response Time": "< 1 second",
      "Operating Temperature": "-10°C to +60°C",
      "Enclosure Rating": "IP65",
      "Communication": "Modbus RTU/TCP, Profibus, OPC UA, 4-20mA",
      "Power Supply": "24V DC / 100-240V AC",
      "Calibration": "AI-assisted, factory + field calibration",
    },
    heroImage: "nir-analyzer",
    image: productImages["online-nir-moisture-analyzer"],
  },
  {
    slug: "conveyor-belt-moisture-sensor",
    name: "Conveyor Belt Moisture Sensor",
    tagline: "Real-time belt moisture monitoring for continuous production",
    description:
      "Mount directly above conveyor belts for continuous moisture profiling of moving bulk materials. Ideal for biomass, wood chips, aggregates, and food processing lines.",
    accuracy: "±0.2% moisture",
    method: "Microwave Resonance Sensing",
    applications: [
      "Biomass and wood processing",
      "Aggregate and mining",
      "Food conveyor lines",
      "Recycling and waste processing",
    ],
    features: [
      "Wide belt coverage",
      "Robust stainless steel housing",
      "Real-time trend logging",
      "PLC-ready outputs",
      "Low maintenance design",
    ],
    specifications: {
      "Measurement Range": "0.5% – 60% moisture",
      "Accuracy": "±0.2% (typical)",
      "Belt Width Coverage": "Up to 2,000 mm",
      "Response Time": "< 2 seconds",
      "Enclosure Rating": "IP67",
      "Communication": "4-20mA, Modbus RTU, Ethernet",
      "Power Supply": "24V DC",
      "Mounting": "Over-belt, adjustable bracket",
    },
    heroImage: "conveyor-sensor",
    image: productImages["conveyor-belt-moisture-sensor"],
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
