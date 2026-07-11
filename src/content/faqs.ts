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
      "An online moisture analyzer is an industrial instrument that continuously measures moisture content during production, without stopping the line for repeated manual sampling. Unlike laboratory methods that provide delayed spot checks, online analyzers give process teams real-time values they can use to adjust drying, feeding, batching, or quality control earlier. Typical applications include powders, granules, bulk solids, and conveyor-based material handling.",
    category: "General",
    tags: ["online moisture analyzer", "industrial moisture measurement"],
  },
  {
    id: "how-nir-moisture-measurement-works",
    question: "How does NIR moisture measurement work?",
    answer:
      "Near-infrared moisture measurement works by shining NIR light onto the material and analyzing how water-related absorption changes the returned optical signal. The instrument converts those changes into an electrical signal and uses a calibration model to estimate moisture content. In practical terms, NIR is valued because it is non-contact, fast, and suitable for powders, granules, and exposed material surfaces in continuous production.",
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
    id: "drying-process-moisture-measurement",
    question: "Why is online moisture measurement important in drying processes?",
    answer:
      "Drying processes often change faster than laboratory checks can keep up with. In applications such as starch, baking soda, calcium carbonate, ceramics, PVC additives, and washed sand, moisture affects product quality, energy cost, flowability, storage stability, and downstream performance. Online measurement helps operators see those changes during production instead of after the product has already moved downstream.",
    category: "Applications",
    tags: ["drying", "process control", "moisture control"],
  },
  {
    id: "how-to-choose-industrial-moisture-analyzer",
    question: "How to choose an industrial moisture analyzer?",
    answer:
      "Key selection points include: material type, expected moisture range, required accuracy, installation location, environmental conditions, and how you want to use the signal afterward. NIR is often preferred for non-contact measurement from above the material, while microwave is useful when deeper penetration into the bulk material is needed. Output needs such as RS232, 4-20mA, Ethernet, or other plant integration should also be confirmed early.",
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
    question: "Can online moisture analyzers integrate with PLC and SCADA systems?",
    answer:
      "Yes. Many online moisture analyzers can share data with PLC, SCADA, or plant-network systems through interfaces such as RS232, 4-20mA, Ethernet, or other industrial protocols depending on configuration. Integration is most useful when the plant wants to trend moisture, alarm on deviations, or use the signal to support dryer or batching adjustments.",
    category: "Integration",
    tags: ["PLC", "SCADA", "Modbus", "OPC UA"],
  },
  {
    id: "calibration-maintenance",
    question: "How often do online NIR analyzers require calibration and maintenance?",
    answer:
      "The exact schedule depends on the application, dust level, and material behavior. In general, plants should plan for regular verification against reference samples, periodic cleaning of optical surfaces or windows, and routine inspection of mounting stability and signal performance. The more difficult the environment, the more important it is to include the analyzer in normal preventive maintenance planning.",
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
