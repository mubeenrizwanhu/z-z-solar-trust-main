import { SectionHeader } from "./SectionHeader";
import { motion } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const PROJECTS = [
  { img: p1, area: "Westfield", system: "9.6 kW Rooftop Array", note: "Full-home system, premium black panels", span: "lg:col-span-2" },
  { img: p2, area: "Oak Hills", system: "12.4 kW Installation", note: "Aerial view of completed install", span: "lg:col-span-1" },
  { img: p3, area: "Lakeside", system: "7.8 kW Custom Design", note: "Tile-roof mounting, clean finish", span: "lg:col-span-1" },
  { img: p4, area: "Riverbend", system: "10.2 kW Residential", note: "Craftsman home, evening activation", span: "lg:col-span-2" },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-navy relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="container-x relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-white text-5xl md:text-6xl font-black tracking-tight mb-6">Real Homes. <br /> <span className="text-gold italic">Pure Performance.</span></h2>
            <p className="text-white/60 text-lg font-medium max-w-xl">Every one of our installations is a testament to engineering precision and architectural integrity. We don't just add solar; we enhance the home.</p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 bg-white/10 backdrop-blur px-6 py-4 rounded-2xl border border-white/10 text-white font-bold cursor-pointer hover:bg-white/20 transition-all"
          >
             View All Installs
             <ExternalLink className="h-5 w-5" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.article 
              key={p.area}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 ${p.span} h-[450px] cursor-pointer`}
            >
              <img
                src={p.img}
                alt={`${p.system} in ${p.area}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent group-hover:from-navy/80 transition-all duration-500" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 text-gold font-bold uppercase tracking-[0.2em] text-[11px] mb-3">
                   <MapPin className="h-4 w-4" />
                   {p.area}
                </div>
                <h3 className="text-3xl font-black text-white mb-2 leading-tight">{p.system}</h3>
                <p className="text-white/60 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{p.note}</p>
                
                <div className="mt-8 flex items-center gap-3 text-white font-bold text-sm transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                   View Project Scope
                   <div className="h-10 w-10 rounded-full bg-gold flex items-center justify-center text-navy shadow-lg shadow-gold/20">
                      <ExternalLink className="h-4 w-4" />
                   </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
