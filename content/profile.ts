export type PortfolioImage = {
  src: string | null;
  filename: string;
  alt: string;
  placeholderLabel: string;
  aspectRatio: "4/3" | "16/9" | "3/4";
};

export const profile = {
  name: "Passapol Phukhang",
  positioning: "Digital Innovation & AI Transformation",
  location: "Dublin, Ireland",
  email: "passapolpoom@gmail.com",
  description:
    "I bridge business, people, and emerging technology to turn organisational challenges into practical digital and AI solutions.",
  cv: "https://drive.google.com/file/d/1xp206xIiqt1ri4jYeMh-0trrPnlDNrVh/view?usp=sharing" as
    | string
    | null,
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/passapol-phukhang",
    },
  ],
  portrait: {
    src: "/images/profile/passapol-phukhang-portrait.jpg",
    filename: "passapol-phukhang-portrait.jpg",
    alt: "Portrait of Passapol Phukhang",
    placeholderLabel: "Portrait to be added",
    aspectRatio: "3/4",
  } satisfies PortfolioImage,
};

export const skills: { title: string; items: string[] }[] = [
  {
    title: "Digital & business",
    items: [
      "Business analysis",
      "Requirements gathering",
      "User research",
      "Design thinking",
      "Agile methodology",
      "Feasibility studies",
      "Stakeholder engagement",
    ],
  },
  {
    title: "AI & automation",
    items: [
      "Applied artificial intelligence",
      "Prompt engineering",
      "Retrieval-augmented generation (RAG)",
      "Large language models",
      "n8n",
      "AI workflow automation",
    ],
  },
  {
    title: "Technical foundation",
    items: ["Python", "SQL", "React.js", "Next.js", "HTML", "CSS"],
  },
  { title: "Tools", items: ["Microsoft Office", "Git", "GitHub"] },
];

export const approach = [
  {
    title: "Discover",
    description:
      "Understand people, workflows, stakeholders, and organisational needs.",
  },
  {
    title: "Define",
    description:
      "Translate ambiguity into clear requirements and practical opportunities.",
  },
  {
    title: "Design",
    description: "Explore human-centred approaches grounded in the problem.",
  },
  {
    title: "Build",
    description:
      "Prototype and implement with AI, automation, and digital tools.",
  },
  {
    title: "Adopt",
    description:
      "Support people in integrating technology into everyday workflows.",
  },
];
