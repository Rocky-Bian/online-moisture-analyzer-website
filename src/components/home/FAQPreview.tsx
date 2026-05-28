"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { getFeaturedFAQs } from "@/content/faqs";
import { FadeIn } from "@/components/ui/AnimatedCounter";

export function FAQPreview() {
  const featuredFaqs = getFeaturedFAQs(5);

  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-5">
        <FadeIn className="lg:col-span-2">
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
            description="Technical answers to common questions about industrial moisture measurement."
            align="left"
          />
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
          >
            View All FAQs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>

        <FadeIn delay={0.2} className="lg:col-span-3">
          <div className="rounded-sm border border-border bg-white p-6 shadow-sm">
            <FAQAccordion items={featuredFaqs} />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
