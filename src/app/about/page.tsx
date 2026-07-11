import { CheckCircle2, Globe, Users, Award, Microscope } from "lucide-react";
import { PageBanner } from "@/components/ui/PageBanner";
import { siteImages } from "@/lib/images";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CTASection } from "@/components/ui/CTASection";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { createMetadata } from "@/lib/seo";
import { certifications } from "@/content/navigation";

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn more about this online moisture measurement website and its focus on practical NIR and microwave solutions for industrial process lines.",
  path: "/about",
});

const values = [
  {
    icon: Microscope,
    title: "Engineering Excellence",
    description:
      "Deep expertise in NIR spectroscopy, microwave sensing, and industrial process integration.",
  },
  {
    icon: Globe,
    title: "Application Focus",
    description:
      "Focused on real industrial use cases such as starch drying, powders, chemicals, ceramics, and building materials.",
  },
  {
    icon: Users,
    title: "Customer Partnership",
    description:
      "Long-term relationships with OEM partners, system integrators, and end-user manufacturers.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "ISO 9001 certified manufacturing with rigorous testing and validation protocols.",
  },
];

const milestones = [
  { year: "Step 1", event: "Understand the material, moisture range, and installation point" },
  { year: "Step 2", event: "Match the process with NIR or microwave measurement logic" },
  { year: "Step 3", event: "Confirm output method, operator workflow, and control objective" },
  { year: "Step 4", event: "Support commissioning, verification, and routine plant use" },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        image={siteImages.aboutBackground}
        label="About"
        title="Built Around Practical Industrial Moisture Applications"
        description="This website is structured to explain where online moisture measurement creates value, how the technologies differ, and which application conditions matter most before selection."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <SectionHeader
              label="Our Mission"
              title="Make Online Moisture Measurement Easier to Understand"
              description="Many buyers do not need more theory. They need a clearer way to connect process pain points with a realistic measurement approach."
              align="left"
            />
            <p className="text-muted leading-relaxed">
              The content in this site is organized around practical industrial
              questions: where to measure, how quickly moisture changes, what
              quality risks come from over-drying or excess residual moisture,
              and how the measurement signal will actually be used on the line.
              The goal is to make product pages, industry pages, and case-style
              content more useful for real project discussions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: 60, suffix: "/s", label: "NIR Checks" },
              { value: 80, suffix: "s", label: "Max Response" },
              { value: 60, suffix: "%", label: "Range Ceiling" },
              { value: 4, suffix: "", label: "Main Output Paths" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-sm border border-border bg-surface p-6 text-center"
              >
                <p className="text-3xl font-bold text-accent">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeader
          label="Our Values"
          title="What Drives This Site"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-sm border border-border bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-accent/10">
                <value.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 font-bold text-primary">{value.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader label="Workflow" title="How We Think About Projects" />
        <div className="mx-auto max-w-2xl">
          {milestones.map((milestone, i) => (
            <div key={milestone.year} className="flex gap-6 pb-8 last:pb-0">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent px-2 text-[10px] font-bold text-white">
                  {milestone.year}
                </div>
                {i < milestones.length - 1 && (
                  <div className="mt-2 w-px flex-1 bg-border" />
                )}
              </div>
              <div className="pt-2">
                <p className="text-sm font-bold text-accent">{milestone.year}</p>
                <p className="mt-1 text-sm text-primary">{milestone.event}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeader label="Certifications" title="Quality & Compliance" />
        <div className="flex flex-wrap justify-center gap-4">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="flex items-center gap-2 rounded-sm border border-border bg-white px-6 py-4 shadow-sm"
            >
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span className="font-semibold text-primary">{cert}</span>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        headline="Discuss Your Moisture Measurement Project"
        description="Whether you are comparing methods, checking installation points, or preparing an RFQ, the next step is usually a clearer application discussion."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
