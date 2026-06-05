import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-px w-8 bg-primary" />
          <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">{eyebrow}</span>
          <span className="h-px w-8 bg-primary" />
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl tracking-wide text-gradient-silver">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg">{description}</p>
      )}
    </div>
  );
}

export function PageHero({ title, subtitle, children }: { title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-dark">
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, oklch(0.55 0.22 25 / 0.25), transparent 60%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-20 md:py-28 text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-px w-8 bg-primary" />
          <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Gloss Stone</span>
          <span className="h-px w-8 bg-primary" />
        </div>
        <h1 className="font-display text-5xl md:text-6xl tracking-wide text-gradient-silver">{title}</h1>
        {subtitle && <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
