import { motion } from "framer-motion";
import { skills } from "@/content/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-32 md:py-40 max-w-[1280px] mx-auto px-6 md:px-10">
      <p className="section-watermark mb-4">Technical Arsenal</p>
      <h2 className="section-heading text-4xl md:text-6xl mb-4">Skill Matrices.</h2>

      <div className="flex items-center gap-2 mb-16">
        <span
          className="w-2 h-2 rounded-full animate-pulse"
          style={{ background: "var(--accent-primary)" }}
        />
        <span className="mono-text text-xs" style={{ color: "var(--accent-secondary)" }}>
          Agent Active
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-surface p-6 flex flex-col justify-between group hover:border-[var(--accent-primary)] transition-colors"
            style={{ minHeight: 280 }}
          >
            <div>
              <p className="mono-text text-[11px] mb-3" style={{ color: "var(--text-muted)" }}>
                {skill.id}
              </p>
              <h3 className="font-display text-xl font-bold mb-1">{skill.title}</h3>
              <p className="mono-text text-xs italic mb-4" style={{ color: "var(--text-secondary)" }}>
                {skill.category}
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                {skill.description}
              </p>
            </div>

            <div>
              <p className="mono-text text-xs mb-3" style={{ color: "var(--accent-secondary)" }}>
                {skill.stack.length} Stack Items
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.stack.map((tool) => (
                  <span key={tool} className="chip">
                    {tool}
                  </span>
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
