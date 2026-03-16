export interface SkillModule {
  id: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
}

export const skills: SkillModule[] = [
  {
    id: "Module_01",
    title: "UI/UX Design",
    category: "Visual & Interaction Design",
    description: "Crafting pixel-perfect interfaces, user flows, and scalable design systems.",
    stack: ["Figma", "Adobe XD", "Sketch", "ProtoPie", "Principle", "FigJam", "Zeroheight"],
  },
  {
    id: "Module_02",
    title: "Frontend Development",
    category: "Web Engineering",
    description: "Building high-performance, animated, interactive web experiences end-to-end.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Three.js"],
  },
  {
    id: "Module_03",
    title: "AI / ML Development",
    category: "Machine Intelligence",
    description: "Training, fine-tuning, and deploying models for real-world intelligent systems.",
    stack: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "LangChain", "HuggingFace", "FastAPI"],
  },
  {
    id: "Module_04",
    title: "Design Tools & Systems",
    category: "Component Architecture",
    description: "Creating and maintaining scalable component libraries and token-based systems.",
    stack: ["Storybook", "Tokens Studio", "Style Dictionary", "Lottie", "Spline"],
  },
  {
    id: "Module_05",
    title: "Languages & Core Tools",
    category: "Foundation Stack",
    description: "The foundation stack that powers everything from scripts to systems.",
    stack: ["Python", "JavaScript", "TypeScript", "Git", "Linux", "VS Code", "Bash"],
  },
];
