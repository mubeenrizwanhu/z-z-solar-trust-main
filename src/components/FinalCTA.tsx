import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="book" className="relative py-20 md:py-28 bg-navy overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" aria-hidden />
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gold/8 blur-3xl pointer-events-none" aria-hidden />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-[12px] font-medium text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Free, no-pressure consultation
            </div>
            <h2 className="mt-5 font-display font-bold text-[2rem] sm:text-[2.5rem] lg:text-[2.85rem] leading-[1.08] text-white tracking-tight">
              Ready to see what solar looks like for your home?
            </h2>
            <p className="mt-5 text-[16.5px] text-white/75 max-w-xl leading-relaxed">
              Speak with Z&amp;Z Renewable to review your property, goals, and solar options. No obligation — just a clear plan.
            </p>

            <ul className="mt-8 space-y-3">
              {["Personalized system recommendation", "Transparent financing review", "Honest answers, no high pressure"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-[15px] text-white/85">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold text-navy">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 lg:pl-8">
            <div className="rounded-2xl bg-white p-6 md:p-8 shadow-2xl border border-white/10">
              {!submitted ? (
                <>
                  <h3 className="font-display font-semibold text-navy text-[1.25rem]">Book Your Free Solar Consultation</h3>
                  <p className="text-sm text-muted-foreground mt-1.5">Takes under a minute. We'll reach out to schedule.</p>
                  <form onSubmit={onSubmit} className="mt-6 space-y-4">
                    <Field label="Full name" id="name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Phone" id="phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                      <Field label="Email" id="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                    </div>
                    <Field label="Home address" id="address" value={form.address} onChange={(v) => setForm({ ...form, address: v })} />

                    <button
                      type="submit"
                      className="group mt-2 inline-flex w-full h-13 py-3.5 items-center justify-center gap-2 rounded-[10px] bg-gold font-semibold text-navy text-[15px] shadow-lg hover:bg-gold-deep hover:-translate-y-0.5 transition-all"
                    >
                      Book Your Free Solar Consultation
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                    <p className="text-[12px] text-muted-foreground text-center">
                      Schedule a consultation, review your property, get expert recommendations.
                    </p>
                  </form>
                </>
              ) : (
                <div className="py-10 text-center">
                  <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success">
                    <Check className="h-7 w-7" strokeWidth={2.5} />
                  </div>
                  <h3 className="mt-5 font-display font-semibold text-navy text-[1.2rem]">Request received</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
                    A Z&amp;Z Renewable specialist will reach out shortly to schedule your consultation.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-medium text-navy mb-1.5">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-11 rounded-[10px] border border-border bg-white px-3.5 text-[15px] text-navy placeholder:text-muted-foreground/60 focus:outline-none focus:border-navy focus:ring-2 focus:ring-gold/30 transition"
      />
    </div>
  );
}
