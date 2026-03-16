import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer
    className="py-12 border-t max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4"
    style={{ borderColor: "var(--border-color)" }}
  >
    <p className="mono-text text-xs" style={{ color: "var(--text-muted)" }}>
      © 2026 Souvik Kundu.
    </p>
    <div className="flex gap-5">
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
          className="transition-colors hover:text-[var(--accent-secondary)]"
          style={{ color: "var(--text-muted)" }}
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
