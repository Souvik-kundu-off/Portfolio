import { useState, useCallback, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import BootScreen from "@/components/boot/BootScreen";
import NavBar from "@/components/nav/NavBar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import DomainExplorer from "@/components/sections/DomainExplorer";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  const [booted, setBooted] = useState(false);

  const handleBootComplete = useCallback(() => {
    setBooted(true);
    // Ensure opens directly at Hero (top) after boot, no scroll/jump
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
      // Clear any hash that might jump to #contact
      if (location.hash === '#contact') {
        history.replaceState(null, null, location.pathname + location.search);
      }
    });
  }, []);

  return (
    <>
      <AnimatePresence>
        {!booted && <BootScreen onComplete={handleBootComplete} />}
      </AnimatePresence>

      {booted && (
        <div className="min-h-screen" style={{ background: "var(--bg-base)" }}>
          <NavBar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
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
