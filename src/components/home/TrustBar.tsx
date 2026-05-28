"use client";

import { FadeIn } from "@/components/ui/AnimatedCounter";
import { certifications } from "@/content/navigation";
import { Globe, Shield, Clock } from "lucide-react";

const partnerLogos = [
  "SIEMENS",
  "ABB",
  "ROCKWELL",
  "SCHNEIDER",
  "EMERSON",
  "HONEYWELL",
];

const trustItems = [
  { icon: Globe, label: "Global Deployment", value: "30+ Countries" },
  { icon: Shield, label: "Certified Quality", value: "ISO / CE / RoHS" },
  { icon: Clock, label: "Industrial Uptime", value: "24/7 Operation" },
];

export function TrustBar() {
  return (
    <section className="border-b border-border bg-surface py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {trustItems.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.1}>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-accent/10">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted">{item.label}</p>
                  <p className="text-lg font-bold text-primary">{item.value}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          {certifications.map((cert) => (
            <span
              key={cert}
              className="rounded-sm border border-border bg-white px-4 py-2 text-xs font-semibold text-primary tracking-wide"
            >
              {cert}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-40">
          {partnerLogos.map((logo) => (
            <span
              key={logo}
              className="text-sm font-bold tracking-[0.2em] text-primary"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
