import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageBannerProps {
  image?: string;
  label: string;
  title: string;
  description?: string;
  className?: string;
  headerSlot?: React.ReactNode;
  children?: React.ReactNode;
}

export function PageBanner({
  image,
  label,
  title,
  description,
  className,
  headerSlot,
  children,
}: PageBannerProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-32 pb-20",
        !image && "industrial-gradient",
        className
      )}
    >
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
            aria-hidden
          />
          <div className="absolute inset-0 bg-primary/85" aria-hidden />
        </>
      )}
      {!image && <div className="absolute inset-0 industrial-grid opacity-20" />}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {headerSlot}
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
          {label}
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-white/70">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}
