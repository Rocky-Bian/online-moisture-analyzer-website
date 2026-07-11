"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Gauge, Radio } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SiteImage } from "@/components/ui/SiteImage";
import { products } from "@/content/products";
import { FadeIn } from "@/components/ui/AnimatedCounter";

const methodIcons: Record<string, React.ElementType> = {
  "Near-Infrared (NIR) Spectroscopy": Radio,
  "Microwave Transmission Technology": Gauge,
};

export function ProductShowcase() {
  return (
    <Section id="products">
      <SectionHeader
        label="Products"
        title="Inline Moisture Measurement Systems"
        description="Built around continuous online detection for industrial drying, conveying, and powder quality control."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {products.map((product, i) => {
          const MethodIcon = methodIcons[product.method] ?? Gauge;
          return (
            <FadeIn key={product.slug} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group flex flex-col overflow-hidden rounded-sm border border-border bg-white shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300 h-full"
              >
                <SiteImage
                  src={product.image}
                  alt={product.name}
                  variant="product"
                  className="aspect-[4/3] w-full"
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
                    <MethodIcon className="h-3.5 w-3.5" />
                    {product.method}
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted flex-1">
                    {product.tagline}
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-3 border-t border-border pt-4">
                    <div>
                      <p className="text-xs text-muted-light">Accuracy</p>
                      <p className="text-sm font-bold text-primary">
                        {product.accuracy}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-light">Applications</p>
                      <p className="text-sm font-bold text-primary">
                        {product.applications.length}+ Industries
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all"
                  >
                    View Specifications
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </FadeIn>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
        >
          View All Products
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
