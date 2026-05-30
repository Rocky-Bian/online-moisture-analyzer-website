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
    title: "NIR Technology",
    description:
      "Near-infrared spectroscopy for non-destructive, real-time moisture analysis. ±0.1% accuracy, 60–120 measurements/sec, with 16-bit high-speed ADC and up to 1M samples/sec.",
  },
  {
    icon: Wifi,
    title: "Microwave Sensing",
    description:
      "Deep-penetration microwave transmission for accurate measurement in dense bulk materials and high-moisture applications.",
  },
  {
    icon: Activity,
    title: "Real-Time Process Monitoring",
    description:
      "Sub-second response times with continuous data streaming for closed-loop process control and alarm management.",
  },
  {
    icon: Brain,
    title: "AI-Assisted Calibration",
    description:
      "Machine learning algorithms adapt to material variations, reducing manual calibration and maintaining long-term accuracy.",
  },
  {
    icon: Cpu,
    title: "PLC Compatibility",
    description:
      "Native support for Modbus, Profibus, and 4-20mA outputs for seamless integration with all major PLC platforms.",
  },
  {
    icon: Monitor,
    title: "SCADA Compatibility",
    description:
      "OPC UA and Ethernet connectivity for direct integration with WinCC, FactoryTalk, Ignition, and other SCADA systems.",
  },
];

export function TechnologySection() {
  return (
    <Section dark className="relative overflow-hidden">
      <div className="absolute inset-0 industrial-grid opacity-10" />
      <div className="relative">
        <SectionHeader
          label="Technology"
          title="Advanced Sensing & Integration Technology"
          description="Industrial-grade measurement technology with full automation ecosystem compatibility."
          dark
        />

        <FadeIn className="mb-12">
          <SiteImage
            src={siteImages.aiIndustrial}
            alt="AI-integrated industrial moisture analysis in smart factory"
            variant="technology"
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
