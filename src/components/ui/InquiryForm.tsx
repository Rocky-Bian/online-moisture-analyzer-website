"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface InquiryFormProps {
  defaultType?: string;
  productName?: string;
  productCategory?: "online" | "laboratory";
  className?: string;
  compact?: boolean;
}

export function InquiryForm({
  defaultType = "general",
  productName,
  productCategory,
  className,
  compact,
}: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

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
      onSubmit={async (e) => {
        e.preventDefault();
        setError("");
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);
        formData.append("_subject", "New inquiry from ALZRO website");
        formData.append("_template", "table");
        formData.append("_captcha", "false");
        formData.append("sourcePage", window.location.href);

        try {
          const response = await fetch("https://formsubmit.co/ajax/rocky@alzro.com", {
            method: "POST",
            body: formData,
            headers: {
              Accept: "application/json",
            },
          });

          if (!response.ok) {
            throw new Error("Unable to submit inquiry");
          }

          setSubmitted(true);
          window.gtag?.("event", "generate_lead", {
            inquiry_type: String(formData.get("inquiryType") ?? defaultType),
            product: productName ?? "general",
            product_category: productCategory ?? "unspecified",
          });
        } catch {
          setError(
            "We could not send your inquiry right now. Please email rocky@alzro.com or reya@alzro.com, or contact us on WhatsApp: +8615165848866."
          );
        } finally {
          setIsSubmitting(false);
        }
      }}
      className={cn("space-y-4", className)}
    >
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

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
              <option value="recommendation">Product Recommendation</option>
              <option value="sample-test">Sample Test / Method Evaluation</option>
              <option value="oem">OEM/ODM Partnership</option>
            </select>
          </div>

          {productName && (
            <input type="hidden" name="product" value={productName} />
          )}
          {productCategory && (
            <input type="hidden" name="productLine" value={productCategory} />
          )}

          {productCategory === "online" && (
            <div className="rounded-sm border border-border bg-surface p-4">
              <p className="mb-4 text-sm font-semibold text-primary">Process information</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Material *" name="material" required placeholder="e.g. rice straw, starch, sand" />
                <FormField label="Expected moisture range *" name="moistureRange" required placeholder="e.g. 8-25%" />
                <FormField label="Layer thickness / line speed" name="processGeometry" placeholder="e.g. 150 mm / 0.8 m/s" />
                <FormField label="Material temperature" name="materialTemperature" placeholder="e.g. 45°C" />
                <FormField label="Installation point" name="installationPoint" placeholder="Conveyor, chute, dryer outlet..." />
                <FormField label="Required communication" name="communication" placeholder="4-20mA, Modbus, Profinet..." />
              </div>
            </div>
          )}

          {productCategory === "laboratory" && (
            <div className="rounded-sm border border-border bg-surface p-4">
              <p className="mb-4 text-sm font-semibold text-primary">Sample and method information</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Sample material *" name="material" required placeholder="e.g. polymer pellet, flour" />
                <FormField label="Expected moisture range *" name="moistureRange" required placeholder="e.g. 0.2-12%" />
                <FormField label="Current reference method" name="currentMethod" placeholder="Oven method, Karl Fischer..." />
                <FormField label="Typical sample mass / tests per day" name="sampleVolume" placeholder="e.g. 5 g / 20 tests" />
                <FormField label="Required result time" name="requiredTestTime" placeholder="e.g. under 15 minutes" />
                <FormField label="Data requirement" name="dataRequirement" placeholder="Printer, PC, USB..." />
              </div>
            </div>
          )}

          <div>
            <label htmlFor="country" className="block text-sm font-medium text-primary mb-1">
              Country / Region
            </label>
            <input id="country" name="country" autoComplete="country-name" className="w-full rounded-sm border border-border px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
          </div>

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

      {error && (
        <p className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="md"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? "Sending..."
          : defaultType === "datasheet"
            ? "Request Datasheet"
            : "Submit Inquiry"}
      </Button>

      <p className="text-xs text-muted-light text-center">
        By submitting, you agree to our privacy policy. We respond within 1 business day.
      </p>
    </form>
  );
}

function FormField({
  label,
  name,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-medium text-primary mb-1">
        {label}
      </label>
      <input
        id={name}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-sm border border-border bg-white px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
      />
    </div>
  );
}

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: Record<string, string>) => void;
  }
}
