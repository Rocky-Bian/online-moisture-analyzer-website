"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface InquiryFormProps {
  defaultType?: string;
  productName?: string;
  className?: string;
  compact?: boolean;
}

export function InquiryForm({
  defaultType = "general",
  productName,
  className,
  compact,
}: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className={cn("rounded-sm border border-accent/20 bg-accent/5 p-8 text-center", className)}>
        <p className="text-lg font-bold text-primary">Thank You</p>
        <p className="mt-2 text-sm text-muted">
          Our engineering team will respond within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className={cn("space-y-4", className)}
    >
      {!compact && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-1">
              First Name *
            </label>
            <input
              id="firstName"
              name="firstName"
              required
              className="w-full rounded-sm border border-border px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-primary mb-1">
              Last Name *
            </label>
            <input
              id="lastName"
              name="lastName"
              required
              className="w-full rounded-sm border border-border px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
          Work Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-sm border border-border px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      {!compact && (
        <>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-primary mb-1">
              Company *
            </label>
            <input
              id="company"
              name="company"
              required
              className="w-full rounded-sm border border-border px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>

          <div>
            <label htmlFor="inquiryType" className="block text-sm font-medium text-primary mb-1">
              Inquiry Type
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              defaultValue={defaultType}
              className="w-full rounded-sm border border-border px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent bg-white"
            >
              <option value="general">General Inquiry</option>
              <option value="datasheet">Request Datasheet</option>
              <option value="engineer">Talk to Engineer</option>
              <option value="quote">Request Quote</option>
              <option value="oem">OEM/ODM Partnership</option>
            </select>
          </div>

          {productName && (
            <input type="hidden" name="product" value={productName} />
          )}

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Describe your application, material type, moisture range, and process conditions..."
              className="w-full rounded-sm border border-border px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent resize-none"
            />
          </div>
        </>
      )}

      <Button type="submit" variant="primary" size="md" className="w-full">
        {defaultType === "datasheet" ? "Request Datasheet" : "Submit Inquiry"}
      </Button>

      <p className="text-xs text-muted-light text-center">
        By submitting, you agree to our privacy policy. We respond within 1 business day.
      </p>
    </form>
  );
}
