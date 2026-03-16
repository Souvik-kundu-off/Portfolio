import { motion, useScroll, useTransform } from "framer-motion";
import { TypewriterRole } from "../interactive/TypewriterRole";
import { useRef, useEffect, useState } from "react";

const FloatingParticle = ({ delay, x, y }: { delay: number; x: string; y: string }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-accent-orange/30"
    style={{ left: x, top: y }}
    animate={{
      y: [0, -20, 0],
      opacity: [0.2, 0.6, 0.2],
      scale: [1, 1.5, 1],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    aria-hidden="true"
  />
);

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const heroBlur = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const particles = Array.from({ length: 12 }, (_, i) => ({
    delay: i * 0.4,
    x: `${10 + Math.random() * 80}%`,
    y: `${10 + Math.random() * 80}%`,
  }));

  return (
    <motion.section
      ref={sectionRef}
      id="hero"
      className="relative h-svh w-full flex flex-col justify-center px-6 md:px-10 overflow-hidden"
      style={{ scale: heroScale, opacity: heroOpacity }}
    >
      {/* Cursor-reactive glow orb */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        animate={{
          x: mousePos.x * (typeof window !== "undefined" ? window.innerWidth : 1000) - 250,
          y: mousePos.y * (typeof window !== "undefined" ? window.innerHeight : 800) - 250,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
        style={{
          background: "radial-gradient(circle, rgba(255,92,0,0.06) 0%, transparent 70%)",
          filter: `blur(${heroBlur.get() || 0}px)`,
        }}
        aria-hidden="true"
      />

      {/* Watermark */}
      <motion.span
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
        className="absolute top-10 right-6 md:right-10 font-display text-[18vw] text-text-muted/20 leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        01
      </motion.span>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <FloatingParticle key={i} {...p} />
      ))}

      {/* Radial glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(255,92,0,0.08) 0%, transparent 70%)",
          y: glowY,
        }}
        aria-hidden="true"
      />

      <motion.h1
        initial={{ y: 120, opacity: 0, skewY: 4 }}
        animate={{ y: 0, opacity: 1, skewY: 0 }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
        className="font-display text-[clamp(80px,12vw,160px)] leading-[0.85] text-gradient-hero mb-6"
      >
<motion.span
          className="inline-block"
          initial={{ x: -60 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.4 }}
        >
          SOUVIK
        </motion.span>
        <br />
<motion.span
          className="inline-block"
          initial={{ x: -40 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.55 }}
        >
          KUNDU
        </motion.span>
      </motion.h1>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.7 }}
        className="flex flex-col gap-8"
      >
        <TypewriterRole />

        <div className="flex flex-wrap gap-4">
          <motion.button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-accent-orange text-bg-base px-8 py-4 font-body font-bold uppercase tracking-wider text-sm rounded-sm relative overflow-hidden group"
            whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(255,92,0,0.3)" }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">View My Work</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent-orange to-accent-magenta"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          <motion.button
            className="border border-accent-orange text-accent-orange px-8 py-4 font-body font-bold uppercase tracking-wider text-sm rounded-sm"
            whileHover={{ y: -2, backgroundColor: "rgba(255,92,0,0.08)" }}
            whileTap={{ scale: 0.97 }}
          >
            Download Resume
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <motion.span
          className="font-mono text-[10px] text-text-muted uppercase tracking-widest"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
        </motion.span>
        <div className="w-[1px] h-12 bg-color-border relative overflow-hidden">
          <div className="w-full h-1/3 bg-accent-orange animate-scroll-dot" />
        </div>
      </motion.div>
    </motion.section>
  );
};
