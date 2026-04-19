import { SectionHeader } from "./SectionHeader";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { ShieldCheck, Banknote, HeartHandshake } from "lucide-react";
import { CTAButton } from "./CTAButton";

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "Quality",
    body: "Our certified technicians ensure the highest standards of installation and service, maximizing the performance and longevity of your solar energy system.",
    color: "bg-navy text-white border-white/10",
    iconColor: "bg-white/10",
    isDark: true
  },
  {
    icon: Banknote,
    title: "Pricing",
    body: "We offer competitive pricing and flexible financing options to make solar energy an accessible and cost-effective investment for everyone.",
    color: "bg-white text-navy border-slate-200",
    iconColor: "bg-navy/5",
    isDark: false
  },
  {
    icon: HeartHandshake,
    title: "Customer Focused",
    body: "Your satisfaction is our priority. We provide dedicated support throughout the entire process, from initial consultation to post-installation monitoring.",
    color: "bg-gold text-navy border-gold/20",
    iconColor: "bg-navy/5",
    isDark: false
  },
];

function WhyItem({ it, i }: { it: typeof ITEMS[0], i: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: i * 0.1,
        ease: [0.23, 1, 0.32, 1]
      }}
      onMouseMove={onMouseMove}
      className={`group relative overflow-hidden rounded-[2.8rem] p-12 border flex flex-col h-full bg-card transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(12,26,46,0.15)] hover:-translate-y-2 ${it.color}`}
    >
      {/* High-End Mouse Follow Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.8rem] opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              ${it.isDark ? 'rgba(255,255,255,0.08)' : 'rgba(12, 26, 46, 0.04)'},
              transparent 80%
            )
          `,
        }}
      />

      <div className="flex flex-col h-full relative z-10 font-display">
        <div className="mb-12">
          <div className={`inline-flex p-5 rounded-2xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 ${it.iconColor}`}>
            <it.icon className="h-8 w-8" />
          </div>
        </div>
        
        <h3 className={`text-3xl font-extrabold mb-6 leading-tight tracking-tight ${it.isDark ? '!text-white' : 'text-navy'}`}>
          {it.title}
        </h3>
        
        <p className={`text-lg leading-relaxed font-medium transition-colors duration-500 ${it.isDark ? 'text-white/70 group-hover:text-white' : 'text-navy/70 group-hover:text-navy'}`}>
          {it.body}
        </p>

        {/* Dynamic Accent Line */}
        <div className={`mt-auto pt-10`}>
          <div className={`h-1 w-12 rounded-full transition-all duration-500 group-hover:w-24 ${it.isDark ? 'bg-white/20' : 'bg-navy/10'} ${it.title === 'Customer Focused' ? 'group-hover:bg-navy' : 'group-hover:bg-gold'}`} />
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-current opacity-[0.03] blur-3xl transition-transform duration-[3000ms] group-hover:scale-150" />
    </motion.div>
  );
}


export function WhyUs() {
  return (
    <section id="why" className="py-24 md:py-40 relative overflow-hidden bg-background">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-navy/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-x">
        <div className="max-w-4xl mb-24 text-center md:text-left font-display">
          <SectionHeader
            eyebrow="Why Z&Z Renewable"
            title="The serious choice for homeowners who expect more."
            subtitle="We work with homeowners who treat solar as a long-term investment in their home. Experience premium service engineered for longevity."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ITEMS.map((it, i) => (
            <WhyItem key={it.title} it={it} i={i} />
          ))}
          
          <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.3 }}
             className="md:col-span-2 lg:col-span-full mt-12 p-px rounded-[2.5rem] bg-gradient-to-br from-gold via-navy/20 to-gold shadow-2xl shadow-navy/5 max-w-5xl mx-auto w-full"
          >
            <div className="glass p-8 md:p-12 rounded-[2.4rem] flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/60 relative overflow-hidden group font-display">
              <div className="relative z-10 text-center lg:text-left flex-1">
                <h4 className="text-2xl md:text-3xl font-black text-navy mb-2 tracking-tighter">
                  Ready to see your property's potential?
                </h4>
                <p className="text-navy/70 max-w-xl text-base font-medium mx-auto lg:mx-0 leading-relaxed">
                  Our engineering team performs a deep-dive analysis of your home's orientation, shading, and structure.
                </p>
              </div>
              <div className="relative z-10 shrink-0">
                <CTAButton size="lg" className="shadow-2xl shadow-gold/40 hover:scale-105 active:scale-95 transition-all w-full md:w-auto font-bold uppercase tracking-tight" />
              </div>
              
              {/* Background Animation */}
              <div className="absolute inset-0 bg-radial from-gold/10 to-transparent blur-3xl opacity-0 transition-opacity duration-1000 group-hover:opacity-100 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



