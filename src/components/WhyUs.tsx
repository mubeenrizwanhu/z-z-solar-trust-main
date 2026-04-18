import { SectionHeader } from "./SectionHeader";
import { motion } from "framer-motion";
import { Cpu, Hammer, Wallet, PhoneCall, CheckCircle2 } from "lucide-react";
import { CTAButton } from "./CTAButton";

const ITEMS = [
  {
    n: "01",
    icon: Cpu,
    title: "Customized System Design",
    body: "Every system is engineered to your roof, energy use, and long-term goals — never templated, never oversold.",
    className: "md:col-span-2 lg:col-span-2",
    color: "bg-navy text-white",
  },
  {
    n: "02",
    icon: Hammer,
    title: "Expert Installation",
    body: "In-house crews with rigorous standards. Tidy worksites and finishes that protect your home's value.",
    className: "md:col-span-1 lg:col-span-1",
    color: "bg-white text-navy border-border",
  },
  {
    n: "03",
    icon: Wallet,
    title: "Simple Financing",
    body: "Transparent options through trusted partners. No pressure, no surprises.",
    className: "md:col-span-1 lg:col-span-1",
    color: "bg-white text-navy border-border",
  },
  {
    n: "04",
    icon: PhoneCall,
    title: "Long-Term Support",
    body: "25-year equipment coverage and a 10-year workmanship warranty backed by a local team.",
    className: "md:col-span-2 lg:col-span-2",
    color: "bg-gold text-navy",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="py-24 md:py-32 relative">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <SectionHeader
            eyebrow="Why Z&Z Renewable"
            title="The serious choice for homeowners who expect more."
            subtitle="We work with homeowners who treat solar as a long-term investment in their home — not a discount funnel. Here's what that looks like in practice."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-3xl p-8 border ${it.className} ${it.color}`}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-3 rounded-2xl ${it.color.includes('navy') ? 'bg-white/10' : 'bg-navy/5'}`}>
                    <it.icon className="h-6 w-6" />
                  </div>
                  <span className={`text-xs font-black uppercase tracking-widest opacity-40`}>{it.n}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 leading-tight">{it.title}</h3>
                <p className={`text-[15px] leading-relaxed opacity-80 ${it.color.includes('navy') ? 'text-white/80' : 'text-navy/70'}`}>
                  {it.body}
                </p>

                <div className="mt-auto pt-8 flex items-center gap-2 group/link cursor-pointer">
                  <span className="text-[13px] font-bold uppercase tracking-wider">Learn more</span>
                  <CheckCircle2 className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-current opacity-[0.03] group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
          ))}
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="md:col-span-3 lg:col-span-full mt-4 glass p-10 rounded-[3rem] border-dashed border-2 border-navy/10 flex flex-col md:flex-row items-center justify-between gap-8 bg-gold/5"
          >
            <div className="flex-1">
              <h4 className="text-3xl font-black text-navy mb-4">Ready to see your property's potential?</h4>
              <p className="text-navy/70 max-w-xl font-medium">Our engineering team performs a deep-dive analysis of your home's orientation, shading, and structure before we even meet.</p>
            </div>
            <CTAButton size="lg" className="h-16 px-12 text-lg shadow-xl shadow-gold/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
