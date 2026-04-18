import { SectionHeader } from "./SectionHeader";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";

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
];

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

export function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="reviews" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <SectionHeader
              eyebrow="Homeowner Reviews"
              title="Trusted by homeowners who don't compromise."
            />
          </div>
          <div className="flex gap-3">
             <button 
              onClick={scrollPrev}
              className="h-14 w-14 rounded-2xl border border-border flex items-center justify-center hover:bg-navy hover:text-white transition-all group"
             >
                <ChevronLeft className="h-6 w-6 group-active:scale-90 transition-transform" />
             </button>
             <button 
              onClick={scrollNext}
              className="h-14 w-14 rounded-2xl border border-border flex items-center justify-center hover:bg-navy hover:text-white transition-all group"
             >
                <ChevronRight className="h-6 w-6 group-active:scale-90 transition-transform" />
             </button>
          </div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="flex gap-6 py-4">
            {REVIEWS.map((r, i) => (
              <motion.figure 
                key={r.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_31%] min-w-0"
              >
                <div className="h-full rounded-[2.5rem] border border-border bg-background p-10 flex flex-col shadow-sm hover:shadow-2xl hover:border-gold/30 transition-all duration-500 group">
                  <div className="flex justify-between items-start mb-8">
                    <Stars />
                    <Quote className="h-10 w-10 text-gold/20 group-hover:text-gold/40 transition-colors" />
                  </div>
                  
                  <blockquote className="text-xl font-medium leading-relaxed text-navy mb-10 flex-1">
                    "{r.quote}"
                  </blockquote>

                  <figcaption className="flex items-center gap-4 pt-8 border-t border-border">
                    <img src={r.image} alt={r.name} className="h-14 w-14 rounded-2xl object-cover shadow-lg" />
                    <div>
                      <div className="text-lg font-bold text-navy">{r.name}</div>
                      <div className="text-sm font-semibold text-gold-deep uppercase tracking-widest">{r.area}</div>
                    </div>
                  </figcaption>
                </div>
              </motion.figure>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           {/* Trust Badges placeholder */}
           <div className="h-8 w-32 bg-navy/20 rounded-md animate-pulse" />
           <div className="h-8 w-32 bg-navy/20 rounded-md animate-pulse" />
           <div className="h-8 w-32 bg-navy/20 rounded-md animate-pulse" />
           <div className="h-8 w-32 bg-navy/20 rounded-md animate-pulse" />
        </div>
      </div>
    </section>
  );
}
