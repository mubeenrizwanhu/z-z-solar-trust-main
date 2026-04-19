import React from "react";
import { Routes, Route } from "react-router-dom";
import { Providers } from "./components/Providers";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

// Import existing index components
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Trust } from "./components/Trust";
import { WhyUs } from "./components/WhyUs";
import { Process } from "./components/Process";
import { Savings } from "./components/Savings";
import { Projects } from "./components/Projects";
import { Reviews } from "./components/Reviews";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

function Home() {
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

export default function App() {
  return (
    <div className="noise">
      <Providers>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Providers>
    </div>
  );
}
