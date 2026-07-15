import { Hero } from "@/components/home/Hero";
import { IndustrySolutions } from "@/components/home/IndustrySolutions";
import { WhyMoistureControl } from "@/components/home/WhyMoistureControl";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { TechnologySection } from "@/components/home/TechnologySection";
import { DataAnalytics } from "@/components/home/DataAnalytics";
import { FAQPreview } from "@/components/home/FAQPreview";
import { BlogPreview } from "@/components/home/BlogPreview";
import { FinalCTA } from "@/components/home/FinalCTA";
import { JsonLd, faqSchema } from "@/components/seo/JsonLd";
import { getFeaturedFAQs } from "@/content/faqs";

export default function HomePage() {
  const featuredFaqs = getFeaturedFAQs(5);

  return (
    <>
      <JsonLd
        data={faqSchema(
          featuredFaqs.map((f) => ({
            question: f.question,
            answer: f.answer,
          }))
        )}
      />
      <Hero />
      <IndustrySolutions />
      <WhyMoistureControl />
      <ProductShowcase />
      <TechnologySection />
      <DataAnalytics />
      <FAQPreview />
      <BlogPreview />
      <FinalCTA />
    </>
  );
}
