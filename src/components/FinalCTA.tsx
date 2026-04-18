import { useState } from "react";
import { ArrowRight, Check, Sparkles, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API delay
    await new Promise(r => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="book" className="relative py-24 md:py-32 bg-navy overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gold/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-white/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-6">
             <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
             >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] font-black text-gold uppercase tracking-[0.2em] mb-8">
                  <Sparkles className="h-4 w-4" />
                  Limited Availability for 2026
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
                  Secure Your <br /> Property's <span className="text-gold italic">Energy Future.</span>
                </h2>
                
                <p className="text-xl text-white/60 font-medium leading-relaxed mb-12 max-w-xl">
                  Take the first step toward true energy independence. Our high-fidelity consultation process eliminates variables and provides absolute clarity.
                </p>

                <div className="grid sm:grid-cols-2 gap-8">
                   {[
                     { icon: ShieldCheck, title: "No Obligations", desc: "Just a deep-dive engineering review." },
                     { icon: ShieldCheck, title: "Fixed Pricing", desc: "Locked-in rates with zero hidden fees." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4">
                        <item.icon className="h-6 w-6 text-gold shrink-0" />
                        <div>
                           <div className="text-white font-bold text-lg mb-1">{item.title}</div>
                           <div className="text-white/40 text-sm font-medium">{item.desc}</div>
                        </div>
                     </div>
                   ))}
                </div>
             </motion.div>
          </div>

          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-white/5 rounded-[3rem] blur-2xl" />
              <div className="relative glass p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="mb-10 text-center lg:text-left">
                        <h3 className="text-3xl font-black text-white mb-2">Initialize Your Study</h3>
                        <p className="text-white/50 font-medium">A specialist will synchronize with your schedule today.</p>
                      </div>
                      
                      <form onSubmit={onSubmit} className="space-y-6">
                        <Field label="Homeowner Name" id="name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                        <div className="grid sm:grid-cols-2 gap-6">
                          <Field label="Direct Line" id="phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                          <Field label="Email Address" id="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                        </div>
                        <Field label="Full Residence Address" id="address" value={form.address} onChange={(v) => setForm({ ...form, address: v })} />

                        <button
                          type="submit"
                          disabled={loading}
                          className="group relative h-16 w-full overflow-hidden rounded-2xl bg-gold font-black text-navy text-lg shadow-xl shadow-gold/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                        >
                          <div className={`absolute inset-0 bg-navy transition-transform duration-500 origin-left ${loading ? 'scale-x-full' : 'scale-x-0'}`} />
                          <span className={`relative z-10 flex items-center justify-center gap-3 ${loading ? 'text-white' : 'text-navy'}`}>
                            {loading ? "Initializing..." : "Submit Energy Study Request"}
                            {!loading && <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                          </span>
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center"
                    >
                      <div className="mx-auto h-20 w-20 rounded-full bg-gold/10 flex items-center justify-center mb-8 border border-gold/20">
                         <Check className="h-10 w-10 text-gold" strokeWidth={3} />
                      </div>
                      <h3 className="text-3xl font-black text-white mb-4">Study Request Active</h3>
                      <p className="text-white/50 font-medium max-w-sm mx-auto leading-relaxed">
                        Data received. A Z&Z analyst is reviewing your property profile. Stand by for contact.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
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
    <div className="group">
      <label htmlFor={id} className="block text-[11px] font-black text-white/40 uppercase tracking-[0.1em] mb-2 group-focus-within:text-gold transition-colors">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 rounded-xl border border-white/10 bg-white/5 px-4 text-[15px] font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-all"
      />
    </div>
  );
}
