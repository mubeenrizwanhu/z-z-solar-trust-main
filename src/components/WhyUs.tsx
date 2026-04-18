import { SectionHeader } from "./SectionHeader";
import { motion } from "framer-motion";
import { Cpu, Hammer, Wallet, PhoneCall, CheckCircle2, Battery, Zap } from "lucide-react";
import { CTAButton } from "./CTAButton";

const ITEMS = [
  {
    n: "01",
    icon: Cpu,
    title: "Precision Design",
    body: "Every system is custom-engineered for your roof's orientation, structural integrity, and shading patterns — never templated.",
    color: "bg-navy text-white",
    link: "https://www.energy.gov/energysaver/solar-photovoltaic-system-design"
  },
  {
    n: "02",
    icon: Hammer,
    title: "Master Installation",
    body: "Our in-house certified crews handle everything from permitting to final inspection with white-glove attention to detail.",
    color: "bg-white text-navy border-border",
    link: "https://www.seia.org/initiatives/solar-installation-best-practices"
  },
  {
    n: "03",
    icon: Wallet,
    title: "Ethical Financing",
    body: "No-pressure, transparent financing with $0 down options and industry-leading low APRs through our trusted local partners.",
    color: "bg-white text-navy border-border",
    link: "https://www.energy.gov/eere/solar/homeowners-guide-financing-residential-solar-energy-systems"
  },
  {
    n: "04",
    icon: Battery,
    title: "Advanced Storage",
    body: "Integrate Tesla Powerwall or Enphase batteries to achieve total energy independence and keep your power on during grid outages.",
    color: "bg-gold text-navy",
    link: "https://www.energy.gov/eere/solar/solar-plus-storage"
  },
  {
    n: "05",
    icon: Zap,
    title: "Smart Monitoring",
    body: "Real-time production tracking and energy consumption analytics through our intuitive mobile dashboard, 24/7/365.",
    color: "bg-navy text-white",
    link: "https://www.energy.gov/eere/solar/solar-monitoring-systems"
  },
  {
    n: "06",
    icon: PhoneCall,
    title: "Lifetime Support",
    body: "Our commitment doesn't end at install. We provide 25-year equipment protection and local support for the life of your system.",
    color: "bg-white text-navy border-border",
    link: "https://www.energy.gov/eere/solar/solar-warranty-guide"
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
            subtitle="We work with homeowners who treat solar as a long-term investment in their home — not a discount funnel. Here's what premium service looks like in practice."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-3xl p-8 border flex flex-col h-full bg-card transition-all duration-300 hover:shadow-2xl hover:shadow-navy/5 ${it.color}`}
            >
              <div className="flex flex-col h-full relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-4 rounded-2xl ${it.color.includes('navy') ? 'bg-white/10' : 'bg-navy/5'}`}>
                    <it.icon className="h-6 w-6" />
                  </div>
                  <span className={`text-xs font-black uppercase tracking-widest opacity-40`}>{it.n}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 leading-tight">{it.title}</h3>
                <p className={`text-[15px] leading-relaxed mb-8 ${it.color.includes('navy') ? 'text-white/80' : 'text-navy/70'}`}>
                  {it.body}
                </p>

                <div 
                  onClick={() => window.open(it.link, '_blank')}
                  className="mt-auto pt-6 flex items-center gap-2 group/link cursor-pointer hover:opacity-80 transition-all"
                >
                  <span className="text-[13px] font-bold uppercase tracking-wider">Learn more</span>
                  <div className={`p-1 rounded-full ${it.color.includes('navy') ? 'bg-white/10' : 'bg-navy/10'}`}>
                    <CheckCircle2 className="h-3 w-3 transform group-hover/link:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-current opacity-[0.02] group-hover:scale-150 transition-transform duration-1000" />
            </motion.div>
          ))}
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="md:col-span-2 lg:col-span-full mt-8 glass p-10 md:p-12 rounded-[3.5rem] border-dashed border-2 border-navy/10 flex flex-col lg:flex-row items-center justify-between gap-10 bg-gold/5 overflow-hidden relative"
          >
            <div className="relative z-10 text-center lg:text-left">
              <h4 className="text-3xl md:text-4xl font-black text-navy mb-4">Ready to see your property's potential?</h4>
              <p className="text-navy/70 max-w-xl text-lg font-medium mx-auto lg:mx-0">Our engineering team performs a deep-dive analysis of your home's orientation, shading, and structure before we even meet.</p>
            </div>
            <div className="relative z-10 shrink-0">
              <CTAButton size="lg" className="h-20 px-14 text-xl shadow-2xl shadow-gold/30 hover:scale-105 active:scale-95 transition-all" />
            </div>
            
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial from-gold/10 to-transparent blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
