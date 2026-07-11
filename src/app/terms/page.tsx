import { PageBanner } from "@/components/ui/PageBanner";
import { Section } from "@/components/ui/Section";
import { siteImages } from "@/lib/images";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms of Service",
  description:
    "General website use terms for ALZRO industrial moisture measurement content and inquiry services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageBanner
        image={siteImages.aiIndustrial}
        label="Policy"
        title="Terms of Service"
        description="Website content is provided for industrial product reference, application communication, and project evaluation."
      />

      <Section>
        <div className="mx-auto max-w-3xl space-y-8 text-sm leading-7 text-muted">
          <section>
            <h2 className="text-xl font-bold text-primary">General Use</h2>
            <p className="mt-3">
              This website is intended for product information, technical reference,
              and inquiry submission related to industrial moisture measurement
              systems.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary">Technical Information</h2>
            <p className="mt-3">
              Application descriptions, performance references, and case examples are
              provided for communication purposes. Final suitability should be
              confirmed according to the actual material, installation conditions,
              and calibration scope of each project.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary">Inquiry Submissions</h2>
            <p className="mt-3">
              By submitting project information, you confirm that the details are
              accurate to the best of your knowledge and may be used for technical
              evaluation and follow-up communication.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
