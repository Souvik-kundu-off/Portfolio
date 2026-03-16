import { useState, useRef, useEffect } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

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
      <p className="section-watermark mb-4">Communication Terminal</p>
      <h2 className="section-heading text-4xl md:text-6xl mb-16">Establish Uplink.</h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">
        {/* Terminal */}
        <div className="card-surface overflow-hidden" style={{ borderRadius: "8px" }}>
          {/* Header bar */}
          <div
            className="flex items-center justify-between px-4 py-2.5"
            style={{ background: "var(--bg-elevated)", borderBottom: "1px solid var(--border-color)" }}
          >
            <span className="mono-text text-[11px]" style={{ color: "var(--text-secondary)" }}>
              root@portfolio — secure_uplink
            </span>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(239, 68, 68, 0.2)" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(245, 158, 11, 0.2)" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(34, 197, 94, 0.2)" }} />
            </div>
          </div>

          {/* Log area */}
          <div ref={logRef} className="p-6 h-[360px] overflow-y-auto space-y-2 mono-text text-sm" aria-live="polite">
            {logs.map((log, i) => (
              <div
                key={i}
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
              </div>
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
              </div>
            )}
          </div>

          {/* Status bar */}
          <div
            className="px-4 py-2 flex gap-6 mono-text text-[10px]"
            style={{ background: "var(--bg-elevated)", borderTop: "1px solid var(--border-color)", color: "var(--text-muted)" }}
          >
            <span>IP.ADDR 192.168.1.42</span>
            <span>ENCR AES-256-GCM</span>
            <span>STATUS ENCRYPTED_UPLINK_ACTIVE</span>
          </div>
        </div>

        {/* Social + CTA */}
        <div className="space-y-8">
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-2">
              LET'S<br />BUILD.
            </h3>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Have a project in mind? Let's make something extraordinary together.
            </p>
          </div>

          <div className="flex gap-4">
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
                className="w-11 h-11 flex items-center justify-center card-surface transition-colors hover:border-[var(--accent-primary)]"
                style={{ borderRadius: "4px" }}
              >
                <Icon size={18} style={{ color: "var(--text-secondary)" }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
