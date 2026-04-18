import { Award, ShieldCheck, Landmark, MapPin, Star, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const ITEMS = [
  { icon: Award, title: "Licensed & Certified", sub: "NABCEP Standards" },
  { icon: Landmark, title: "Trusted Financing", sub: "Low APR Partners" },
  { icon: Wrench, title: "Workmanship", sub: "10-Year Guarantee" },
  { icon: ShieldCheck, title: "Equipment", sub: "25-Year Warranty" },
  { icon: MapPin, title: "Local Presence", sub: "Local Crew & Support" },
  { icon: Star, title: "5.0 Rating", sub: "Verified Reviews" },
];

export function Trust() {
  return (
    <section className="border-y border-border bg-white relative">
      <div className="container-x py-12 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-10 gap-y-12">
          {ITEMS.map((it, i) => (
            <motion.div 
              key={it.title} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gold blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-white text-navy group-hover:border-gold/50 group-hover:text-gold transition-all duration-300">
                  <it.icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
              </div>
              <div className="min-w-0">
                <div className="text-[14px] font-black text-navy uppercase tracking-widest leading-tight">{it.title}</div>
                <div className="text-[12px] font-bold text-muted-foreground mt-1 tracking-wide">{it.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Subtle Scroll Hint or Separator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-t from-gold/50 to-transparent hidden lg:block" />
    </section>
  );
}
