import { Link } from "@tanstack/react-router";

export function Logo({ variant = "navy" }: { variant?: "navy" | "white" }) {
  const text = variant === "white" ? "text-white" : "text-navy";
  const sub = variant === "white" ? "text-white/60" : "text-muted-foreground";
  return (
    <Link to="/" className="flex items-center gap-2.5 group" aria-label="Z&Z Renewable home">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-md bg-navy">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" />
          <circle cx="12" cy="12" r="3.5" fill="currentColor" stroke="none" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display font-bold tracking-tight text-[1.05rem] ${text}`}>Z&amp;Z Renewable</span>
        <span className={`text-[10px] uppercase tracking-[0.18em] mt-0.5 ${sub}`}>Premium Solar</span>
      </span>
    </Link>
  );
}
