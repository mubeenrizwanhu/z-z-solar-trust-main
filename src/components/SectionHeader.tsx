type Props = { eyebrow?: string; title: string; subtitle?: string; align?: "left" | "center" };

export function SectionHeader({ eyebrow, title, subtitle, align = "left" }: Props) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${a}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-gold-deep`}>
          <span className="h-px w-6 bg-gold-deep/60" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 font-display font-bold tracking-tight text-[1.9rem] sm:text-[2.25rem] lg:text-[2.5rem] leading-[1.1] text-navy">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
