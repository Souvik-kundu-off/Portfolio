import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left"
      style={{
        scaleX,
        zIndex: 9999,
        background: "linear-gradient(90deg, var(--accent-primary), var(--accent-tertiary), var(--domain-design))",
      }}
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;
