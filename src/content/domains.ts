export interface ExpertiseDomain {
  id: string;
  shorthand: string;
  name: string;
  focus: string;
  tools: string[];
  projectCount: number;
}

export const domains: ExpertiseDomain[] = [
  {
    id: "fe",
    shorthand: "FE",
    name: "Frontend Engineering",
    focus: "Architecting performant, responsive web applications with modern frameworks. From interactive event platforms to full-stack community hubs — engineering experiences that are fast, accessible, and alive.",
    tools: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    projectCount: 2,
  },
  {
    id: "ux",
    shorthand: "UX",
    name: "UI/UX Design",
    focus: "Designing pixel-perfect interfaces that balance aesthetics with usability. From NFT marketplaces to smart resume builders — every design decision is grounded in empathy and interaction logic.",
    tools: ["Figma", "Adobe XD", "Prototyping", "Design Systems", "Spline"],
    projectCount: 3,
  },
  {
    id: "pa",
    shorthand: "PA",
    name: "Predictive Analytics",
    focus: "Building machine learning models that predict outcomes from complex real-world data. Traffic arrival times, route safety scores — turning raw data into actionable intelligence.",
    tools: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    projectCount: 2,
  },
  {
    id: "ds",
    shorthand: "DS",
    name: "Data Science",
    focus: "Cleaning, exploring, and visualizing datasets to uncover hidden patterns. Feature engineering, statistical analysis, and data storytelling that drives model performance.",
    tools: ["Jupyter Notebook", "Seaborn", "Matplotlib", "Pandas", "NumPy"],
    projectCount: 2,
  },
  {
    id: "fs",
    shorthand: "FS",
    name: "Full-Stack Development",
    focus: "Designing complete application architectures from database to deployment. Authentication, real-time data, row-level security, and serverless backends — building systems that scale.",
    tools: ["Supabase", "PostgreSQL", "TanStack Query", "Vercel", "REST APIs"],
    projectCount: 2,
  },
];
