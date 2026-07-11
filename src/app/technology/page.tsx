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
    "Online moisture measurement technology including NIR spectroscopy, microwave sensing, and practical integration options for industrial process lines.",
  path: "/technology",
});

const technologies = [
  {
    icon: Radio,
    title: "NIR Spectroscopy",
    description:
      "Near-infrared measurement is a strong choice for non-contact monitoring of powders, granules, and exposed material surfaces where fast process feedback matters.",
    specs: [
      "±0.1% accuracy",
      "Up to 60 checks/sec",
      "Non-contact setup",
      "250mm ± 50mm working distance",
      "Non-destructive",
      "Easy maintenance access",
    ],
  },
  {
    icon: Wifi,
    title: "Microwave Sensing",
    description:
      "Microwave sensing is useful when the project needs deeper penetration into bulk material rather than a surface-focused non-contact reading.",
    specs: ["0.1–80% range", "300mm penetration", "Belt monitoring", "IP67 enclosure"],
  },
  {
    icon: Brain,
    title: "Application Matching",
    description:
      "Good performance depends on choosing the right measuring point, material model, and installation method for the process rather than relying on generic settings alone.",
    specs: ["Material-specific setup", "Reference verification", "Field adjustment", "Process-based tuning"],
  },
  {
    icon: Activity,
    title: "Real-Time Process Control",
    description:
      "Continuous moisture data supports faster process adjustment in drying, conveying, mixing, and batching applications where manual checks are too slow.",
    specs: ["Closed-loop control", "Alarm management", "Trend logging", "Shift analytics"],
  },
  {
    icon: Cpu,
    title: "PLC Integration",
    description:
      "For many projects, the most important question is how the value will be used after measurement, whether for display, alarming, or process adjustment.",
    specs: ["RS232", "4-20mA option", "Ethernet option", "Custom Wi-Fi"],
  },
  {
    icon: Monitor,
    title: "Operator Visibility",
    description:
      "The real value of online measurement appears when operators can actually see moisture trends in time to react before product quality shifts.",
    specs: ["Trend display", "Alarm thresholds", "Shift visibility", "Remote data sharing"],
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageBanner
        image={siteImages.aiIndustrial}
        label="Technology"
        title="Advanced Moisture Sensing Technology"
        description="A practical overview of NIR and microwave moisture measurement, typical installation logic, and common signal-integration needs for process lines."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 items-center mb-20">
          <SiteImage
            src={siteImages.nirBeamEffect}
            alt="ALZRO NIR moisture analyzer mounted above conveyor — lens facing downward toward material"
            variant="industry"
            className="aspect-[16/10] w-full shadow-lg"
          />
          <div>
            <SectionHeader
              label="Platform Overview"
              title="Unified Measurement Architecture"
              description="The best moisture-measurement projects combine the right sensing method, a realistic measuring point, and a signal path the production team can actually use."
              align="left"
            />
            <p className="text-muted leading-relaxed">
              In practice, successful online measurement depends on matching
              the process goal to the measurement method. Some lines need
              non-contact NIR measurement above the product, while others
              benefit more from deeper microwave penetration. The engineering
              decision should follow the material, line layout, and control
              objective rather than a one-size-fits-all template.
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
          title="Common Integration Directions"
          description="Typical ways production teams use online moisture signals once the instrument is installed."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Local operator display",
            "Dryer adjustment reference",
            "Batching water correction",
            "Quality trend records",
            "Central control room sharing",
            "Production shift comparison",
            "Alarm and deviation warning",
            "Remote process visibility",
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
