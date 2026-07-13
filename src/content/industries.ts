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
        alt: "Starch and corn deep-processing line with online NIR moisture analyzer installation",
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
    name: "Dough Sheet / Dried Noodle",
    shortDescription: "Continuous moisture monitoring for dough-sheet forming, noodle drying, and final moisture stabilization.",
    description:
      "In dough-sheet and dried-noodle production, moisture balance directly affects texture, drying uniformity, crack resistance, and storage safety. Online moisture measurement helps operators keep the drying curve steadier through forming, tunnel drying, and final conditioning without relying only on delayed lab checks or operator judgement.",
    painPoints: [
      "Uneven drying in noodle lines can cause brittle or cracked product",
      "High final moisture increases mildew, sticking, and storage risk",
      "Over-drying raises energy cost and reduces noodle toughness and cooking quality",
      "Manual checks are too slow to respond to changing humidity across drying zones",
    ],
    whyMoistureMatters: [
      "Balanced drying helps preserve noodle strength, texture, and cooking quality",
      "Stable moisture reduces cracking, breakage, and appearance variation between batches",
      "Continuous measurement reduces energy waste from overly conservative drying",
    ],
    applicationFocus: [
      "Focused on dough-sheet forming lines and dried-noodle production",
      "Useful where product texture, brittleness, cooking quality, and shelf stability depend on tight moisture control",
      "Helps keep drying curves consistent across conveyor, tunnel, or staged drying zones",
    ],
    installationPoints: [
      "Above the noodle or sheet conveyor after the main drying section",
      "At the final transfer stage before packaging or silo storage",
      "At final conditioning or cooling sections before packing",
    ],
    processSteps: [
      { title: "Dough Mixing", description: "Verify initial moisture before sheeting and line forming" },
      { title: "Sheet Forming", description: "Track moisture consistency through rolling, cutting, and shaping" },
      { title: "Drying Tunnel", description: "Monitor moisture removal to avoid surface hardening and internal cracking" },
      { title: "Final Product", description: "Confirm stable moisture before storage and packing" },
    ],
    fieldNotes: [
      "The PPT highlights that uneven noodle drying leads to cracking, low toughness, and unstable cooking quality.",
      "For dough-sheet and dried-noodle lines, controlling final moisture helps reduce brittle strands, broken sheets, and inconsistent appearance.",
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
    name: "Calcium Carbonate",
    shortDescription: "Stable moisture control for nano calcium carbonate drying, whiteness, and flowability.",
    description:
      "In nano calcium carbonate production, moisture directly affects whiteness, drying cost, anti-caking performance, and downstream handling. The supplier case materials show that online NIR monitoring helps plants avoid both over-drying and excess residual moisture while keeping the drying process closer to target.",
    painPoints: [
      "Excess drying in calcium carbonate can cause additive scorching and yellowing",
      "High moisture causes agglomeration, poor flowability, and reduced whiteness",
      "Manual testing is too slow to guide the drying endpoint in real time",
      "Plants need faster feedback than long oven methods can provide",
    ],
    whyMoistureMatters: [
      "Stable moisture helps protect whiteness and finished powder appearance",
      "Controlled drying lowers the risk of quality loss from overheating",
      "Realtime data supports better balance between energy use, flowability, and finished quality",
    ],
    applicationFocus: [
      "Suitable for nano calcium carbonate drying and powder finishing lines",
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
      "If moisture stays too high, calcium carbonate can agglomerate, lose flowability, and show poorer finished performance.",
      "Online measurement lets operators hold the drying endpoint closer to target instead of waiting for delayed lab confirmation.",
    ],
    gallery: [
      {
        src: industryImages["soda-ash-bicarbonate-calcium-carbonate"],
        alt: "Nano calcium carbonate processing line with online NIR moisture measurement",
      },
      {
        src: "/images/site-real/online-nir-moisture-analyzer-calcium-carbonate-process-flow.jpg",
        alt: "Nano calcium carbonate process flow from the supplier reference materials",
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
    slug: "baking-soda",
    name: "Baking Soda",
    shortDescription: "Online moisture measurement for sodium bicarbonate drying and final product stabilization.",
    description:
      "The baking-soda section of the supplier PPT highlights large moisture variation and very slow conventional testing. Online NIR measurement gives plants a faster way to track sodium bicarbonate moisture continuously instead of waiting many hours for an offline result.",
    painPoints: [
      "Baking soda moisture can vary widely during production",
      "Traditional testing can take many hours and still be hard to keep precise",
      "Delayed feedback makes it difficult to correct the drying process in time",
      "Unstable residual moisture affects handling and finished-product consistency",
    ],
    whyMoistureMatters: [
      "Continuous readings improve drying-endpoint visibility in real time",
      "Faster moisture feedback helps reduce manual lab dependence",
      "Stable finished moisture supports more consistent final product quality",
    ],
    applicationFocus: [
      "Suitable for sodium bicarbonate drying and final powder control",
      "Useful where large moisture swings make periodic testing too slow",
      "Supports process upgrades from delayed manual checks to live control",
    ],
    installationPoints: [
      "At dryer discharge after the main dehydration stage",
      "At closed powder transfer points before storage or packing",
      "At final finished-product control points where residual moisture must stay stable",
    ],
    processSteps: [
      { title: "Wet Product Feed", description: "Track material before final moisture removal" },
      { title: "Drying", description: "Measure moisture continuously through the drying stage" },
      { title: "Transfer", description: "Monitor product during downstream conveyance" },
      { title: "Final Control", description: "Verify stable finished moisture before packing" },
    ],
    fieldNotes: [
      "The PPT notes typical sodium bicarbonate moisture variation and very long traditional test times.",
      "Online NIR measurement is positioned as a much faster way to keep drying under control.",
      "This application is mainly about efficiency and stable moisture confirmation rather than delayed manual checking.",
    ],
    gallery: [
      {
        src: industryImages["baking-soda"],
        alt: "Baking soda conveyor or powder line with online moisture measurement",
      },
      {
        src: industryImages["baking-soda"],
        alt: "Sodium bicarbonate application photo from the supplier case materials",
      },
    ],
    recommendedProducts: ["online-nir-moisture-analyzer", "microwave-moisture-system"],
    image: industryImages["baking-soda"],
  },
  {
    slug: "soda-ash",
    name: "Soda Ash",
    shortDescription: "Online moisture monitoring for soda ash caking control, drying stability, and powder handling.",
    description:
      "The supplier materials describe soda ash as a hygroscopic powder that gradually absorbs moisture from air and tends to cake during storage and handling. Online moisture monitoring helps plants improve visibility into drying and final powder condition before downstream transfer and packaging.",
    painPoints: [
      "Soda ash gradually absorbs moisture and can cake during handling or storage",
      "Residual moisture is difficult to manage with delayed testing alone",
      "Powder condition changes can affect flowability and process stability",
      "Plants need better online visibility instead of relying only on periodic checks",
    ],
    whyMoistureMatters: [
      "Better moisture control helps reduce caking and finished-powder instability",
      "Continuous readings support more stable powder transfer and packaging conditions",
      "Online data helps plants react faster than periodic manual tests",
    ],
    applicationFocus: [
      "Suitable for soda ash drying, cooling, and final powder control sections",
      "Useful where hygroscopic behavior makes storage and flowability sensitive to moisture",
      "Supports more stable operation in light and dense soda-ash handling lines",
    ],
    installationPoints: [
      "At dryer or cooler discharge before final powder transfer",
      "At closed conveyor or auger sections before storage or packaging",
      "At final control points where moisture rebound or caking risk must be managed",
    ],
    processSteps: [
      { title: "Drying / Conditioning", description: "Observe the product as moisture is reduced toward target" },
      { title: "Cooling", description: "Track moisture condition before storage rebound occurs" },
      { title: "Powder Transfer", description: "Monitor flow-critical product during conveyor movement" },
      { title: "Packaging", description: "Confirm stable finished condition before packing or dispatch" },
    ],
    fieldNotes: [
      "The PPT describes soda ash as absorbent and prone to caking when exposed to air.",
      "This application is especially valuable where product flowability and powder stability matter in storage and transfer.",
      "Online moisture data helps move away from delayed, purely manual inspection routines.",
    ],
    gallery: [
      {
        src: industryImages["soda-ash"],
        alt: "Soda ash application with online NIR moisture analyzer over finished powder",
      },
      {
        src: "/images/site-real/online-nir-moisture-analyzer-soda-ash-process-flow.jpg",
        alt: "Soda ash process flow from the supplier reference materials",
      },
    ],
    recommendedProducts: ["online-nir-moisture-analyzer", "microwave-moisture-system"],
    image: industryImages["soda-ash"],
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
    shortDescription: "Inline moisture self-control for PVC additive production, with reduced labor dependence and safer powder handling.",
    description:
      "In PVC additive production, residual moisture directly influences powder quality, drying efficiency, dust emission, and downstream storage safety. The supplier case materials show that online NIR moisture monitoring can replace delayed manual checks with continuous feedback, helping manufacturers hold a tighter moisture band while reducing excessive drying and operator workload.",
    painPoints: [
      "PVC additive quality becomes inconsistent when residual moisture drifts during drying and transfer",
      "Over-drying can increase dust discharge, energy use, and potential safety risk in powder handling",
      "Manual checks are delayed and labor-intensive, making it difficult to control moisture in real time",
      "Fine chemical powders can cake, degrade, or lose handling stability when final moisture is not tightly controlled",
    ],
    whyMoistureMatters: [
      "Online control supports steadier powder quality and tighter final-moisture windows",
      "Less over-drying means lower energy use, less dust emission, and more stable line operation",
      "Continuous feedback helps prevent caking, poor flow, and storage-related quality drift",
    ],
    applicationFocus: [
      "Best suited to PVC additive and related powder-chemical lines where final moisture must stay inside a narrow control band",
      "Also relevant for fine-chemical processes where powder quality, dust control, and drying energy are closely linked to residual moisture",
      "Especially valuable in lines that want to replace frequent manual sampling with continuous automatic monitoring",
    ],
    installationPoints: [
      "At dryer discharge or cooling discharge points before moisture drifts during downstream handling",
      "Above enclosed conveyors, transition chutes, or screw-feeding sections where powder is stable enough for continuous sensing",
      "Before packaging, storage, or buffer-bin entry points for final residual-moisture confirmation",
    ],
    processSteps: [
      { title: "Reaction / Wet Feed", description: "Check upstream material condition before drying" },
      { title: "Primary Dryer", description: "Measure moisture through flash, fluid bed, or hot-air drying" },
      { title: "Powder Transfer", description: "Track residual moisture before storage or blending" },
      { title: "Final Packaging", description: "Confirm stable moisture for safe handling and shipment" },
    ],
    fieldNotes: [
      "The supplier case material highlights a PVC additive application where moisture self-control replaced manual, delayed judgment on the line.",
      "Reference feedback notes improved powder quality, reduced dust discharge, and a higher level of production safety and environmental control.",
      "This type of installation is particularly helpful where excessive drying may create avoidable quality loss or added explosion-risk concern in dusty powder systems.",
    ],
    gallery: [
      {
        src: industryImages["pvc-additives-fine-chemicals"],
        alt: "PVC additive production line with online NIR moisture analyzer case-study installation",
      },
      {
        src: "/images/site-real/online-nir-moisture-analyzer-pvc-additives-case-study-photo.jpg",
        alt: "Original supplier field photo of an online NIR moisture meter on a PVC additive production line",
      },
    ],
    recommendedProducts: ["online-nir-moisture-analyzer", "microwave-moisture-system"],
    caseStudy: {
      title: "PVC Additive Online Moisture Self-Control",
      challenge:
        "Manual checks lag behind production, while unstable moisture can lower powder quality, increase dust discharge, and raise safety risk from excessive drying.",
      solution:
        "Install online NIR moisture monitoring directly on the PVC additive line so operators can keep final moisture inside a tighter control band without relying on delayed sampling.",
      result:
        "Supplier reference feedback highlights moisture self-control, reduced labor dependence, better powder quality, lower dust emissions, and safer operation with less risk from over-drying.",
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
        src: "/images/site-real/online-nir-moisture-analyzer-rubber-additives-line.png",
        alt: "Rubber additives installation with online moisture analyzer and control display",
      },
    ],
    recommendedProducts: ["online-nir-moisture-analyzer"],
    image: industryImages["rubber-additives"],
  },
  {
    slug: "dextrin",
    name: "Dextrin",
    shortDescription: "Online moisture control for dextrin reaction, drying, and final powder stabilization.",
    description:
      "The dextrin section of the supplier materials shows that moisture directly affects gelatinization behavior, reaction efficiency, product color, solubility, viscosity, and storage stability. Online moisture monitoring helps plants keep the process window tighter through thermal conversion and final drying.",
    painPoints: [
      "Too little moisture can lead to insufficient gelatinization and uneven reaction",
      "Too much moisture dilutes the system, slows the reaction, and raises energy consumption",
      "High-temperature production can darken product color when moisture is too low",
      "High finished moisture raises caking and storage instability risk",
    ],
    whyMoistureMatters: [
      "Stable moisture helps balance reaction completeness and drying efficiency",
      "Online values support more consistent solubility, viscosity, and finished powder behavior",
      "Better endpoint control reduces storage problems caused by excess residual moisture",
    ],
    applicationFocus: [
      "Suitable for dextrin thermal conversion, drying, and final powder handling sections",
      "Useful where product color, molecular distribution, and moisture stability affect market quality",
      "Supports tighter process control than periodic manual sampling can provide",
    ],
    installationPoints: [
      "At the dryer or reactor discharge after thermal conversion",
      "At powder transfer points before cooling, storage, or packing",
      "At final bagging or buffer sections where residual moisture must stay stable",
    ],
    processSteps: [
      { title: "Raw Starch Feed", description: "Check incoming moisture before the conversion process" },
      { title: "Reaction / Conversion", description: "Track the moisture condition through gelatinization and thermal decomposition" },
      { title: "Drying", description: "Control final residual moisture and energy use" },
      { title: "Packing", description: "Verify stable finished moisture for storage and shipment" },
    ],
    fieldNotes: [
      "The PPT describes moisture as a key variable for reaction rate, product color, and molecular distribution.",
      "Finished dextrin with excess moisture becomes more hygroscopic and less stable in storage.",
      "This application benefits from continuous monitoring through both conversion and drying stages.",
    ],
    gallery: [
      {
        src: industryImages["dextrin"],
        alt: "Dextrin production line with online moisture analyzer installation",
      },
      {
        src: "/images/site-real/online-nir-moisture-analyzer-dextrin-line.png",
        alt: "Online moisture analyzer used on a dextrin process line",
      },
    ],
    recommendedProducts: ["online-nir-moisture-analyzer", "microwave-moisture-system"],
    image: industryImages["dextrin"],
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
        src: "/images/site-real/online-nir-moisture-analyzer-dye-pigment-intermediates-line.jpg",
        alt: "Dye and pigment intermediate conveyor line with online moisture analyzer installation",
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
        src: "/images/site-real/online-nir-moisture-analyzer-sand-glass-fiber-line.png",
        alt: "Sand and glass-fiber style conveyor installation with online moisture analyzer",
      },
    ],
    recommendedProducts: ["microwave-moisture-system", "online-nir-moisture-analyzer"],
    image: industryImages["sand-glass-fiber"],
  },
  {
    slug: "silica-production",
    name: "Carbon Black Production",
    shortDescription: "Inline moisture monitoring for carbon black powder drying, storage, and final handling.",
    description:
      "The supplier PPT shows a carbon-black application where residual moisture directly affects drying efficiency, powder dispersion, storage stability, and packaging safety. Online moisture measurement helps operators control the drying endpoint more consistently, reduce caking risk, and protect downstream handling quality.",
    painPoints: [
      "High residual moisture raises drying energy and can extend the production cycle",
      "Unstable endpoint moisture can increase agglomeration and reduce downstream dispersion quality",
      "Carbon black powder can absorb moisture during storage and become prone to caking",
      "Plants need tighter control around dust, packaging reliability, and safe powder handling",
    ],
    whyMoistureMatters: [
      "Continuous moisture control helps balance drying cost and final product consistency",
      "Stable endpoint moisture supports better dispersion, flowability, and storage behavior",
      "Live values help reduce caking, packaging issues, and avoidable safety risk",
    ],
    applicationFocus: [
      "Suitable for carbon black and similar fine-powder drying and finishing lines",
      "Useful where residual moisture affects dispersion, flowability, storage, and packaging",
      "Supports tighter quality and energy control in high-volume powder production",
    ],
    installationPoints: [
      "At the dryer outlet after primary moisture removal",
      "At transfer points before storage, packing, or buffer bins",
      "At final product sections where caking and shipping quality matter most",
    ],
    processSteps: [
      { title: "Material Preparation", description: "Track powder condition before final drying and transfer" },
      { title: "Drying", description: "Control energy use and final moisture endpoint" },
      { title: "Transfer", description: "Check moisture before storage or blending" },
      { title: "Packing", description: "Prevent caking and protect shipment quality" },
    ],
    fieldNotes: [
      "The PPT highlights both process impact and storage-safety impact for carbon black moisture control.",
      "Residual moisture affects drying cost, particle behavior, packaging reliability, and warehouse stability.",
      "This is a strong fit for online systems because both over-drying and under-drying create clear cost and quality penalties.",
    ],
    gallery: [
      {
        src: industryImages["silica-production"],
        alt: "Original supplier field photo of an online moisture analyzer on a carbon black production line",
      },
      {
        src: "/images/site-real/online-nir-moisture-analyzer-carbon-black-case-study-photo.jpg",
        alt: "Carbon black process installation photo from the supplier PPT case materials",
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
