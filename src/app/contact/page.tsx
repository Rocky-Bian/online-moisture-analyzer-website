import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { InquiryForm } from "@/components/ui/InquiryForm";
import { PageBanner } from "@/components/ui/PageBanner";
import { siteImages } from "@/lib/images";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Us",
  description:
    "Contact ALZRO for moisture analyzer datasheets, application assessments, quotes, and engineering support.",
  path: "/contact",
});

interface Props {
  searchParams: Promise<{ type?: string }>;
}

export default async function ContactPage({ searchParams }: Props) {
  const params = await searchParams;
  const inquiryType = params.type ?? "general";

  return (
    <>
      <PageBanner
        image={siteImages.contactBackground}
        label="Contact"
        title="Get in Touch with Our Engineering Team"
        description="Request datasheets, application assessments, or speak directly with our moisture measurement specialists."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeader
              label="Contact Information"
              title="We're Here to Help"
              description="Our application engineers respond to all inquiries within 1 business day."
              align="left"
            />

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-accent/10">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">Email</p>
                  <p className="text-sm text-muted">sales@alzro.com</p>
                  <p className="text-sm text-muted">support@alzro.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-accent/10">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">Phone</p>
                  <p className="text-sm text-muted">Available on request during project communication</p>
                  <p className="text-sm text-muted">Email contact is preferred for first response</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">
                    Service Coverage
                  </p>
                  <p className="text-sm text-muted">
                    Application support for China and overseas process lines
                  </p>
                  <p className="text-sm text-muted">
                    Remote evaluation for powders, fibers, aggregates, and conveyor applications
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-accent/10">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">
                    Support Hours
                  </p>
                  <p className="text-sm text-muted">
                    Mon–Fri, 8:00–18:00 (local time)
                  </p>
                  <p className="text-sm text-muted">
                    24/7 emergency support for installed systems
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-sm border border-border bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-primary mb-6">
                {inquiryType === "datasheet"
                  ? "Request Product Datasheet"
                  : inquiryType === "engineer"
                    ? "Talk to an Engineer"
                    : "Submit Your Inquiry"}
              </h2>
              <InquiryForm defaultType={inquiryType} />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
