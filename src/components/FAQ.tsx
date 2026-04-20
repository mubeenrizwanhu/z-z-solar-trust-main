import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "How long does installation take?",
    a: "Most residential installations are completed in 1–3 days on-site. The full project from consultation to activation typically takes a few weeks, including design, permitting, and utility coordination.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. We work with trusted financing partners and offer flexible options including low or zero-down paths. Your consultant will help you compare what fits your home and goals.",
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
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-background border-y border-border">
      <div className="container-x">
        <div className="max-w-2xl">
          <SectionHeader eyebrow="Intelligence" title="Critical answers." />
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <p className="text-xl text-navy/60 font-medium leading-relaxed mb-10">
                If your question isn't covered here, our technical team is available for a deep-dive review during your property study.
              </p>
              <div className="flex items-center gap-4 p-6 bg-gold/5 rounded-3xl border border-gold/10">
                <div className="h-12 w-12 rounded-full bg-gold flex items-center justify-center text-navy font-black text-xl">?</div>
                <div className="flex-1">
                  <div className="text-navy font-bold">Need direct support?</div>
                  <div className="text-navy/60 text-sm font-semibold">Contact us at (555) 123-4567</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={f.q}
                  initial={false}
                  className={`rounded-[2rem] border transition-all duration-500 overflow-hidden ${isOpen ? 'bg-navy border-navy shadow-2xl' : 'bg-white border-border hover:border-gold/50'}`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 text-left px-8 py-8"
                  >
                    <span className={`text-lg font-bold tracking-tight transition-colors ${isOpen ? 'text-white' : 'text-navy'}`}>{f.q}</span>
                    <span className={`h-10 w-10 shrink-0 flex items-center justify-center rounded-xl transition-all ${isOpen ? 'bg-gold text-navy rotate-45' : 'bg-navy/5 text-navy'}`}>
                      <Plus className="h-5 w-5" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-8 pb-10">
                          <p className="text-white/60 text-lg font-medium leading-relaxed max-w-2xl">{f.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
