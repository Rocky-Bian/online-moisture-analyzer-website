import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  IndustrialImage,
  type IndustrialImageVariant,
} from "@/components/ui/IndustrialImage";

interface SiteImageProps {
  src?: string;
  alt: string;
  variant?: IndustrialImageVariant;
  label?: string;
  className?: string;
  priority?: boolean;
  overlay?: "dark" | "none";
  fit?: "cover" | "contain";
}

export function SiteImage({
  src,
  alt,
  variant = "product",
  label,
  className,
  priority = false,
  overlay = "none",
  fit,
}: SiteImageProps) {
  const objectFit = fit ?? (variant === "product" ? "contain" : "cover");
  if (!src) {
    return (
      <IndustrialImage
        variant={variant}
        label={label ?? alt}
        className={className}
      />
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-sm",
        variant === "product" ? "bg-white" : "bg-surface",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={cn(
          objectFit === "contain" ? "object-contain p-4" : "object-cover"
        )}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {overlay === "dark" && (
        <div className="absolute inset-0 bg-primary/50" aria-hidden />
      )}
      {label && (
        <div className="absolute bottom-4 left-4 z-10 rounded-sm bg-black/40 px-3 py-1.5 backdrop-blur-sm">
          <p className="text-xs text-white/80">{label}</p>
        </div>
      )}
    </div>
  );
}
