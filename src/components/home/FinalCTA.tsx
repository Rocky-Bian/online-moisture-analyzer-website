"use client";

import { CTASection } from "@/components/ui/CTASection";

export function FinalCTA() {
  return (
    <CTASection
      headline="Improve Process Stability with Real-Time Moisture Measurement"
      description="Join 500+ industrial installations worldwide. Get a free application assessment from our engineering team."
      primaryLabel="Request Datasheet"
      primaryHref="/contact?type=datasheet"
      secondaryLabel="Contact Engineering Team"
      secondaryHref="/contact?type=engineer"
    />
  );
}
