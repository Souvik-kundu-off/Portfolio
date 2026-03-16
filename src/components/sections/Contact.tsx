import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative section-spacing px-6 md:px-10 max-w-[1280px] mx-auto">
      <motion.span
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="absolute top-10 right-6 md:right-10 font-display text-[18vw] text-text-muted/10 leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        07
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <h2 className="font-display text-[52px] text-text-primary mb-12">GET IN TOUCH</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center"
              >
                <div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-12 h-12 rounded-full bg-accent-orange/20 flex items-center justify-center mb-4"
                  >
                    <span className="text-accent-orange text-xl">✓</span>
                  </motion.div>
                  <p className="font-body text-lg text-accent-orange">Message sent. I'll be in touch.</p>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {[
                  { id: "name", label: "Name", type: "text", maxLength: 100 },
                  { id: "email", label: "Email", type: "email", maxLength: 255 },
                ].map((field) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <label htmlFor={field.id} className="font-mono text-xs uppercase text-text-muted tracking-wider block mb-2">
                      {field.label}
                    </label>
                    <motion.input
                      id={field.id}
                      type={field.type}
                      required
                      maxLength={field.maxLength}
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm((p) => ({ ...p, [field.id]: e.target.value }))}
                      onFocus={() => setFocusedField(field.id)}
                      onBlur={() => setFocusedField(null)}
                      animate={{
                        borderColor: focusedField === field.id ? "#FF5C00" : "#2A2A2A",
                        boxShadow: focusedField === field.id ? "0 0 20px rgba(255,92,0,0.1)" : "none",
                      }}
                      className="w-full bg-bg-surface border border-color-border rounded-sm px-4 py-3 font-body text-text-primary focus:outline-none transition-colors"
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label htmlFor="message" className="font-mono text-xs uppercase text-text-muted tracking-wider block mb-2">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    required
                    maxLength={800}
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    animate={{
                      borderColor: focusedField === "message" ? "#FF5C00" : "#2A2A2A",
                      boxShadow: focusedField === "message" ? "0 0 20px rgba(255,92,0,0.1)" : "none",
                    }}
                    className="w-full bg-bg-surface border border-color-border rounded-sm px-4 py-3 font-body text-text-primary focus:outline-none resize-none"
                  />
                  <span className="font-mono text-xs text-text-muted mt-1 block">{form.message.length}/800</span>
                </motion.div>

                <motion.button
                  type="submit"
                  className="bg-accent-orange text-bg-base px-8 py-4 font-body font-bold uppercase tracking-wider text-sm rounded-sm relative overflow-hidden"
                  whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(255,92,0,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  Send Message
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Social links */}
          <motion.div
            className="flex flex-col justify-center gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-body text-text-secondary max-measure">
              Have a project in mind, or just want to chat? Reach out directly or find me on the platforms below.
            </p>
            <div className="flex gap-6">
              {[
                { name: "GitHub", url: "https://github.com/souvikkundu" },
                { name: "LinkedIn", url: "#" },
                { name: "X / Twitter", url: "#" },
                { name: "Dribbble", url: "#" },
              ].map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  className="font-mono text-xs uppercase tracking-wider text-text-muted hover:text-accent-orange transition-colors min-w-[44px] min-h-[44px] flex items-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
