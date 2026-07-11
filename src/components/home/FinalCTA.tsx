"use client";

import { CTASection } from "@/components/ui/CTASection";

export function FinalCTA() {
  return (
    <CTASection
      headline="Improve Process Stability with Real-Time Moisture Measurement"
      description="Share your material, process, and target moisture range, and we can match the right online measurement approach to your line."
      primaryLabel="Request Datasheet"
      primaryHref="/contact?type=datasheet"
      secondaryLabel="Contact Engineering Team"
      secondaryHref="/contact?type=engineer"
    />
  );
}
