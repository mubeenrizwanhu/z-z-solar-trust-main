import { SectionHeader } from "./SectionHeader";
import { CTAButton } from "./CTAButton";
import { TrendingDown, Shield, Home, Wallet, Sun, Info } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const data = [
  { year: 0, utility: 0, solar: 0 },
  { year: 5, utility: 8000, solar: 4000 },
  { year: 10, utility: 18000, solar: 8000 },
  { year: 15, utility: 32000, solar: 10000 },
  { year: 20, utility: 50000, solar: 12000 },
  { year: 25, utility: 75000, solar: 14000 },
];

export function Savings() {
  return (
    <section className="py-24 md:py-32 bg-cream/30">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-12 xl:col-span-5">
            <SectionHeader
              eyebrow="Financial Engineering"
              title="A decision that grows more valuable every year."
              subtitle="Solar is an asset, not an expense. We help you model exactly when your system pays for itself and how much it generates over its 25+ year lifespan."
            />
            
            <div className="mt-12 grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-navy p-6 rounded-3xl text-white border border-navy shadow-xl"
              >
                <div className="text-4xl font-black mb-2">$54k+</div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-white/60">Estimated 25yr Savings</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gold p-6 rounded-3xl text-navy border border-gold shadow-xl"
              >
                <div className="text-4xl font-black mb-2">6.2 yr</div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-navy/60">Average Payback Period</div>
              </motion.div>
            </div>

            <div className="mt-10 space-y-6">
               {[
                 { icon: TrendingDown, text: "Fixed energy costs vs. 5% avg utility hikes" },
                 { icon: Shield, text: "Increase home resale value by up to 4.1%" },
                 { icon: Wallet, text: "30% Federal Tax Credit (ITC) qualified" }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 group">
                    <span className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-white border border-border group-hover:border-gold/50 transition-colors">
                      <item.icon className="h-5 w-5 text-navy" />
                    </span>
                    <span className="font-semibold text-navy/80">{item.text}</span>
                 </div>
               ))}
            </div>

            <div className="mt-12 flex items-center gap-6">
              <CTAButton size="lg" className="h-14 px-8" />
              <a 
                href="/solar-roi-report.pdf" 
                download="Solar_ROI_Analysis.pdf"
                className="flex items-center gap-2 text-navy/60 font-bold text-sm hover:text-navy transition-colors"
              >
                <Info className="h-4 w-4" />
                Download ROI PDF
              </a>
            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-border relative overflow-hidden group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div>
                  <h4 className="text-2xl font-black text-navy mb-1">Projected Cumulative Costs</h4>
                  <p className="text-muted-foreground text-sm font-medium">Solar vs. Staying on the Grid</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-navy/20" />
                    <span className="text-xs font-bold text-navy/60 uppercase tracking-wider">Utility</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-gold" />
                    <span className="text-xs font-bold text-navy/60 uppercase tracking-wider">Solar</span>
                  </div>
                </div>
              </div>

              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorSolar" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-gold)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="var(--color-gold)" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorUtility" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-navy)" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="var(--color-navy)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                    <XAxis 
                      dataKey="year" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: 'rgba(0,0,0,0.4)', fontSize: 12, fontWeight: 700 }}
                      dy={15}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: 'rgba(0,0,0,0.4)', fontSize: 12, fontWeight: 700 }}
                      tickFormatter={(v) => `$${v/1000}k`}
                    />
                    <Tooltip 
                      contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', padding: '16px' }}
                      itemStyle={{ fontWeight: 800, fontSize: '14px' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="utility" 
                      stroke="rgba(14,34,56,0.3)" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorUtility)" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="solar" 
                      stroke="var(--color-gold)" 
                      strokeWidth={4}
                      fillOpacity={1} 
                      fill="url(#colorSolar)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-8 p-6 bg-navy/5 rounded-2xl border border-navy/5 flex items-center gap-4">
                <Sun className="h-6 w-6 text-gold" />
                <p className="text-[13px] text-navy/70 leading-relaxed font-semibold">
                  <span className="text-navy font-bold">Key Insight:</span> After year 6, every dollar normally paid to the utility becomes wealth added back to your household.
                </p>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-gold/5 blur-3xl group-hover:bg-gold/10 transition-colors" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
