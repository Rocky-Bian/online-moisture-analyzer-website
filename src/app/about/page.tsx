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
    "Learn about ALZRO, a supplier of online NIR and microwave analyzers for industrial processes and halogen moisture analyzers for laboratory quality control.",
  path: "/about",
});

const strengths = [
  {
    icon: Microscope,
    title: "Measurement Expertise",
    description:
      "We connect online NIR and microwave process measurement with halogen laboratory reference testing.",
  },
  {
    icon: Globe,
    title: "Industrial Application Focus",
    description:
      "Our work covers industrial process lines and laboratory quality-control methods across moisture-sensitive materials.",
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
  { step: "02", event: "Select online NIR, microwave, or halogen laboratory measurement based on the decision required" },
  { step: "03", event: "Confirm installation or sample method, communication output, and calibration plan" },
  { step: "04", event: "Support commissioning, verification, operator use, and routine maintenance" },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        image={siteImages.aboutBackground}
        label="About ALZRO"
        title="Industrial and Laboratory Moisture Measurement"
        description="ALZRO supplies online NIR and microwave analyzers for continuous process control and halogen analyzers for rapid laboratory quality control and reference testing."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <SectionHeader
              label="Who We Are"
              title="A Practical Partner for Process and Laboratory Measurement"
              description="We help plants combine continuous production data with controlled sample-based reference testing."
              align="left"
            />
            <p className="text-muted leading-relaxed">
              ALZRO provides online and laboratory moisture measurement
              solutions for customers who need faster production feedback and
              reliable quality-control results. Our application support is built around
              practical questions: where the sensor should be installed, how the
              material is presented, how quickly moisture changes, and how the
              signal will be used by operators, PLC systems, or quality teams.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              From near-infrared surface measurement and microwave bulk-moisture
              monitoring to halogen loss-on-drying tests, we help customers choose
              the method that matches the operating decision. The goal is to reduce
              delayed checks, stabilize product quality, build dependable reference
              methods, and make moisture data useful in daily operation.
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
          title="Process Measurement, Laboratory Methods, and Integration"
          description="Moisture measurement connects material behavior, installation or sample preparation, calibration, and the decision made from the result."
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
          description="A good moisture project starts with the production or quality-control decision, not only the instrument model."
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
        description="Tell us your material, process or laboratory method, and control objective. We will help review whether online NIR, microwave, or halogen measurement is the better fit."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
