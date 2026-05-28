import { Button } from "./Button";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  headline: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  dark?: boolean;
  className?: string;
}

export function CTASection({
  headline,
  description,
  primaryLabel = "Request Datasheet",
  primaryHref = "/contact?type=datasheet",
  secondaryLabel = "Contact Engineering Team",
  secondaryHref = "/contact",
  dark = true,
  className,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-20 md:py-28",
        dark ? "industrial-gradient text-white" : "bg-surface",
        className
      )}
    >
      <div className="absolute inset-0 industrial-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          {headline}
        </h2>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            {description}
          </p>
        )}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={primaryHref} variant="primary" size="lg">
            {primaryLabel}
          </Button>
          <Button
            href={secondaryHref}
            variant={dark ? "white" : "outline"}
            size="lg"
          >
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
