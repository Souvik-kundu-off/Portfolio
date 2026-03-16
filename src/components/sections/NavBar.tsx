import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const navLinks = ["Work", "About", "Skills", "Blog", "Contact"];

export const NavBar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 80) setHidden(true);
    else setHidden(false);
  });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden && !mobileOpen ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-0 w-full h-[72px] z-50 border-b border-color-border flex items-center justify-between px-6 md:px-10"
        style={{ backgroundColor: "rgba(13,13,13,0.85)", backdropFilter: "blur(16px)" }}
      >
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-2xl tracking-[0.02em] text-text-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          SOUVIK.KUNDU
        </motion.button>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollTo(item)}
              className="relative font-body text-[13px] uppercase tracking-[0.08em] text-text-secondary hover:text-accent-orange transition-colors duration-200"
              whileHover={{ y: -1 }}
            >
              {item}
            </motion.button>
          ))}
          <motion.button
            onClick={() => scrollTo("contact")}
            className="bg-accent-orange text-bg-base px-5 py-2 font-body font-bold text-[13px] uppercase rounded-sm"
            whileHover={{ y: -2, boxShadow: "0 6px 20px rgba(255,92,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block w-6 h-[2px] bg-text-primary"
            animate={mobileOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-[2px] bg-text-primary"
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
          />
          <motion.span
            className="block w-6 h-[2px] bg-text-primary"
            animate={mobileOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg-base/95 backdrop-blur-sm md:hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                onClick={() => scrollTo(item)}
                className="font-display text-4xl text-text-primary hover:text-accent-orange transition-colors"
              >
                {item.toUpperCase()}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: navLinks.length * 0.06 }}
              onClick={() => scrollTo("contact")}
              className="bg-accent-orange text-bg-base px-8 py-4 font-body font-bold text-sm uppercase rounded-sm mt-4"
            >
              Hire Me
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
