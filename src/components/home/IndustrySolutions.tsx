"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SiteImage } from "@/components/ui/SiteImage";
import { industries } from "@/content/industries";
import { FadeIn } from "@/components/ui/AnimatedCounter";

export function IndustrySolutions() {
  const featuredIndustries = industries.slice(0, 6);

  return (
    <Section id="industries">
      <SectionHeader
        label="Industries"
        title="Application Areas from the Supplier Reference Materials"
        description="Representative process lines where online near-infrared moisture control helps improve quality, reduce energy waste, and replace manual sampling."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredIndustries.map((industry, i) => (
          <FadeIn key={industry.slug} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group overflow-hidden rounded-sm border border-border bg-white shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <SiteImage
                src={industry.image}
                alt={`ALZRO online NIR moisture analyzer — ${industry.name}`}
                variant="industry"
                className="aspect-[16/10] w-full"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                  {industry.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {industry.shortDescription}
                </p>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/industries"
          className="inline-flex items-center gap-2 rounded-sm border border-accent/20 bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent/90"
        >
          View More Industries
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
