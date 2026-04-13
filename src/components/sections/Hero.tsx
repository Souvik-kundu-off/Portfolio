import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, FileText, FolderOpen } from "lucide-react";

const roles = ["UI/UX Designer", "Frontend Developer", "AI/ML Developer"];

const nameLetters = "SOUVIK KUNDU".split("");

const floatingIcons = [
  { label: "React", x: "12%", y: "20%", delay: 0, duration: 7 },
  { label: "Python", x: "85%", y: "25%", delay: 1.5, duration: 8 },
  { label: "Figma", x: "8%", y: "75%", delay: 3, duration: 6 },
  { label: "TS", x: "88%", y: "70%", delay: 2, duration: 9 },
  { label: "AI", x: "20%", y: "85%", delay: 4, duration: 7.5 },
  { label: "ML", x: "78%", y: "15%", delay: 1, duration: 8.5 },
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Mesh gradient background */}
      <div
        className="absolute inset-0 pointer-events-none animate-gradient"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(59,130,246,0.12) 0%, transparent 60%)," +
            "radial-gradient(ellipse 60% 40% at 80% 60%, rgba(129,140,248,0.08) 0%, transparent 50%)," +
            "radial-gradient(ellipse 50% 50% at 50% 20%, rgba(45,212,191,0.06) 0%, transparent 50%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Rotating dashed ring */}
      <div
        className="absolute animate-dash-rotate pointer-events-none"
        aria-hidden="true"
        style={{
          width: "min(600px, 80vw)",
          height: "min(600px, 80vw)",
          border: "1px dashed rgba(59, 130, 246, 0.1)",
          borderRadius: "50%",
        }}
      />

      {/* Second ring, counter-rotating */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          width: "min(450px, 60vw)",
          height: "min(450px, 60vw)",
          border: "1px dashed rgba(129, 140, 248, 0.07)",
          borderRadius: "50%",
          animation: "dash-rotate 45s linear infinite reverse",
        }}
      />

      {/* Floating tech labels */}
      {floatingIcons.map((icon) => (
        <motion.div
          key={icon.label}
          className="absolute mono-text text-[10px] tracking-wider hidden md:block"
          style={{
            left: icon.x,
            top: icon.y,
            color: "rgba(59, 130, 246, 0.15)",
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-hidden="true"
        >
          {icon.label}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-watermark mb-8"
        >
          ___  Identity Module  ___
        </motion.p>

        {/* Animated name */}
        <h1
          className="font-display font-bold tracking-tight leading-none mb-6"
          style={{ fontSize: "clamp(40px, 9vw, 110px)" }}
        >
          {nameLetters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.04,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={letter === " " ? "inline-block w-[0.3em]" : "inline-block"}
              style={{ color: "var(--text-primary)" }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        {/* Rotating role */}
        <div className="h-10 flex items-center justify-center mb-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
              transition={{ duration: 0.4 }}
              className="mono-text text-base md:text-lg"
              style={{ color: "var(--accent-secondary)" }}
            >
              {">"} {roles[roleIndex]}
              <span className="terminal-cursor ml-1" />
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-base md:text-lg max-w-lg mx-auto mb-12"
          style={{ color: "var(--text-secondary)" }}
        >
          Designing intelligent systems. Pixel by pixel.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToProjects}
            className="group flex items-center gap-2 px-6 py-3 rounded-xl font-display text-sm font-semibold transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary))",
              color: "#fff",
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 50px rgba(59, 130, 246, 0.35)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(59, 130, 246, 0.2)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <FolderOpen size={16} />
            View Projects
          </button>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-display text-sm font-semibold transition-all duration-300 glass-card"
            style={{
              color: "var(--accent-secondary)",
            }}
          >
            <FileText size={16} />
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 flex flex-col items-center gap-3 cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} style={{ color: "var(--accent-primary)", opacity: 0.6 }} />
        </motion.div>
        <span className="mono-text text-[10px]" style={{ color: "var(--text-muted)" }}>
          SCROLL
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
