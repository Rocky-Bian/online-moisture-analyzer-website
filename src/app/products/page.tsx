import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SiteImage } from "@/components/ui/SiteImage";
import { PageBanner } from "@/components/ui/PageBanner";
import { CTASection } from "@/components/ui/CTASection";
import { siteImages } from "@/lib/images";
import { createMetadata } from "@/lib/seo";
import { products } from "@/content/products";

export const metadata = createMetadata({
  title: "Online and Laboratory Moisture Analyzers",
  description:
    "Online NIR and microwave moisture systems for process control, plus the AL-1201 halogen moisture analyzer for laboratory reference testing and calibration.",
  path: "/products",
});

export default function ProductsPage() {
  const onlineProducts = products.filter((product) => product.category === "online");
  const laboratoryProducts = products.filter(
    (product) => product.category === "laboratory"
  );

  const productCard = (product: (typeof products)[number]) => (
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
  );

  return (
    <>
      <PageBanner
        image={siteImages.factoryApplication}
        label="Products"
        title="Online and Laboratory Moisture Measurement"
        description="Continuous process analyzers supported by fast laboratory reference testing for calibration, verification, and quality control."
      />

      <Section>
        <SectionHeader
          label="Online Moisture Measurement"
          title="Continuous Process Analyzers"
          description="Real-time measurement for conveyors, dryers, chutes, and other production-line measuring points."
          align="left"
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {onlineProducts.map(productCard)}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeader
          label="Laboratory & Calibration Equipment"
          title="Fast Reference Moisture Testing"
          description="Sample-based loss-on-drying measurement for quality control and routine verification of online analyzer results."
          align="left"
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {laboratoryProducts.map(productCard)}
          <div className="rounded-sm border border-border bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              One Measurement Program
            </p>
            <h2 className="mt-3 text-2xl font-bold text-primary">
              Connect Laboratory Reference Results with Online Trends
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The halogen analyzer provides a fast reference result from a
              prepared sample. Online NIR and microwave systems measure the
              moving process continuously. Used together, they support
              commissioning, calibration checks, and routine quality control.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Establish material-specific reference methods",
                "Verify online readings with samples from the measuring point",
                "Reduce dependence on slow routine oven checks",
                "Document results through printer or PC communication",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-primary">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
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
