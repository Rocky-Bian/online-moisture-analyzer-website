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
}

export function SiteImage({
  src,
  alt,
  variant = "product",
  label,
  className,
  priority = false,
  overlay = "none",
}: SiteImageProps) {
  if (!src) {
    return (
      <IndustrialImage variant={variant} label={label ?? alt} className={className} />
    );
  }

  return (
    <div
      className={cn("relative overflow-hidden rounded-sm bg-surface", className)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {overlay === "dark" && (
        <div className="absolute inset-0 bg-primary/50" />
      )}
      {label && (
        <div className="absolute bottom-4 left-4 z-10 rounded-sm bg-black/40 px-3 py-1.5 backdrop-blur-sm">
          <p className="text-xs text-white/80">{label}</p>
        </div>
      )}
    </div>
  );
}
