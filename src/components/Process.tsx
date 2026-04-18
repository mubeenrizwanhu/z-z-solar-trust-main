import { SectionHeader } from "./SectionHeader";

const STEPS = [
  { n: "1", title: "Book Consultation", body: "A short call to understand your home, energy bills, and goals." },
  { n: "2", title: "Property & Energy Review", body: "On-site or virtual assessment of roof, shading, and usage patterns." },
  { n: "3", title: "System Design & Proposal", body: "A clear, customized plan with equipment, financing, and timeline." },
  { n: "4", title: "Installation & Activation", body: "Professional install, utility coordination, and system turn-on." },
];

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-cream border-y border-border">
      <div className="container-x">
        <SectionHeader
          align="center"
          eyebrow="Simple 4-Step Process"
          title="Clear from first call to first kilowatt."
          subtitle="No vague timelines. No surprises. You'll always know what's next."
        />

        <div className="mt-14 relative">
          <div className="hidden md:block absolute left-0 right-0 top-7 h-px bg-border" aria-hidden />
          <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative">
            {STEPS.map((s) => (
              <div key={s.n} className="relative">
                <div className="flex md:block items-center gap-4">
                  <div className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white border border-border shadow-sm font-display font-bold text-navy text-lg">
                    {s.n}
                    <span className="absolute inset-0 rounded-full ring-1 ring-gold/30" aria-hidden />
                  </div>
                  <h3 className="md:mt-5 font-display font-semibold text-[1.05rem] text-navy">{s.title}</h3>
                </div>
                <p className="mt-3 md:mt-2 text-[14.5px] leading-relaxed text-muted-foreground md:max-w-[240px]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
