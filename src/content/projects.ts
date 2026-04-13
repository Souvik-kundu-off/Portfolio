export interface ProjectData {
  id: string;
  category: string;
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  domain: "Design" | "Frontend" | "AI";
  featured: boolean;
  image: string;
  accentColor: string;
}

export const projects: ProjectData[] = [
  {
    id: "Node_01",
    category: "AI/ML Application",
    name: "NeuralVision",
    description: "A real-time object detection system built with custom YOLO architecture. Processes live video feeds with 60fps inference on edge devices, achieving 94% mAP on custom datasets.",
    tech: ["Python", "PyTorch", "YOLO", "OpenCV", "FastAPI"],
    github: "#",
    live: "#",
    domain: "AI",
    featured: true,
    image: "/project-neuralvision.png",
    accentColor: "var(--domain-ai)",
  },
  {
    id: "Node_02",
    category: "Design System",
    name: "Spectrum UI",
    description: "A comprehensive design system with 80+ components, token-based theming, and automated documentation. Powers 3 production applications with consistent UX.",
    tech: ["React", "TypeScript", "Storybook", "Tailwind CSS", "Figma"],
    github: "#",
    live: "#",
    domain: "Design",
    featured: true,
    image: "/project-spectrumui.png",
    accentColor: "var(--domain-design)",
  },
  {
    id: "Node_03",
    category: "Frontend Application",
    name: "DataFlow Studio",
    description: "An interactive data visualization platform with drag-and-drop pipeline builder. Real-time WebSocket streaming for live metric dashboards.",
    tech: ["Next.js", "TypeScript", "D3.js", "WebSocket", "Framer Motion"],
    github: "#",
    live: "#",
    domain: "Frontend",
    featured: true,
    image: "/project-dataflow.png",
    accentColor: "var(--domain-frontend)",
  },
  {
    id: "Node_04",
    category: "AI/ML Application",
    name: "SentimentLens",
    description: "A multi-language sentiment analysis engine using fine-tuned BERT models. Processes social media streams in real-time with 92% accuracy across 12 languages.",
    tech: ["Python", "HuggingFace", "LangChain", "FastAPI", "Redis"],
    github: "#",
    domain: "AI",
    featured: true,
    image: "/project-sentimentlens.png",
    accentColor: "var(--domain-ai)",
  },
];
