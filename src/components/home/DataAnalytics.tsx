"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { IndustrialImage } from "@/components/ui/IndustrialImage";
import { FadeIn } from "@/components/ui/AnimatedCounter";
import { BarChart3, TrendingUp, Factory } from "lucide-react";

const dashboards = [
  {
    icon: BarChart3,
    title: "Real-Time Moisture Trends",
    description:
      "Live moisture trend charts with configurable alarm thresholds, historical data logging, and shift comparison analytics.",
    metric: "1 sec",
    metricLabel: "Update Rate",
  },
  {
    icon: TrendingUp,
    title: "Production Optimization",
    description:
      "AI-driven recommendations for dryer setpoints, feed rate adjustments, and energy optimization based on moisture feedback.",
    metric: "28%",
    metricLabel: "Waste Reduction",
  },
  {
    icon: Factory,
    title: "Factory Monitoring",
    description:
      "Multi-line dashboard with centralized monitoring of all moisture analyzers across your facility — accessible from any device.",
    metric: "500+",
    metricLabel: "Active Installations",
  },
];

export function DataAnalytics() {
  return (
    <Section className="bg-surface">
      <SectionHeader
        label="Data & Analytics"
        title="Intelligent Process Data Platform"
        description="Transform moisture measurement data into actionable production insights."
      />

      <div className="grid gap-8 lg:grid-cols-2 items-center">
        <FadeIn>
          <IndustrialImage
            variant="dashboard"
            label="ALZRO Process Dashboard"
            className="aspect-[16/10] w-full shadow-lg"
          />
        </FadeIn>

        <div className="space-y-6">
          {dashboards.map((dash, i) => (
            <FadeIn key={dash.title} delay={i * 0.1}>
              <div className="flex gap-4 rounded-sm border border-border bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-accent/10">
                  <dash.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-bold text-primary">{dash.title}</h3>
                    <div className="text-right shrink-0">
                      <p className="text-lg font-bold text-accent">
                        {dash.metric}
                      </p>
                      <p className="text-[10px] uppercase tracking-widest text-muted-light">
                        {dash.metricLabel}
                      </p>
                    </div>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {dash.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
