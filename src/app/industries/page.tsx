import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SiteImage } from "@/components/ui/SiteImage";
import { PageBanner } from "@/components/ui/PageBanner";
import { CTASection } from "@/components/ui/CTASection";
import { siteImages } from "@/lib/images";
import { createMetadata } from "@/lib/seo";
import { industries } from "@/content/industries";

export const metadata = createMetadata({
  title: "Industry Solutions",
  description:
    "Online moisture measurement solutions for lithium battery, powder processing, food production, chemical, biomass, and conveyor belt monitoring.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageBanner
        image={siteImages.aiIndustrial}
        label="Industries"
        title="Moisture Measurement by Industry"
        description="Purpose-built solutions for the world's most demanding industrial moisture control applications."
      />

      <Section>
        <div className="grid gap-8">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group grid gap-6 overflow-hidden rounded-sm border border-border bg-white shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300 md:grid-cols-3"
            >
              <SiteImage
                src={industry.image}
                alt={industry.name}
                variant="industry"
                className="aspect-[16/10] md:aspect-auto md:h-full w-full"
              />
              <div className="p-6 md:col-span-2 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                  {industry.name}
                </h2>
                <p className="mt-2 text-muted leading-relaxed">
                  {industry.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  View Solution
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection
        headline="Don't See Your Industry?"
        description="Our engineers have experience across hundreds of industrial applications. Contact us for a custom assessment."
      />
    </>
  );
}
