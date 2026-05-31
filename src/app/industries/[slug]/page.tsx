import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SiteImage } from "@/components/ui/SiteImage";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/seo";
import {
  getIndustry,
  getIndustrySlugs,
} from "@/content/industries";
import { getProduct } from "@/content/products";
import { faqs } from "@/content/faqs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return createMetadata({
    title: `${industry.name} — Moisture Measurement`,
    description: industry.description,
    path: `/industries/${slug}`,
  });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const recommendedProducts = industry.recommendedProducts
    .map((s) => getProduct(s))
    .filter(Boolean);

  const industryFaqs = faqs.filter(
    (f) =>
      f.tags?.some((t) =>
        industry.name.toLowerCase().includes(t.split(" ")[0].toLowerCase())
      ) || f.category === "Applications"
  ).slice(0, 4);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.alzro.com" },
          { name: "Industries", url: "https://www.alzro.com/industries" },
          {
            name: industry.name,
            url: `https://www.alzro.com/industries/${slug}`,
          },
        ])}
      />
      {industryFaqs.length > 0 && (
        <JsonLd
          data={faqSchema(
            industryFaqs.map((f) => ({
              question: f.question,
              answer: f.answer,
            }))
          )}
        />
      )}

      {/* Hero */}
      <section className="industrial-gradient pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="mb-6 text-sm text-white/50">
            <Link href="/industries" className="hover:text-white transition-colors">
              Industries
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{industry.name}</span>
          </nav>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                {industry.name}
              </h1>
              <p className="mt-2 text-xl text-accent font-medium">
                Moisture Measurement Solutions
              </p>
              <p className="mt-4 text-lg text-white/70 leading-relaxed">
                {industry.description}
              </p>
              <div className="mt-8">
                <Button href="/contact?type=engineer" variant="primary" size="lg">
                  Request Application Assessment
                </Button>
              </div>
            </div>
            <SiteImage
              src={industry.image}
              alt={`ALZRO online NIR moisture analyzer — ${industry.name}`}
              variant="industry"
              className="aspect-[4/3] w-full shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              label="Industry Challenges"
              title="Key Pain Points"
              align="left"
            />
            <ul className="space-y-4">
              {industry.painPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 shrink-0 text-amber-500 mt-0.5" />
                  <span className="text-sm text-primary leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader
              label="Technical Impact"
              title="Why Moisture Matters"
              align="left"
            />
            <ul className="space-y-4">
              {industry.whyMoistureMatters.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                  <span className="text-sm text-primary leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Process Flow */}
      <Section className="bg-surface">
        <SectionHeader
          label="Process Flow"
          title="Moisture Measurement Integration Points"
          description="Strategic measurement points across your production process for maximum quality impact."
        />
        <div className="grid gap-4 md:grid-cols-5">
          {industry.processSteps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="rounded-sm border border-border bg-white p-5 shadow-sm h-full">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-white mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-primary text-sm">{step.title}</h3>
                <p className="mt-2 text-xs text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
              {i < industry.processSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-border z-10" />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Recommended Products */}
      <Section>
        <SectionHeader
          label="Recommended Solutions"
          title="Products for This Application"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {recommendedProducts.map(
            (product) =>
              product && (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group flex gap-6 rounded-sm border border-border p-6 hover:border-accent/30 hover:shadow-lg transition-all"
                >
                  <SiteImage
                    src={product.image}
                    alt={product.name}
                    variant="product"
                    className="h-32 w-32 shrink-0"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{product.tagline}</p>
                    <p className="mt-2 text-sm font-bold text-accent">
                      {product.accuracy}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                      View Product
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              )
          )}
        </div>
      </Section>

      {/* Case Study */}
      {industry.caseStudy && (
        <Section dark>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              Case Study
            </p>
            <h2 className="text-3xl font-bold text-white">
              {industry.caseStudy.title}
            </h2>
            <div className="mt-8 grid gap-6 text-left md:grid-cols-3">
              <div className="rounded-sm border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">
                  Challenge
                </p>
                <p className="text-sm text-white/70 leading-relaxed">
                  {industry.caseStudy.challenge}
                </p>
              </div>
              <div className="rounded-sm border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">
                  Solution
                </p>
                <p className="text-sm text-white/70 leading-relaxed">
                  {industry.caseStudy.solution}
                </p>
              </div>
              <div className="rounded-sm border border-accent/30 bg-accent/10 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  Result
                </p>
                <p className="text-sm text-white/80 leading-relaxed">
                  {industry.caseStudy.result}
                </p>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* FAQ */}
      {industryFaqs.length > 0 && (
        <Section>
          <SectionHeader
            label="FAQ"
            title="Industry-Specific Questions"
          />
          <div className="mx-auto max-w-3xl rounded-sm border border-border bg-white p-6 shadow-sm">
            <FAQAccordion items={industryFaqs} />
          </div>
        </Section>
      )}

      <CTASection
        headline={`Optimize Moisture Control in ${industry.name}`}
        description="Get a free application assessment from our industry specialists."
        primaryLabel="Request Assessment"
        primaryHref="/contact?type=engineer"
      />
    </>
  );
}
