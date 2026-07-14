"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/AnimatedCounter";
import { Droplets, TrendingDown, Activity, Clock } from "lucide-react";

const reasons = [
  {
    icon: Droplets,
    title: "Moisture Directly Affects Product Quality",
    description:
      "In starch, calcium carbonate, ceramic powder, PVC additives, and washed sand, small moisture changes can quickly show up as caking, color drift, weak granules, or unstable batching.",
  },
  {
    icon: TrendingDown,
    title: "Over-Drying Also Creates Losses",
    description:
      "Supplier case materials repeatedly show that excessive drying can waste energy, reduce whiteness, hurt flowability, and even increase dust or safety risk in powder applications.",
  },
  {
    icon: Activity,
    title: "Real-Time Monitoring Improves Control",
    description:
      "Online NIR measurement gives operators moisture values during production, making it easier to tune dryer intensity, feed rate, air volume, or added water before quality drifts too far.",
  },
  {
    icon: Clock,
    title: "Continuous Measurement Replaces Delayed Sampling",
    description:
      "Compared with oven methods or periodic grab samples, online measurement shortens feedback time dramatically and lowers the amount of manual checking needed on the line.",
  },
];

export function WhyMoistureControl() {
  return (
    <Section className="bg-surface">
      <div className="grid gap-16 lg:grid-cols-2 items-center">
        <div>
          <SectionHeader
            label="Why It Matters"
            title="Why Moisture Control Matters in Industrial Production"
            description="The supplier material makes one point very clear: across drying, conveying, and powder finishing, moisture is often the variable that decides cost, quality, and stability."
            align="left"
          />

          <div className="space-y-6">
            {reasons.map((reason, i) => (
              <FadeIn key={reason.title} delay={i * 0.1}>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-accent/10">
                    <reason.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">{reason.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.3}>
          <div className="relative rounded-sm border border-border bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-6">
              Process Flow — Moisture Control Loop
            </p>

            {/* Animated process diagram */}
            <div className="space-y-4">
              {[
                { step: "01", label: "Material Feed", status: "Initial moisture trend" },
                { step: "02", label: "Inline NIR Analysis", status: "Up to 60 checks / sec" },
                { step: "03", label: "Operator or PLC Adjustment", status: "Dryer / feed / water correction" },
                { step: "04", label: "Final Quality Control", status: "Stable finished moisture" },
              ].map((item, i) => (
                <div key={item.step} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    {item.step}
                  </div>
                  <div className="flex-1 rounded-sm bg-surface px-4 py-3">
                    <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_15rem] sm:items-center">
                      <span className="text-sm font-semibold text-primary">
                        {item.label}
                      </span>
                      <span className="text-xs font-mono text-accent sm:text-right">
                        {item.status}
                      </span>
                    </div>
                  </div>
                  {i < 3 && (
                    <div className="absolute left-[2.65rem] hidden lg:block">
                      <div className="h-4 w-px bg-border" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-sm bg-accent/5 border border-accent/20 p-4">
              <p className="text-sm text-primary">
                <span className="font-bold">Typical result:</span> Better
                moisture visibility helps plants reduce manual intervention,
                stabilize product quality, and avoid unnecessary over-drying.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
