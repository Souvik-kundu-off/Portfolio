import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative max-w-[1280px] mx-auto px-6 md:px-10 pt-12 md:pt-20">
      {/* Gradient divider */}
      <div
        className="h-[1px] mb-6 md:mb-8"
        style={{
          background: "linear-gradient(90deg, transparent, var(--accent-primary), var(--accent-tertiary), transparent)",
        }}
      />

      <div className="h-[4rem] md:h-[5rem] flex items-center justify-center mb-2 md:mb-4">
        <TextHoverEffect text="SOUVIK" />
      </div>

      <div className="pb-10 md:pb-14 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        {/* Left */}
        <div className="text-center md:text-left">
          <p className="mono-text text-xs mb-2" style={{ color: "var(--text-muted)" }}>
            © 2026 Souvik Kundu. All rights reserved.
          </p>
          <p className="mono-text text-[10px]" style={{ color: "var(--text-muted)", opacity: 0.6 }}>
            Built with React + TypeScript + Framer Motion. Crafted with care.
          </p>
        </div>

        {/* Center — Status */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--success)" }} />
          <span className="mono-text text-[10px]" style={{ color: "var(--text-muted)" }}>
            All modules operational
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Twitter, href: "#", label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-colors hover:text-[var(--accent-secondary)]"
                style={{ color: "var(--text-muted)" }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-300"
            style={{
              background: "rgba(59, 130, 246, 0.1)",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              color: "var(--accent-secondary)",
            }}
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
