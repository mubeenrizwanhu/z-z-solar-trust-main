import { SectionHeader } from "./SectionHeader";
import { motion, useAnimationFrame, useMotionValue, useTransform, useVelocity, useSpring, useScroll } from "framer-motion";
import { Quote } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const REVIEWS = [
  {
    name: "Daniel R.",
    area: "Westfield",
    image: "https://i.pravatar.cc/150?img=11",
    quote:
      "From the first consultation to activation, the Z&Z team was professional, organized, and honest about what would actually work for our roof. The install was spotless.",
  },
  {
    name: "Marisa K.",
    area: "Oak Hills",
    image: "https://i.pravatar.cc/150?img=32",
    quote:
      "We talked to three companies. Z&Z was the only one that didn't pressure us. They explained the financing clearly and delivered exactly what they promised.",
  },
  {
    name: "Anthony P.",
    area: "Lakeside",
    image: "https://i.pravatar.cc/150?img=12",
    quote:
      "Communication was excellent throughout. The crew treated our home with care, finished on schedule, and the savings on our bill have been real.",
  },
  {
    name: "Sarah L.",
    area: "Eastside",
    image: "https://i.pravatar.cc/150?img=44",
    quote:
      "The engineering-first approach set them apart. They didn't just sell us panels; they designed a system that maximized our production based on our unique shade profile.",
  },
  {
    name: "James W.",
    area: "Summit",
    image: "https://i.pravatar.cc/150?img=13",
    quote:
      "The monitoring app they provided is incredible. I can see my generation in real-time. The Z&Z team really understood the technical side better than anyone else.",
  },
  {
    name: "Elena M.",
    area: "Franklin Park",
    image: "https://i.pravatar.cc/150?img=45",
    quote:
      "Z&Z made the whole permitting process effortless. They handled everything with the township and kept us updated weekly. Highly recommend their service.",
  },
];

// Double reviews for the seamless loop
const ALL_REVIEWS = [...REVIEWS, ...REVIEWS];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 fill-gold">
          <path d="M12 17.3 6.18 21l1.55-6.65L2 9.74l6.79-.58L12 3l3.21 6.16L22 9.74l-5.73 4.61L17.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ r }: { r: typeof REVIEWS[0] }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      className="w-[340px] md:w-[460px] shrink-0 p-[1px] rounded-[2.6rem] bg-gradient-to-br from-gold/40 via-gold/5 to-gold/40 shadow-[0_4px_25px_rgba(0,0,0,0.02)]"
    >
      <div className="h-full rounded-[2.5rem] bg-white p-8 md:p-10 flex flex-col hover:bg-white/95 transition-all duration-500 group relative overflow-hidden">
        {/* Fututistic accent glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold/5 blur-[80px] rounded-full group-hover:bg-gold/10 transition-colors duration-500" />
        
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/40 rounded-tl-[2.5rem] group-hover:border-gold transition-colors duration-500" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/40 rounded-br-[2.5rem] group-hover:border-gold transition-colors duration-500" />

        <div className="flex justify-between items-start mb-8 relative z-10">
          <Stars />
          <Quote className="h-9 w-9 text-gold/10 group-hover:text-gold/30 transition-all duration-500" />
        </div>
        
        <blockquote className="text-[1.05rem] md:text-[1.2rem] font-medium leading-[1.6] text-navy mb-10 relative z-10 whitespace-normal">
          "{r.quote}"
        </blockquote>

        <figcaption className="flex items-center gap-5 pt-8 border-t border-border/40 relative z-10 mt-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gold/20 blur-md rounded-2xl scale-0 group-hover:scale-110 transition-transform duration-500" />
            <img src={r.image} alt={r.name} className="h-14 w-14 rounded-2xl object-cover shadow-md relative z-10" />
          </div>
          <div>
            <div className="text-lg font-bold text-navy group-hover:text-gold-deep transition-colors">{r.name}</div>
            <div className="text-[11px] font-black text-gold-deep uppercase tracking-[0.25em]">{r.area}</div>
          </div>
        </figcaption>
      </div>
    </motion.div>
  );
}


export function Reviews() {
  const [baseVelocity] = useState(-30);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((t, delta) => {
    if (!scrollerRef.current || isHovered) return;
    
    const moveBy = baseVelocity * (delta / 1000);
    let newX = x.get() + moveBy;

    const halfWidth = scrollerRef.current.scrollWidth / 2;
    if (newX <= -halfWidth) {
      newX = 0;
    }
    
    x.set(newX);
  });

  return (
    <section id="reviews" className="py-24 md:py-44 bg-white relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 grid-bg opacity-[0.15] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gold/10 blur-[140px] rounded-full" 
        />
        <motion.div 
          animate={{ scale: [1.15, 1, 1.15], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-navy/10 blur-[140px] rounded-full" 
        />
      </div>

      <div className="container-x relative z-10 mb-20 md:mb-32">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="Genuine Feedback"
            title="What it means to go solar with Z&Z."
            align="center"
          />
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl"
          >
            Real results from real homeowners. No fluff, just <span className="text-navy font-bold">absolute transparency</span>.
          </motion.p>
        </div>
      </div>

      {/* Infinite Marquee Wrapper */}
      <div 
        className="relative group cursor-default"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex overflow-hidden relative py-12">
          <motion.div 
            ref={scrollerRef}
            className="flex gap-10 md:gap-14 whitespace-nowrap"
            style={{ x }}
          >
            {ALL_REVIEWS.map((r, i) => (
              <ReviewCard key={`${r.name}-${i}`} r={r} />
            ))}
          </motion.div>

          {/* Premium Fades */}
          <div className="absolute inset-y-0 left-0 w-32 md:w-[25vw] bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 md:w-[25vw] bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />
        </div>
      </div>

      <div className="container-x mt-24 md:mt-40 relative z-10">
        <div className="flex flex-col items-center gap-12">
          <div className="h-px w-32 bg-gold/30" />
          
          <motion.a 
            href="#" 
            onClick={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="group flex flex-col items-center gap-4 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-gold-deep/20 group-hover:w-12 transition-all duration-500" />
              <span className="text-[12px] md:text-[13px] font-black text-navy/40 group-hover:text-gold-deep transition-all duration-500 uppercase tracking-[0.5em]">
                Read More Google Reviews
              </span>
              <div className="h-px w-8 bg-gold-deep/20 group-hover:w-12 transition-all duration-500" />
            </div>
            
            <div className="flex gap-1.5">
              {[...Array(5)].map((_, i) => (
                <motion.div 
                  key={i} 
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  className="w-2 h-2 rounded-full bg-gold/40 shadow-[0_0_8px_rgba(206,174,103,0.2)]" 
                />
              ))}
            </div>
          </motion.a>
        </div>
      </div>

    </section>
  );
}
