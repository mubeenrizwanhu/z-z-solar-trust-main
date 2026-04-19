import { Link } from "react-router-dom";
import logoImg from "@/assets/logo.jpg";

export function Logo({ variant = "navy" }: { variant?: "navy" | "white" }) {
  const text = variant === "white" ? "text-white" : "text-navy";
  const sub = variant === "white" ? "text-white/60" : "text-muted-foreground";
  return (
    <Link to="/" className="flex items-center gap-2.5 group" aria-label="Z&Z Renewable home">
      <img 
        src={logoImg} 
        alt="" 
        className="h-10 w-10 object-contain rounded-md shadow-sm"
      />
      <span className="flex flex-col leading-none">
        <span className={`font-display font-bold tracking-tight text-[1.05rem] ${text}`}>Z&amp;Z Renewable</span>
        <span className={`text-[10px] uppercase tracking-[0.18em] mt-0.5 ${sub}`}>Premium Solar</span>
      </span>
    </Link>
  );
}
