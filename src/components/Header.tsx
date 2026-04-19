import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { CTAButton } from "./CTAButton";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "@tanstack/react-router";

const NAV = [
  { label: "Home", to: "/", hash: "home" },
  { label: "Why Z&Z", to: "/", hash: "why" },
  { label: "Process", to: "/", hash: "process" },
  { label: "Projects", to: "/", hash: "projects" },
  { label: "Reviews", to: "/", hash: "reviews" },
  { label: "FAQ", to: "/", hash: "faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = async (e: React.MouseEvent, to: string, hash: string) => {
    e.preventDefault();
    setOpen(false);

    if (location.pathname !== to) {
      // If not on home page, navigate to home first
      await navigate({ to });
      // Short delay to ensure page is loaded before scrolling
      setTimeout(() => {
         const el = document.getElementById(hash);
         el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // If already on home page, just scroll
      const el = document.getElementById(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "py-3"
          : "py-5"
      )}
    >
      <div className="container-x">
        <div 
          className={cn(
            "flex h-16 items-center justify-between px-6 rounded-2xl transition-all duration-500",
            scrolled 
              ? "glass shadow-[0_8px_32px_rgba(0,0,0,0.08)]" 
              : "bg-transparent"
          )}
        >
          <Logo />
          
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <motion.div
                key={n.hash}
                whileHover={{ y: -2 }}
                className="relative group"
              >
                <Link
                  to={n.to}
                  onClick={(e) => handleNavClick(e, n.to, n.hash)}
                  className="text-[14px] font-semibold text-navy/70 hover:text-navy transition-colors"
                >
                  {n.label}
                </Link>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </motion.div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
             <CTAButton size="sm" variant="ghost" className="text-navy/70 font-semibold uppercase tracking-wider text-[11px]">
               Login
             </CTAButton>
             <CTAButton size="sm" className="shadow-lg shadow-gold/20">
               Get Started
             </CTAButton>
          </div>

          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl glass text-navy"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-border shadow-2xl"
          >
            <div className="container-x py-8 flex flex-col gap-4">
              {NAV.map((n, i) => (
                <motion.div
                  key={n.hash}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={n.to}
                    onClick={(e) => handleNavClick(e, n.to, n.hash)}
                    className="text-2xl font-bold text-navy hover:text-gold transition-colors block"
                  >
                    {n.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-6 border-t border-border mt-2"
              >
                <CTAButton className="w-full text-lg py-7" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
