const base = "/images/site-real";

export const siteImages = {
  heroProduct: `${base}/online-nir-moisture-analyzer-hero-ai-clean-factory.png`,
  productMain: `${base}/online-nir-moisture-analyzer-product-photo.jpg`,
  factoryApplication: `${base}/online-nir-moisture-analyzer-washed-sand-line.jpg`,
  nirBeamEffect: `${base}/online-nir-moisture-analyzer-inspection-window.jpg`,
  dashboardMonitoring: `${base}/online-nir-moisture-analyzer-process-equipment.jpg`,
  plasticIndustry: `${base}/online-nir-moisture-analyzer-pvc-additive-line.jpg`,
  foodIndustry: `${base}/online-nir-moisture-analyzer-corn-starch-process-control.jpg`,
  chemicalIndustry: `${base}/online-nir-moisture-analyzer-calcium-carbonate-line.jpg`,
  aboutBackground: `${base}/online-nir-moisture-analyzer-fiber-processing-line.jpg`,
  contactBackground: `${base}/online-nir-moisture-analyzer-conveyor-installation.jpg`,
  blogBanner: `${base}/online-nir-moisture-analyzer-conveyor-installation.jpg`,
  aiIndustrial: `${base}/online-nir-moisture-analyzer-explosion-proof-installation.jpg`,
} as const;

export const productImages: Record<string, string> = {
  "online-nir-moisture-analyzer": siteImages.productMain,
  "microwave-moisture-system": `${base}/online-nir-moisture-analyzer-conveyor-installation.jpg`,
};

export const industryImages: Record<string, string> = {
  "starch-corn-processing": siteImages.foodIndustry,
  "grain-noodle-processing": `${base}/online-nir-moisture-analyzer-noodle-drying-line.jpg`,
  "soda-ash-bicarbonate-calcium-carbonate": siteImages.chemicalIndustry,
  "ceramics-mineral-powders": `${base}/online-nir-moisture-analyzer-process-equipment.jpg`,
  "pvc-additives-fine-chemicals": siteImages.plasticIndustry,
  "sand-sinter-building-materials": `${base}/online-nir-moisture-analyzer-washed-sand-line.jpg`,
  "rubber-additives": `${base}/online-nir-moisture-analyzer-polymer-powder-line.jpg`,
  "modified-starch": siteImages.foodIndustry,
  "wood-fiber-board-materials": `${base}/online-nir-moisture-analyzer-fiber-processing-line.jpg`,
  "viscose-staple-fiber": `${base}/online-nir-moisture-analyzer-fiber-processing-line.jpg`,
  "sinter-mix": `${base}/online-nir-moisture-analyzer-conveyor-installation.jpg`,
  "washed-sand-concrete-aggregates": `${base}/online-nir-moisture-analyzer-washed-sand-line.jpg`,
  "dye-pigment-intermediates": `${base}/online-nir-moisture-analyzer-polymer-powder-line.jpg`,
  "sand-glass-fiber": `${base}/online-nir-moisture-analyzer-conveyor-installation.jpg`,
  "silica-production": `${base}/online-nir-moisture-analyzer-polymer-powder-line.jpg`,
  "polyacrylamide-production": `${base}/online-nir-moisture-analyzer-polymer-powder-line.jpg`,
};

export function getProductImage(slug: string): string | undefined {
  return productImages[slug];
}

export function getIndustryImage(slug: string): string | undefined {
  return industryImages[slug];
}
