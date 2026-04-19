import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "ghost";
  children?: React.ReactNode;
};

export function CTAButton({ className, size = "md", variant = "primary", children = "Book Your Free Digital Review" }: Props) {
  const sizes = {
    sm: "h-11 px-5 text-[13px]",
    md: "h-14 px-8 text-[15px]",
    lg: "h-16 px-10 text-lg",
  };

  const variants = {
    primary: "bg-gold text-navy shadow-lg shadow-gold/20 hover:bg-gold-deep border border-gold/50",
    ghost: "bg-white/5 hover:bg-white/10 text-navy/70 border border-navy/10 backdrop-blur-sm",
  };

  return (
    <Link
      to="/"
      hash="book"
      className={cn("contents")}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "group inline-flex items-center justify-center gap-2 rounded-2xl font-bold transition-all duration-300 cursor-pointer",
          variants[variant],
          sizes[size],
          className
        )}
      >
        {children}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </motion.div>
    </Link>
  );
}
