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
    description: "Crafting pixel-perfect interfaces, user flows, and scalable design systems. From wireframes to high-fidelity prototypes.",
    stack: ["Figma", "Adobe XD", "Prototyping", "Design Systems", "Wireframing", "Typography", "Color Theory"],
  },
  {
    id: "Module_02",
    title: "Frontend Development",
    category: "Web Engineering",
    description: "Building high-performance, animated, interactive web experiences with modern frameworks and responsive design.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "HTML/CSS"],
  },
  {
    id: "Module_03",
    title: "AI / ML Development",
    category: "Machine Intelligence",
    description: "Training and deploying predictive models for real-world use cases — from regression to classification and clustering.",
    stack: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
  },
  {
    id: "Module_04",
    title: "Full-Stack & Backend",
    category: "Application Architecture",
    description: "Building end-to-end applications with databases, authentication, real-time features, and serverless deployment.",
    stack: ["Supabase", "PostgreSQL", "TanStack Query", "REST APIs", "Vercel", "Git"],
  },
  {
    id: "Module_05",
    title: "Languages & Core Tools",
    category: "Foundation Stack",
    description: "The foundation stack that powers everything from scripts to production systems.",
    stack: ["Python", "JavaScript", "TypeScript", "Git", "Linux", "VS Code", "Bash"],
  },
];
