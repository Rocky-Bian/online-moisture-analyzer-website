"use client";

import { FadeIn } from "@/components/ui/AnimatedCounter";
import { Activity, Shield, TimerReset } from "lucide-react";

const trustItems = [
  { icon: Activity, label: "Real-Time Detection", value: "60 checks / second" },
  { icon: Shield, label: "Repeatability", value: "Up to ±0.02%" },
  { icon: TimerReset, label: "Configurable Response", value: "1-80 seconds" },
];

export function TrustBar() {
  return (
    <section className="border-b border-border bg-surface py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3 mb-8">
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

        <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted">
          Key parameters above come from the supplier brochure for the online
          near-infrared moisture analyzer, including measurement frequency,
          repeatability, and configurable response behavior.
        </p>
      </div>
    </section>
  );
}
