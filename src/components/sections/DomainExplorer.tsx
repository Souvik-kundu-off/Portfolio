import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { domains } from "@/content/domains";

const DomainExplorer = () => {
  const [active, setActive] = useState(domains[0]);

  return (
    <section id="domains" className="py-32 md:py-40 max-w-[1280px] mx-auto px-6 md:px-10">
      <p className="section-watermark mb-4">Intelligence Matrix v1.0</p>
      <h2 className="section-heading text-4xl md:text-6xl mb-16">AI/ML Domains.</h2>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
        {/* Tabs */}
        <div className="flex lg:flex-col border-b lg:border-b-0 lg:border-l overflow-x-auto lg:overflow-visible" style={{ borderColor: "var(--border-color)" }}>
          {domains.map((domain) => (
            <button
              key={domain.id}
              onClick={() => setActive(domain)}
              className="text-left px-5 py-3 lg:py-4 mono-text text-sm transition-all whitespace-nowrap flex-shrink-0"
              style={{
                borderLeft: active.id === domain.id ? "2px solid var(--accent-primary)" : "2px solid transparent",
                marginLeft: "-1px",
                color: active.id === domain.id ? "var(--accent-primary)" : "var(--text-secondary)",
                background: active.id === domain.id ? "var(--accent-glow)" : "transparent",
              }}
            >
              {domain.name}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="card-surface p-8 md:p-12 relative overflow-hidden"
          >
            {/* Big watermark */}
            <div
              className="absolute top-0 right-0 p-6 font-display text-[80px] md:text-[120px] leading-none font-bold select-none pointer-events-none"
              style={{ color: "rgba(255, 255, 255, 0.02)" }}
              aria-hidden="true"
            >
              {active.shorthand}
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight mb-8">
              {active.name}
            </h3>

            <div className="space-y-8 max-w-xl relative z-10">
              <div>
                <p className="mono-text text-[11px] uppercase mb-2" style={{ color: "var(--text-muted)" }}>
                  Focus
                </p>
                <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {active.focus}
                </p>
              </div>

              <div>
                <p className="mono-text text-[11px] uppercase mb-4" style={{ color: "var(--text-muted)" }}>
                  Tools & Frameworks
                </p>
                <div className="flex flex-wrap gap-2">
                  {active.tools.map((tool) => (
                    <span key={tool} className="chip">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="mono-text text-[11px] uppercase mb-2" style={{ color: "var(--text-muted)" }}>
                  Projects in Domain
                </p>
                <p className="font-display text-2xl font-bold" style={{ color: "var(--accent-primary)" }}>
                  {active.projectCount}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DomainExplorer;
