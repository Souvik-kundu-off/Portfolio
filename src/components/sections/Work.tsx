import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Domain = "All" | "Design" | "Frontend" | "AI";

interface Project {
  title: string;
  domain: Exclude<Domain, "All">;
  tags: string[];
  summary: string;
  date: string;
}

const projects: Project[] = [
  {
    title: "LIFE LINK - BLOOD DONATION CONNECTING PLATFORM",
    domain: "Frontend",
    tags: ["React", "Node.js", "Blood Donation"],
    summary: "Platform connecting blood donors and recipients with real-time matching and location services.",
    date: "2024-06",
  },
  {
    title: "Image Classification using SVM",
    domain: "AI",
    tags: ["SVM", "Scikit-learn", "Python", "ML"],
    summary: "Machine learning model for image classification using Support Vector Machines with high accuracy.",
    date: "2024-05",
  },
  {
    title: "House Price Prediction",
    domain: "AI",
    tags: ["Regression", "Python", "Pandas", "ML"],
    summary: "Predictive model for house prices using regression algorithms and feature engineering.",
    date: "2024-04",
  },
  {
    title: "University Techfest Website",
    domain: "Frontend",
    tags: ["HTML", "CSS", "JavaScript", "Events"],
    summary: "Dynamic website for university tech festival with event schedules and registration.",
    date: "2024-03",
  },
  {
    title: "SAKHA - Mental Health Wellbeing Website",
    domain: "Frontend",
    tags: ["React", "Mental Health", "UI/UX"],
    summary: "Website providing mental health resources, chat support and wellbeing tools.",
    date: "2024-02",
  },
  {
    title: "Event QR Scanning Website for Management",
    domain: "Frontend",
    tags: ["QR Code", "React", "Event Management"],
    summary: "QR-based event management system for check-ins, analytics and attendee tracking.",
    date: "2024-01",
  },
];

const domainColors: Record<Exclude<Domain, "All">, string> = {
  Design: "bg-accent-orange",
  Frontend: "bg-accent-yellow",
  AI: "bg-accent-magenta",
};

const domainGlowStyles: Record<Exclude<Domain, "All">, string> = {
  Design: "0 0 30px rgba(255,92,0,0.25)",
  Frontend: "0 0 30px rgba(255,214,0,0.25)",
  AI: "0 0 30px rgba(232,0,90,0.25)",
};

const domainBorderColors: Record<Exclude<Domain, "All">, string> = {
  Design: "rgba(255,92,0,0.5)",
  Frontend: "rgba(255,214,0,0.5)",
  AI: "rgba(232,0,90,0.5)",
};

const filters: Domain[] = ["All", "Design", "Frontend", "AI"];

const ease = [0.23, 1, 0.32, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease, delay: 0.08 * i },
  }),
} as const;

export const Work = () => {
  const [active, setActive] = useState<Domain>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.domain === active);

  return (
    <section id="work" className="relative section-spacing px-6 md:px-10 max-w-[1280px] mx-auto">
      <motion.span
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="absolute top-10 right-6 md:right-10 font-display text-[18vw] text-text-muted/10 leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        03
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <h2 className="font-display text-[52px] text-text-primary mb-8">SELECTED WORK</h2>

        {/* Filters with animated underline */}
        <div className="flex gap-6 mb-12" role="group" aria-label="Filter projects by domain">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className="relative font-body text-sm uppercase tracking-[0.08em] pb-2 transition-colors duration-200"
              style={{ color: active === f ? "#FF5C00" : "#AAAAAA" }}
            >
              {f === "AI" ? "AI/ML" : f}
              {active === f && (
                <motion.div
                  layoutId="filter-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-orange"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.25 } }}
                whileHover={{
                  y: -6,
                  boxShadow: domainGlowStyles[project.domain],
                  borderColor: domainBorderColors[project.domain],
                }}
                className="group border border-color-border rounded-sm bg-bg-surface overflow-hidden cursor-pointer"
                style={{ borderRadius: "4px", transition: "border-color 0.2s" }}
              >
                {/* Thumbnail */}
                <div className="aspect-[4/3] bg-bg-elevated overflow-hidden relative">
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-surface/50" />
                    <span className="font-display text-6xl text-text-muted/20 relative z-10">
                      {project.domain === "AI" ? "AI" : project.domain === "Design" ? "DS" : "FE"}
                    </span>
                  </motion.div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <motion.div
                      className={`w-2 h-2 rounded-full ${domainColors[project.domain]}`}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                    <span className="font-mono text-xs text-text-muted uppercase">
                      {project.domain === "AI" ? "AI/ML" : project.domain}
                    </span>
                  </div>

                  <h3 className="font-body text-[22px] font-semibold text-text-primary mb-2 group-hover:text-accent-orange transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="font-body text-base text-text-secondary mb-4 leading-relaxed">{project.summary}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs bg-bg-elevated text-text-muted px-2 py-0.5 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};
