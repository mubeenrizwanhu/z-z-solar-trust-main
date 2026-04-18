import { SectionHeader } from "./SectionHeader";
import { CTAButton } from "./CTAButton";
import { TrendingDown, Shield, Home, Wallet, Sun } from "lucide-react";

const POINTS = [
  { icon: TrendingDown, title: "Reduced utility bills", body: "Offset a meaningful share of your monthly electricity costs." },
  { icon: Shield, title: "Protection from rate hikes", body: "Lock in predictable energy costs as utility rates rise." },
  { icon: Home, title: "Increased home value", body: "Quality solar adds to long-term property value." },
  { icon: Wallet, title: "Financing flexibility", body: "Multiple paths to ownership through trusted partners." },
];

export function Savings() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="Long-Term Value"
              title="A financial decision, engineered for the long run."
              subtitle="Solar isn't a gimmick — it's an asset on your roof. Your consultation includes a personalized look at the numbers, with no inflated promises."
            />
            <ul className="mt-8 space-y-5">
              {POINTS.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy text-gold">
                    <p.icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <div className="font-semibold text-navy">{p.title}</div>
                    <div className="text-[14.5px] text-muted-foreground mt-1">{p.body}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <CTAButton />
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <Stat big="25 yr" label="Equipment warranty" tone="navy" />
              <Stat big="10 yr" label="Workmanship guarantee" tone="cream" />
              <Stat big="0%" label="Down financing options" tone="cream" />
              <Stat big="100%" label="Custom-designed systems" tone="navy" />
            </div>
            <div className="mt-4 rounded-xl border border-border bg-white p-6 flex items-start gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-gold/15 text-gold-deep">
                <Sun className="h-5 w-5" />
              </span>
              <div>
                <div className="font-semibold text-navy">Personalized to your home</div>
                <p className="text-[14px] text-muted-foreground mt-1">
                  Your proposal is built around your actual roof, shading, and utility bills — not industry averages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ big, label, tone }: { big: string; label: string; tone: "navy" | "cream" }) {
  const styles =
    tone === "navy"
      ? "bg-navy text-white border-navy"
      : "bg-cream text-navy border-border";
  return (
    <div className={`rounded-xl border p-6 ${styles}`}>
      <div className="font-display font-bold text-[2.1rem] leading-none">{big}</div>
      <div className={`mt-2.5 text-[13px] ${tone === "navy" ? "text-white/70" : "text-muted-foreground"}`}>{label}</div>
    </div>
  );
}
