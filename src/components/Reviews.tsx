import { SectionHeader } from "./SectionHeader";

const REVIEWS = [
  {
    name: "Daniel R.",
    area: "Westfield",
    quote:
      "From the first consultation to activation, the Z&Z team was professional, organized, and honest about what would actually work for our roof. The install was spotless.",
  },
  {
    name: "Marisa K.",
    area: "Oak Hills",
    quote:
      "We talked to three companies. Z&Z was the only one that didn't pressure us. They explained the financing clearly and delivered exactly what they promised.",
  },
  {
    name: "Anthony P.",
    area: "Lakeside",
    quote:
      "Communication was excellent throughout. The crew treated our home with care, finished on schedule, and the savings on our bill have been real.",
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
  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeader
          align="center"
          eyebrow="Homeowner Reviews"
          title="Trusted by homeowners who don't compromise."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="rounded-xl border border-border bg-white p-7 shadow-[0_2px_0_0_rgba(14,34,56,0.02)] hover:shadow-lg transition-shadow">
              <Stars />
              <blockquote className="mt-4 text-[15px] leading-relaxed text-navy/90">"{r.quote}"</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-navy text-white inline-flex items-center justify-center font-semibold text-sm">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.area}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
