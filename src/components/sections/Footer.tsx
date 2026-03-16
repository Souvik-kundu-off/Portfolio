import { motion } from "framer-motion";

export const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-color-border px-6 md:px-10 h-20 flex items-center justify-between max-w-[1280px] mx-auto w-full"
    >
<span className="font-body text-xs text-text-muted">© {new Date().getFullYear()} Souvik Kundu</span>

      <div className="hidden md:flex gap-6">
        {["Work", "Blog", "Contact"].map((link) => (
          <motion.button
            key={link}
            onClick={() => scrollTo(link.toLowerCase())}
            className="font-body text-xs uppercase tracking-wider text-text-muted hover:text-text-secondary transition-colors"
            whileHover={{ y: -2, color: "#FF5C00" }}
          >
            {link}
          </motion.button>
        ))}
      </div>

      <motion.button
        className="border border-color-border text-text-muted px-4 py-2 font-body text-xs uppercase tracking-wider rounded-sm"
        whileHover={{ borderColor: "#FF5C00", color: "#FF5C00", y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        Resume ↓
      </motion.button>
    </motion.footer>
  );
};
