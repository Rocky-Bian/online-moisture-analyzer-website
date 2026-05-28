"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { AnimatedCounter, FadeIn } from "@/components/ui/AnimatedCounter";
import { Globe2 } from "lucide-react";

const stats = [
  { value: 30, suffix: "+", label: "Countries Served" },
  { value: 500, suffix: "+", label: "Installations Worldwide" },
  { value: 24, suffix: "/7", label: "Industrial Operation" },
  { value: 99, suffix: ".7%", label: "System Uptime" },
];

const regions = [
  { name: "North America", deployments: 120 },
  { name: "Europe", deployments: 180 },
  { name: "Asia Pacific", deployments: 150 },
  { name: "Middle East", deployments: 35 },
  { name: "South America", deployments: 25 },
];

export function GlobalPresence() {
  return (
    <Section>
      <SectionHeader
        label="Global Presence"
        title="Trusted by Industry Leaders Worldwide"
        description="ALZRO moisture measurement systems deployed across 30+ countries in the world's most demanding industrial environments."
      />

      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <FadeIn>
          <div className="relative aspect-[16/10] rounded-sm border border-border bg-surface overflow-hidden">
            <div className="absolute inset-0 industrial-grid opacity-30" />
            <Globe2 className="absolute inset-0 m-auto h-48 w-48 text-accent/10" strokeWidth={0.5} />

            {/* Map dots */}
            {[
              { top: "30%", left: "20%" },
              { top: "35%", left: "48%" },
              { top: "28%", left: "72%" },
              { top: "55%", left: "25%" },
              { top: "60%", left: "55%" },
              { top: "70%", left: "80%" },
              { top: "45%", left: "35%" },
              { top: "50%", left: "65%" },
            ].map((dot, i) => (
              <div
                key={i}
                className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2"
                style={{ top: dot.top, left: dot.left }}
              >
                <div className="absolute inset-0 rounded-full bg-accent animate-pulse-glow" />
                <div className="absolute inset-0 rounded-full bg-accent/30 scale-[2]" />
              </div>
            ))}
          </div>
        </FadeIn>

        <div>
          <div className="grid grid-cols-2 gap-6 mb-10">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="rounded-sm border border-border bg-white p-5 text-center shadow-sm">
                  <p className="text-3xl font-bold text-accent">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-light">
                Regional Deployments
              </p>
              {regions.map((region) => (
                <div key={region.name} className="flex items-center gap-4">
                  <span className="w-32 text-sm text-primary shrink-0">
                    {region.name}
                  </span>
                  <div className="flex-1 h-2 rounded-full bg-surface-dark overflow-hidden">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-1000"
                      style={{
                        width: `${(region.deployments / 180) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="text-sm font-mono text-muted w-8 text-right">
                    {region.deployments}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
