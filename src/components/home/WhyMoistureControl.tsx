"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/AnimatedCounter";
import { Droplets, TrendingDown, Activity, Clock } from "lucide-react";

const reasons = [
  {
    icon: Droplets,
    title: "Moisture Affects Product Quality",
    description:
      "Even small moisture variations cause defects in coating, compaction, and chemical reactions — directly impacting yield and product performance.",
  },
  {
    icon: TrendingDown,
    title: "Excess Moisture Creates Defects",
    description:
      "Over-moisture leads to caking, agglomeration, coating defects, and safety hazards in moisture-sensitive materials like lithium compounds.",
  },
  {
    icon: Activity,
    title: "Real-Time Monitoring Improves Yield",
    description:
      "Continuous inline measurement enables immediate process adjustments, reducing out-of-spec production and material waste by up to 30%.",
  },
  {
    icon: Clock,
    title: "Continuous Measurement Reduces Downtime",
    description:
      "Eliminate delays from offline laboratory testing. Online analyzers provide data every second, keeping production lines running at optimal efficiency.",
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
            description="Moisture is one of the most critical — and most overlooked — process variables in industrial manufacturing."
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
                { step: "01", label: "Material Feed", status: "Moisture: 4.2%" },
                { step: "02", label: "Inline NIR Analysis", status: "Real-time: 3.8%" },
                { step: "03", label: "Dryer Control Signal", status: "Adjust: -0.4%" },
                { step: "04", label: "Quality Verification", status: "Pass: 3.4% ±0.1%" },
              ].map((item, i) => (
                <div key={item.step} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    {item.step}
                  </div>
                  <div className="flex-1 rounded-sm bg-surface px-4 py-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-primary">
                        {item.label}
                      </span>
                      <span className="text-xs font-mono text-accent">
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
                <span className="font-bold">Result:</span> Closed-loop moisture
                control reduces waste by 28% and improves batch consistency
                across production shifts.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
