export interface Industry {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  painPoints: string[];
  whyMoistureMatters: string[];
  processSteps: { title: string; description: string }[];
  recommendedProducts: string[];
  caseStudy?: {
    title: string;
    challenge: string;
    solution: string;
    result: string;
  };
  image: string;
}

export const industries: Industry[] = [
  {
    slug: "lithium-battery",
    name: "Lithium Battery Materials",
    shortDescription:
      "Precision moisture control for cathode, anode, and electrolyte material production.",
    description:
      "Moisture content in lithium battery raw materials directly impacts cell performance, safety, and cycle life. ALZRO online moisture analyzers provide continuous inline measurement throughout electrode coating, drying, and powder handling processes.",
    painPoints: [
      "Electrode coating defects from inconsistent moisture levels",
      "Safety risks from moisture in lithium compounds",
      "Batch-to-batch quality variation in cathode materials",
      "Downtime from offline laboratory testing delays",
      "Difficulty monitoring moisture in high-speed coating lines",
    ],
    whyMoistureMatters: [
      "Excess moisture degrades cathode active materials and reduces battery capacity",
      "Moisture in anode graphite affects slurry viscosity and coating uniformity",
      "Real-time moisture data enables closed-loop dryer control",
      "Continuous monitoring prevents out-of-spec material from reaching downstream processes",
    ],
    processSteps: [
      { title: "Raw Material Intake", description: "Verify incoming powder moisture before mixing" },
      { title: "Slurry Preparation", description: "Monitor moisture during mixing and degassing" },
      { title: "Coating & Drying", description: "Inline NIR measurement during electrode coating" },
      { title: "Calendering", description: "Final moisture verification before cell assembly" },
      { title: "Quality Release", description: "Automated pass/fail based on moisture thresholds" },
    ],
    recommendedProducts: ["online-nir-moisture-analyzer", "microwave-moisture-system"],
    caseStudy: {
      title: "GWh-Scale Cathode Production Line",
      challenge:
        "A leading battery material manufacturer experienced 3.2% yield loss due to moisture-related coating defects on their NMC cathode line.",
      solution:
        "ALZRO deployed 12 NIR-5000 analyzers across coating and drying stages with AI-assisted calibration for NMC-specific moisture profiles.",
      result:
        "Yield improved by 2.8%, offline lab testing reduced by 70%, and coating defect rate dropped from 4.1% to 0.9% within 6 months.",
    },
    image: "lithium-battery",
  },
  {
    slug: "powder-processing",
    name: "Powder Processing",
    shortDescription: "Continuous moisture monitoring for spray drying, fluid bed, and milling operations.",
    description:
      "Powder moisture directly affects flowability, compaction, and final product quality. ALZRO systems integrate seamlessly into spray dryers, fluid bed processors, and pneumatic conveying lines.",
    painPoints: [
      "Caking and agglomeration in storage silos",
      "Inconsistent powder flow in pneumatic systems",
      "Over-drying leading to energy waste",
      "Product quality variation between production shifts",
    ],
    whyMoistureMatters: [
      "Moisture controls powder flowability and handling characteristics",
      "Optimal moisture reduces energy consumption in drying processes",
      "Real-time data enables predictive process adjustments",
    ],
    processSteps: [
      { title: "Feed Preparation", description: "Monitor incoming material moisture" },
      { title: "Drying Process", description: "Closed-loop dryer control based on moisture feedback" },
      { title: "Cooling & Conveying", description: "Inline measurement during pneumatic transport" },
      { title: "Packaging", description: "Final moisture verification before packaging" },
    ],
    recommendedProducts: ["online-nir-moisture-analyzer", "conveyor-belt-moisture-sensor"],
    image: "powder-processing",
  },
  {
    slug: "food-production",
    name: "Food Production",
    shortDescription: "Hygienic moisture measurement for food processing and packaging lines.",
    description:
      "Food manufacturers rely on precise moisture control for shelf life, texture, and regulatory compliance. ALZRO analyzers meet food-grade requirements with stainless steel construction and easy-clean designs.",
    painPoints: [
      "Shelf life variation due to moisture inconsistency",
      "Regulatory compliance for moisture content labeling",
      "Product waste from over-drying",
      "Cross-contamination risks with sampling methods",
    ],
    whyMoistureMatters: [
      "Moisture content determines shelf stability and microbial safety",
      "Consistent moisture ensures uniform product texture and taste",
      "Non-contact measurement eliminates contamination risk",
    ],
    processSteps: [
      { title: "Ingredient Mixing", description: "Verify moisture in raw ingredients" },
      { title: "Baking/Drying", description: "Real-time moisture feedback during thermal processing" },
      { title: "Cooling", description: "Monitor moisture equilibration" },
      { title: "Quality Control", description: "Automated release based on moisture specifications" },
    ],
    recommendedProducts: ["online-nir-moisture-analyzer", "microwave-moisture-system"],
    image: "food-production",
  },
  {
    slug: "chemical-industry",
    name: "Chemical Industry",
    shortDescription: "Robust moisture analysis for chemical reactors, dryers, and bulk handling.",
    description:
      "Chemical processes demand reliable moisture measurement in harsh environments. ALZRO systems offer explosion-proof options and corrosion-resistant materials for demanding chemical applications.",
    painPoints: [
      "Moisture-sensitive reactions producing off-spec products",
      "Hazardous environment requirements for instrumentation",
      "Corrosive media damaging conventional sensors",
      "Integration complexity with DCS/SCADA systems",
    ],
    whyMoistureMatters: [
      "Water content affects reaction kinetics and product purity",
      "Moisture control prevents unwanted side reactions",
      "Continuous monitoring reduces laboratory analysis costs",
    ],
    processSteps: [
      { title: "Feed Monitoring", description: "Verify raw material moisture before reactor feed" },
      { title: "Reaction Control", description: "Monitor moisture during exothermic processes" },
      { title: "Drying & Separation", description: "Optimize dryer operation with inline feedback" },
      { title: "Product Finishing", description: "Final moisture certification for shipment" },
    ],
    recommendedProducts: ["microwave-moisture-system", "online-nir-moisture-analyzer"],
    image: "chemical-industry",
  },
  {
    slug: "biomass-wood",
    name: "Biomass & Wood",
    shortDescription: "Belt-mounted moisture sensors for biomass, wood chips, and pellet production.",
    description:
      "Biomass moisture content affects combustion efficiency, pellet quality, and energy output. ALZRO conveyor belt sensors provide continuous measurement across the full belt width.",
    painPoints: [
      "Inconsistent combustion from variable moisture feedstock",
      "Pellet quality failures from incorrect moisture levels",
      "Manual sampling delays in high-volume operations",
      "Energy waste from overdrying wood chips",
    ],
    whyMoistureMatters: [
      "Optimal moisture maximizes combustion efficiency and energy output",
      "Pellet durability requires precise moisture control during production",
      "Real-time belt measurement eliminates sampling gaps",
    ],
    processSteps: [
      { title: "Incoming Inspection", description: "Measure moisture at receiving conveyor" },
      { title: "Drying Process", description: "Control dryer based on real-time moisture data" },
      { title: "Pelletizing", description: "Verify moisture before pellet press feed" },
      { title: "Storage & Dispatch", description: "Final moisture check before shipment" },
    ],
    recommendedProducts: ["conveyor-belt-moisture-sensor"],
    image: "biomass-wood",
  },
  {
    slug: "conveyor-monitoring",
    name: "Conveyor Belt Monitoring",
    shortDescription: "Continuous over-belt moisture measurement for any bulk material transport.",
    description:
      "Universal conveyor belt moisture monitoring for mining, aggregates, recycling, and general bulk material handling operations.",
    painPoints: [
      "No visibility into moisture during material transport",
      "Quality disputes at delivery due to moisture variation",
      "Blending operations lacking real-time moisture data",
      "Dust and environmental interference with sensors",
    ],
    whyMoistureMatters: [
      "Transport moisture affects downstream processing and pricing",
      "Real-time data enables dynamic blending adjustments",
      "Continuous monitoring replaces periodic grab sampling",
    ],
    processSteps: [
      { title: "Loading Point", description: "Initial moisture measurement at feed" },
      { title: "Mid-Transport", description: "Continuous monitoring along belt length" },
      { title: "Blending Station", description: "Moisture-based blending control" },
      { title: "Discharge", description: "Final verification before storage or processing" },
    ],
    recommendedProducts: ["conveyor-belt-moisture-sensor"],
    image: "conveyor-monitoring",
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getIndustrySlugs(): string[] {
  return industries.map((i) => i.slug);
}
