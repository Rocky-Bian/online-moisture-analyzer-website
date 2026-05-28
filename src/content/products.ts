import { siteImages } from "@/lib/images";

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
  image: string;
  gallery?: string[];
}

export const products: Product[] = [
  {
    slug: "online-nir-moisture-analyzer",
    name: "Online NIR Moisture Analyzer",
    tagline:
      "Continuous near-infrared moisture measurement — no consumables, industrial-grade reliability",
    description:
      "The ALZRO online NIR moisture analyzer delivers real-time, non-contact moisture measurement for powders, granules, and bulk solids on conveyor lines and process vessels. Built on a CNC-machined optical bench with multi-focal optics, dual ARM processing, and triple temperature compensation, it maintains ±0.1% accuracy across demanding industrial environments from -20°C to 60°C.",
    accuracy: "±0.1% moisture",
    method: "Near-Infrared (NIR) Spectroscopy",
    applications: [
      "Lithium battery cathode and anode materials",
      "Chemical: fertilizer, PVC, soda ash, solvents",
      "Food: flour, starch, sugar, grain drying lines",
      "Building materials: gypsum, glass, sand",
      "Pharmaceutical and tobacco processing",
      "Mining, coal, and energy production",
    ],
    features: [
      "In-situ installation — no sampling required",
      "No consumables; long-life light source (5+ years)",
      "60–80 measurements per second",
      "Self-cleaning function; maintenance-free operation",
      "Dustproof and waterproof industrial housing",
      "4–20mA, RS485/Modbus, and RS232 outputs",
      "7-inch color touchscreen HMI (optional)",
      "Aviation aluminum alloy enclosure",
    ],
    specifications: {
      "Measurement Range": "0% – 99% moisture",
      "Accuracy": "±0.1% (material dependent)",
      "Repeatability": "±0.02%",
      "Working Distance": "250 mm ± 50 mm",
      "Detection Rate": "60–80 times per second",
      "Response / Sampling": "Adjustable 1–80 s",
      "Operating Temperature": "-20°C to +60°C",
      "Communication": "4–20mA, RS485 (Modbus), RS232",
      "Display": "7-inch color touchscreen (optional)",
      "Enclosure": "Aviation aluminum alloy (SS / explosion-proof optional)",
      "Optical System": "CNC optical bench, gold-plated optics (98% reflectivity)",
    },
    image: siteImages.products.nirAnalyzer,
    gallery: [
      siteImages.products.nirAnalyzer,
      siteImages.products.nirSensor,
      siteImages.products.nirControllerBlue,
      siteImages.products.nirControllerSilver,
      siteImages.site.pipeInstallation,
    ],
  },
  {
    slug: "conveyor-belt-moisture-sensor",
    name: "NIR Conveyor Moisture Sensor",
    tagline: "Over-belt NIR sensing for continuous bulk material monitoring",
    description:
      "Mount above conveyor belts or material streams for continuous moisture profiling. The ALZRO NIR sensor head uses multi-focal point optics to maintain accuracy despite material height variation — ideal for grain, biomass, aggregates, and food processing conveyors.",
    accuracy: "±0.1% moisture",
    method: "Near-Infrared (NIR) — Over-Belt Mount",
    applications: [
      "Grain and food conveyor lines",
      "Biomass and wood chip transport",
      "Aggregate and mining belt monitoring",
      "Chemical granule conveying",
      "Recycling and bulk material handling",
    ],
    features: [
      "Adjustable mounting bracket for belt widths up to 2,000 mm",
      "Multi-focal optics for height variation compensation",
      "Real-time trend logging via RS485/Modbus",
      "Anodized aluminum housing for heat dissipation",
      "Low maintenance — no optical consumables",
    ],
    specifications: {
      "Measurement Range": "0% – 99% moisture",
      "Accuracy": "±0.1% (typical)",
      "Working Distance": "250 mm ± 50 mm",
      "Belt Width Coverage": "Up to 2,000 mm",
      "Detection Rate": "60–80 times per second",
      "Enclosure": "Aviation aluminum alloy, IP65",
      "Communication": "4–20mA, RS485 (Modbus RTU)",
      "Mounting": "Over-belt adjustable bracket",
    },
    image: siteImages.products.nirSensorMount,
    gallery: [
      siteImages.products.nirSensorMount,
      siteImages.products.nirSensor,
      siteImages.site.productionLine,
    ],
  },
  {
    slug: "microwave-moisture-system",
    name: "Industrial Moisture Control System",
    tagline: "Integrated sensor, display, and process interface for inline monitoring",
    description:
      "Complete moisture measurement system combining NIR sensor head, local display unit, and industrial I/O for closed-loop process control. Delivers real-time moisture readings with waveform trend display, alarm outputs, and seamless PLC/SCADA integration.",
    accuracy: "±0.1% moisture",
    method: "NIR Spectroscopy + Industrial HMI",
    applications: [
      "Reaction vessel and pipeline feed monitoring",
      "Distillation and solvent recovery lines",
      "Storage tank circulation pipelines",
      "Drying and dehydration process control",
      "Quality release and batch verification",
    ],
    features: [
      "Integrated local display with live moisture readout",
      "Waveform trend visualization on HMI",
      "High/low limit alarm outputs",
      "Modbus RTU 485 and dual 4–20mA outputs",
      "Upper computer monitoring software compatible",
      "Stainless steel and explosion-proof options",
    ],
    specifications: {
      "Measurement Range": "0% – 99% moisture",
      "Accuracy": "±0.1% (typical)",
      "Display Unit Size": "260 mm width (typical configuration)",
      "Control Enclosure": "240 × 200 × 100 mm (reference)",
      "Communication": "Modbus RTU 485, 4–20mA × 2, alarm I/O",
      "Software": "Operation and monitoring PC software",
      "Installation": "Inline, bypass, or vessel mount",
      "Enclosure Rating": "Industrial IP65 (application dependent)",
    },
    image: siteImages.products.nirControllerBlue,
    gallery: [
      siteImages.products.nirControllerBlue,
      siteImages.products.nirAnalyzer,
      siteImages.site.labSetup,
      siteImages.site.productionLine,
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
