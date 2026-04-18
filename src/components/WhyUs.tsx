import { SectionHeader } from "./SectionHeader";

const ITEMS = [
  {
    n: "01",
    title: "Customized System Design",
    body: "Every system is engineered to your roof, energy use, and long-term goals — never templated, never oversold.",
  },
  {
    n: "02",
    title: "Clean, Expert Installation",
    body: "In-house crews with rigorous standards. Tidy worksites, careful roofing, and finishes that protect your home's value.",
  },
  {
    n: "03",
    title: "Financing Made Simple",
    body: "Transparent options through trusted partners. We walk you through what fits — no pressure, no surprises.",
  },
  {
    n: "04",
    title: "Long-Term Support",
    body: "25-year equipment coverage and a 10-year workmanship warranty backed by a local team that picks up the phone.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="py-20 md:py-28">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Why Z&Z Renewable"
              title="The serious choice for homeowners who expect more."
              subtitle="We work with homeowners who treat solar as a long-term investment in their home — not a discount funnel. Here's what that looks like in practice."
            />
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {ITEMS.map((it) => (
              <div key={it.n} className="bg-white p-7 md:p-8 hover:bg-cream transition-colors">
                <div className="font-display text-[13px] font-semibold tracking-[0.18em] text-gold-deep">{it.n}</div>
                <h3 className="mt-3 font-display font-semibold text-[1.15rem] text-navy">{it.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted-foreground">{it.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
