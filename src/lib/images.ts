const base = "/images/site-real";

export const siteImages = {
  heroProduct: `${base}/online-nir-moisture-analyzer-hero-clean-factory-conveyor.png`,
  productMain: `${base}/online-nir-moisture-analyzer-product-photo.jpg`,
  factoryApplication: `${base}/online-nir-moisture-analyzer-washed-sand-line.jpg`,
  nirBeamEffect: `${base}/online-nir-moisture-analyzer-inspection-window.jpg`,
  dashboardMonitoring: `${base}/online-nir-moisture-analyzer-process-equipment.jpg`,
  plasticIndustry: `${base}/online-nir-moisture-analyzer-pvc-additives-case-study-photo.jpg`,
  foodIndustry: `${base}/online-nir-moisture-analyzer-starch-corn-deep-processing-case-study.png`,
  chemicalIndustry: `${base}/online-nir-moisture-analyzer-calcium-carbonate-line.jpg`,
  aboutBackground: `${base}/online-nir-moisture-analyzer-fiber-processing-line.jpg`,
  contactBackground: `${base}/online-nir-moisture-analyzer-conveyor-installation.jpg`,
  blogBanner: `${base}/online-moisture-measurement-blog-diagram.png`,
  aiIndustrial: `${base}/online-nir-moisture-analyzer-explosion-proof-installation.jpg`,
} as const;

export const productImages: Record<string, string> = {
  "online-nir-moisture-analyzer": siteImages.productMain,
  "microwave-moisture-system": `${base}/online-microwave-moisture-measurement-system-product-white-bg.png`,
};

export const industryImages: Record<string, string> = {
  "starch-corn-processing": siteImages.foodIndustry,
  "grain-noodle-processing": `${base}/online-nir-moisture-analyzer-noodle-drying-line.jpg`,
  "soda-ash-bicarbonate-calcium-carbonate": `${base}/online-nir-moisture-analyzer-calcium-carbonate-line-2.jpg`,
  "soda-ash": `${base}/online-nir-moisture-analyzer-soda-ash-line.jpg`,
  "baking-soda": `${base}/online-nir-moisture-analyzer-baking-soda-line.jpg`,
  "ceramics-mineral-powders": `${base}/online-nir-moisture-analyzer-ceramics-mineral-powders-line.jpg`,
  "pvc-additives-fine-chemicals": siteImages.plasticIndustry,
  "sand-sinter-building-materials": `${base}/online-nir-moisture-analyzer-washed-sand-line.jpg`,
  "rubber-additives": `${base}/online-nir-moisture-analyzer-rubber-additives-line.png`,
  "dextrin": `${base}/online-nir-moisture-analyzer-dextrin-line.png`,
  "wood-fiber-board-materials": `${base}/online-nir-moisture-analyzer-wood-fiber-board-materials-line.png`,
  "viscose-staple-fiber": `${base}/online-nir-moisture-analyzer-fiber-processing-line.jpg`,
  "sinter-mix": `${base}/online-nir-moisture-analyzer-conveyor-installation.jpg`,
  "washed-sand-concrete-aggregates": `${base}/online-nir-moisture-analyzer-washed-sand-line.jpg`,
  "dye-pigment-intermediates": `${base}/online-nir-moisture-analyzer-dye-pigment-intermediates-line.jpg`,
  "sand-glass-fiber": `${base}/online-nir-moisture-analyzer-sand-glass-fiber-line.png`,
  "silica-production": `${base}/online-nir-moisture-analyzer-carbon-black-case-study-photo.jpg`,
  "polyacrylamide-production": `${base}/online-nir-moisture-analyzer-polymer-powder-line.jpg`,
};

export function getProductImage(slug: string): string | undefined {
  return productImages[slug];
}

export function getIndustryImage(slug: string): string | undefined {
  return industryImages[slug];
}
