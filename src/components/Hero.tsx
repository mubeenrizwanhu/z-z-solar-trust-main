import heroHome from "@/assets/hero-home.jpg";
import { CTAButton } from "./CTAButton";
import { ShieldCheck, Wrench, BadgeDollarSign, Sparkles, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TRUST = [
  { icon: Sparkles, label: "Premium equipment" },
  { icon: Wrench, label: "Expert installation" },
  { icon: BadgeDollarSign, label: "Flexible financing" },
  { icon: ShieldCheck, label: "Long-term warranty" },
];

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative pt-32 md:pt-48 pb-24 md:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />

      {/* Dynamic Background Blobs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gold/10 blur-[120px] pointer-events-none"
        aria-hidden
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/2 -left-40 h-[400px] w-[400px] rounded-full bg-navy/5 blur-[100px] pointer-events-none"
        aria-hidden
      />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-gold/20 bg-gold/5 backdrop-blur-sm px-4 py-2 text-[12px] font-bold text-gold-deep uppercase tracking-widest"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              Booking {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date())} {new Date().getFullYear()} Home Reviews
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 font-display font-black tracking-tight text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-navy"
            >
              Engineered <span className="text-gold italic">Solar</span> <br />
              for Premium <br />
              Homeowners.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 text-xl leading-relaxed text-muted-foreground max-w-xl font-medium"
            >
              Custom-built residential solar systems for those who demand engineering excellence, total transparency, and a white-glove installation experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6"
            >
              <div className="group relative">
                <div className="absolute -inset-1 bg-gold rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <CTAButton size="lg" className="relative h-16 px-10 text-lg group">
                  Start Your Review
                </CTAButton>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-navy flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  12 slots remaining this month
                </span>
                <span className="text-xs text-muted-foreground">Average 4-week from review to PTO</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8"
            >
              {TRUST.map((t, i) => (
                <motion.div
                  key={t.label}
                  whileHover={{ y: -5 }}
                  className="flex flex-col gap-3 group"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm border border-border group-hover:border-gold/50 group-hover:bg-gold/5 transition-all text-navy">
                    <t.icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-navy/60 leading-tight">{t.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <motion.div
              style={{ rotate }}
              className="relative rounded-3xl overflow-hidden border border-border shadow-[0_40px_100px_-20px_rgba(14,34,56,0.3)] group"
            >
              <img
                src={heroHome}
                alt="Premium solar installation"
                className="h-full w-full object-cover aspect-[4/5] scale-105 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute top-10 -right-10 bg-white p-6 rounded-2xl shadow-xl border border-border max-w-[200px]"
              >
                <div className="text-3xl font-black text-navy leading-none">$0</div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-2">Upfront equipment expense options</div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-10 -left-10 glass p-8 rounded-2xl shadow-2xl border border-white/20 max-w-[280px]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-muted overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-bold text-navy leading-tight">
                  Trusted by <br /> 450+ Homes
                </div>
              </div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 fill-gold">
                    <path d="M12 17.3 6.18 21l1.55-6.65L2 9.74l6.79-.58L12 3l3.21 6.16L22 9.74l-5.73 4.61L17.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-[13px] text-navy/70 leading-relaxed font-medium">
                "The cleanest installation we've ever seen. Engineering first approach is real."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
