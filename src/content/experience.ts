export interface ExperienceEntry {
  id: string;
  type: "education" | "role" | "achievement";
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "exp_01",
    type: "education",
    title: "B.Tech in Computer Science",
    organization: "NSHM Knowledge Campus",
    period: "2023 — Present",
    description: "Pursuing Computer Science with deep focus on AI/ML, frontend engineering, and human-computer interaction.",
    highlights: ["AI/ML Specialization", "Design Systems Research", "Dean's List"],
  },
  {
    id: "exp_02",
    type: "role",
    title: "Tech Lead — Design Club",
    organization: "NSHM Design & Innovation Club",
    period: "2024 — Present",
    description: "Leading a team of 15+ members, organizing design sprints, workshops, and hackathons. Mentoring juniors in UI/UX fundamentals.",
    highlights: ["10+ Events Organized", "15+ Members Mentored", "2 Hackathons Won"],
  },
  {
    id: "exp_03",
    type: "achievement",
    title: "Hackathon Winner",
    organization: "Smart India Hackathon",
    period: "2024",
    description: "Built an AI-powered accessibility tool that won first place. The solution used computer vision to assist visually impaired users.",
    highlights: ["1st Place", "National Level", "AI/CV Solution"],
  },
  {
    id: "exp_04",
    type: "role",
    title: "Freelance UI/UX Designer",
    organization: "Independent",
    period: "2023 — Present",
    description: "Designing interfaces for startups and indie projects. Specializing in design systems, mobile-first experiences, and brand identity.",
    highlights: ["5+ Clients", "3 Design Systems", "Mobile & Web"],
  },
];
