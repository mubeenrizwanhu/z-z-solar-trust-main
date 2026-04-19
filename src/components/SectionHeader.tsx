import { cn } from "../lib/utils";

type Props = { 
  eyebrow?: string; 
  title: string; 
  subtitle?: string; 
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({ eyebrow, title, subtitle, align = "left", className }: Props) {
  const isCenter = align === "center";
  
  return (
    <div className={cn("flex flex-col", isCenter ? "items-center text-center" : "items-start text-left", className)}>
      {eyebrow && (
        <div className="inline-flex items-center gap-3 text-[11px] md:text-[12px] font-black uppercase tracking-[0.3em] text-gold-deep mb-2">
          {!isCenter && <span className="h-px w-8 bg-gold-deep/40" />}
          <span className="relative">
            {eyebrow}
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </span>
          {isCenter && <span className="h-px w-8 bg-gold-deep/40" />}
        </div>
      )}
      <h2 className="font-display font-bold tracking-tight text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] leading-[1.05] text-navy">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-muted-foreground font-medium max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
