import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "AI/ML", href: "#domains" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (latest > prev && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-xl border-b"
        style={{
          background: "rgba(8, 8, 8, 0.85)",
          borderColor: "var(--border-color)",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-lg font-bold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            SOUVIK KUNDU
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="mono-text text-xs uppercase tracking-wider transition-colors hover:text-[var(--accent-secondary)]"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-text text-xs px-4 py-2 transition-colors"
              style={{
                color: "var(--accent-secondary)",
                border: "1px solid var(--accent-primary)",
                borderRadius: "4px",
              }}
            >
              CV.pdf
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-[1.5px] transition-transform"
              style={{
                background: "var(--text-primary)",
                transform: mobileOpen ? "rotate(45deg) translateY(3px)" : "none",
              }}
            />
            <span
              className="block w-5 h-[1.5px] transition-opacity"
              style={{
                background: "var(--text-primary)",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-[1.5px] transition-transform"
              style={{
                background: "var(--text-primary)",
                transform: mobileOpen ? "rotate(-45deg) translateY(-3px)" : "none",
              }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8"
          style={{ background: "rgba(8, 8, 8, 0.98)" }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="font-display text-2xl font-bold tracking-tight transition-colors hover:text-[var(--accent-secondary)]"
              style={{ color: "var(--text-primary)" }}
            >
              {link.label}
            </button>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default NavBar;
