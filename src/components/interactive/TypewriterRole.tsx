import { useState, useEffect } from "react";

const roles = ["Student", "UI/UX Designer", "Frontend Developer", "AI/ML Developer"];

export const TypewriterRole = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 30 : 60;
      timeout = setTimeout(() => {
        setText(isDeleting ? currentRole.slice(0, text.length - 1) : currentRole.slice(0, text.length + 1));
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <span className="font-body text-xl text-text-secondary">
      {text}
      <span className="inline-block w-[2px] h-5 bg-accent-orange ml-1 animate-pulse" />
    </span>
  );
};
