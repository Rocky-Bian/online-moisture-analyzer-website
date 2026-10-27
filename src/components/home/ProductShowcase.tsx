"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, Gauge, Radio } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SiteImage } from "@/components/ui/SiteImage";
import { products } from "@/content/products";
import { FadeIn } from "@/components/ui/AnimatedCounter";

const methodIcons: Record<string, React.ElementType> = {
  "Near-Infrared (NIR) Spectroscopy": Radio,
  "Microwave Transmission Technology": Gauge,
  "Laboratory Halogen Loss-on-Drying": FlaskConical,
};

export function ProductShowcase() {
  const onlineProducts = products.filter((product) => product.category === "online");
  const laboratoryProduct = products.find(
    (product) => product.category === "laboratory"
  );

  return (
    <Section id="products">
      <SectionHeader
        label="Products"
        title="Online and Laboratory Moisture Measurement"
        description="Continuous online analyzers for process control, supported by rapid halogen testing for laboratory quality control, calibration, and verification."
      />

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {onlineProducts.map((product, i) => {
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

      {laboratoryProduct && (
        <FadeIn delay={0.2}>
          <div className="mx-auto mt-8 grid max-w-5xl overflow-hidden rounded-sm border border-border bg-surface shadow-sm md:grid-cols-[280px_1fr]">
            <SiteImage
              src={laboratoryProduct.image}
              alt={laboratoryProduct.name}
              variant="product"
              className="aspect-[4/3] w-full md:aspect-auto md:min-h-64"
            />
            <div className="flex flex-col justify-center p-6 md:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
                <FlaskConical className="h-3.5 w-3.5" />
                Laboratory & Calibration Equipment
              </div>
              <h3 className="mt-3 text-2xl font-bold text-primary">
                {laboratoryProduct.name}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                Fast sample-based reference testing for quality control,
                commissioning, and routine verification of online NIR or
                microwave moisture measurements.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary">
                <span><strong>120 g</strong> capacity</span>
                <span><strong>0.001 g</strong> mass readability</span>
                <span><strong>40-230°C</strong> heating range</span>
              </div>
              <Link
                href={`/products/${laboratoryProduct.slug}`}
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all"
              >
                View Laboratory Analyzer
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </FadeIn>
      )}

      <div className="mt-10 text-center">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
        >
          View All Products
          <ArrowRight className="h-4 w-4" />
        </Link>
        <span className="mx-3 text-border">|</span>
        <Link
          href="/resources/online-vs-halogen-moisture-analyzer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
        >
          Compare Online and Halogen Methods
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
