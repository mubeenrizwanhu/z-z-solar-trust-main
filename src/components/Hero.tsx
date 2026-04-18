import heroHome from "@/assets/hero-home.jpg";
import { CTAButton } from "./CTAButton";
import { ShieldCheck, Wrench, BadgeDollarSign, Sparkles } from "lucide-react";

const TRUST = [
  { icon: Sparkles, label: "Premium equipment" },
  { icon: Wrench, label: "Expert installation" },
  { icon: BadgeDollarSign, label: "Flexible financing" },
  { icon: ShieldCheck, label: "Long-term warranty" },
];

export function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />
      <div className="absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-gold/5 blur-3xl pointer-events-none" aria-hidden />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 backdrop-blur px-3 py-1.5 text-[12px] font-medium text-navy/75">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Now booking residential consultations
            </div>
            <h1 className="mt-5 font-display font-bold tracking-tight text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.05] text-navy">
              Premium Solar Installation for Homeowners Ready to Lower Energy Costs.
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground max-w-xl">
              Z&amp;Z Renewable designs and installs custom solar systems for homeowners who expect engineering precision, transparent financing, and white-glove service from start to finish.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <CTAButton size="lg" />
              <p className="text-sm text-muted-foreground max-w-[260px]">
                Schedule a consultation, review your property, get expert recommendations.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4">
              {TRUST.map((t) => (
                <div key={t.label} className="flex items-center gap-2.5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-navy/[0.04] text-navy">
                    <t.icon className="h-4 w-4" />
                  </span>
                  <span className="text-[13px] font-medium text-navy/85 leading-tight">{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-[0_30px_80px_-30px_rgba(14,34,56,0.35)]">
              <img
                src={heroHome}
                alt="Modern home with premium rooftop solar installation at golden hour"
                width={1600}
                height={1200}
                className="h-full w-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/25 via-transparent to-transparent" aria-hidden />
            </div>

            <div className="absolute -bottom-6 -left-6 hidden md:block rounded-xl bg-white border border-border shadow-xl px-5 py-4 max-w-[260px]">
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 fill-gold">
                      <path d="M12 17.3 6.18 21l1.55-6.65L2 9.74l6.79-.58L12 3l3.21 6.16L22 9.74l-5.73 4.61L17.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-navy">5.0 rated</span>
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                Trusted by homeowners across the region for clean, reliable installations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
