import { useState } from "react";
import { ArrowRight, Check, Sparkles, ShieldCheck, Calendar as CalendarIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { format, addMonths } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { cn } from "@/lib/utils";

export function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<{name: string, phone: string, email: string, address: string, date: Date | undefined}>({ name: "", phone: "", email: "", address: "", date: undefined });

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
                        <h3 className="text-3xl font-black text-navy mb-2">Initialize Your Study</h3>
                        <p className="text-navy/50 font-medium text-sm">A specialist will synchronize with your schedule today.</p>
                      </div>
                      
                      <form onSubmit={onSubmit} className="space-y-6">
                        <Field label="Homeowner Name" id="name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                        <div className="grid sm:grid-cols-2 gap-6">
                          <Field label="Phone Number" id="phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                          <Field label="Email Address" id="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                        </div>
                        <Field label="Full Residence Address" id="address" value={form.address} onChange={(v) => setForm({ ...form, address: v })} />
                        
                        <div className="group">
                          <label className="flex items-center gap-2 text-[11px] font-black text-navy/40 uppercase tracking-[0.1em] mb-2 group-focus-within:text-sky-400 transition-colors">
                            <CalendarIcon className="h-3 w-3" />
                            Preferred Consultation Date
                          </label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <button
                                type="button"
                                className={cn(
                                  "w-full h-12 rounded-xl border border-navy/10 bg-navy/5 px-4 text-left text-[15px] font-bold focus:outline-none focus:border-navy/50 focus:bg-navy/10 focus:text-navy transition-all flex items-center justify-between",
                                  !form.date ? "text-navy/50" : "text-navy"
                                )}
                              >
                                {form.date ? format(form.date, "PPP") : <span>Select a date</span>}
                                <CalendarIcon className="h-4 w-4 text-navy/20 group-hover:text-navy transition-colors" />
                              </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 z-[100] rounded-2xl border-navy/10 shadow-2xl bg-white" align="start">
                              <Calendar
                                mode="single"
                                selected={form.date}
                                onSelect={(d) => setForm({ ...form, date: d })}
                                disabled={(date) => {
                                  const today = new Date();
                                  today.setHours(0, 0, 0, 0);
                                  const maxDate = new Date();
                                  maxDate.setMonth(maxDate.getMonth() + 3);
                                  maxDate.setMonth(maxDate.getMonth() + 1, 0); // Last day of the 3rd month from now
                                  maxDate.setHours(23, 59, 59, 999);
                                  return date < today || date > maxDate;
                                }}
                                fromDate={new Date()}
                                toDate={(() => {
                                  const d = new Date();
                                  d.setMonth(d.getMonth() + 3);
                                  d.setMonth(d.getMonth() + 1, 0); // Last day of 3 months from now
                                  return d;
                                })()}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="group relative h-16 w-full overflow-hidden rounded-2xl bg-navy font-black text-white text-lg shadow-xl shadow-navy/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                        >
                          <div className={`absolute inset-0 bg-white/10 transition-transform duration-500 origin-left ${loading ? 'scale-x-full' : 'scale-x-0'}`} />
                          <span className="relative z-10 flex items-center justify-center gap-3 text-white">
                            {loading ? "Initializing..." : "Initialize Your Study"}
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
                      <div className="mx-auto h-20 w-20 rounded-full bg-navy/10 flex items-center justify-center mb-8 border border-navy/20">
                         <Check className="h-10 w-10 text-navy" strokeWidth={3} />
                      </div>
                      <h3 className="text-3xl font-black text-navy mb-4">Study Request Active</h3>
                      <p className="text-navy/50 font-medium max-w-sm mx-auto leading-relaxed">
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
      <label htmlFor={id} className="block text-[11px] font-black text-navy/40 uppercase tracking-[0.1em] mb-2 group-focus-within:text-navy transition-colors">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 rounded-xl border border-navy/10 bg-navy/5 px-4 text-[15px] font-bold text-navy placeholder:text-navy/20 focus:outline-none focus:border-navy/40 focus:bg-navy/10 transition-all"
      />
    </div>
  );
}


