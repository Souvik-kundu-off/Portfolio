import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealTextProps {
  children: ReactNode;
  delay?: number;
}

// Unmasks text by rising up from below its clipping boundary
export const RevealText = ({ children, delay = 0 }: RevealTextProps) => {
  return (
    <div className="overflow-hidden inline-block align-bottom">
      <motion.div
        initial={{ y: "110%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
