import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Trust } from "@/components/Trust";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { Savings } from "@/components/Savings";
import { Projects } from "@/components/Projects";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Z&Z Renewable — Premium Residential Solar Installation" },
      {
        name: "description",
        content:
          "Custom-designed residential solar systems for homeowners. Premium equipment, expert installation, flexible financing, and long-term warranty. Book your free consultation.",
      },
      { property: "og:title", content: "Z&Z Renewable — Premium Residential Solar Installation" },
      {
        property: "og:description",
        content: "Premium solar installation for homeowners ready to lower energy costs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Trust />
      <WhyUs />
      <Process />
      <Savings />
      <Projects />
      <Reviews />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
