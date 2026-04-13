import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { domains } from "@/content/domains";
import { RevealText } from "@/components/effects/RevealText";

const DomainExplorer = () => {
  const [active, setActive] = useState(domains[0]);

  return (
    <section id="domains" className="py-32 md:py-40 max-w-[1280px] mx-auto px-6 md:px-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-watermark mb-4"
      >
        Intelligence Matrix v1.0
      </motion.p>
      <RevealText>
        <h2 className="section-heading text-4xl md:text-6xl mb-16">
          AI/ML Domains.
        </h2>
      </RevealText>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
        {/* Tabs */}
        <div className="flex lg:flex-col border-b lg:border-b-0 lg:border-l overflow-x-auto lg:overflow-visible" style={{ borderColor: "var(--border-color)" }}>
          {domains.map((domain) => (
            <button
              key={domain.id}
              onClick={() => setActive(domain)}
              className="relative text-left px-5 py-3 lg:py-4 mono-text text-sm transition-all whitespace-nowrap flex-shrink-0"
              style={{
                marginLeft: "-1px",
                color: active.id === domain.id ? "var(--accent-primary)" : "var(--text-secondary)",
              }}
            >
              {/* Animated indicator */}
              {active.id === domain.id && (
                <motion.div
                  layoutId="domain-tab"
                  className="absolute left-0 top-0 bottom-0 w-[2px] hidden lg:block"
                  style={{
                    background: "var(--accent-primary)",
                    boxShadow: "0 0 12px var(--accent-glow-strong)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {active.id === domain.id && (
                <motion.div
                  layoutId="domain-tab-bg"
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "var(--accent-glow)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{domain.name}</span>
            </button>
          ))}
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="glass-card p-8 md:p-12 relative overflow-hidden"
          >
            {/* Big watermark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 right-0 p-6 font-display text-[80px] md:text-[140px] leading-none font-bold select-none pointer-events-none"
              style={{ color: "rgba(59, 130, 246, 0.03)" }}
              aria-hidden="true"
            >
              {active.shorthand}
            </motion.div>

            <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight mb-8 gradient-text">
              {active.name}
            </h3>

            <div className="space-y-8 max-w-xl relative z-10">
              <div>
                <p className="mono-text text-[11px] uppercase mb-2" style={{ color: "var(--text-muted)" }}>
                  Focus
                </p>
                <p className="leading-relaxed" style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
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
                <div className="flex items-center gap-4">
                  <p className="font-display text-3xl font-bold gradient-text">
                    {active.projectCount}
                  </p>
                  {/* Progress bar */}
                  <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "var(--bg-elevated)" }}>
                    <motion.div
                      className="h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${(active.projectCount / 5) * 100}%` }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      style={{
                        background: "linear-gradient(90deg, var(--accent-primary), var(--accent-tertiary))",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DomainExplorer;
