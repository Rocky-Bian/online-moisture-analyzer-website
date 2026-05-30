export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags?: string[];
}

export const faqCategories = [
  "General",
  "Technology",
  "Applications",
  "Selection",
  "Integration",
] as const;

export const faqs: FAQ[] = [
  {
    id: "what-is-online-moisture-analyzer",
    question: "What is an online moisture analyzer?",
    answer:
      "An online moisture analyzer is an industrial instrument that continuously measures moisture content in materials during production processes, without stopping the line or taking manual samples. Unlike laboratory methods that provide periodic spot checks, online analyzers deliver real-time data that enables immediate process adjustments, reducing waste and improving product consistency. ALZRO systems use NIR spectroscopy and microwave sensing technologies to measure moisture inline in powders, granules, slurries, and bulk materials on conveyor belts.",
    category: "General",
    tags: ["online moisture analyzer", "industrial moisture measurement"],
  },
  {
    id: "how-nir-moisture-measurement-works",
    question: "How does NIR moisture measurement work?",
    answer:
      "Near-Infrared (NIR) moisture measurement works by illuminating the material with near-infrared light and analyzing the reflected or transmitted spectrum. Water molecules absorb specific NIR wavelengths (primarily around 1450nm and 1940nm), creating characteristic absorption peaks. The analyzer compares the measured spectrum against calibration models to determine moisture content. NIR is non-destructive, non-contact, and suitable for powders, granules, and coatings — typically achieving ±0.1% accuracy with 60–120 measurements per second, high-speed sampling up to 1,000,000 samples/sec, and 16-bit ADC signal processing. ALZRO NIR systems include AI-assisted calibration that adapts to material variations over time.",
    category: "Technology",
    tags: ["NIR", "near-infrared", "moisture measurement"],
  },
  {
    id: "online-vs-laboratory-moisture-analyzer",
    question: "Online vs laboratory moisture analyzer — what's the difference?",
    answer:
      "Laboratory moisture analyzers (such as Karl Fischer titration or loss-on-drying ovens) provide highly accurate point measurements but require sample collection, transport, and analysis time — typically 15 minutes to several hours per sample. Online analyzers measure continuously during production, providing data every second. While laboratory methods may offer slightly higher absolute accuracy for specific applications, online systems enable real-time process control that dramatically reduces waste and improves consistency. Most industrial operations use online analyzers for process control and laboratory methods for periodic verification.",
    category: "General",
    tags: ["online vs laboratory", "moisture analysis"],
  },
  {
    id: "lithium-battery-moisture-measurement",
    question: "Why is moisture measurement critical for lithium battery materials?",
    answer:
      "Moisture in lithium battery materials causes multiple critical issues: it degrades cathode active materials (NMC, LFP) reducing capacity, creates safety hazards with lithium metal reactions, affects slurry viscosity causing coating defects, and reduces cell cycle life. Industry standards typically require moisture below 200-500 ppm for electrode materials. ALZRO online NIR analyzers provide continuous monitoring at coating and drying stages, enabling closed-loop control that maintains moisture within specification throughout high-speed production lines.",
    category: "Applications",
    tags: ["lithium battery", "cathode", "anode", "moisture control"],
  },
  {
    id: "how-to-choose-industrial-moisture-analyzer",
    question: "How to choose an industrial moisture analyzer?",
    answer:
      "Key selection criteria include: (1) Material type — powders, granules, slurries, or bulk on belts; (2) Moisture range — typical operating range and required accuracy; (3) Process conditions — temperature, dust, chemical exposure, and hazardous area requirements; (4) Integration needs — PLC, SCADA, DCS connectivity (Modbus, Profibus, OPC UA); (5) Measurement method — NIR for surface/near-surface, microwave for deep penetration; (6) Installation constraints — space, mounting options, and maintenance access. ALZRO engineers provide free application assessments to recommend the optimal solution for your process.",
    category: "Selection",
    tags: ["selection guide", "industrial moisture analyzer"],
  },
  {
    id: "microwave-vs-nir-moisture",
    question: "Microwave vs NIR moisture measurement — which is better?",
    answer:
      "Neither technology is universally superior — the choice depends on your application. NIR excels at surface and near-surface moisture measurement of powders and coatings with fast response times and non-contact operation. Microwave technology penetrates deeper into bulk materials (up to 300mm), making it ideal for dense materials, high-moisture applications, and conveyor belt monitoring. NIR typically achieves ±0.1% accuracy on homogeneous materials; microwave achieves ±0.15-0.2% with better performance on heterogeneous bulk materials. Many installations combine both technologies at different process stages.",
    category: "Technology",
    tags: ["microwave", "NIR", "comparison"],
  },
  {
    id: "plc-scada-integration",
    question: "Can ALZRO moisture analyzers integrate with PLC and SCADA systems?",
    answer:
      "Yes. All ALZRO analyzers support industrial communication protocols including Modbus RTU/TCP, Profibus DP, OPC UA, and 4-20mA analog outputs. This enables direct integration with Siemens, Allen-Bradley, Schneider Electric PLCs and SCADA systems such as WinCC, FactoryTalk, and Ignition. Our systems provide configurable alarm thresholds, trend data, and diagnostic information through standard industrial interfaces. We also offer pre-configured integration packages for common DCS platforms.",
    category: "Integration",
    tags: ["PLC", "SCADA", "Modbus", "OPC UA"],
  },
  {
    id: "calibration-maintenance",
    question: "How often do ALZRO analyzers require calibration and maintenance?",
    answer:
      "ALZRO analyzers feature AI-assisted calibration that continuously adapts to material and environmental changes, significantly reducing manual calibration frequency. Typical maintenance includes: annual verification against reference samples (recommended), quarterly optical window cleaning (NIR systems), and firmware updates as available. The self-diagnostic system monitors sensor health and alerts operators before performance degradation. Most customers report less than 4 hours of maintenance per year per instrument.",
    category: "General",
    tags: ["calibration", "maintenance"],
  },
];

export function getFAQ(id: string): FAQ | undefined {
  return faqs.find((f) => f.id === id);
}

export function getFAQsByCategory(category: string): FAQ[] {
  return faqs.filter((f) => f.category === category);
}

export function getFeaturedFAQs(count = 5): FAQ[] {
  return faqs.slice(0, count);
}
