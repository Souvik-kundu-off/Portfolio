import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface DemoProps {
  title: string;
  modelName: string;
  task: string;
  architecture: string;
  output: string[];
}

const demos: DemoProps[] = [
  {
    title: "Speech Emotion Classifier",
    modelName: "neural-voice",
    task: "Audio Classification",
    architecture: "CNN + Attention · PyTorch",
    output: [
      "▸ Loading model weights... done",
      "▸ Processing audio... done (142ms)",
      '▸ Prediction: Happy (confidence: 0.947)',
    ],
  },
  {
    title: "Document Summarizer",
    modelName: "docu-mind",
    task: "Text Summarization",
    architecture: "RAG Pipeline · LangChain + GPT-4",
    output: [
      "▸ Indexing 47 pages... done",
      "▸ Generating embeddings... done (1.2s)",
      "▸ Summary: 3 key findings extracted",
    ],
  },
];

const TerminalLine = ({ text, delay }: { text: string; delay: number }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!visible) return <div className="h-5" />;

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="text-accent-yellow"
    >
      {text}
    </motion.div>
  );
};

const TerminalDemo = ({ title, modelName, task, architecture, output }: DemoProps) => {
  const [running, setRunning] = useState(false);

  return (
    <motion.div
      className="border border-color-border rounded-sm overflow-hidden bg-bg-surface"
      whileHover={{ y: -4, boxShadow: "0 0 30px rgba(232,0,90,0.15)" }}
      transition={{ duration: 0.3 }}
    >
      {/* Terminal header */}
      <div className="bg-bg-base border-b border-color-border px-4 py-2.5 flex items-center gap-2">
        <div className="flex gap-1.5">
          {["#FF5F56", "#FFBD2E", "#27C93F"].map((color) => (
            <motion.div
              key={color}
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: color }}
              whileHover={{ scale: 1.3 }}
            />
          ))}
        </div>
        <span className="ml-4 font-mono text-[11px] text-text-muted">
          ~/models/{modelName} — v1.0.4
        </span>
      </div>

      {/* Demo content */}
      <div className="p-6 font-mono text-sm space-y-3">
        <div className="text-accent-magenta"># {title}</div>
        <div className="text-text-muted">
          <span className="text-text-secondary">Task:</span> {task}
        </div>
        <div className="text-text-muted">
          <span className="text-text-secondary">Arch:</span> {architecture}
        </div>

        <div className="mt-6 border border-color-border rounded-sm p-4 bg-bg-base">
          <button
            onClick={() => setRunning(true)}
            className="flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors"
          >
            <span className="text-accent-orange">$</span>
            <span>python inference.py --input sample.wav</span>
            {!running && (
              <motion.span
                className="inline-block w-2 h-4 bg-accent-orange/60 ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </button>

          {running && (
            <div className="mt-3 space-y-1">
              {output.map((line, i) => (
                <TerminalLine key={i} text={line} delay={(i + 1) * 600} />
              ))}
            </div>
          )}
        </div>

        <div className="mt-4 flex gap-4">
          <motion.a
            href="#"
            className="text-accent-orange text-xs uppercase tracking-wider"
            whileHover={{ x: 4 }}
          >
            View on GitHub →
          </motion.a>
          <motion.a
            href="#"
            className="text-text-muted hover:text-text-secondary text-xs uppercase tracking-wider"
            whileHover={{ x: 4 }}
          >
            Read Case Study →
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export const Demos = () => {
  return (
    <section id="demos" className="relative section-spacing px-6 md:px-10 max-w-[1280px] mx-auto">
      <motion.span
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="absolute top-10 right-6 md:right-10 font-display text-[18vw] text-text-muted/10 leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        05
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <h2 className="font-display text-[52px] text-text-primary mb-12">AI/ML DEMOS</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {demos.map((demo, i) => (
            <motion.div
              key={demo.modelName}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <TerminalDemo {...demo} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
