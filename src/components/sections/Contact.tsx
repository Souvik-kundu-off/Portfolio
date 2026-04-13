import { useState, useRef, useEffect } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { RevealText } from "@/components/effects/RevealText";

interface LogEntry {
  type: "sys" | "user" | "success";
  text: string;
}

const initialLogs: LogEntry[] = [
  { type: "sys", text: "[00:00:00] Souvik Kundu@server:~$ ping user" },
  { type: "sys", text: "[00:00:00] IDENTIFICATION PROTOCOL v1.0 READY" },
  { type: "sys", text: "[00:00:00] Establishing secure uplink..." },
];

const questions = ["Enter your name:", "Enter your email:", "Enter your message:"];

const Contact = () => {
  const [step, setStep] = useState(0);
  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);
  const [inputVal, setInputVal] = useState("");
  const [done, setDone] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [logs]);

  const handleSubmit = () => {
    if (!inputVal.trim()) return;

    setLogs((prev) => [...prev, { type: "user", text: `❯ ${inputVal}` }]);
    setInputVal("");

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setLogs((prev) => [
        ...prev,
        { type: "sys", text: "[00:00:01] Transmitting data..." },
      ]);
      setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          { type: "success", text: "✓ Uplink established. Message delivered to Souvik." },
        ]);
        setDone(true);
      }, 1200);
    }
  };

  return (
    <section id="contact" className="py-32 md:py-40 max-w-[1280px] mx-auto px-6 md:px-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-watermark mb-4"
      >
        Communication Terminal
      </motion.p>
      <RevealText>
        <h2 className="section-heading text-4xl md:text-6xl mb-16">
          Establish Uplink.
        </h2>
      </RevealText>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">
        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden relative scanlines animate-pulse-glow"
          style={{ borderRadius: "16px" }}
        >
          {/* Header bar */}
          <div
            className="flex items-center justify-between px-5 py-3"
            style={{ background: "rgba(18, 18, 28, 0.8)", borderBottom: "1px solid var(--border-color)" }}
          >
            <span className="mono-text text-[11px]" style={{ color: "var(--text-secondary)" }}>
              root@portfolio — secure_uplink
            </span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full" style={{ background: "rgba(239, 68, 68, 0.4)" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "rgba(245, 158, 11, 0.4)" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "rgba(34, 197, 94, 0.4)" }} />
            </div>
          </div>

          {/* Log area */}
          <div ref={logRef} className="p-6 h-[360px] overflow-y-auto space-y-2 mono-text text-sm relative z-20" aria-live="polite">
            {logs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  color:
                    log.type === "sys"
                      ? "var(--terminal-green)"
                      : log.type === "success"
                        ? "var(--terminal-green)"
                        : "var(--text-primary)",
                }}
              >
                {log.text}
              </motion.div>
            ))}

            {!done && step < questions.length && (
              <div className="flex gap-2 items-center">
                <span style={{ color: "var(--terminal-green)" }}>? {questions[step]} ❯</span>
                <input
                  ref={inputRef}
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  className="bg-transparent border-none outline-none flex-1 mono-text text-sm"
                  style={{ color: "var(--text-primary)" }}
                  autoFocus
                />
                <span className="terminal-cursor" />
              </div>
            )}
          </div>

          {/* Status bar */}
          <div
            className="px-5 py-2.5 flex gap-6 mono-text text-[10px] relative z-20"
            style={{ background: "rgba(18, 18, 28, 0.8)", borderTop: "1px solid var(--border-color)", color: "var(--text-muted)" }}
          >
            <span>IP.ADDR 192.168.1.42</span>
            <span>ENCR AES-256-GCM</span>
            <span className="hidden sm:inline">STATUS ENCRYPTED_UPLINK_ACTIVE</span>
          </div>
        </motion.div>

        {/* Social + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-2 gradient-text">
              LET'S<br />BUILD.
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Have a project in mind? Let's make something extraordinary together.
            </p>
          </div>

          <div>
            <p className="mono-text text-[10px] mb-3" style={{ color: "var(--text-muted)" }}>
              Connect
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group relative"
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center glass-card transition-all duration-300 group-hover:border-[var(--accent-primary)]"
                    style={{ borderRadius: "12px" }}
                  >
                    <Icon size={18} style={{ color: "var(--text-secondary)" }} className="transition-colors group-hover:text-[var(--accent-secondary)]" />
                  </div>
                  {/* Tooltip */}
                  <span
                    className="absolute -top-8 left-1/2 -translate-x-1/2 mono-text text-[10px] px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      background: "var(--bg-elevated)",
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className="glass-card p-4">
            <p className="mono-text text-[10px] mb-1" style={{ color: "var(--text-muted)" }}>
              Email
            </p>
            <p className="mono-text text-sm" style={{ color: "var(--accent-secondary)" }}>
              hello@souvikkundu.dev
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
