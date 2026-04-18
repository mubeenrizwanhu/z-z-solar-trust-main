import { Award, ShieldCheck, Landmark, MapPin, Star, Wrench } from "lucide-react";

const ITEMS = [
  { icon: Award, title: "Licensed & Certified", sub: "NABCEP-aligned standards" },
  { icon: Landmark, title: "Trusted Financing Partners", sub: "Flexible terms available" },
  { icon: Wrench, title: "10-Year Workmanship", sub: "Installation warranty" },
  { icon: ShieldCheck, title: "25-Year Equipment", sub: "Manufacturer coverage" },
  { icon: MapPin, title: "Local Service Area", sub: "Accountable, accessible" },
  { icon: Star, title: "5.0 Customer Rating", sub: "Verified homeowners" },
];

export function Trust() {
  return (
    <section className="border-y border-border bg-cream">
      <div className="container-x py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-7">
          {ITEMS.map((it) => (
            <div key={it.title} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-white text-navy">
                <it.icon className="h-4.5 w-4.5" strokeWidth={1.8} />
              </span>
              <div className="min-w-0">
                <div className="text-[13px] font-semibold text-navy leading-tight">{it.title}</div>
                <div className="text-[12px] text-muted-foreground mt-0.5">{it.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
