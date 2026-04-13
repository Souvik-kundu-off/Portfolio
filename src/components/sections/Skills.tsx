import { motion } from "framer-motion";
import { skills } from "@/content/skills";
import { Palette, Code, Brain, Layers, Terminal } from "lucide-react";
import { RevealText } from "@/components/effects/RevealText";

const iconMap: Record<string, React.ReactNode> = {
  Module_01: <Palette size={24} />,
  Module_02: <Code size={24} />,
  Module_03: <Brain size={24} />,
  Module_04: <Layers size={24} />,
  Module_05: <Terminal size={24} />,
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 md:py-40 max-w-[1280px] mx-auto px-6 md:px-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-watermark mb-4"
      >
        Technical Arsenal
      </motion.p>
      <RevealText>
        <h2 className="section-heading text-4xl md:text-6xl mb-4">
          Skill Matrices.
        </h2>
      </RevealText>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-2 mb-16"
      >
        <span
          className="w-2 h-2 rounded-full animate-pulse"
          style={{ background: "var(--accent-primary)" }}
        />
        <span className="mono-text text-xs" style={{ color: "var(--accent-secondary)" }}>
          Agent Active
        </span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-6 flex flex-col justify-between group relative overflow-hidden"
            style={{ minHeight: 300 }}
          >
            {/* Background glow on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.08), transparent 70%)",
              }}
            />

            <div className="relative z-10">
              {/* Icon + ID */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(59, 130, 246, 0.1)",
                    color: "var(--accent-secondary)",
                  }}
                >
                  {iconMap[skill.id] || <Code size={24} />}
                </div>
                <p className="mono-text text-[10px]" style={{ color: "var(--text-muted)" }}>
                  {skill.id}
                </p>
              </div>

              <h3 className="font-display text-xl font-bold mb-1">{skill.title}</h3>
              <p className="mono-text text-xs italic mb-4" style={{ color: "var(--accent-secondary)", opacity: 0.7 }}>
                {skill.category}
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                {skill.description}
              </p>
            </div>

            <div className="relative z-10">
              <p className="mono-text text-[10px] mb-3" style={{ color: "var(--text-muted)" }}>
                {skill.stack.length} Stack Items
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.stack.map((tool, j) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + j * 0.04 }}
                    className="chip"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
