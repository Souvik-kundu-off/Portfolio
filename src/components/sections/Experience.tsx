import { motion } from "framer-motion";
import { experience } from "@/content/experience";
import { GraduationCap, Briefcase, Trophy } from "lucide-react";
import { RevealText } from "@/components/effects/RevealText";

const typeIconMap: Record<string, React.ReactNode> = {
  education: <GraduationCap size={18} />,
  role: <Briefcase size={18} />,
  achievement: <Trophy size={18} />,
};

const typeColorMap: Record<string, string> = {
  education: "var(--accent-primary)",
  role: "var(--accent-tertiary)",
  achievement: "var(--domain-design)",
};

const Experience = () => {
  return (
    <section id="experience" className="py-32 md:py-40 max-w-[1280px] mx-auto px-6 md:px-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-watermark mb-4"
      >
        Journey Log
      </motion.p>
      <RevealText>
        <h2 className="section-heading text-4xl md:text-6xl mb-16">
          Experience.
        </h2>
      </RevealText>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px]"
          style={{
            background: "linear-gradient(180deg, var(--accent-primary), var(--accent-tertiary), transparent)",
          }}
        />

        <div className="space-y-12 md:space-y-16">
          {experience.map((entry, i) => {
            const isLeft = i % 2 === 0;
            const color = typeColorMap[entry.type] || "var(--accent-primary)";

            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col md:flex-row ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } items-start md:items-center gap-8`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: "var(--bg-base)",
                      border: `2px solid ${color}`,
                      boxShadow: `0 0 20px ${color}33`,
                      color,
                    }}
                  >
                    {typeIconMap[entry.type]}
                  </div>
                </motion.div>

                {/* Spacer for alignment */}
                <div className="hidden md:block w-1/2" />

                {/* Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-card p-6 relative overflow-hidden group">
                    {/* Top glow */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] opacity-50 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                      }}
                    />

                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="mono-text text-[10px] px-2 py-1 rounded-md"
                        style={{
                          background: `${color}15`,
                          color,
                          border: `1px solid ${color}30`,
                        }}
                      >
                        {entry.type.toUpperCase()}
                      </span>
                      <span className="mono-text text-[10px]" style={{ color: "var(--text-muted)" }}>
                        {entry.period}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold mb-1">{entry.title}</h3>
                    <p className="mono-text text-xs mb-3" style={{ color: "var(--accent-secondary)" }}>
                      {entry.organization}
                    </p>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                      {entry.description}
                    </p>

                    {entry.highlights && (
                      <div className="flex flex-wrap gap-2">
                        {entry.highlights.map((h) => (
                          <span key={h} className="chip text-[10px]">
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
