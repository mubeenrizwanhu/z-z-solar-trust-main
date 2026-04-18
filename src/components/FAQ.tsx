import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const FAQS = [
  {
    q: "How long does installation take?",
    a: "Most residential installations are completed in 1–3 days on-site. The full project from consultation to activation typically takes a few weeks, including design, permitting, and utility coordination. We'll walk you through the timeline during your consultation.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. We work with trusted financing partners and offer flexible options — including low or zero-down paths. Your consultant will help you compare what fits your home and goals.",
  },
  {
    q: "What kind of warranty is included?",
    a: "You're covered by a 25-year manufacturer equipment warranty and a 10-year Z&Z workmanship warranty. We stand behind both the gear and the install.",
  },
  {
    q: "Will solar work for my home?",
    a: "Most homes in our service area are good candidates. During your consultation we evaluate roof orientation, shading, condition, and your usage patterns to confirm whether solar is the right fit.",
  },
  {
    q: "What happens during the consultation?",
    a: "A short, no-pressure conversation about your home and energy bills, followed by a property review and a customized recommendation. You'll leave with clarity, not a sales pitch.",
  },
  {
    q: "How soon can installation begin?",
    a: "Once your design and financing are approved and permits are issued, installation is typically scheduled within a few weeks. The fastest path forward starts with booking your consultation.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 md:py-28 bg-cream border-y border-border">
      <div className="container-x">
        <SectionHeader align="center" eyebrow="Frequently Asked" title="Everything you need before you book." />
        <div className="mt-12 max-w-3xl mx-auto divide-y divide-border rounded-xl border border-border bg-white overflow-hidden">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 text-left px-6 md:px-7 py-5 hover:bg-cream transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-navy text-[1rem] md:text-[1.05rem]">{f.q}</span>
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border text-navy">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 md:px-7 pb-6 text-[15px] leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
