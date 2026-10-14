import { productImages } from "@/lib/images";

export interface Product {
  slug: string;
  category: "online" | "laboratory";
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
  installationOverview?: string;
  applicationImage?: string;
  heroImage: string;
  image: string;
}

export const products: Product[] = [
  {
    slug: "online-nir-moisture-analyzer",
    category: "online",
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
    category: "online",
    name: "Microwave Moisture Measurement System",
    tagline: "Non-contact total-moisture measurement for conveyor belts and dense bulk solids",
    description:
      "Based on microwave attenuation by water molecules, this system measures total moisture content through the full material layer rather than only the surface. It is designed for conveyor-belt bulk solids, load compensation for changing bed depth, and reliable operation even where color, dust, water vapor, or sunlight make optical methods less dependable.",
    accuracy: "±0.1% – 0.3% moisture",
    method: "Microwave Transmission Technology",
    applications: [
      "Coal, coke, pulverized coal, and sinter-mix conveyor systems",
      "Sand, gravel, quartz powder, mortar, and ceramic raw-material lines",
      "Biomass, wood chips, sludge, compost, and recycling materials",
      "Non-ferrous concentrates, mineral sand, and alumina feed handling",
    ],
    features: [
      "Measures total moisture including surface and intrinsic moisture",
      "Not sensitive to material color, dust, water vapor, sunlight, pH, or conductivity",
      "Non-contact measurement avoids wear, sticking, and process interference",
      "Load or mass compensation improves accuracy on changing belt thickness",
      "Can measure through glass or ceramic bulkheads for high-temperature material",
      "Long-term stable operation with minimal maintenance requirements",
    ],
    specifications: {
      "Measurement Range": "0% – 80% moisture",
      "Typical Accuracy": "±0.1% – 0.3% depending on application",
      "Microwave Frequency": "2.45 GHz",
      "Sensor Protection": "IP68K",
      "Power Supply": "110 – 230 VAC standard, 24 VAC / 24 VDC optional",
      "Signal Outputs": "2 x 0(4)-20 mA current output, 4 digital outputs, 4 digital inputs",
      "Communication": "RS232 for PC, RS485 for PLC, optional Modbus RTU / Profibus DP / Profinet",
      "Compensation Sensor": "Ultrasonic distance sensor for load compensation",
      "Ambient Temperature": "0°C to 55°C",
      "Evaluation Unit Size": "200 x 280 x 300 mm",
      "Cabinet Protection": "IP65",
    },
    bestFor: [
      "Conveyor-belt bulk materials where moisture must be measured through the full bed depth",
      "Outdoor, dusty, or steam-heavy installations where optical methods are easily disturbed",
      "Dense, mixed, or high-load materials that need load compensation for accurate inline control",
      "Retrofit projects that need analog output plus PLC communication on existing process lines",
    ],
    benefits: [
      "Measure total moisture rather than only surface moisture on moving bulk material",
      "Maintain stable readings even when color, dust, or ambient light conditions change",
      "Reduce manual sampling and improve faster operator response on high-throughput lines",
      "Support tighter control of drying, batching, storage, and trade-settlement moisture targets",
    ],
    integration: [
      "Analog 0(4)-20 mA output for retrofit control loops and plant trending",
      "RS485 communication to PLC systems with optional Modbus RTU, Profibus DP, or Profinet",
      "Ultrasonic distance or belt-load compensation for varying material thickness",
      "Evaluation computer with internal calibration functions for in-process commissioning",
    ],
    referenceIndustries: [
      "Coal, coke, peat, and pulverized coal",
      "Sinter mix, mixed ore, quick lime, and boiler fuel systems",
      "Sand, gravel, quartz powder, mortar, and ceramic raw materials",
      "Bauxite, copper concentrate, nickel ore, and mineral sand",
      "Waste paper, wood chips, bamboo chips, biomass, sludge, and compost",
      "Tobacco bale and other bulk-mass storage applications",
    ],
    installationOverview:
      "Install the microwave transmitter and receiver on opposite sides of the conveyor or process chute so the signal passes through the full material layer. Use the evaluation computer for calibration during commissioning, and add ultrasonic or belt-load compensation where bed depth changes significantly across the process.",
    heroImage: "microwave-system",
    image: productImages["microwave-moisture-system"],
  },
  {
    slug: "halogen-moisture-analyzer-al-1201",
    category: "laboratory",
    name: "AL-1201 Halogen Moisture Analyzer",
    tagline:
      "Fast laboratory reference testing for quality control and inline sensor calibration",
    description:
      "The AL-1201 combines a 1 mg weighing system with a 450 W ring halogen heater to measure moisture by loss on drying. It gives production and laboratory teams a faster reference result for incoming inspection, process checks, method development, and verification of online NIR or microwave moisture measurements.",
    accuracy: "0.01% moisture readability",
    method: "Laboratory Halogen Loss-on-Drying",
    applications: [
      "Reference testing for online moisture analyzer calibration",
      "Incoming-material and finished-product quality control",
      "Plastics, resin pellets, powders, and chemical raw materials",
      "Grain, flour, feed, food, tea, and agricultural products",
      "Paper, tobacco, textiles, and pharmaceutical materials",
      "Rapid comparison with an established oven-drying method",
    ],
    features: [
      "120 g maximum sample capacity with 0.001 g mass readability",
      "0.01% moisture-content readability",
      "40°C to 230°C programmable temperature range",
      "450 W high-efficiency ring halogen heating system",
      "Gentle, standard, and fast heating programs",
      "Automatic, manual, and timed end-point modes",
      "5-inch HD touchscreen with drying curve and live test data",
      "Displays moisture, solids, dry weight, weight loss, time, and temperature",
      "Standard RS-232 interface for printer or PC connection",
    ],
    specifications: {
      Model: "AL-1201",
      "Measurement Principle": "Halogen loss on drying / thermogravimetric method",
      "Maximum Capacity": "120 g",
      "Mass Readability": "0.001 g (1 mg)",
      "Moisture Readability": "0.01%",
      "Moisture Display Range": "0.01% to 100%",
      "Weighing Sensor": "Germany HBM",
      "Temperature Range": "40°C to 230°C",
      "Heating Source": "450 W high-efficiency ring halogen lamp",
      "Heating Programs": "Gentle, standard, fast",
      "End-Point Modes": "Automatic, manual, timed",
      Display: "5-inch HD touchscreen",
      Interface: "RS-232 standard; USB customization available",
      "Sample Pan": "90 mm stainless-steel pan",
      "Operating Environment": "10°C to 40°C",
      "Product Size": "370 × 215 × 195 mm",
      "Packing Size": "445 × 300 × 330 mm",
      Weight: "3.8 kg net / 4.8 kg gross",
    },
    bestFor: [
      "Plants that need faster reference checks than a conventional drying oven",
      "Online moisture projects that require routine calibration and verification samples",
      "Laboratories that test multiple materials with saved heating and end-point methods",
      "Quality teams that need printed or computer-recorded test results",
    ],
    benefits: [
      "Shorten routine moisture checks from hours to minutes for many suitable samples",
      "Create a repeatable reference method for commissioning online analyzers",
      "View the drying curve and live moisture trend during each test",
      "Reduce manual calculations with automatic moisture and solids reporting",
    ],
    integration: [
      "Standard RS-232 connection for compatible printers and PCs",
      "Optional customized USB communication",
      "Use alongside oven-method samples when establishing a material test method",
      "Pair with ALZRO online NIR or microwave systems for calibration checks",
    ],
    referenceIndustries: [
      "Plastics and polymer pellets",
      "Grain, food, flour, and feed",
      "Powders and chemical raw materials",
      "Paper, tobacco, and textiles",
      "Pharmaceutical and laboratory testing",
      "Online analyzer commissioning and verification",
    ],
    installationOverview:
      "Place the analyzer on a stable, level laboratory bench away from vibration and strong airflow. Prepare a representative sample, spread it evenly across the stainless-steel pan, and select a validated heating temperature and end-point method. For online sensor calibration, collect the reference sample at the measuring point and keep the sampling, preparation, and test method consistent.",
    applicationImage:
      "/images/site-real/halogen-moisture-analyzer-laboratory-calibration.jpg",
    heroImage: "halogen-analyzer",
    image: productImages["halogen-moisture-analyzer-al-1201"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
