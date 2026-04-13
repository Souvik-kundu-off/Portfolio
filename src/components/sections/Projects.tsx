import { projects } from "@/content/projects";
import { ExternalLink, Github, Star } from "lucide-react";
import { RevealText } from "@/components/effects/RevealText";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="py-32 md:py-40 max-w-[1280px] mx-auto px-6 md:px-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-watermark mb-4"
      >
        Featured Outputs
      </motion.p>
      <RevealText>
        <h2 className="section-heading text-4xl md:text-6xl mb-16">
          Selected Systems.
        </h2>
      </RevealText>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card overflow-hidden group relative hover:border-[var(--accent-primary)]/50 transition-colors duration-500"
          >
            {/* Image area */}
            <div
              className="w-full aspect-[16/10] overflow-hidden relative"
              style={{
                borderBottom: `1px solid var(--border-color)`,
              }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay on image */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `linear-gradient(180deg, transparent 40%, var(--bg-base) 100%)`,
                }}
              />

              {/* Featured badge */}
              {project.featured && (
                <div
                  className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg mono-text text-[10px]"
                  style={{
                    background: "rgba(10, 10, 18, 0.7)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "var(--accent-secondary)",
                  }}
                >
                  <Star size={10} fill="currentColor" />
                  Featured
                </div>
              )}

              {/* Domain indicator */}
              <div
                className="absolute top-4 left-4 w-2 h-2 rounded-full"
                style={{
                  background: project.accentColor,
                  boxShadow: `0 0 12px ${project.accentColor}`,
                }}
              />
            </div>

            {/* Info area */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="mono-text text-[10px]" style={{ color: "var(--text-muted)" }}>
                  {project.id}
                </span>
                <span className="chip text-[10px]">{project.category}</span>
              </div>

              <h3 className="font-display text-xl md:text-2xl font-bold mb-3">{project.name}</h3>

              <p
                className="leading-relaxed mb-5 text-sm"
                style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t, j) => (
                  <motion.span 
                    key={t} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.4 + j * 0.05 }}
                    className="chip text-[10px]"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mono-text text-xs transition-all duration-300 hover:text-[var(--accent-secondary)] group/link"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <Github size={14} />
                    Source
                    <span className="w-0 group-hover/link:w-4 transition-all duration-300 overflow-hidden">→</span>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mono-text text-xs transition-all duration-300 hover:text-[var(--accent-secondary)] group/link"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <ExternalLink size={14} />
                    Demo
                    <span className="w-0 group-hover/link:w-4 transition-all duration-300 overflow-hidden">→</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
