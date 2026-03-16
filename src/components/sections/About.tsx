import { motion } from "framer-motion";

const ease = [0.23, 1, 0.32, 1] as const;

const paragraphVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay: 0.15 * i },
  }),
} as const;

export const About = () => {
  const paragraphs = [
    "I'm a multidisciplinary creator who works at the intersection of design, engineering, and artificial intelligence. I don't believe in choosing one lane — I believe in building things that are beautiful, fast, and intelligent.",
    "With over five years of experience shipping products across startups and agencies, I've led design systems, architected frontend platforms, and deployed ML models into production. Every project is an opportunity to push what's possible.",
    "My approach is systematic but creative. I start with research and strategy, prototype with code, and obsess over the details that make experiences feel alive. Whether it's a pixel-perfect animation or a fine-tuned neural network, precision is the point.",
  ];

  return (
    <section id="about" className="relative section-spacing px-6 md:px-10 max-w-[1280px] mx-auto">
      <motion.span
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="absolute top-10 right-6 md:right-10 font-display text-[18vw] text-text-muted/10 leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        02
      </motion.span>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } },
          }}
          className="font-display text-[52px] text-text-primary mb-12"
        >
          ABOUT ME
        </motion.h2>

        <div className="max-measure space-y-6">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              custom={i}
              variants={paragraphVariants}
              className="font-body text-lg text-text-secondary leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
          <motion.p
            custom={3}
            variants={paragraphVariants}
            className="font-body text-base text-accent-orange mt-8 font-semibold"
          >
            Currently seeking roles where design thinking meets technical depth — teams building products that matter.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};
