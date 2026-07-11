"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { SiteImage } from "@/components/ui/SiteImage";
import { siteImages } from "@/lib/images";
import { FadeIn } from "@/components/ui/AnimatedCounter";
import { BarChart3, TrendingUp, Factory } from "lucide-react";

const dashboards = [
  {
    icon: BarChart3,
    title: "Real-Time Moisture Trends",
    description:
      "Live moisture trend charts help operators see process changes earlier and react before quality moves out of range.",
    metric: "1 sec",
    metricLabel: "Update Rate",
  },
  {
    icon: TrendingUp,
    title: "Faster Process Adjustment",
    description:
      "Moisture feedback supports dryer setpoint, feed-rate, and batching adjustments in starch, powder, and building-material applications.",
    metric: "60x",
    metricLabel: "Checks / Second",
  },
  {
    icon: Factory,
    title: "Networked Visibility",
    description:
      "Ethernet and digital output options make it easier to share moisture values across the line, control room, or quality team.",
    metric: "4",
    metricLabel: "Output Paths",
  },
];

export function DataAnalytics() {
  return (
    <Section className="bg-surface">
      <SectionHeader
        label="Data & Analytics"
        title="Make Moisture Data Easier to Use on the Line"
        description="The value of online measurement is not just the sensor itself, but how quickly the data reaches operators and process decisions."
      />

      <div className="grid gap-8 lg:grid-cols-2 items-center">
        <FadeIn>
          <SiteImage
            src={siteImages.dashboardMonitoring}
            alt="Online NIR moisture analyzer installed on industrial process equipment"
            variant="dashboard"
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
