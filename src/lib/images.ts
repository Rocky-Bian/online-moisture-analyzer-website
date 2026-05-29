const base = "/images/site";

export const siteImages = {
  productMain: `${base}/02-product-main.png`,
  factoryApplication: `${base}/03-factory-application.png`,
  nirBeamEffect: `${base}/04-nir-beam-effect.png`,
  dashboardMonitoring: `${base}/05-dashboard-monitoring.png`,
  plasticIndustry: `${base}/06-plastic-industry.png`,
  foodIndustry: `${base}/07-food-industry.png`,
  chemicalIndustry: `${base}/08-chemical-industry.png`,
  aboutBackground: `${base}/09-about-background.png`,
  contactBackground: `${base}/10-contact-background.png`,
  blogBanner: `${base}/11-blog-banner.png`,
  aiIndustrial: `${base}/12-ai-industrial-concept.png`,
} as const;

export const productImages: Record<string, string> = {
  "online-nir-moisture-analyzer": siteImages.productMain,
  "conveyor-belt-moisture-sensor": siteImages.nirBeamEffect,
  "microwave-moisture-system": siteImages.factoryApplication,
};

export const industryImages: Record<string, string> = {
  "lithium-battery": siteImages.aiIndustrial,
  "powder-processing": siteImages.plasticIndustry,
  "food-production": siteImages.foodIndustry,
  "chemical-industry": siteImages.chemicalIndustry,
  "biomass-wood": siteImages.factoryApplication,
  "conveyor-monitoring": siteImages.nirBeamEffect,
};

export function getProductImage(slug: string): string | undefined {
  return productImages[slug];
}

export function getIndustryImage(slug: string): string | undefined {
  return industryImages[slug];
}
