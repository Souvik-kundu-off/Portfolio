import { motion } from "framer-motion";

const metrics = [
  { value: "15+", label: "Projects", sub: "Shipped" },
  { value: "8+", label: "AI/ML Models", sub: "Trained & Deployed" },
  { value: "5+", label: "Design Systems", sub: "Component Libraries" },
  { value: "10+", label: "Events", sub: "Organized" },
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

const About = () => {
  return (
    <section id="about" className="py-32 md:py-40 max-w-[1280px] mx-auto px-6 md:px-10">
      <p className="section-watermark mb-4">Identity</p>
      <h2 className="section-heading text-4xl md:text-6xl mb-16">About Me.</h2>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div
            className="w-full aspect-square overflow-hidden"
            style={{
              border: "2px solid var(--accent-primary)",
              borderRadius: "6px",
            }}
          >
            <div
              className="w-full h-full flex items-center justify-center mono-text text-sm"
              style={{ background: "var(--bg-surface)", color: "var(--text-muted)" }}
            >
              pic.jpg
            </div>
          </div>
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            style={{
              boxShadow: "0 0 40px var(--accent-glow)",
              borderRadius: "6px",
            }}
          />
        </motion.div>

        {/* Info */}
        <div className="space-y-10">
          {/* Identity card */}
          <div className="card-surface p-6">
            <p className="mono-text text-xs mb-1" style={{ color: "var(--text-muted)" }}>
              Identity Card
            </p>
            <div className="h-[1px] mb-4" style={{ background: "var(--border-color)" }} />
            <h3 className="font-display text-xl font-bold mb-1">SOUVIK KUNDU</h3>
            <p className="mono-text text-sm" style={{ color: "var(--accent-secondary)" }}>
              UI/UX Designer · Frontend Dev · AI/ML Developer
            </p>
          </div>

          {/* Bio */}
          <div>
            <p className="mono-text text-xs mb-2" style={{ color: "var(--text-muted)" }}>
              Bio.txt
            </p>
            <div className="h-[1px] mb-4" style={{ background: "var(--border-color)" }} />
            <p
              className="leading-relaxed max-w-[65ch]"
              style={{ color: "var(--text-secondary)", fontSize: "16px" }}
            >
              I'm a multidisciplinary creative who bridges the gap between beautiful design and intelligent systems.
              With a deep passion for UI/UX, I craft interfaces that feel intuitive and alive. On the engineering side,
              I build performant web applications with modern frameworks. And when it comes to AI/ML, I develop and
              deploy models that solve real-world problems — from computer vision to NLP pipelines.
            </p>
          </div>

          {/* Metrics */}
          <div>
            <p className="mono-text text-xs mb-2" style={{ color: "var(--text-muted)" }}>
              Metrics
            </p>
            <div className="h-[1px] mb-6" style={{ background: "var(--border-color)" }} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {metrics.map((m) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="font-display text-3xl font-bold" style={{ color: "var(--accent-primary)" }}>
                    {m.value}
                  </p>
                  <p className="font-display text-sm font-semibold mt-1">{m.label}</p>
                  <p className="mono-text text-xs" style={{ color: "var(--text-muted)" }}>
                    {m.sub}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Coursework */}
          <div>
            <p className="mono-text text-xs mb-2" style={{ color: "var(--text-muted)" }}>
              Coursework
            </p>
            <div className="h-[1px] mb-4" style={{ background: "var(--border-color)" }} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {coursework.map((c) => (
                <p key={c} className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  · {c}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
