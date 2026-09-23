export type Experience = {
  organisation: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  project: string;
};
export const experience: Experience[] = [
  {
    organisation: "United Nations Thailand",
    role: "Junior Digital Transformation Consultant",
    location: "Thailand",
    period: "February–June 2026",
    summary:
      "AI-powered political intelligence digest supporting weekly UN Country Team briefing preparation.",
    project: "un-thailand-ai-intelligence",
  },
  {
    organisation: "United Nations Viet Nam",
    role: "Junior Officer for Digital Transformation",
    location: "Viet Nam",
    period: "June–December 2025",
    summary:
      "Supported a high-priority UN–Government digital cooperation project aligning UN Country Team initiatives with Viet Nam’s national development priorities, translating stakeholder requirements into an Excel and Tableau workflow and delivering data visualisation and storytelling for consultation and senior UN leadership.",
    project: "un-vietnam-strategic-alignment",
  },
  {
    organisation: "Kasikorn Business-Technology Group (KBTG)",
    role: "Business Analyst and AI Engineering Intern",
    location: "Thailand",
    period: "January–June 2025",
    summary:
      "Co-development of a RAG-based AI virtual-patient simulator, connecting requirements with AI implementation.",
    project: "kbtg-virtual-patient",
  },
  {
    organisation: "Airports of Thailand",
    role: "IT Business Analyst Intern",
    location: "Thailand",
    period: "June–August 2024",
    summary: "Digital and website transformation recommendations.",
    project: "aot-digital-experience",
  },
];
