import { CheckCircle2, Globe, Users, Award, Microscope } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CTASection } from "@/components/ui/CTASection";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { createMetadata } from "@/lib/seo";
import { certifications } from "@/content/navigation";

export const metadata = createMetadata({
  title: "About ALZRO",
  description:
    "ALZRO is a global leader in AI-driven industrial moisture measurement technology, serving lithium battery, powder, food, and chemical industries worldwide.",
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
    title: "Global Reach",
    description:
      "Deployed in 30+ countries with regional support teams and local application engineering.",
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
  { year: "2010", event: "Founded with focus on NIR moisture sensing R&D" },
  { year: "2014", event: "First GWh-scale lithium battery installation" },
  { year: "2017", event: "Microwave product line launch for bulk materials" },
  { year: "2020", event: "AI-assisted calibration platform released" },
  { year: "2023", event: "500+ global installations milestone" },
  { year: "2026", event: "Next-generation multi-sensor platform launch" },
];

export default function AboutPage() {
  return (
    <>
      <section className="industrial-gradient pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            About
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl max-w-3xl">
            Pioneering Industrial Moisture Measurement
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            ALZRO develops AI-driven moisture measurement systems that enable
            industrial manufacturers to achieve unprecedented process control
            and product quality.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <SectionHeader
              label="Our Mission"
              title="Precision Measurement for Industrial Excellence"
              description="We believe that real-time moisture data is the foundation of modern process control. Our mission is to make continuous moisture measurement accessible, reliable, and intelligent for every industrial manufacturer."
              align="left"
            />
            <p className="text-muted leading-relaxed">
              From our founding in 2010, ALZRO has focused exclusively on
              industrial moisture measurement — developing proprietary NIR and
              microwave sensing technologies, AI-assisted calibration
              algorithms, and seamless automation integration. Today, our
              systems monitor moisture in production lines across lithium
              battery, pharmaceutical, food, chemical, and mining industries
              worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: 30, suffix: "+", label: "Countries" },
              { value: 500, suffix: "+", label: "Installations" },
              { value: 15, suffix: "+", label: "Years Experience" },
              { value: 50, suffix: "+", label: "Engineers" },
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
          title="What Drives ALZRO"
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
        <SectionHeader label="History" title="Company Milestones" />
        <div className="mx-auto max-w-2xl">
          {milestones.map((milestone, i) => (
            <div key={milestone.year} className="flex gap-6 pb-8 last:pb-0">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                  {milestone.year.slice(2)}
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
        headline="Partner with ALZRO"
        description="Whether you're an end-user, system integrator, or OEM partner — we'd like to hear from you."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
