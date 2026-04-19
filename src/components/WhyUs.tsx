import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Banknote, HeartHandshake, ArrowRight, X } from "lucide-react";
import { CTAButton } from "./CTAButton";

const ITEMS = [
  {
    n: "01",
    icon: ShieldCheck,
    title: "Quality",
    body: "Our certified technicians ensure the highest standards of installation and service, maximizing performance.",
    detail: "Our certified technicians ensure the highest standards of installation and service, maximizing the performance and longevity of your solar energy system.",
    color: "bg-navy text-white",
    iconColor: "bg-white/10"
  },
  {
    n: "02",
    icon: Banknote,
    title: "Pricing",
    body: "We offer competitive pricing and flexible financing options to make solar accessible for everyone.",
    detail: "We offer competitive pricing and flexible financing options to make solar energy an accessible and cost-effective investment for everyone.",
    color: "bg-white text-navy border-slate-200",
    iconColor: "bg-navy/5"
  },
  {
    n: "03",
    icon: HeartHandshake,
    title: "Customer Focused",
    body: "Your satisfaction is our priority. We provide dedicated support throughout the entire process.",
    detail: "Your satisfaction is our priority. We provide dedicated support throughout the entire process, from initial consultation to post-installation monitoring.",
    color: "bg-gold text-navy",
    iconColor: "bg-navy/5"
  },
];

function WhyItem({ it, i }: { it: typeof ITEMS[0], i: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      whileHover={{ y: isExpanded ? 0 : -8 }}
      className={`group relative overflow-hidden rounded-[2.5rem] p-10 border flex flex-col h-full bg-card transition-all duration-500 hover:shadow-2xl hover:shadow-navy/10 ${it.color} ${isExpanded ? 'ring-2 ring-gold/50' : ''}`}
    >
      <div className="flex flex-col h-full relative z-10">
        <div className="flex justify-between items-start mb-10">
          <div className={`p-5 rounded-2xl transition-transform duration-500 group-hover:scale-110 ${it.iconColor}`}>
            <it.icon className="h-7 w-7" />
          </div>
          <span className={`text-[10px] font-black uppercase tracking-[0.3em] opacity-30`}>{it.n}</span>
        </div>
        
        <h3 className="text-3xl font-bold mb-6 leading-tight tracking-tight">{it.title}</h3>
        
        <div className="relative min-h-[100px]">
          <AnimatePresence mode="wait">
            {!isExpanded ? (
              <motion.p
                key="summary"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`text-lg leading-relaxed ${it.color.includes('navy') ? 'text-white/70' : 'text-navy/70'}`}
              >
                {it.body}
              </motion.p>
            ) : (
              <motion.p
                key="detail"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`text-lg leading-relaxed font-medium ${it.color.includes('navy') ? 'text-white' : 'text-navy'}`}
              >
                {it.detail}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-auto pt-10 flex items-center gap-3 group/link cursor-pointer transition-all text-left"
        >
          <span className="text-[13px] font-black uppercase tracking-widest">
            {isExpanded ? "Close Info" : "Our Promise"}
          </span>
          <div className={`p-2 rounded-full transition-all duration-300 ${it.color.includes('navy') ? 'bg-white/10 group-hover/link:bg-white/20' : 'bg-navy/5 group-hover/link:bg-navy/10'}`}>
            {isExpanded ? (
                <X className="h-4 w-4" />
            ) : (
                <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
            )}
          </div>
        </button>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-current opacity-[0.03] pointer-events-none" />
      <div className="absolute -right-12 -bottom-12 h-48 w-48 rounded-full bg-current opacity-[0.02] group-hover:scale-150 transition-transform duration-[2000ms]" />
    </motion.div>
  );
}

export function WhyUs() {
  return (
    <section id="why" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-radial from-gold/5 to-transparent blur-3xl pointer-events-none opacity-50" />
      
      <div className="container-x">
        <div className="max-w-3xl mb-20 text-center md:text-left">
          <SectionHeader
            eyebrow="Why Z&Z Renewable"
            title="The serious choice for homeowners who expect more."
            subtitle="We work with homeowners who treat solar as a long-term investment in their home. Here's what premium service looks like in practice."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ITEMS.map((it, i) => (
            <WhyItem key={it.n} it={it} i={i} />
          ))}
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4, duration: 0.8 }}
             className="md:col-span-2 lg:col-span-full mt-10 p-1 md:p-1 rounded-[3.5rem] bg-gradient-to-r from-gold/20 via-navy/5 to-gold/20"
          >
            <div className="glass p-10 md:p-16 rounded-[3.4rem] border border-white/20 flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/40 shadow-xl backdrop-blur-xl relative overflow-hidden">
              <div className="relative z-10 text-center lg:text-left">
                <h4 className="text-3xl md:text-5xl font-black text-navy mb-6 tracking-tight">Ready to see your property's potential?</h4>
                <p className="text-navy/70 max-w-xl text-xl font-medium mx-auto lg:mx-0">Our engineering team performs a deep-dive analysis of your home's orientation, shading, and structure before we even meet.</p>
              </div>
              <div className="relative z-10 shrink-0">
                <CTAButton size="lg" className="h-20 px-14 text-xl shadow-2xl shadow-gold/30 hover:scale-105 active:scale-95 transition-all w-full md:w-auto" />
              </div>
              
              {/* Background Accent */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial from-gold/20 to-transparent blur-3xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

