export interface AIDomain {
  id: string;
  shorthand: string;
  name: string;
  focus: string;
  tools: string[];
  projectCount: number;
}

export const domains: AIDomain[] = [
  {
    id: "cv",
    shorthand: "CV",
    name: "Computer Vision",
    focus: "Neural architectures for spatial understanding, object detection, and image segmentation. Building systems that see and interpret the visual world with precision.",
    tools: ["OpenCV", "PyTorch", "TensorFlow", "YOLO", "MediaPipe"],
    projectCount: 4,
  },
  {
    id: "nlp",
    shorthand: "NLP",
    name: "NLP / LLMs",
    focus: "Fine-tuning transformer models for context-aware reasoning and natural language understanding. Building conversational AI and text analysis pipelines.",
    tools: ["HuggingFace", "LangChain", "OpenAI", "Anthropic", "spaCy"],
    projectCount: 3,
  },
  {
    id: "gen",
    shorthand: "Gen",
    name: "Generative AI",
    focus: "Exploring the frontier of creative AI — from image generation to code synthesis. Building tools that augment human creativity with machine intelligence.",
    tools: ["Diffusers", "Stable Diffusion", "ComfyUI", "LoRA", "DALL-E"],
    projectCount: 2,
  },
  {
    id: "rl",
    shorthand: "RL",
    name: "Reinforcement Learning",
    focus: "Designing reward functions and training agents that learn optimal strategies through interaction. Solving sequential decision-making problems.",
    tools: ["Gym", "Stable Baselines3", "Ray RLlib", "Unity ML-Agents"],
    projectCount: 2,
  },
  {
    id: "ops",
    shorthand: "Ops",
    name: "ML Ops",
    focus: "Building robust pipelines for model training, versioning, deployment, and monitoring. Ensuring ML systems are reproducible and production-ready.",
    tools: ["MLflow", "Weights & Biases", "Docker", "FastAPI", "GitHub Actions"],
    projectCount: 3,
  },
];
