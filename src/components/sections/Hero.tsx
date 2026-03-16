import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["UI/UX Designer", "Frontend Developer", "AI/ML Developer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 30%, var(--accent-glow), transparent)",
        }}
      />

      <div className="relative z-10 text-center max-w-4xl">
        <p className="section-watermark mb-6">Identity Module</p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display font-bold tracking-tight leading-none mb-8"
          style={{
            fontSize: "clamp(48px, 10vw, 120px)",
            color: "var(--text-primary)",
          }}
        >
          SOUVIK KUNDU
        </motion.h1>

        <div className="h-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="mono-text text-base md:text-lg"
              style={{ color: "var(--accent-secondary)" }}
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div className="w-[1px] h-16 relative overflow-hidden" style={{ background: "var(--border-color)" }}>
          <motion.div
            className="w-full h-3 absolute"
            style={{ background: "var(--accent-primary)" }}
            animate={{ y: [0, 52, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="mono-text text-[10px]" style={{ color: "var(--text-muted)" }}>
          SCROLL
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
