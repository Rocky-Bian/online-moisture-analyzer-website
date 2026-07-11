import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SiteImage } from "@/components/ui/SiteImage";
import { PageBanner } from "@/components/ui/PageBanner";
import { CTASection } from "@/components/ui/CTASection";
import { siteImages } from "@/lib/images";
import { createMetadata } from "@/lib/seo";
import { products } from "@/content/products";

export const metadata = createMetadata({
  title: "Industrial Moisture Analyzers",
  description:
    "Enterprise-grade online moisture measurement systems including near-infrared analyzers and microwave moisture systems for industrial process control.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageBanner
        image={siteImages.factoryApplication}
        label="Products"
        title="Industrial Moisture Measurement Systems"
        description="Continuous inline moisture analyzers engineered for the world's most demanding industrial processes."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group overflow-hidden rounded-sm border border-border bg-white shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <SiteImage
                src={product.image}
                alt={product.name}
                variant="product"
                className="aspect-[4/3] w-full"
              />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {product.method}
                </p>
                <h2 className="mt-2 text-xl font-bold text-primary group-hover:text-accent transition-colors">
                  {product.name}
                </h2>
                <p className="mt-2 text-sm text-muted">{product.tagline}</p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm font-bold text-primary">
                    {product.accuracy}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    Specifications
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection
        headline="Need Help Selecting the Right Analyzer?"
        description="Our application engineers provide free technical assessments for your process."
        secondaryLabel="Talk to Engineer"
        secondaryHref="/contact?type=engineer"
      />
    </>
  );
}
