import { Award, Globe, Microscope, Users } from "lucide-react";
import { PageBanner } from "@/components/ui/PageBanner";
import { siteImages } from "@/lib/images";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CTASection } from "@/components/ui/CTASection";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About ALZRO",
  description:
    "Learn about ALZRO, an industrial online moisture measurement company providing NIR and microwave solutions for drying, conveying, powder processing, and bulk solids applications.",
  path: "/about",
});

const strengths = [
  {
    icon: Microscope,
    title: "Measurement Expertise",
    description:
      "We focus on online NIR and microwave moisture measurement for real process environments.",
  },
  {
    icon: Globe,
    title: "Industrial Application Focus",
    description:
      "Our work covers starch, chemicals, minerals, ceramics, fibers, aggregates, carbon black, and other moisture-sensitive materials.",
  },
  {
    icon: Users,
    title: "Project-Based Support",
    description:
      "We help customers define the measurement point, method, output signal, and commissioning path before selection.",
  },
  {
    icon: Award,
    title: "Practical Reliability",
    description:
      "We value stable installation, calibration discipline, and long-term usability more than brochure-only specifications.",
  },
];

const workflow = [
  { step: "01", event: "Review the material, target moisture range, and process pain point" },
  { step: "02", event: "Select NIR or microwave measurement based on material presentation and control objective" },
  { step: "03", event: "Confirm installation position, communication output, and calibration plan" },
  { step: "04", event: "Support commissioning, verification, operator use, and routine maintenance" },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        image={siteImages.aboutBackground}
        label="About ALZRO"
        title="Online Moisture Measurement for Real Industrial Processes"
        description="ALZRO helps manufacturers monitor moisture continuously in drying, conveying, powder processing, and bulk-material handling lines using NIR and microwave measurement technologies."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <SectionHeader
              label="Who We Are"
              title="A Practical Partner for Industrial Moisture Control"
              description="We focus on helping plants move from delayed manual testing to continuous, process-level moisture visibility."
              align="left"
            />
            <p className="text-muted leading-relaxed">
              ALZRO provides online moisture measurement solutions for
              industrial customers who need faster feedback from production
              lines. Our products and application support are built around
              practical questions: where the sensor should be installed, how the
              material is presented, how quickly moisture changes, and how the
              signal will be used by operators, PLC systems, or quality teams.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              From near-infrared surface measurement to microwave bulk-moisture
              monitoring, we help customers choose the right method for their
              material and process. The goal is simple: reduce delayed manual
              checks, stabilize product quality, avoid unnecessary over-drying,
              and make moisture data useful in daily plant operation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: 60, suffix: "/s", label: "NIR Measurement Rate" },
              { value: 80, suffix: "%", label: "Microwave Moisture Range" },
              { value: 4, suffix: "", label: "Industrial Output Paths" },
              { value: 18, suffix: "+", label: "Application Fields" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-sm border border-border bg-surface p-6 text-center"
              >
                <p className="text-3xl font-bold text-accent">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeader
          label="What We Do"
          title="Industrial Measurement, Application Engineering, and Integration"
          description="Moisture measurement is not only a sensor choice. It is a project decision that connects material behavior, installation conditions, calibration, and plant control."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item) => (
            <div
              key={item.title}
              className="rounded-sm border border-border bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-accent/10">
                <item.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 font-bold text-primary">{item.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          label="Project Support"
          title="How We Work With Customers"
          description="A good online moisture project starts with the production problem, not only the instrument model."
        />
        <div className="mx-auto max-w-2xl">
          {workflow.map((item, i) => (
            <div key={item.step} className="flex gap-6 pb-8 last:pb-0">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent px-2 text-xs font-bold text-white">
                  {item.step}
                </div>
                {i < workflow.length - 1 && (
                  <div className="mt-2 w-px flex-1 bg-border" />
                )}
              </div>
              <div className="pt-2">
                <p className="text-sm font-bold text-accent">Step {item.step}</p>
                <p className="mt-1 text-sm text-primary">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        headline="Discuss Your Moisture Measurement Project"
        description="Tell us your material, process line, and control objective. We will help review whether NIR or microwave measurement is the better fit."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
