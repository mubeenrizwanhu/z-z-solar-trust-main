import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
};

export function CTAButton({ className, size = "md", children = "Book Your Free Solar Consultation" }: Props) {
  const sizes = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-6 text-[15px]",
    lg: "h-14 px-7 text-base",
  };
  return (
    <a
      href="#book"
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-[10px] bg-gold font-semibold text-navy",
        "shadow-[0_8px_24px_-8px_color-mix(in_oklab,var(--gold)_55%,transparent)]",
        "transition-all duration-200 hover:bg-gold-deep hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_color-mix(in_oklab,var(--gold)_65%,transparent)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
        sizes[size],
        className
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}
