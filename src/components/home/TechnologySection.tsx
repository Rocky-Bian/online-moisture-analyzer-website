"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { SiteImage } from "@/components/ui/SiteImage";
import { FadeIn } from "@/components/ui/AnimatedCounter";
import { siteImages } from "@/lib/images";
import {
  Radio,
  Wifi,
  Activity,
  Brain,
  Cpu,
  Monitor,
} from "lucide-react";

const technologies = [
  {
    icon: Radio,
    title: "NIR Moisture Principle",
    description:
      "The analyzer uses moisture-related infrared absorption changes to convert optical signals into stable electrical signals for real-time water-content calculation.",
  },
  {
    icon: Wifi,
    title: "Flexible Output Options",
    description:
      "Standard RS232 is available, with optional 4-20mA and Ethernet outputs plus custom Wi-Fi for projects that need plant-wide data sharing.",
  },
  {
    icon: Activity,
    title: "High-Frequency Monitoring",
    description:
      "The online NIR system supports up to 60 checks per second, giving production teams fast enough feedback for practical process correction.",
  },
  {
    icon: Brain,
    title: "Material & Background Recognition",
    description:
      "The system is positioned for automatic recognition of measured material and background conditions to support stable operation across changing process scenes.",
  },
  {
    icon: Cpu,
    title: "Configurable Timing",
    description:
      "Response time is configurable from 1 to 80 seconds, and sampling time from 1 to 99 seconds, so the analyzer can be tuned to different process speeds.",
  },
  {
    icon: Monitor,
    title: "Non-Contact Installation",
    description:
      "The system can measure without touching the material and can work through a sight glass, which helps in dusty or hard-to-access installations.",
  },
];

export function TechnologySection() {
  return (
    <Section dark className="relative overflow-hidden">
      <div className="absolute inset-0 industrial-grid opacity-10" />
      <div className="relative">
        <SectionHeader
          label="Technology"
          title="Measurement and Integration Features"
          description="Key performance points for the online near-infrared moisture analyzer."
          dark
        />

        <FadeIn className="mb-12">
          <SiteImage
            src={siteImages.aiIndustrial}
            alt="ALZRO online NIR moisture analyzer in smart factory with AI process monitoring"
            variant="industry"
            className="aspect-[21/9] w-full max-h-80"
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, i) => (
            <FadeIn key={tech.title} delay={i * 0.08}>
              <div className="group rounded-sm border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:border-accent/30 transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-accent/20 group-hover:bg-accent/30 transition-colors">
                  <tech.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  {tech.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {tech.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
