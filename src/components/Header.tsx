import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { CTAButton } from "./CTAButton";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Why Z&Z", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-border shadow-[0_1px_0_0_rgba(14,34,56,0.04)]"
          : "bg-transparent"
      )}
    >
      <div className="container-x flex h-16 md:h-[72px] items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[14px] font-medium text-navy/75 hover:text-navy transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <CTAButton size="sm">Book Free Consultation</CTAButton>
        </div>
        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-navy"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-x py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-2 py-3 text-[15px] font-medium text-navy/85 hover:text-navy border-b border-border/60 last:border-0"
              >
                {n.label}
              </a>
            ))}
            <div className="pt-3">
              <CTAButton className="w-full" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
