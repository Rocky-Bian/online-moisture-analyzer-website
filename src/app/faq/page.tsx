import { Section, SectionHeader } from "@/components/ui/Section";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PageBanner } from "@/components/ui/PageBanner";
import { CTASection } from "@/components/ui/CTASection";
import { siteImages } from "@/lib/images";
import { JsonLd, faqSchema } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/seo";
import { faqs, faqCategories } from "@/content/faqs";

export const metadata = createMetadata({
  title: "Frequently Asked Questions",
  description:
    "Technical FAQ about online moisture analyzers, NIR and microwave measurement, industrial applications, and system integration.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={faqSchema(
          faqs.map((f) => ({ question: f.question, answer: f.answer }))
        )}
      />

      <PageBanner
        image={siteImages.dashboardMonitoring}
        label="FAQ"
        title="Frequently Asked Questions"
        description="Technical answers about industrial moisture measurement, technology selection, and system integration."
      />

      <Section>
        {faqCategories.map((category) => {
          const categoryFaqs = faqs.filter((f) => f.category === category);
          if (categoryFaqs.length === 0) return null;
          return (
            <div key={category} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-bold text-primary mb-6">
                {category}
              </h2>
              <div className="rounded-sm border border-border bg-white p-6 shadow-sm">
                <FAQAccordion items={categoryFaqs} />
              </div>
            </div>
          );
        })}
      </Section>

      <CTASection
        headline="Still Have Questions?"
        description="Our application engineers are ready to help with your specific process requirements."
        primaryLabel="Talk to Engineer"
        primaryHref="/contact?type=engineer"
      />
    </>
  );
}
