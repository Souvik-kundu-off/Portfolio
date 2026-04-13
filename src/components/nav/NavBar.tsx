import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "AI/ML", href: "#domains" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (latest > prev && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Track active section
  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
        className="fixed top-0 left-0 right-0 z-[100] border-b"
        style={{
          background: "rgba(5, 5, 8, 0.75)",
          backdropFilter: "blur(20px) saturate(1.5)",
          WebkitBackdropFilter: "blur(20px) saturate(1.5)",
          borderColor: "var(--border-color)",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-lg font-bold tracking-tight gradient-text"
          >
            SOUVIK KUNDU
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="relative mono-text text-xs uppercase tracking-wider transition-colors"
                  style={{
                    color: isActive ? "var(--accent-secondary)" : "var(--text-secondary)",
                  }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                      style={{
                        background: "var(--accent-primary)",
                        boxShadow: "0 0 8px var(--accent-glow-strong)",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-text text-xs px-4 py-2 transition-all duration-300 rounded-lg"
              style={{
                color: "var(--accent-secondary)",
                border: "1px solid rgba(59, 130, 246, 0.3)",
                background: "rgba(59, 130, 246, 0.05)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(59, 130, 246, 0.6)";
                (e.currentTarget as HTMLElement).style.background = "rgba(59, 130, 246, 0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(59, 130, 246, 0.3)";
                (e.currentTarget as HTMLElement).style.background = "rgba(59, 130, 246, 0.05)";
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
              className="block w-5 h-[1.5px] transition-all duration-300"
              style={{
                background: "var(--text-primary)",
                transform: mobileOpen ? "rotate(45deg) translateY(3px)" : "none",
              }}
            />
            <span
              className="block w-5 h-[1.5px] transition-all duration-300"
              style={{
                background: "var(--text-primary)",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-[1.5px] transition-all duration-300"
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
          style={{
            background: "rgba(5, 5, 8, 0.97)",
            backdropFilter: "blur(20px)",
          }}
        >
          {navLinks.map((link, i) => (
            <motion.button
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => scrollTo(link.href)}
              className="font-display text-2xl font-bold tracking-tight transition-colors hover:text-[var(--accent-secondary)]"
              style={{
                color: activeSection === link.href.replace("#", "")
                  ? "var(--accent-secondary)"
                  : "var(--text-primary)",
              }}
            >
              {link.label}
            </motion.button>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default NavBar;
