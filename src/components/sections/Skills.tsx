import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Skill {
  name: string;
  icon: string;
  description: string;
}

interface SkillGroup {
  category: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Design & Frontend",
    skills: [
      { name: "Figma", icon: "◆", description: "UI/UX design and prototyping tool." },
      { name: "React", icon: "⚛", description: "Frontend library for building user interfaces." },
    ],
  },
  {
    category: "AI/ML & Backend",
    skills: [
      { name: "Python", icon: "🐍", description: "Primary language for AI/ML and data science." },
      { name: "Java", icon: "☕", description: "Backend development and enterprise applications." },
    ],
  },
];

const iconVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
      delay: 0.04 * i,
    },
  }),
} as const;

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={iconVariants}
      className="relative flex flex-col items-center gap-2 p-4 cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <motion.span
        className="text-3xl select-none"
        aria-hidden="true"
        animate={hovered ? { rotate: [0, -10, 10, 0] } : {}}
        transition={{ duration: 0.4 }}
      >
        {skill.icon}
      </motion.span>
      <span className="font-mono text-xs text-text-secondary">{skill.name}</span>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-56 bg-bg-elevated border border-color-border p-3 rounded-sm z-10"
          >
            <p className="font-body text-xs text-text-secondary leading-relaxed">{skill.description}</p>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-bg-elevated border-r border-b border-color-border rotate-45 -mt-1" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Skills = () => {
  let globalIndex = 0;

  return (
    <section id="skills" className="relative section-spacing px-6 md:px-10 max-w-[1280px] mx-auto">
      <motion.span
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="absolute top-10 right-6 md:right-10 font-display text-[18vw] text-text-muted/10 leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        04
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
          className="font-display text-[52px] text-text-primary mb-16"
        >
          SKILLS & STACK
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <motion.h3
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="font-mono text-xs uppercase text-accent-orange tracking-[0.1em] mb-6"
              >
                {group.category}
              </motion.h3>
              <div className="grid grid-cols-2 gap-2">
                {group.skills.map((skill) => {
                  const i = globalIndex++;
                  return <SkillCard key={skill.name} skill={skill} index={i} />;
                })}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
