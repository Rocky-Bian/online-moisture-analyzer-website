import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { InquiryForm } from "@/components/ui/InquiryForm";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Us",
  description:
    "Contact ALZRO for moisture analyzer datasheets, application assessments, quotes, and engineering support. Response within 1 business day.",
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
      <section className="industrial-gradient pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            Contact
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl max-w-3xl">
            Get in Touch with Our Engineering Team
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            Request datasheets, application assessments, or speak directly with
            our moisture measurement specialists.
          </p>
        </div>
      </section>

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
                  <p className="text-sm text-muted">+1 (800) ALZRO-01</p>
                  <p className="text-sm text-muted">+86 400-ALZRO-01</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">
                    Global Headquarters
                  </p>
                  <p className="text-sm text-muted">
                    ALZRO Industrial Technology Park
                  </p>
                  <p className="text-sm text-muted">
                    Regional offices in US, EU, and APAC
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
