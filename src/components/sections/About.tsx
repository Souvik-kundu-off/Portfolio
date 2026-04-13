import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { RevealText } from "@/components/effects/RevealText";

const metrics = [
  { value: 15, suffix: "+", label: "Projects", sub: "Shipped" },
  { value: 8, suffix: "+", label: "AI/ML Models", sub: "Trained & Deployed" },
  { value: 5, suffix: "+", label: "Design Systems", sub: "Component Libraries" },
  { value: 10, suffix: "+", label: "Events", sub: "Organized" },
];

const coursework = [
  "UI/UX Design Fundamentals",
  "Machine Learning",
  "Frontend Engineering",
  "Deep Learning",
  "Design Systems",
  "Computer Vision",
  "Human-Computer Interaction",
  "Natural Language Processing",
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const stepTime = duration / value;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <p ref={ref} className="font-display text-3xl md:text-4xl font-bold gradient-text">
      {count}{suffix}
    </p>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 md:py-40 max-w-[1280px] mx-auto px-6 md:px-10 relative">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-watermark mb-4"
      >
        Identity
      </motion.p>
      <RevealText>
        <h2 className="section-heading text-4xl md:text-6xl mb-16">
          About Me.
        </h2>
      </RevealText>

      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-16">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="relative">
            <div
              className="w-full aspect-square overflow-hidden rounded-2xl"
              style={{
                border: "1px solid rgba(59, 130, 246, 0.2)",
              }}
            >
              <img
                src="/avatar-souvik.png"
                alt="Souvik Kundu"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Glow effect on hover */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                boxShadow: "0 0 60px rgba(59, 130, 246, 0.15), inset 0 0 60px rgba(59, 130, 246, 0.05)",
              }}
            />
            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 rounded-tl-lg" style={{ borderColor: "var(--accent-primary)" }} />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 rounded-br-lg" style={{ borderColor: "var(--accent-tertiary)" }} />
          </div>

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 flex items-center gap-2 glass-card px-4 py-2.5"
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--success)" }} />
            <span className="mono-text text-xs" style={{ color: "var(--success)" }}>
              Available for Work
            </span>
          </motion.div>
        </motion.div>

        {/* Info */}
        <div className="space-y-10">
          {/* Identity card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <p className="mono-text text-xs mb-1" style={{ color: "var(--text-muted)" }}>
              Identity Card
            </p>
            <div className="h-[1px] mb-4" style={{ background: "linear-gradient(90deg, var(--accent-primary), transparent)" }} />
            <h3 className="font-display text-xl font-bold mb-1">SOUVIK KUNDU</h3>
            <p className="mono-text text-sm" style={{ color: "var(--accent-secondary)" }}>
              UI/UX Designer · Frontend Dev · AI/ML Developer
            </p>
            <p className="mono-text text-xs mt-2" style={{ color: "var(--text-muted)" }}>
              B.Tech CSE · NSHM Knowledge Campus · Kolkata, India
            </p>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="mono-text text-xs mb-2" style={{ color: "var(--text-muted)" }}>
              Bio.txt
            </p>
            <div className="h-[1px] mb-4" style={{ background: "linear-gradient(90deg, rgba(129,140,248,0.3), transparent)" }} />
            <p
              className="leading-relaxed max-w-[65ch]"
              style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: "1.8" }}
            >
              I'm a multidisciplinary creative who bridges the gap between beautiful design and intelligent systems.
              With a deep passion for UI/UX, I craft interfaces that feel intuitive and alive. On the engineering side,
              I build performant web applications with modern frameworks. And when it comes to AI/ML, I develop and
              deploy models that solve real-world problems — from computer vision to NLP pipelines.
            </p>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="mono-text text-xs mb-2" style={{ color: "var(--text-muted)" }}>
              Metrics
            </p>
            <div className="h-[1px] mb-6" style={{ background: "linear-gradient(90deg, rgba(45,212,191,0.3), transparent)" }} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="glass-card p-4 text-center"
                >
                  <AnimatedCounter value={m.value} suffix={m.suffix} />
                  <p className="font-display text-sm font-semibold mt-1">{m.label}</p>
                  <p className="mono-text text-[10px]" style={{ color: "var(--text-muted)" }}>
                    {m.sub}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coursework */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="mono-text text-xs mb-2" style={{ color: "var(--text-muted)" }}>
              Coursework
            </p>
            <div className="h-[1px] mb-4" style={{ background: "linear-gradient(90deg, rgba(59,130,246,0.3), transparent)" }} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {coursework.map((c) => (
                <p key={c} className="text-sm flex items-center gap-2" style={{ color: "var(--text-secondary)" }}>
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--accent-primary)" }} />
                  {c}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
