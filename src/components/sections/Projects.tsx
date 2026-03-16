import { motion } from "framer-motion";
import { projects } from "@/content/projects";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-32 md:py-40 max-w-[1280px] mx-auto px-6 md:px-10">
      <p className="section-watermark mb-4">Featured Outputs</p>
      <h2 className="section-heading text-4xl md:text-6xl mb-16">Selected Systems.</h2>

      <div className="space-y-20">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            {/* Info */}
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="flex items-center gap-3 mb-4">
                <span className="mono-text text-[11px]" style={{ color: "var(--text-muted)" }}>
                  {project.id}
                </span>
                <span className="chip text-[11px]">{project.category}</span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">{project.name}</h3>

              <p
                className="leading-relaxed max-w-[55ch] mb-6"
                style={{ color: "var(--text-secondary)", fontSize: "15px" }}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mono-text text-xs transition-colors hover:text-[var(--accent-secondary)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <Github size={14} />
                    Source Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mono-text text-xs transition-colors hover:text-[var(--accent-secondary)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Image placeholder */}
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <div
                className="w-full aspect-[4/3] flex items-center justify-center mono-text text-sm card-surface overflow-hidden group"
              >
                <div
                  className="w-full h-full flex items-center justify-center transition-transform group-hover:scale-[1.02]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {project.name.toLowerCase().replace(/\s+/g, "-")}.jpg
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
