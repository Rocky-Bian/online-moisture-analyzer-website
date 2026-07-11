import { PageBanner } from "@/components/ui/PageBanner";
import { Section } from "@/components/ui/Section";
import { siteImages } from "@/lib/images";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy information for inquiries and website interactions related to ALZRO industrial moisture measurement solutions.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageBanner
        image={siteImages.dashboardMonitoring}
        label="Policy"
        title="Privacy Policy"
        description="We only use the information you submit to respond to inquiries, evaluate applications, and provide product support."
      />

      <Section>
        <div className="mx-auto max-w-3xl space-y-8 text-sm leading-7 text-muted">
          <section>
            <h2 className="text-xl font-bold text-primary">Information We Collect</h2>
            <p className="mt-3">
              We collect the contact details and project information you choose to
              submit through inquiry forms, quote requests, and direct outreach.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary">How We Use It</h2>
            <p className="mt-3">
              We use submitted information to respond to your request, evaluate your
              application scenario, prepare technical recommendations, and follow up
              on product or service discussions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary">Data Sharing</h2>
            <p className="mt-3">
              We do not sell your information. We may share it only with internal
              sales, engineering, or service teams involved in responding to your
              request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary">Contact</h2>
            <p className="mt-3">
              If you want us to update or delete submitted inquiry information,
              please contact us through the website contact page.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
