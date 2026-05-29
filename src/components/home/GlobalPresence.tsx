"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { SiteImage } from "@/components/ui/SiteImage";
import { AnimatedCounter, FadeIn } from "@/components/ui/AnimatedCounter";
import { siteImages } from "@/lib/images";

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
          <SiteImage
            src={siteImages.factoryApplication}
            alt="Global industrial deployments"
            variant="industry"
            className="aspect-[16/10] w-full shadow-lg"
          />
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
