import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface BootScreenProps {
  onComplete: () => void;
}

const BootScreen = ({ onComplete }: BootScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 600);
          return 100;
        }
        return Math.min(prev + Math.floor(Math.random() * 12) + 4, 100);
      });
    }, 140);
    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    if (progress > 15 && lines.length === 0) {
      setLines(["› Initializing core_modules..."]);
    }
    if (progress > 35 && lines.length === 1) {
      setLines((p) => [...p, "› Loading design_system..."]);
    }
    if (progress > 55 && lines.length === 2) {
      setLines((p) => [...p, "› Establishing secure_uplink..."]);
    }
    if (progress > 75 && lines.length === 3) {
      setLines((p) => [...p, "› Mounting UI_engine..."]);
    }
    if (progress >= 100 && lines.length === 4) {
      setLines((p) => [...p, "✓ System ready."]);
    }
  }, [progress, lines.length]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: "var(--bg-base)" }}
      role="status"
      aria-label="Loading portfolio"
      aria-live="polite"
    >
      <div className="w-72 space-y-5">
        <div className="flex justify-between mono-text text-sm" style={{ color: "var(--terminal-green)" }}>
          <span>souvik_os — boot</span>
          <span>{Math.min(progress, 100)}%</span>
        </div>

        <div className="h-[2px] w-full overflow-hidden" style={{ background: "var(--bg-elevated)" }}>
          <motion.div
            className="h-full"
            style={{ background: "var(--terminal-green)" }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </div>

        <div className="space-y-1.5 mono-text text-xs min-h-[100px]">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              style={{ color: line.startsWith("✓") ? "var(--terminal-green)" : "var(--text-muted)" }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BootScreen;
