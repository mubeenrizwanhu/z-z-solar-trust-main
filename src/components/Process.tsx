import { SectionHeader } from "./SectionHeader";
import { motion } from "framer-motion";
import { Search, Map, FileCode, Zap } from "lucide-react";

const STEPS = [
  { n: "01", icon: Search, title: "Initial Scope", body: "We perform a remote satellite analysis of your roof before our first discovery call." },
  { n: "02", icon: Map, title: "Precision Mapping", body: "On-site assessment using high-fidelity LiDAR to map every shading variable." },
  { n: "03", icon: FileCode, title: "Engineering", body: "Our in-house engineers design a system optimized for maximum sunlight capture." },
  { n: "04", icon: Zap, title: "Activation", body: "Fast-tracked utility coordination and a professional, aesthetic installation." },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-cream border-y border-border relative overflow-hidden">
      <div className="container-x">
        <SectionHeader
          align="center"
          eyebrow="The Z&Z Path"
          title="Clear from first call to first kilowatt."
          subtitle="We've refined our deployment model to ensure zero friction and total transparency."
        />

        <div className="mt-20 relative">
          {/* Connecting Line Animation */}
          <div className="hidden lg:block absolute left-0 right-0 top-12 h-px bg-navy/10" aria-hidden />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {STEPS.map((s, i) => (
              <motion.div 
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative group"
              >
                <div className="flex flex-col items-center lg:items-start">
                  <div className="relative z-10 inline-flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white border border-border shadow-2xl group-hover:bg-navy group-hover:text-white transition-all duration-500 mb-8">
                    <s.icon className="h-8 w-8" />
                    <span className="absolute -top-3 -right-3 h-10 w-10 flex items-center justify-center rounded-xl bg-gold text-navy font-black text-xs shadow-lg">
                      {s.n}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-navy mb-4 group-hover:text-gold transition-colors">{s.title}</h3>
                  <p className="text-[15px] leading-relaxed text-navy/60 font-medium text-center lg:text-left">
                    {s.body}
                  </p>
                </div>

                {/* Mobile/Tablet Connector */}
                <div className="lg:hidden absolute left-1/2 -bottom-6 w-px h-6 bg-navy/10 last:hidden" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
