import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Download, CheckCircle2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SiteImage } from "@/components/ui/SiteImage";
import { siteImages } from "@/lib/images";
import { Button } from "@/components/ui/Button";
import { InquiryForm } from "@/components/ui/InquiryForm";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd, productSchema, breadcrumbSchema } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/seo";
import { getProduct, getProductSlugs, products } from "@/content/products";
import { getFeaturedFAQs } from "@/content/faqs";
import { getFeaturedPosts } from "@/content/blog";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return createMetadata({
    title: product.name,
    description: product.description,
    path: `/products/${slug}`,
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const relatedFaqs = getFeaturedFAQs(3);
  const relatedPosts = getFeaturedPosts(2);
  const otherProducts = products.filter((p) => p.slug !== slug);

  return (
    <>
      <JsonLd data={productSchema(product)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.alzro.com" },
          { name: "Products", url: "https://www.alzro.com/products" },
          {
            name: product.name,
            url: `https://www.alzro.com/products/${slug}`,
          },
        ])}
      />

      {/* Hero */}
      <section className="industrial-gradient pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="mb-6 text-sm text-white/50">
            <Link href="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{product.name}</span>
          </nav>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
                {product.method}
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-lg text-white/70">{product.tagline}</p>
              <p className="mt-4 text-white/60 leading-relaxed">
                {product.description}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact?type=datasheet" variant="primary" size="lg">
                  <Download className="h-4 w-4" />
                  Request Datasheet
                </Button>
                <Button
                  href="/contact?type=engineer"
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white hover:text-primary"
                >
                  Talk to Engineer
                </Button>
              </div>
            </div>
            <SiteImage
              src={product.image}
              alt={product.name}
              variant="product"
              className="aspect-[4/3] w-full shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <Section>
        <SectionHeader
          label="Key Features"
          title="Engineered for Industrial Reliability"
          align="left"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {product.features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 rounded-sm border border-border p-4"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-accent mt-0.5" />
              <span className="text-sm text-primary">{feature}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Specifications */}
      <Section className="bg-surface">
        <SectionHeader
          label="Technical Specifications"
          title="Detailed Product Specifications"
        />
        <div className="mx-auto max-w-3xl overflow-hidden rounded-sm border border-border bg-white shadow-sm">
          <table className="w-full">
            <tbody>
              {Object.entries(product.specifications).map(
                ([key, value], i) => (
                  <tr
                    key={key}
                    className={i % 2 === 0 ? "bg-white" : "bg-surface"}
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-primary w-2/5">
                      {key}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted">{value}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Applications */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <SectionHeader
              label="Applications"
              title="Industrial Applications"
              description="Typical inline installation targets based on ALZRO product positioning and real process requirements."
              align="left"
            />
            <ul className="space-y-3">
              {product.applications.map((app) => (
                <li
                  key={app}
                  className="flex items-center gap-3 text-sm text-primary"
                >
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                  {app}
                </li>
              ))}
            </ul>
          </div>

          {/* Installation diagram */}
          <div className="rounded-sm border border-border bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Installation Overview
            </p>
            <SiteImage
              src={
                product.slug === "microwave-moisture-system"
                  ? product.image
                  : siteImages.nirBeamEffect
              }
              alt={
                product.slug === "microwave-moisture-system"
                  ? "Microwave moisture measurement installation across a conveyor-belt bulk material stream"
                  : "Online NIR moisture analyzer installed outside an inspection window for non-contact measurement"
              }
              variant="industry"
              className="aspect-[16/10] w-full mb-4"
            />
            <p className="text-sm text-muted leading-relaxed">
              {product.installationOverview ??
                "Mount the sensor head above the process line with the circular NIR lens facing directly downward toward the material surface. Connect the display unit and link to your control system through the available output options. The system supports non-contact measurement, configurable timing, and difficult powder and bulk-material applications."}
            </p>
          </div>
        </div>
      </Section>

      {(product.bestFor || product.benefits || product.integration) && (
        <Section className="bg-surface">
          <div className="grid gap-8 lg:grid-cols-3">
            {product.bestFor && (
              <div className="rounded-sm border border-border bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Best Fit
                </p>
                <ul className="space-y-3">
                  {product.bestFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-primary">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.benefits && (
              <div className="rounded-sm border border-border bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Process Benefits
                </p>
                <ul className="space-y-3">
                  {product.benefits.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-primary">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.integration && (
              <div className="rounded-sm border border-border bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Integration Options
                </p>
                <ul className="space-y-3">
                  {product.integration.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-primary">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Section>
      )}

      {product.referenceIndustries && product.referenceIndustries.length > 0 && (
        <Section>
          <SectionHeader
            label="Reference Industries"
            title="Application References"
            description="Representative industries where this product can support online process moisture control."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.referenceIndustries.map((industry) => (
              <div
                key={industry}
                className="rounded-sm border border-border bg-white px-5 py-4 text-sm font-medium text-primary shadow-sm"
              >
                {industry}
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Inquiry + Related */}
      <Section className="bg-surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              label="Get Started"
              title="Request Product Information"
              description="Complete the form and our application engineers will provide a tailored recommendation."
              align="left"
            />
            <InquiryForm
              defaultType="datasheet"
              productName={product.name}
            />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-primary mb-4">
                Related FAQs
              </h3>
              <div className="rounded-sm border border-border bg-white p-4">
                <FAQAccordion items={relatedFaqs} />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-primary mb-4">
                Related Articles
              </h3>
              <div className="space-y-3">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block rounded-sm border border-border bg-white p-4 hover:border-accent/30 transition-colors"
                  >
                    <p className="text-sm font-semibold text-primary">
                      {post.title}
                    </p>
                    <p className="mt-1 text-xs text-muted-light">
                      {formatDate(post.publishedAt)} · {post.readTime}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Other Products */}
      {otherProducts.length > 0 && (
        <Section>
          <SectionHeader
            label="Related Products"
            title="Explore Other Solutions"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {otherProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group flex items-center gap-4 rounded-sm border border-border p-4 hover:border-accent/30 transition-colors"
              >
                <SiteImage
                  src={p.image}
                  alt={p.name}
                  variant="product"
                  className="h-20 w-20 shrink-0"
                />
                <div>
                  <h3 className="font-bold text-primary group-hover:text-accent transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted">{p.accuracy}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-accent ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CTASection
        headline={`Ready to Deploy ${product.name}?`}
        description="Get a free application assessment and installation quote from our engineering team."
      />
    </>
  );
}
