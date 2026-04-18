import { SectionHeader } from "./SectionHeader";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const PROJECTS = [
  { img: p1, area: "Westfield", system: "9.6 kW Rooftop Array", note: "Full-home system, premium black panels" },
  { img: p2, area: "Oak Hills", system: "12.4 kW Installation", note: "Aerial view of completed install" },
  { img: p3, area: "Lakeside", system: "7.8 kW Custom Design", note: "Tile-roof mounting, clean finish" },
  { img: p4, area: "Riverbend", system: "10.2 kW Residential", note: "Craftsman home, evening activation" },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-cream border-y border-border">
      <div className="container-x">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <SectionHeader
            eyebrow="Recent Installations"
            title="Real homes. Clean execution."
            subtitle="A look at recent residential projects across our service area."
          />
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROJECTS.map((p) => (
            <article key={p.area} className="group rounded-xl overflow-hidden bg-white border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.system} in ${p.area}`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-gold-deep">{p.area}</div>
                <h3 className="mt-1.5 font-display font-semibold text-navy text-[1rem]">{p.system}</h3>
                <p className="mt-1 text-[13px] text-muted-foreground">{p.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
