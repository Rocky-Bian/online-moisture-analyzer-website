import { cn } from "@/lib/utils";

type ImageVariant =
  | "hero"
  | "product"
  | "industry"
  | "dashboard"
  | "technology"
  | "process";

export type IndustrialImageVariant = ImageVariant;

interface IndustrialImageProps {
  variant?: ImageVariant;
  label?: string;
  className?: string;
}

export function IndustrialImage({
  variant = "hero",
  label,
  className,
}: IndustrialImageProps) {
  const gradients: Record<ImageVariant, string> = {
    hero: "from-slate-800 via-slate-700 to-slate-900",
    product: "from-slate-700 via-blue-900/40 to-slate-800",
    industry: "from-slate-600 via-slate-700 to-slate-800",
    dashboard: "from-slate-900 via-blue-950 to-slate-900",
    technology: "from-blue-950 via-slate-800 to-slate-900",
    process: "from-slate-700 via-slate-600 to-slate-800",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-sm",
        `bg-gradient-to-br ${gradients[variant]}`,
        className
      )}
      role="img"
      aria-label={label ?? "Industrial equipment visualization"}
    >
      <div className="absolute inset-0 industrial-grid opacity-40" />

      {/* Industrial equipment silhouette */}
      <svg
        className="absolute inset-0 h-full w-full opacity-20"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {variant === "hero" && (
          <>
            <rect x="50" y="120" width="300" height="8" fill="#0066cc" opacity="0.6" />
            <rect x="80" y="80" width="60" height="100" stroke="#fff" strokeWidth="1" opacity="0.3" />
            <rect x="160" y="60" width="80" height="120" stroke="#fff" strokeWidth="1" opacity="0.4" />
            <rect x="260" y="90" width="50" height="90" stroke="#fff" strokeWidth="1" opacity="0.3" />
            <circle cx="200" cy="50" r="20" stroke="#0066cc" strokeWidth="2" opacity="0.8" />
            <line x1="200" y1="70" x2="200" y2="60" stroke="#0066cc" strokeWidth="2" />
          </>
        )}
        {variant === "product" && (
          <>
            <rect x="120" y="80" width="160" height="140" rx="4" stroke="#fff" strokeWidth="1.5" opacity="0.5" />
            <rect x="140" y="100" width="120" height="60" fill="#0066cc" opacity="0.2" />
            <circle cx="200" cy="130" r="25" stroke="#0066cc" strokeWidth="2" opacity="0.7" />
            <line x1="100" y1="200" x2="300" y2="200" stroke="#fff" strokeWidth="1" opacity="0.3" />
          </>
        )}
        {variant === "dashboard" && (
          <>
            <rect x="40" y="40" width="320" height="200" rx="4" stroke="#0066cc" strokeWidth="1" opacity="0.4" />
            <polyline
              points="60,180 100,140 140,160 180,100 220,120 260,80 300,90 340,60"
              stroke="#0066cc"
              strokeWidth="2"
              fill="none"
              opacity="0.8"
            />
            <rect x="60" y="50" width="80" height="40" fill="#0066cc" opacity="0.1" />
            <rect x="160" y="50" width="80" height="40" fill="#0066cc" opacity="0.1" />
            <rect x="260" y="50" width="80" height="40" fill="#0066cc" opacity="0.1" />
          </>
        )}
        {(variant === "industry" || variant === "process" || variant === "technology") && (
          <>
            <rect x="60" y="100" width="280" height="6" fill="#0066cc" opacity="0.5" />
            <rect x="100" y="70" width="40" height="80" stroke="#fff" strokeWidth="1" opacity="0.3" />
            <rect x="180" y="50" width="60" height="100" stroke="#fff" strokeWidth="1" opacity="0.4" />
            <rect x="260" y="80" width="40" height="70" stroke="#fff" strokeWidth="1" opacity="0.3" />
          </>
        )}
      </svg>

      {/* Scan line effect for hero/technology */}
      {(variant === "hero" || variant === "technology") && (
        <div className="absolute inset-0 scan-line" />
      )}

      {/* Moisture measurement visualization overlay */}
      {variant === "hero" && (
        <div className="absolute right-8 top-8 w-48 rounded-sm glass-panel p-4">
          <p className="text-[10px] uppercase tracking-widest text-blue-300/70">
            Live Moisture
          </p>
          <p className="mt-1 text-2xl font-mono font-bold text-white">3.24%</p>
          <div className="mt-2 h-1 w-full rounded-full bg-white/10">
            <div className="h-full w-3/4 rounded-full bg-accent animate-pulse-glow" />
          </div>
          <p className="mt-2 text-[10px] text-white/50">±0.1% accuracy</p>
        </div>
      )}

      {label && (
        <div className="absolute bottom-4 left-4 rounded-sm bg-black/40 px-3 py-1.5 backdrop-blur-sm">
          <p className="text-xs text-white/80">{label}</p>
        </div>
      )}
    </div>
  );
}
