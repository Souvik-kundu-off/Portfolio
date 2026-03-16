import { motion } from "framer-motion";

interface BlogPost {
  title: string;
  date: string;
  domain: string;
  readingTime: number;
  summary: string;
}

const posts: BlogPost[] = [
  {
    title: "Why Design Engineers Are the Future",
    date: "2026-02-18",
    domain: "Design",
    readingTime: 6,
    summary: "The gap between design and code is closing. Here's why hybrid roles will dominate the next decade of product development.",
  },
  {
    title: "Fine-Tuning LLMs on Domain Data",
    date: "2026-01-05",
    domain: "AI/ML",
    readingTime: 9,
    summary: "A practical guide to fine-tuning open-source language models for vertical-specific applications with limited compute budgets.",
  },
  {
    title: "Building a 60fps Scroll Experience",
    date: "2025-11-22",
    domain: "Frontend",
    readingTime: 7,
    summary: "Lessons from building scroll-driven animations in React without jank — GSAP, Intersection Observer, and compositor layers.",
  },
];

const domainColors: Record<string, string> = {
  Design: "text-accent-orange",
  "AI/ML": "text-accent-magenta",
  Frontend: "text-accent-yellow",
};

const ease = [0.23, 1, 0.32, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease, delay: 0.1 * i },
  }),
} as const;

export const BlogPreview = () => {
  return (
    <section id="blog" className="relative section-spacing px-6 md:px-10 max-w-[1280px] mx-auto">
      <motion.span
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="absolute top-10 right-6 md:right-10 font-display text-[18vw] text-text-muted/10 leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        06
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
          WRITING
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              custom={i}
              variants={cardVariants}
              whileHover={{
                y: -6,
                borderColor: "rgba(255,92,0,0.4)",
                boxShadow: "0 8px 30px rgba(255,92,0,0.1)",
              }}
              className="group border border-color-border rounded-sm bg-bg-surface p-6 cursor-pointer"
              style={{ transition: "border-color 0.2s" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-body text-[13px] text-text-muted">{post.date}</span>
                <span className={`font-mono text-xs uppercase ${domainColors[post.domain]}`}>{post.domain}</span>
              </div>
              <h3 className="font-body text-[22px] font-semibold text-text-primary mb-3 group-hover:text-accent-orange transition-colors duration-200">
                {post.title}
              </h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed mb-4">{post.summary}</p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-text-muted">{post.readingTime} min read</span>
                <motion.span
                  className="font-mono text-xs text-accent-orange opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -5 }}
                  whileHover={{ x: 0 }}
                >
                  Read →
                </motion.span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-10"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.4 } },
          }}
        >
          <motion.a
            href="#"
            className="font-body text-sm text-accent-orange uppercase tracking-wider inline-flex items-center gap-2"
            whileHover={{ x: 6 }}
          >
            View All Writing
            <span>→</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};
