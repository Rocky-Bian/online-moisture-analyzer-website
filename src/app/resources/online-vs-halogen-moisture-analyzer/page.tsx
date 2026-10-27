import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageBanner } from "@/components/ui/PageBanner";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/seo";
import { siteImages } from "@/lib/images";

const path = "/resources/online-vs-halogen-moisture-analyzer";

export const metadata = createMetadata({
  title: "Online vs Halogen Moisture Analyzer: Which Method Fits?",
  description:
    "Compare online NIR or microwave moisture analyzers with halogen laboratory analyzers by sampling, response, installation, calibration, limitations, and use case.",
  path,
  keywords: [
    "online moisture analyzer vs halogen moisture analyzer",
    "inline moisture sensor or laboratory moisture analyzer",
    "moisture analyzer selection guide",
  ],
});

const rows = [
  ["Measurement role", "Continuous process trend and control signal", "Sample-based quality control or reference result"],
  ["Where it measures", "On a conveyor, chute, dryer, pipe, or viewing window", "On a prepared sample at a laboratory bench"],
  ["Sampling", "Observes the moving stream at the installed point", "Requires a representative sample taken from the process or batch"],
  ["Response", "Seconds or faster, with configurable averaging", "One result after the programmed drying cycle"],
  ["Process interruption", "Normally none", "Material is removed and the sample is consumed by the test"],
  ["Best use", "Real-time adjustment, alarms, trending, and reduction of delayed checks", "Incoming inspection, product release, method development, and online calibration checks"],
  ["Calibration basis", "Paired process samples and a consistent reference method", "A validated loss-on-drying method for the actual material"],
  ["Main variables", "Material presentation, layer/load, particle size, temperature, environment, and installation geometry", "Sampling, preparation, sample mass, heating temperature, end point, and volatile components"],
  ["Output", "PLC/SCADA signals and continuous plant data", "Displayed result with printer or PC communication, depending on configuration"],
  ["Key limitation", "Application accuracy must be proven at the installed measuring point", "A small sample may not represent a non-uniform batch or moving stream"],
];

const faqs = [
  {
    question: "Can a halogen moisture analyzer replace an online moisture analyzer?",
    answer:
      "It can provide fast sample results, but it cannot continuously observe a moving production stream or provide a real-time control signal. It serves a different measurement role.",
  },
  {
    question: "Can an online moisture analyzer replace laboratory testing?",
    answer:
      "Online measurement can reduce routine manual checks, but a traceable reference method is still needed for calibration, verification, investigations, and product-release decisions defined by the quality system.",
  },
  {
    question: "Is a halogen result the same as an oven-drying result?",
    answer:
      "Not automatically. Both are loss-on-drying methods, but sample mass, temperature, airflow, end point, and volatile compounds can produce different results. The halogen method should be validated against the agreed reference method.",
  },
  {
    question: "When should a plant use both systems?",
    answer:
      "Use both when production needs continuous process feedback and the quality team needs fast, repeatable reference checks. The laboratory method supports commissioning and routine verification of the online model.",
  },
];

export default function OnlineVsHalogenPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.alzro.com" },
          { name: "Resources", url: "https://www.alzro.com/blog" },
          { name: "Online vs Halogen Moisture Analyzer", url: `https://www.alzro.com${path}` },
        ])}
      />

      <PageBanner
        image={siteImages.blogBanner}
        label="Moisture Analyzer Selection Guide"
        title="Online Moisture Analyzer vs Halogen Moisture Analyzer"
        description="Choose by the decision you need to make: online systems continuously measure the process, while halogen analyzers test prepared samples for laboratory quality control and reference work. Many plants need both."
      />

      <Section>
        <div className="mx-auto max-w-4xl">
          <p className="text-xl font-semibold leading-relaxed text-primary">
            Select an online NIR or microwave analyzer when operators need a live moisture signal from the moving material. Select a halogen analyzer when the laboratory needs a rapid sample result. The two methods complement each other when the online model is calibrated and checked against a controlled reference method.
          </p>
          <div className="mt-10 overflow-x-auto rounded-sm border border-border shadow-sm">
            <table className="w-full min-w-[760px] border-collapse bg-white text-left text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-5 py-4">Decision factor</th>
                  <th className="px-5 py-4">Online NIR / microwave</th>
                  <th className="px-5 py-4">Halogen laboratory analyzer</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([factor, online, halogen], index) => (
                  <tr key={factor} className={index % 2 ? "bg-surface" : "bg-white"}>
                    <th className="border-t border-border px-5 py-4 font-semibold text-primary">{factor}</th>
                    <td className="border-t border-border px-5 py-4 text-muted">{online}</td>
                    <td className="border-t border-border px-5 py-4 text-muted">{halogen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeader
          label="Selection Logic"
          title="Match the Instrument to the Operating Decision"
          description="Start with the result, timing, and action your team needs. Then confirm the material and method constraints."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <ChoiceCard
            title="Choose Online Measurement"
            items={["Operators need a live trend or alarm", "A dryer, blender, dosing step, or other process will use the signal", "Batch or within-bale variation makes occasional samples insufficient"]}
            href="/products/online-nir-moisture-analyzer"
            link="Explore online analyzers"
          />
          <ChoiceCard
            title="Choose Halogen Testing"
            items={["The laboratory needs faster results than a conventional oven", "The decision is based on a prepared sample", "Incoming inspection, release, or method development is the priority"]}
            href="/products/halogen-moisture-analyzer-al-1201"
            link="Explore the AL-1201"
          />
          <ChoiceCard
            title="Use Both"
            items={["Production needs continuous control and QA needs a reference result", "The online model requires commissioning samples and routine checks", "The plant wants faster investigations without losing method discipline"]}
            href="/contact?type=recommendation"
            link="Request a system recommendation"
          />
        </div>
      </Section>

      <Section>
        <SectionHeader label="Frequently Asked Questions" title="Questions Before You Select a Method" />
        <div className="mx-auto grid max-w-4xl gap-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-sm border border-border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-primary">{faq.question}</h2>
              <p className="mt-3 leading-relaxed text-muted">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        headline="Unsure Which Moisture Method Fits?"
        description="Send the material, moisture range, current reference method, and a photo or video of the proposed measuring point. Our team will review the practical fit."
        primaryLabel="Request a Recommendation"
        primaryHref="/contact?type=recommendation"
        secondaryLabel="View All Products"
        secondaryHref="/products"
      />
    </>
  );
}

function ChoiceCard({ title, items, href, link }: { title: string; items: string[]; href: string; link: string }) {
  return (
    <div className="flex flex-col rounded-sm border border-border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-primary">{title}</h2>
      <ul className="mt-5 flex-1 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-primary">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            {item}
          </li>
        ))}
      </ul>
      <Link href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
        {link}<ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
