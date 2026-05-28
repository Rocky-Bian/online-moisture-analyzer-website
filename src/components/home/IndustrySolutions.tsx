"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { IndustrialImage } from "@/components/ui/IndustrialImage";
import { industries } from "@/content/industries";
import { FadeIn } from "@/components/ui/AnimatedCounter";

export function IndustrySolutions() {
  return (
    <Section id="industries">
      <SectionHeader
        label="Industries"
        title="Moisture Solutions for Every Industry"
        description="Purpose-built measurement systems for the most demanding industrial processes worldwide."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, i) => (
          <FadeIn key={industry.slug} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group overflow-hidden rounded-sm border border-border bg-white shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <IndustrialImage
                variant="industry"
                label={industry.name}
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
    </Section>
  );
}
