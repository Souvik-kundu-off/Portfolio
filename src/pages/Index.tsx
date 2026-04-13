import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import BootScreen from "@/components/boot/BootScreen";
import NavBar from "@/components/nav/NavBar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import DomainExplorer from "@/components/sections/DomainExplorer";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ParticleField from "@/components/effects/ParticleField";
import GridOverlay from "@/components/effects/GridOverlay";
import ScrollProgress from "@/components/effects/ScrollProgress";

const Index = () => {
  const [booted, setBooted] = useState(false);

  const handleBootComplete = useCallback(() => {
    setBooted(true);
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
      if (location.hash === '#contact') {
        history.replaceState(null, '', location.pathname + location.search);
      }
    });
  }, []);

  return (
    <>
      <AnimatePresence>
        {!booted && <BootScreen onComplete={handleBootComplete} />}
      </AnimatePresence>

      {booted && (
        <div className="min-h-screen relative noise-overlay" style={{ background: "var(--bg-base)" }}>
          {/* Ambient effects */}
          <ParticleField />
          <GridOverlay />
          <ScrollProgress />

          {/* Navigation */}
          <NavBar />

          {/* Main content */}
          <main className="relative z-[1]">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <DomainExplorer />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
