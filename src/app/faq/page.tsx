import { Section, SectionHeader } from "@/components/ui/Section";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
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

      <section className="industrial-gradient pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            FAQ
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl max-w-3xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            Technical answers about industrial moisture measurement, technology
            selection, and system integration.
          </p>
        </div>
      </section>

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
