export interface ProjectData {
  id: string;
  category: string;
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  figma?: string;
  domain: "Design" | "Frontend" | "AI";
  featured: boolean;
  image: string;
  accentColor: string;
}

export const projects: ProjectData[] = [
  {
    id: "Node_01",
    category: "Full-Stack Platform",
    name: "Tech Hub Central",
    description: "A high-performance, student-driven community platform with gamified credit system. Features project showcases, real-time leaderboards, admin command center, moderation engine, and broadcast system — all backed by Supabase with Row Level Security.",
    tech: ["React", "TypeScript", "Supabase", "TanStack Query", "Framer Motion"],
    github: "https://github.com/Souvik-kundu-off/tech-hub-central",
    live: "https://tech-hub-central.vercel.app",
    domain: "Frontend",
    featured: true,
    image: "/project-techhub.png",
    accentColor: "var(--domain-frontend)",
  },
  {
    id: "Node_02",
    category: "Full-Stack Event Platform",
    name: "Texibition",
    description: "The official platform for Texibition — a college tech fest featuring hackathons, competitions, and innovation showcases. Complete event management with registration, scheduling, team coordination, and QR-based check-in system.",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vercel"],
    github: "https://github.com/Souvik-Kundu063/texibition",
    live: "https://texibition.vercel.app",
    domain: "Frontend",
    featured: true,
    image: "/project-texibition.png",
    accentColor: "var(--domain-frontend)",
  },
  {
    id: "Node_03",
    category: "AI/ML Application",
    name: "Traffic ETA Prediction",
    description: "A machine learning model that predicts estimated time of arrival in urban traffic conditions. Uses historical traffic data, weather patterns, and time-of-day features to deliver accurate ETA forecasts for route optimization.",
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/Souvik-kundu-off/Traffic-ETA-prediction-model",
    domain: "AI",
    featured: true,
    image: "/project-traffic-eta.png",
    accentColor: "var(--domain-ai)",
  },
  {
    id: "Node_04",
    category: "AI/ML Application",
    name: "Route Risk Prediction",
    description: "An intelligent route safety analysis system that predicts risk scores for different travel routes. Leverages accident data, road conditions, and environmental factors to classify route segments by danger level.",
    tech: ["Python", "Jupyter Notebook", "scikit-learn", "Pandas", "Seaborn"],
    github: "https://github.com/Souvik-kundu-off/Route_risk_prediction",
    domain: "AI",
    featured: true,
    image: "/project-route-risk.png",
    accentColor: "var(--domain-ai)",
  },
  {
    id: "Node_05",
    category: "UI/UX Design",
    name: "Smart CV",
    description: "A thoughtfully designed resume builder interface with real-time preview, modular sections, and intelligent layout engine. Focused on clean typography, visual hierarchy, and seamless user experience.",
    tech: ["Figma", "UI/UX", "Design Systems", "Typography"],
    figma: "https://www.figma.com/design/Wof91x0acbe3fv1hjjnTlW/smart-cv",
    domain: "Design",
    featured: true,
    image: "/project-smart-cv.png",
    accentColor: "var(--domain-design)",
  },
  {
    id: "Node_06",
    category: "UI/UX Design",
    name: "NFT Marketplace",
    description: "A premium Web3 marketplace design featuring NFT galleries, live auction interfaces, artist profiles, and collection management. Rich visual language with glassmorphism, vibrant gradients, and immersive browsing experiences.",
    tech: ["Figma", "UI/UX", "Web3 Design", "Visual Design"],
    figma: "https://www.figma.com/design/TK9PNEGJB5adBh5WIO9lkm/NFT-Marketplace",
    domain: "Design",
    featured: true,
    image: "/project-nft-marketplace.png",
    accentColor: "var(--domain-design)",
  },
  {
    id: "Node_07",
    category: "UI/UX Design",
    name: "UI Concept Design",
    description: "A creative exploration of modern interface paradigms — showcasing experimental layouts, design system components, color theory applications, and interactive element prototyping across multiple screen formats.",
    tech: ["Figma", "UI/UX", "Prototyping", "Visual Design"],
    figma: "https://www.figma.com/design/S4BhmoScWQrwljvKS35ACK/Untitled",
    domain: "Design",
    featured: true,
    image: "/project-ui-concept.png",
    accentColor: "var(--domain-design)",
  },
];
