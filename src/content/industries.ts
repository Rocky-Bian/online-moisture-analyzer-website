import { industryImages } from "@/lib/images";

export interface Industry {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  painPoints: string[];
  whyMoistureMatters: string[];
  applicationFocus: string[];
  installationPoints: string[];
  processSteps: { title: string; description: string }[];
  fieldNotes?: string[];
  gallery?: { src: string; alt: string }[];
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
    slug: "starch-corn-processing",
    name: "Starch & Corn Deep Processing",
    shortDescription:
      "Inline moisture control for corn starch, modified starch, dextrin, and related deep-processing lines.",
    description:
      "Starch products are highly hygroscopic, and moisture swings directly affect drying efficiency, storage stability, and finished product qualification. Online NIR monitoring helps plants replace delayed manual checks with real-time control at the dryer discharge, screw conveyor, or packaging stage.",
    painPoints: [
      "Manual sampling is too slow for fast-changing drying conditions",
      "Over-drying wastes energy and can hurt starch product quality",
      "High finished-moisture causes caking, spoilage, and storage issues",
      "Operators rely on experience instead of continuous moisture data",
      "Quality staff must shuttle between drying and packaging sections",
    ],
    whyMoistureMatters: [
      "Real-time moisture values help stabilize air-flow drying and screw-feed adjustments",
      "Better endpoint control reduces qualified-product loss from moisture drift",
      "Continuous monitoring helps prevent starch re-absorption and storage deterioration",
      "Fast feedback lets production teams improve both output and consistency",
    ],
    applicationFocus: [
      "Applicable to corn starch, pea starch, modified starch, and dextrin finishing sections",
      "Supports continuous drying control where moisture changes faster than laboratory feedback",
      "Helps plants move from delayed sampling to live process regulation at the dryer outlet",
    ],
    installationPoints: [
      "Dryer discharge after hot-air or air-flow drying",
      "Screw conveyor section between drying and packaging",
      "Sight-glass or non-contact observation port above enclosed powder transfer",
    ],
    processSteps: [
      { title: "Wet Material Feed", description: "Track incoming moisture before thermal drying" },
      { title: "Dryer Outlet", description: "Measure moisture continuously during air-flow or hot-air drying" },
      { title: "Screw Conveyor", description: "Check product moisture during transfer to downstream steps" },
      { title: "Packaging Buffer", description: "Verify final moisture before packing or storage" },
      { title: "Quality Release", description: "Use online data to support shift-level process decisions" },
    ],
    fieldNotes: [
      "The supplier materials show corn starch projects using the analyzer after drying to replace repeated manual oven checks.",
      "For modified starch and dextrin lines, stable final moisture helps balance reaction completion, anti-caking performance, and storage safety.",
      "Real-time values give operators a clear target for airflow, feed rate, and residence time adjustments during different shifts.",
    ],
    gallery: [
      {
        src: industryImages["starch-corn-processing"],
        alt: "Corn starch production line with online NIR moisture analyzer installation",
      },
      {
        src: "/images/site-real/online-nir-moisture-analyzer-inspection-window.jpg",
        alt: "Non-contact inspection window installation for powder moisture monitoring",
      },
    ],
    recommendedProducts: ["online-nir-moisture-analyzer", "microwave-moisture-system"],
    caseStudy: {
      title: "Corn Starch Drying Application",
      challenge:
        "Without an online moisture analyzer, starch plants depend on manual sampling and operator experience, which makes dryer control slow and inconsistent.",
      solution:
        "Install the online NIR moisture analyzer at the screw conveyor or dryer discharge for continuous moisture feedback during production.",
      result:
        "Real-time water content monitoring helps improve starch qualification rate, reduce operator workload, and support more stable air-drying control.",
    },
    image: industryImages["starch-corn-processing"],
  },
  {
    slug: "grain-noodle-processing",
    name: "Grain, Dextrin & Noodle Processing",
    shortDescription: "Continuous moisture monitoring for pea starch, dextrin, dough sheet, and dried noodle production.",
    description:
      "In grain deep processing and noodle drying, moisture balance drives texture, drying stability, and storage safety. Online measurement makes it easier to control gelatinization, thermal decomposition, internal diffusion, and final drying without depending only on lab checks or operator judgement.",
    painPoints: [
      "Dextrin reactions become unstable when moisture is too low or too high",
      "Uneven drying in noodle lines can cause brittle or cracked product",
      "High final moisture increases caking and storage risk",
      "Over-drying raises energy cost and can create safety issues in dusty products",
    ],
    whyMoistureMatters: [
      "Moisture directly affects starch gelatinization and hydrolysis efficiency",
      "Balanced drying helps preserve noodle strength, texture, and cooking quality",
      "Continuous measurement reduces energy waste from overly conservative drying",
    ],
    applicationFocus: [
      "Covers pea starch and dextrin thermal conversion as well as noodle-sheet drying lines",
      "Useful where product texture, brittleness, and shelf stability depend on tight moisture control",
      "Helps keep drying curves consistent across conveyor, tunnel, or staged drying zones",
    ],
    installationPoints: [
      "Above the noodle or sheet conveyor after the main drying section",
      "At the final transfer stage before packaging or silo storage",
      "At enclosed powder outlets for dextrin and starch derivative products",
    ],
    processSteps: [
      { title: "Raw Mix", description: "Verify initial moisture before reaction or drying" },
      { title: "Reaction / Forming", description: "Track moisture through gelatinization, sheet forming, or processing" },
      { title: "Drying Tunnel", description: "Monitor moisture removal to avoid surface hardening and internal cracking" },
      { title: "Final Product", description: "Confirm stable moisture before storage and packing" },
    ],
    fieldNotes: [
      "The PPT highlights that uneven noodle drying leads to cracking, low toughness, and unstable cooking quality.",
      "For dextrin products, insufficient or excessive residual moisture changes powder flowability, packing behavior, and storage life.",
      "Continuous online readings help reduce energy waste from over-drying while protecting product appearance and texture.",
    ],
    gallery: [
      {
        src: industryImages["grain-noodle-processing"],
        alt: "Noodle drying conveyor with online NIR moisture monitoring",
      },
      {
        src: "/images/site-real/online-nir-moisture-analyzer-conveyor-installation.jpg",
        alt: "Conveyor installation showing probe and display for online moisture control",
      },
    ],
    recommendedProducts: ["online-nir-moisture-analyzer", "microwave-moisture-system"],
    image: industryImages["grain-noodle-processing"],
  },
  {
    slug: "soda-ash-bicarbonate-calcium-carbonate",
    name: "Soda Ash, Baking Soda & Calcium Carbonate",
    shortDescription: "Stable moisture control for soda ash, bicarbonate, and nano calcium carbonate production.",
    description:
      "For soda ash, sodium bicarbonate, and calcium carbonate, moisture influences caking, whiteness, drying cost, and downstream product stability. Online NIR monitoring provides a practical way to improve quality while reducing excessive drying and manual inspection.",
    painPoints: [
      "Baking soda moisture can fluctuate widely and is slow to test offline",
      "Excess drying in calcium carbonate can cause additive scorching and yellowing",
      "High moisture causes agglomeration, poor flowability, and reduced whiteness",
      "Plants need faster feedback than long oven methods can provide",
    ],
    whyMoistureMatters: [
      "Stable moisture helps reduce product clumping and process instability",
      "Controlled drying lowers the risk of quality loss from overheating",
      "Realtime data supports better balance between energy use and finished quality",
    ],
    applicationFocus: [
      "Suitable for soda ash, sodium bicarbonate, and nano calcium carbonate powder lines",
      "Supports drying sections where moisture affects whiteness, caking, and finished powder flow",
      "Improves process visibility in plants that currently depend on long offline testing cycles",
    ],
    installationPoints: [
      "Immediately after dryer discharge or fluidized bed outlet",
      "At transfer augers or closed conveying pipelines before packaging",
      "At final powder collection points where rebound moisture must be monitored",
    ],
    processSteps: [
      { title: "Wet Cake / Crystals", description: "Measure upstream material before dehydration" },
      { title: "Drying Stage", description: "Monitor moisture continuously during hot-air or process drying" },
      { title: "Cooling & Transfer", description: "Track moisture to prevent rebound and clumping" },
      { title: "Final Powder Control", description: "Hold product inside target moisture before packing" },
    ],
    fieldNotes: [
      "The supplier case for nano calcium carbonate emphasizes that over-drying can scorch additives, create yellowing, and reduce whiteness.",
      "For baking soda and soda ash, residual moisture directly influences storage stability, caking tendency, and product appearance.",
      "Online measurement lets operators hold the drying endpoint closer to target instead of waiting for delayed lab confirmation.",
    ],
    gallery: [
      {
        src: industryImages["soda-ash-bicarbonate-calcium-carbonate"],
        alt: "Nano calcium carbonate processing line with online NIR moisture measurement",
      },
      {
        src: "/images/site-real/online-nir-moisture-analyzer-process-equipment.jpg",
        alt: "Industrial process equipment used for continuous moisture monitoring in powder plants",
      },
    ],
    recommendedProducts: ["online-nir-moisture-analyzer", "microwave-moisture-system"],
    caseStudy: {
      title: "Nano Calcium Carbonate Drying Control",
      challenge:
        "Poor moisture control can lead to over-drying, additive scorching, yellowing, reduced whiteness, and downstream agglomeration.",
      solution:
        "Use online NIR measurement to keep drying in the target range instead of relying on delayed manual testing.",
      result:
        "Plants can stabilize moisture, improve whiteness and flowability, and reduce unnecessary drying cost.",
    },
    image: industryImages["soda-ash-bicarbonate-calcium-carbonate"],
  },
  {
    slug: "ceramics-mineral-powders",
    name: "Ceramics & Mineral Powders",
    shortDescription: "Moisture control for ceramic raw materials, spray drying, and powder finishing.",
    description:
      "Ceramic powder production depends on stable evaporation and particle formation during spray drying. Inline moisture monitoring helps reduce hollow particles, stabilize granule structure, and improve green body quality before pressing and firing.",
    painPoints: [
      "Spray drying moisture drift changes particle shape and pore structure",
      "Too much variation in evaporation rate hurts granule hardness and fineness",
      "Manual checks cannot respond fast enough to process swings",
      "Inconsistent moisture lowers brick body quality and downstream yield",
    ],
    whyMoistureMatters: [
      "Stable moisture helps maintain target granule size and surface hardness",
      "Better drying control improves powder quality before forming",
      "Online data supports machine replacement for manual sampling and lowers energy loss",
    ],
    applicationFocus: [
      "Designed for ceramic body powders, mineral powders, and spray-dried granular materials",
      "Supports quality control when particle size, granule density, and green strength are moisture-sensitive",
      "Provides faster feedback than manual sampling during spray drying and powder conditioning",
    ],
    installationPoints: [
      "At spray dryer powder discharge or collection section",
      "At intermediate hoppers feeding press or granule storage",
      "At conveyor transfer points for stabilized finished powder",
    ],
    processSteps: [
      { title: "Slurry Feed", description: "Monitor slurry consistency before atomization" },
      { title: "Spray Drying", description: "Track moisture evaporation inside the drying process" },
      { title: "Powder Collection", description: "Confirm granule moisture before storage" },
      { title: "Press Feed", description: "Maintain stable moisture for forming quality" },
    ],
    fieldNotes: [
      "The PPT notes that unstable spray-dried moisture changes pore structure, hollow-particle formation, and powder fineness.",
      "Keeping the final powder within range helps improve brick-body compactness, forming stability, and downstream yield.",
      "This application benefits from continuous monitoring where production output is large and process swings are costly.",
    ],
    gallery: [
      {
        src: industryImages["ceramics-mineral-powders"],
        alt: "Ceramic and mineral powder production equipment for online moisture measurement",
      },
      {
        src: "/images/site-real/online-nir-moisture-analyzer-inspection-window.jpg",
        alt: "Inspection window setup for non-contact measurement of ceramic or mineral powders",
      },
    ],
    recommendedProducts: ["microwave-moisture-system", "online-nir-moisture-analyzer"],
    image: industryImages["ceramics-mineral-powders"],
  },
  {
    slug: "pvc-additives-fine-chemicals",
    name: "PVC Additives & Fine Chemicals",
    shortDescription: "Inline moisture feedback for PVC additives, rubber additives, pigment intermediates, silica, and PAM.",
    description:
      "Moisture control is a critical variable in many fine chemical and additive lines where drying cost, powder flow, reaction efficiency, and storage stability all depend on controlled residual water content. Online NIR systems help operators protect product quality while reducing manual exposure and lab workload.",
    painPoints: [
      "PVC and additive quality drops when residual moisture is unstable",
      "Over-drying raises dust, emission, and safety concerns",
      "Rubber additive operators face toxic-solvent and manual sampling exposure",
      "Silica and PAM can cake, degrade, or create dust hazards if moisture is not controlled",
    ],
    whyMoistureMatters: [
      "Online control supports product consistency and tighter final-moisture windows",
      "Less over-drying means lower energy consumption and lower emissions",
      "Continuous feedback helps prevent caking, brittleness, or reduced functional performance",
    ],
    applicationFocus: [
      "Covers PVC additives, rubber additives, dye intermediates, silica, and polyacrylamide powder production",
      "Useful in fine-chemical lines where residual moisture affects downstream performance and safe handling",
      "Reduces operator exposure in applications where manual sampling is frequent or harsh",
    ],
    installationPoints: [
      "At flash dryer, fluid-bed dryer, or hot-air dryer outlets",
      "Above screw conveyors and enclosed powder transfer equipment",
      "At final packing or buffer-bin entry points for residual moisture confirmation",
    ],
    processSteps: [
      { title: "Reaction / Wet Feed", description: "Check upstream material condition before drying" },
      { title: "Primary Dryer", description: "Measure moisture through flash, fluid bed, or hot-air drying" },
      { title: "Powder Transfer", description: "Track residual moisture before storage or blending" },
      { title: "Final Packaging", description: "Confirm stable moisture for safe handling and shipment" },
    ],
    fieldNotes: [
      "The supplier material shows PVC additive and fine-chemical applications where stable moisture improves powder uniformity and reduces unnecessary drying energy.",
      "Rubber additive projects particularly benefit from less manual sampling in dusty or solvent-related production environments.",
      "For silica and polyacrylamide, better endpoint control helps reduce caking, dust risk, and performance drift in storage and use.",
    ],
    gallery: [
      {
        src: industryImages["pvc-additives-fine-chemicals"],
        alt: "PVC additive production line with online moisture analyzer field application",
      },
      {
        src: "/images/site-real/online-nir-moisture-analyzer-polymer-powder-line.jpg",
        alt: "Polymer or fine chemical powder line with online moisture measurement equipment",
      },
    ],
    recommendedProducts: ["online-nir-moisture-analyzer", "microwave-moisture-system"],
    caseStudy: {
      title: "PVC Additive Moisture Self-Control",
      challenge:
        "Imported brands are costly, while unstable moisture causes product variation and unnecessary energy use.",
      solution:
        "Deploy online moisture monitoring on the production line to hold final moisture inside a tighter control band.",
      result:
        "Reference projects report stable moisture control, energy savings, and improved powder quality.",
    },
    image: industryImages["pvc-additives-fine-chemicals"],
  },
  {
    slug: "sand-sinter-building-materials",
    name: "Sand, Sinter Mix & Building Materials",
    shortDescription: "Real-time moisture measurement for washed sand, sinter mix, wood fiber, and related bulk solids.",
    description:
      "Washed sand, sinter mix, wood fiber, and similar bulk materials all need better moisture visibility to protect mixing accuracy, sintering efficiency, board quality, or drying safety. Inline monitoring helps operators adjust faster than periodic sampling can.",
    painPoints: [
      "Sand moisture changes with weather and disrupts concrete water balance",
      "Sinter mix moisture directly affects granulation and bed permeability",
      "Wood fiber moisture outside the target range causes later board deformation or brittleness",
      "Harsh, dusty environments make stable manual testing difficult",
    ],
    whyMoistureMatters: [
      "Continuous values help keep batching and mixing closer to target",
      "Better control improves production efficiency and final product quality",
      "Replacing periodic checks reduces labor and improves consistency in harsh environments",
    ],
    applicationFocus: [
      "Suitable for washed sand, sinter mix, wood fiber, and other bulk materials with variable surface moisture",
      "Supports batching, granulation, drying, and conditioning processes where moisture swings create large downstream errors",
      "Works well in heavy-duty sites that need faster control than periodic grab-sample testing",
    ],
    installationPoints: [
      "Above conveyor belts carrying washed sand or sinter mix",
      "At bulk transfer points before batching, pressing, or granulation",
      "At dryer outlets or storage feed points for fiber and board raw materials",
    ],
    processSteps: [
      { title: "Primary Transfer", description: "Measure bulk material at feed or conveyor stage" },
      { title: "Drying / Mixing", description: "Track moisture during drying, granulation, or blending" },
      { title: "Final Conditioning", description: "Adjust water addition or drying intensity from live values" },
      { title: "Dispatch / Use", description: "Verify moisture before concrete mixing, sintering, or pressing" },
    ],
    fieldNotes: [
      "The PPT's washed-sand case focuses on concrete batching accuracy, where unstable sand moisture changes the effective water-cement ratio.",
      "For sinter mix, moisture directly impacts granulation behavior, permeability, and stable furnace charging.",
      "Wood-fiber and board-material applications use online moisture data to avoid warping, brittleness, and later product deformation.",
    ],
    gallery: [
      {
        src: industryImages["sand-sinter-building-materials"],
        alt: "Washed sand conveyor application with real online moisture monitoring",
      },
      {
        src: "/images/site-real/online-nir-moisture-analyzer-fiber-processing-line.jpg",
        alt: "Fiber or bulk solid processing line using online moisture measurement",
      },
    ],
    recommendedProducts: ["microwave-moisture-system"],
    caseStudy: {
      title: "Washed Sand Moisture for Concrete Batching",
      challenge:
        "Seasonal and weather-driven sand moisture swings make concrete water addition difficult to control.",
      solution:
        "Use online moisture measurement to continuously correct batching water instead of relying only on periodic lab checks.",
      result:
        "Plants can improve batching precision, lower labor demand, and keep concrete performance more stable.",
    },
    image: industryImages["sand-sinter-building-materials"],
  },
  {
    slug: "rubber-additives",
    name: "Rubber Additives",
    shortDescription: "Online moisture control for flash-dried and airflow-dried rubber additive powders.",
    description:
      "The supplier materials show rubber additive projects where inline moisture measurement replaces repeated manual checks in flash drying and secondary airflow drying. Better endpoint control improves powder stability while reducing solvent exposure, emissions, and unnecessary over-drying.",
    painPoints: [
      "Manual sampling exposes operators to dusty or solvent-related production areas",
      "Over-drying increases exhaust load, energy waste, and product instability",
      "Drying endpoint drift can lower powder quality and consistency",
      "Offline tests are too slow for fast powder drying processes",
    ],
    whyMoistureMatters: [
      "Continuous readings help stabilize flash-drying and secondary drying performance",
      "Tighter moisture control supports more uniform additive quality",
      "Less manual intervention improves safety and lowers labor intensity",
    ],
    applicationFocus: [
      "Suitable for flash dryer and airflow dryer sections in rubber additive lines",
      "Works well in powder processes where drying endpoint determines final handling quality",
      "Supports machine replacement for repeated lab sampling on continuous lines",
    ],
    installationPoints: [
      "At flash dryer discharge before secondary drying",
      "At final powder transfer after airflow drying and dust collection",
      "At enclosed screw conveyor or buffer bin before packaging",
    ],
    processSteps: [
      { title: "Wet Feed", description: "Track moisture before flash drying begins" },
      { title: "Flash Drying", description: "Follow rapid moisture reduction in the first drying stage" },
      { title: "Secondary Drying", description: "Stabilize the final endpoint in airflow drying" },
      { title: "Powder Collection", description: "Verify moisture before storage or packaging" },
    ],
    fieldNotes: [
      "The PPT notes reduced operator contact with harmful solvents and less reliance on manual sampling.",
      "Stable moisture helps improve drying efficiency, powder quality, and environmental performance.",
      "Reference projects emphasize avoiding over-drying and reducing tail-gas load.",
    ],
    gallery: [
      {
        src: industryImages["rubber-additives"],
        alt: "Rubber additive powder production with online moisture measurement",
      },
      {
        src: "/images/site-real/online-nir-moisture-analyzer-pvc-additive-line.jpg",
        alt: "Fine-powder drying line using an online NIR moisture analyzer",
      },
    ],
    recommendedProducts: ["online-nir-moisture-analyzer"],
    image: industryImages["rubber-additives"],
  },
  {
    slug: "modified-starch",
    name: "Modified Starch",
    shortDescription: "Continuous moisture monitoring for modified starch drying and finishing.",
    description:
      "Modified starch production depends on controlled residual moisture to balance product performance, drying efficiency, and storage stability. The supplier materials describe an industry moving toward greener, more continuous production where online moisture data helps reduce energy waste and stabilize quality.",
    painPoints: [
      "Small and mid-size lines often rely on intermittent manual checks",
      "Moisture drift raises energy use and causes unstable finished performance",
      "Wet-process production can suffer from inconsistent downstream drying control",
      "Plants need better automation without costly imported systems",
    ],
    whyMoistureMatters: [
      "Stable moisture supports more consistent surface sizing and downstream performance",
      "Continuous control reduces over-drying and helps lower energy consumption",
      "Online values make continuous and greener production more practical",
    ],
    applicationFocus: [
      "Applicable to paper-chemical modified starch and other starch derivative lines",
      "Useful where final powder moisture affects storage, caking, and performance stability",
      "Supports process upgrades from intermittent to more automated control",
    ],
    installationPoints: [
      "At dryer discharge in modified starch finishing sections",
      "At screw conveyor transfer before storage or bagging",
      "At enclosed powder observation windows for non-contact measurement",
    ],
    processSteps: [
      { title: "Reaction Section", description: "Track upstream wet material consistency" },
      { title: "Dewatering", description: "Monitor material before thermal drying" },
      { title: "Drying Endpoint", description: "Control final residual moisture continuously" },
      { title: "Packing Buffer", description: "Verify stable moisture before shipment" },
    ],
    fieldNotes: [
      "The PPT highlights the need for greener production, better automation, and lower energy consumption.",
      "Residual moisture directly affects storage behavior and product consistency in modified starch powders.",
      "Inline measurement helps reduce dependence on manual operator experience.",
    ],
    gallery: [
      {
        src: industryImages["modified-starch"],
        alt: "Modified starch process line with online moisture control",
      },
      {
        src: "/images/site-real/online-nir-moisture-analyzer-inspection-window.jpg",
        alt: "Inspection window installation for modified starch powder moisture monitoring",
      },
    ],
    recommendedProducts: ["online-nir-moisture-analyzer", "microwave-moisture-system"],
    image: industryImages["modified-starch"],
  },
  {
    slug: "wood-fiber-board-materials",
    name: "Wood Fiber & Board Raw Materials",
    shortDescription: "Moisture control for MDF, particle board, and wood-fiber preparation lines.",
    description:
      "For board manufacturing, moisture before pressing is a critical quality variable. The supplier materials note that overly wet fiber can deform later boards, while material that is too dry increases brittleness and cracking risk. Inline monitoring helps keep raw material moisture inside the right window before pressing.",
    painPoints: [
      "Moisture before pressing is hard to stabilize with periodic sampling",
      "Excess moisture can deform finished boards",
      "Low moisture raises brittleness and cracking risk",
      "Dusty production conditions reduce the practicality of manual testing",
    ],
    whyMoistureMatters: [
      "Proper moisture helps improve board quality and final qualification rate",
      "Continuous values support faster adjustment before the press",
      "Better control reduces waste from moisture-related defects",
    ],
    applicationFocus: [
      "Suitable for MDF, particle board, and wood-fiber raw material conditioning",
      "Useful where feed moisture before pressing directly affects board performance",
      "Supports automated quality control in dusty bulk-fiber handling areas",
    ],
    installationPoints: [
      "At fiber dryer outlet before blending or storage",
      "At bulk transfer points before mat forming or pressing",
      "At conveyor sections carrying conditioned wood fiber",
    ],
    processSteps: [
      { title: "Fiber Preparation", description: "Track wet raw material before drying" },
      { title: "Drying", description: "Stabilize residual moisture at the dryer discharge" },
      { title: "Conditioning", description: "Check moisture before forming and pressing" },
      { title: "Press Feed", description: "Maintain moisture inside the target process window" },
    ],
    fieldNotes: [
      "The supplier materials mention board qualification rates above 99% after moisture stabilization.",
      "This application focuses on protecting final board dimensional stability and mechanical performance.",
      "Online values help operators respond faster than periodic checks.",
    ],
    gallery: [
      {
        src: industryImages["wood-fiber-board-materials"],
        alt: "Wood fiber processing line with online moisture analyzer application",
      },
      {
        src: "/images/site-real/online-nir-moisture-analyzer-conveyor-installation.jpg",
        alt: "Conveyor-based installation for bulk wood fiber moisture monitoring",
      },
    ],
    recommendedProducts: ["microwave-moisture-system", "online-nir-moisture-analyzer"],
    image: industryImages["wood-fiber-board-materials"],
  },
  {
    slug: "viscose-staple-fiber",
    name: "Viscose Staple Fiber",
    shortDescription: "Online regain and moisture monitoring for viscose staple fiber drying and packing.",
    description:
      "The supplier PPT highlights moisture regain as one of the most important indicators in viscose staple fiber production, affecting production guidance, quality control, and trade settlement. Inline detection helps stabilize fiber moisture after drying and reduces manual workload.",
    painPoints: [
      "Accurate online regain measurement has long been difficult in fiber plants",
      "Manual checking is labor-intensive and often delayed",
      "Moisture instability reduces product consistency and packing confidence",
      "Plants need better control without adding extra sampling labor",
    ],
    whyMoistureMatters: [
      "Stable regain supports product quality and more consistent shipment standards",
      "Online control reduces labor intensity and helps energy saving",
      "Better endpoint control improves safety and environmental performance",
    ],
    applicationFocus: [
      "Suitable for viscose staple fiber drying and bale preparation sections",
      "Useful where moisture regain is a key commercial and quality indicator",
      "Supports higher process visibility on continuous fiber production lines",
    ],
    installationPoints: [
      "At dryer outlet before cooling or baling",
      "At fiber transfer sections before final packing",
      "At final bale or bundle preparation where regain needs confirmation",
    ],
    processSteps: [
      { title: "Fiber Drying", description: "Track moisture through the final drying section" },
      { title: "Cooling", description: "Watch for regain rebound before packing" },
      { title: "Transfer", description: "Confirm stable moisture during conveying" },
      { title: "Packing", description: "Verify regain before bale release" },
    ],
    fieldNotes: [
      "The supplier material frames regain as a central quality and settlement indicator in this industry.",
      "Projects report lower labor intensity and improved stability of fiber moisture.",
      "Online measurement is especially valuable where traditional checks are delayed or difficult to scale.",
    ],
    gallery: [
      {
        src: industryImages["viscose-staple-fiber"],
        alt: "Viscose staple fiber process line with online moisture control",
      },
      {
        src: "/images/site-real/online-nir-moisture-analyzer-fiber-processing-line.jpg",
        alt: "Fiber-processing equipment used for continuous moisture monitoring",
      },
    ],
    recommendedProducts: ["online-nir-moisture-analyzer"],
    image: industryImages["viscose-staple-fiber"],
  },
  {
    slug: "sinter-mix",
    name: "Sinter Mix",
    shortDescription: "Real-time moisture control for ironmaking sinter mix and granulation.",
    description:
      "The sinter mix case in the supplier materials emphasizes that moisture is one of the most tightly controlled parameters in metallurgical sintering. Too little moisture weakens granulation and bed permeability, while too much moisture harms airflow and sintering efficiency. Online monitoring acts as the eye of the water-control system.",
    painPoints: [
      "Harsh sintering environments are difficult for stable manual measurement",
      "Low moisture weakens granulation and lowers permeability",
      "High moisture creates local overwet zones and reduces efficiency",
      "Delayed correction directly affects output and sinter quality",
    ],
    whyMoistureMatters: [
      "Continuous data helps keep granulation and bed permeability in balance",
      "Better moisture control improves ignition and sintering efficiency",
      "Reliable online values are especially important in harsh industrial conditions",
    ],
    applicationFocus: [
      "Designed for sinter mix preparation, mixing, and granulation sections",
      "Useful where water addition directly affects granule formation and airflow",
      "Supports replacement of imported brands in difficult site conditions",
    ],
    installationPoints: [
      "Above the mixed-material conveyor after water addition",
      "At the discharge of the mixing or granulation section",
      "At transfer points feeding the sinter bed",
    ],
    processSteps: [
      { title: "Raw Blending", description: "Measure incoming mix consistency before water control" },
      { title: "Water Addition", description: "Track moisture immediately after conditioning" },
      { title: "Granulation", description: "Stabilize granule formation and permeability" },
      { title: "Bed Feed", description: "Verify target moisture before charging" },
    ],
    fieldNotes: [
      "The PPT describes online moisture detection as a key part of the sinter-water control system.",
      "Reference cases highlight reliable performance even under harsh site conditions.",
      "Better moisture stability improves both production efficiency and sinter quality.",
    ],
    gallery: [
      {
        src: industryImages["sinter-mix"],
        alt: "Sinter mix conveyor installation with online moisture measurement",
      },
      {
        src: "/images/site-real/online-nir-moisture-analyzer-conveyor-installation.jpg",
        alt: "Bulk material conveyor probe used for continuous sinter moisture control",
      },
    ],
    recommendedProducts: ["microwave-moisture-system", "online-nir-moisture-analyzer"],
    image: industryImages["sinter-mix"],
  },
  {
    slug: "washed-sand-concrete-aggregates",
    name: "Washed Sand & Concrete Aggregates",
    shortDescription: "Online moisture measurement for washed sand, aggregate correction, and concrete batching.",
    description:
      "The washed-sand section of the supplier materials explains that real water addition in concrete must account for the moisture already contained in sand and aggregates. Because sand moisture changes with weather and season, online measurement helps batching plants keep concrete performance stable without repeated manual checks.",
    painPoints: [
      "Sand moisture changes with rain, season, and stockpile conditions",
      "Incorrect water correction destabilizes concrete workability and strength",
      "Manual checks consume labor and still miss rapid changes",
      "Steam and seasonal conditions make water control harder in production",
    ],
    whyMoistureMatters: [
      "Real-time moisture values improve batching-water correction accuracy",
      "Continuous data helps keep concrete workability and mechanical properties stable",
      "Online systems reduce manual workload and support multi-line operation",
    ],
    applicationFocus: [
      "Suitable for washed sand, concrete aggregates, and mixing-station correction systems",
      "Useful in rainy-season and high-variability aggregate conditions",
      "Supports more stable concrete quality with less laboratory dependence",
    ],
    installationPoints: [
      "Above washed-sand conveyors before batching",
      "At aggregate transfer points feeding the mixing station",
      "At final correction stages where live moisture data drives water addition",
    ],
    processSteps: [
      { title: "Stockpile Feed", description: "Measure aggregate moisture before batching" },
      { title: "Conveyor Transfer", description: "Track variation during continuous supply" },
      { title: "Water Correction", description: "Adjust mixing water from live moisture data" },
      { title: "Batch Control", description: "Keep concrete performance inside the target window" },
    ],
    fieldNotes: [
      "The PPT emphasizes strong value in both winter steam conditions and summer rainfall conditions.",
      "Reference projects highlight lower labor needs and more stable concrete performance.",
      "This is one of the clearest applications where online moisture directly improves batching accuracy.",
    ],
    gallery: [
      {
        src: industryImages["washed-sand-concrete-aggregates"],
        alt: "Washed sand conveyor with continuous online moisture monitoring",
      },
      {
        src: "/images/site-real/online-nir-moisture-analyzer-washed-sand-line.jpg",
        alt: "Sand and aggregate line using online moisture analysis for batching correction",
      },
    ],
    recommendedProducts: ["microwave-moisture-system"],
    image: industryImages["washed-sand-concrete-aggregates"],
  },
  {
    slug: "dye-pigment-intermediates",
    name: "Dye & Pigment Intermediates",
    shortDescription: "Moisture control for fine-chemical intermediates used in dye and pigment production.",
    description:
      "Dye and pigment intermediates are an important fine-chemical branch where drying cost and process efficiency matter. The supplier materials point to online NIR moisture measurement as a way to reduce unnecessary drying cost and improve production efficiency in cleaner, more modern intermediate production.",
    painPoints: [
      "Drying cost rises when residual moisture is controlled too conservatively",
      "Fine-chemical intermediates need tighter process consistency than periodic checks provide",
      "Manual testing slows correction on continuous production lines",
      "Plants need cleaner and more efficient process control methods",
    ],
    whyMoistureMatters: [
      "Continuous moisture control helps reduce unnecessary drying cost",
      "Stable endpoint moisture supports more consistent intermediate quality",
      "Online values improve efficiency in competitive fine-chemical production",
    ],
    applicationFocus: [
      "Suitable for drying and finishing sections of dye and pigment intermediates",
      "Useful where residual moisture affects production economy and product handling",
      "Supports cleaner-process upgrades in fine-chemical plants",
    ],
    installationPoints: [
      "At dryer outlet before intermediate storage",
      "At enclosed powder transfer points after drying",
      "At packaging or buffer-bin entry points for final confirmation",
    ],
    processSteps: [
      { title: "Reaction Output", description: "Check upstream wet material consistency" },
      { title: "Drying", description: "Track residual moisture through the drying stage" },
      { title: "Transfer", description: "Monitor the product before storage or blending" },
      { title: "Final Control", description: "Verify target moisture before packing" },
    ],
    fieldNotes: [
      "The PPT frames this application around cost reduction and efficiency improvement.",
      "The industry is described as increasingly focused on cleaner production methods.",
      "Online measurement fits plants looking to reduce unnecessary drying without sacrificing quality.",
    ],
    gallery: [
      {
        src: industryImages["dye-pigment-intermediates"],
        alt: "Fine-chemical intermediate line with online moisture measurement",
      },
      {
        src: "/images/site-real/online-nir-moisture-analyzer-polymer-powder-line.jpg",
        alt: "Powder intermediate production process using continuous moisture control",
      },
    ],
    recommendedProducts: ["online-nir-moisture-analyzer"],
    image: industryImages["dye-pigment-intermediates"],
  },
  {
    slug: "sand-glass-fiber",
    name: "Sand & Glass Fiber",
    shortDescription: "Moisture measurement for aggregate handling and glass-fiber batching or drying control.",
    description:
      "The supplier materials group sand and glass fiber around one core issue: moisture is a central production parameter that must be dynamically controlled. For sand, it changes process choice, screening, and dewatering cost. For glass fiber, it affects fiber formation stability and batching accuracy, while traditional oven checks are too slow.",
    painPoints: [
      "Sand moisture affects screening efficiency, dewatering cost, and dust risk",
      "Glass-fiber moisture is hard to control in real time with traditional tests",
      "Poor moisture management raises safety and energy costs",
      "Plants need faster feedback for batching and drying correction",
    ],
    whyMoistureMatters: [
      "Dynamic moisture control helps align process efficiency, quality, and safety",
      "Continuous data improves aggregate handling and glass-fiber production stability",
      "Online measurement supports more accurate batching and lower drying cost",
    ],
    applicationFocus: [
      "Suitable for sand processing, aggregate dewatering, and glass-fiber moisture control",
      "Useful where real-time data is needed faster than oven methods can provide",
      "Supports machine replacement in batching-critical fiber applications",
    ],
    installationPoints: [
      "Above sand and aggregate conveyors before storage or batching",
      "At glass-fiber transfer or drying exit points",
      "At process locations where moisture feeds batching correction logic",
    ],
    processSteps: [
      { title: "Material Feed", description: "Track initial moisture before screening or drying" },
      { title: "Dewatering / Drying", description: "Monitor moisture reduction through processing" },
      { title: "Transfer", description: "Check stability before batching or storage" },
      { title: "Quality Control", description: "Use live values to improve consistency and safety" },
    ],
    fieldNotes: [
      "The PPT notes that traditional drying methods can take around 20 hours in glass-fiber related checks.",
      "For sand, both process efficiency and dust or dewatering cost are linked to moisture.",
      "This industry benefits from dynamic control rather than fixed periodic sampling.",
    ],
    gallery: [
      {
        src: industryImages["sand-glass-fiber"],
        alt: "Sand or glass-fiber line using online moisture measurement",
      },
      {
        src: "/images/site-real/online-nir-moisture-analyzer-conveyor-installation.jpg",
        alt: "Conveyor-mounted installation for aggregate or glass-fiber moisture monitoring",
      },
    ],
    recommendedProducts: ["microwave-moisture-system", "online-nir-moisture-analyzer"],
    image: industryImages["sand-glass-fiber"],
  },
  {
    slug: "silica-production",
    name: "Silica Production",
    shortDescription: "Inline moisture monitoring for precipitated silica and related drying processes.",
    description:
      "The white-carbon-black section of the PPT explains that moisture affects reaction efficiency, drying energy, dispersion, storage safety, and caking behavior. Online measurement helps plants manage both process efficiency and final product handling in silica production.",
    painPoints: [
      "High moisture raises drying energy and extends the production cycle",
      "Low or unstable moisture can increase agglomeration and dispersion problems",
      "Silica is hygroscopic and can cake during storage",
      "Plants need better safety control around dust and packaging behavior",
    ],
    whyMoistureMatters: [
      "Continuous moisture control helps balance reaction efficiency and drying cost",
      "Stable endpoint moisture supports better dispersion and storage behavior",
      "Live values help reduce caking, packaging problems, and safety risk",
    ],
    applicationFocus: [
      "Suitable for precipitated silica and related powder drying lines",
      "Useful where residual moisture affects dispersibility, storage, and packaging",
      "Supports tighter cost and quality control in high-volume powder production",
    ],
    installationPoints: [
      "At dryer outlet after moisture removal",
      "At transfer points before storage or packaging",
      "At final product sections where caking and shipping quality matter",
    ],
    processSteps: [
      { title: "Reaction Feed", description: "Track moisture impact on raw-material handling" },
      { title: "Drying", description: "Control energy use and final moisture endpoint" },
      { title: "Transfer", description: "Check moisture before storage or blending" },
      { title: "Packing", description: "Prevent caking and protect shipment quality" },
    ],
    fieldNotes: [
      "The PPT highlights both process impact and storage-safety impact for silica moisture control.",
      "Residual moisture affects drying cost, particle behavior, and packaging reliability.",
      "This is a strong fit for online systems because both over-drying and under-drying have clear penalties.",
    ],
    gallery: [
      {
        src: industryImages["silica-production"],
        alt: "Silica powder production with online moisture endpoint control",
      },
      {
        src: "/images/site-real/online-nir-moisture-analyzer-polymer-powder-line.jpg",
        alt: "Silica or fine-powder process line using online moisture analysis",
      },
    ],
    recommendedProducts: ["online-nir-moisture-analyzer"],
    image: industryImages["silica-production"],
  },
  {
    slug: "polyacrylamide-production",
    name: "Polyacrylamide Production",
    shortDescription: "Online moisture control for polymerization, drying, and finishing of PAM products.",
    description:
      "The PPT notes that in polyacrylamide production, moisture affects reaction rate, molecular-weight control, and drying efficiency. After polymerization, wet PAM must be dried to a controlled final range; online monitoring helps plants reduce energy use while protecting product consistency.",
    painPoints: [
      "Moisture variation affects polymerization uniformity and final product performance",
      "Drying PAM to target moisture can be energy-intensive without live feedback",
      "Overly wet product hurts storage and handling quality",
      "Offline checks slow down correction of drying conditions",
    ],
    whyMoistureMatters: [
      "Continuous data helps stabilize polymerization and final drying performance",
      "Better endpoint control reduces energy consumption in PAM drying",
      "Stable final moisture improves storage, handling, and consistency",
    ],
    applicationFocus: [
      "Suitable for polyacrylamide reaction, dewatering, drying, and finishing sections",
      "Useful where both process kinetics and final powder quality depend on moisture",
      "Supports tighter endpoint control for industrial polymer products",
    ],
    installationPoints: [
      "At wet-cake transfer before drying",
      "At dryer discharge where final moisture must be held below target",
      "At final powder transfer before storage or packing",
    ],
    processSteps: [
      { title: "Polymerization", description: "Maintain the right water condition for stable reaction behavior" },
      { title: "Dewatering", description: "Track wet product before thermal drying" },
      { title: "Drying", description: "Control final residual moisture and energy use" },
      { title: "Packaging", description: "Verify moisture before storage and shipment" },
    ],
    fieldNotes: [
      "The supplier materials specifically mention reaction rate, molecular-weight control, and drying energy.",
      "Wet PAM requires controlled drying to a stable final moisture target.",
      "Online measurement helps plants balance process efficiency with final product quality.",
    ],
    gallery: [
      {
        src: industryImages["polyacrylamide-production"],
        alt: "Polyacrylamide production line with online moisture monitoring",
      },
      {
        src: "/images/site-real/online-nir-moisture-analyzer-polymer-powder-line.jpg",
        alt: "Polymer drying process using continuous online moisture control",
      },
    ],
    recommendedProducts: ["online-nir-moisture-analyzer"],
    image: industryImages["polyacrylamide-production"],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getIndustrySlugs(): string[] {
  return industries.map((i) => i.slug);
}
