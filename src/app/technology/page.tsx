import Link from "next/link";
import {
  Radio,
  Wifi,
  Activity,
  Brain,
  Cpu,
  Monitor,
  ArrowRight,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SiteImage } from "@/components/ui/SiteImage";
import { PageBanner } from "@/components/ui/PageBanner";
import { siteImages } from "@/lib/images";
import { CTASection } from "@/components/ui/CTASection";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Technology",
  description:
    "ALZRO moisture measurement technology — NIR spectroscopy, microwave sensing, AI-assisted calibration, and industrial automation integration.",
  path: "/technology",
});

const technologies = [
  {
    icon: Radio,
    title: "NIR Spectroscopy",
    description:
      "Near-infrared spectroscopy analyzes water absorption at 1450nm and 1940nm wavelengths. Non-contact, sub-second response, ±0.1% accuracy on homogeneous materials.",
    specs: ["0.01–99.9% range", "Non-contact", "<1s response", "IP65 enclosure"],
  },
  {
    icon: Wifi,
    title: "Microwave Sensing",
    description:
      "Microwave transmission measures dielectric properties throughout material volume. Deep penetration up to 300mm for dense bulk materials and conveyor applications.",
    specs: ["0.1–80% range", "300mm penetration", "Belt monitoring", "IP67 enclosure"],
  },
  {
    icon: Brain,
    title: "AI-Assisted Calibration",
    description:
      "Machine learning models continuously adapt to material and environmental changes, reducing manual calibration by 75% while maintaining long-term accuracy.",
    specs: ["Adaptive learning", "Drift detection", "Auto-adjustment", "Traceable to reference"],
  },
  {
    icon: Activity,
    title: "Real-Time Process Control",
    description:
      "Sub-second measurement with continuous data streaming enables closed-loop dryer control, automated quality release, and predictive process optimization.",
    specs: ["Closed-loop control", "Alarm management", "Trend logging", "Shift analytics"],
  },
  {
    icon: Cpu,
    title: "PLC Integration",
    description:
      "Native support for all major PLC platforms via Modbus RTU/TCP, Profibus DP, 4-20mA analog, and digital I/O for seamless automation integration.",
    specs: ["Modbus RTU/TCP", "Profibus DP", "4-20mA output", "Digital I/O"],
  },
  {
    icon: Monitor,
    title: "SCADA & DCS Connectivity",
    description:
      "OPC UA server, Ethernet/IP, and HART protocol support for direct integration with WinCC, FactoryTalk, Ignition, and major DCS platforms.",
    specs: ["OPC UA", "Ethernet/IP", "HART", "Pre-configured packages"],
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageBanner
        image={siteImages.aiIndustrial}
        label="Technology"
        title="Advanced Moisture Sensing Technology"
        description="Proprietary NIR and microwave sensing platforms with AI-assisted calibration and full industrial automation ecosystem compatibility."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 items-center mb-20">
          <SiteImage
            src={siteImages.nirBeamEffect}
            alt="NIR scanning technology on industrial conveyor"
            variant="technology"
            className="aspect-[16/10] w-full shadow-lg"
          />
          <div>
            <SectionHeader
              label="Platform Overview"
              title="Unified Measurement Architecture"
              description="ALZRO's sensing platform combines multi-technology measurement, intelligent calibration, and industrial-grade connectivity in a single integrated system."
              align="left"
            />
            <p className="text-muted leading-relaxed">
              Our platform architecture enables deployment of NIR, microwave, or
              hybrid measurement configurations from a common hardware and
              software base. This reduces integration complexity, simplifies
              maintenance, and provides a consistent data interface regardless
              of measurement technology.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <div
              key={tech.title}
              className="rounded-sm border border-border bg-white p-6 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-accent/10">
                <tech.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-primary">
                {tech.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {tech.description}
              </p>
              <ul className="mt-4 space-y-1">
                {tech.specs.map((spec) => (
                  <li
                    key={spec}
                    className="text-xs font-mono text-accent/80"
                  >
                    → {spec}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeader
          label="Integration"
          title="Compatible Automation Ecosystems"
          description="Pre-validated integration with the industry's leading automation platforms."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Siemens TIA Portal / WinCC",
            "Rockwell FactoryTalk",
            "Schneider EcoStruxure",
            "Inductive Automation Ignition",
            "ABB System 800xA",
            "Emerson DeltaV",
            "Honeywell Experion",
            "Mitsubishi iQ-Platform",
          ].map((platform) => (
            <div
              key={platform}
              className="rounded-sm border border-border bg-white px-4 py-3 text-sm font-medium text-primary text-center shadow-sm"
            >
              {platform}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/contact?type=engineer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
          >
            Discuss Your Integration Requirements
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <CTASection
        headline="See Our Technology in Your Process"
        description="Request a free application assessment and technical demonstration."
        primaryLabel="Request Demo"
        primaryHref="/contact?type=engineer"
      />
    </>
  );
}
