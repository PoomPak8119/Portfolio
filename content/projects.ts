import type { PortfolioImage } from "./profile";

export type Project = {
  slug: string;
  title: string;
  shortTitle?: string;
  organisation: string;
  period?: string;
  role: string;
  summary: string;
  challenge: string;
  outcome: string;
  tags: string[];
  featured: boolean;
  image: PortfolioImage;
  workflow?: { title: string; text: string }[];
  sections: { title: string; text: string }[];
  evidence?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    slug: "un-vietnam-strategic-alignment",
    title: "UN–Government Digital Cooperation & Strategic Alignment",
    shortTitle: "UN–Government Strategic Alignment",
    organisation: "United Nations Viet Nam",
    period: "June–December 2025",
    role: "Junior Officer for Digital Transformation",
    summary:
      "Supported a high-priority, one-time UN–Government digital cooperation initiative by transforming fragmented information on UN Country Team activities into a centralised view of how initiatives aligned with Viet Nam’s national development priorities.",
    challenge:
      "Create a clearer way to understand and communicate how UN Country Team initiatives contributed to Viet Nam’s national priorities.",
    outcome:
      "Translated initiative-level information into leadership-ready insights for UN–Government consultation and senior UN stakeholders.",
    tags: [
      "Requirements gathering",
      "Excel & data preparation",
      "Tableau & data storytelling",
      "AI-augmented workflow",
    ],
    featured: true,
    image: {
      src: "/images/projects/un-vietnam-strategic-alignment-dashboard.png",
      filename: "un-vietnam-strategic-alignment-dashboard.png",
      alt: "Tableau visualisation showing activity types across six strategic pillars",
      placeholderLabel: "Project image to be added",
      aspectRatio: "16/9",
    },
    workflow: [
      {
        title: "Discover",
        text: "Gather requirements from UN colleagues and understand how the information would be used.",
      },
      {
        title: "Structure",
        text: "Define the required data and centralise initiative information using Excel.",
      },
      {
        title: "Prepare",
        text: "Clean, organise, and standardise the collected information.",
      },
      {
        title: "Augment",
        text: "Use AI as a support tool for analysis, problem-solving, learning, and dashboard development.",
      },
      {
        title: "Visualise",
        text: "Build a Tableau dashboard showing UN contributions and alignment with national priorities.",
      },
      {
        title: "Tell the story",
        text: "Translate the dashboard and underlying data into clear strategic narratives.",
      },
      {
        title: "Communicate",
        text: "Prepare the insights for UN–Government consultation and senior UN leadership.",
      },
    ],
    sections: [
      {
        title: "My role",
        text: "I worked with UN colleagues to gather requirements and translate the organisational need into a practical data workflow. I supported the project from data collection and cleaning through dashboard development, visualisation, storytelling, and leadership reporting.",
      },
      {
        title: "AI as augmentation",
        text: "I used AI to support parts of my workflow, including analysis, problem-solving, learning, structuring, and dashboard development. I remained responsible for gathering requirements, preparing the data, analysing alignment, building the Tableau dashboard, and communicating the results.",
      },
      {
        title: "Outcome",
        text: "The project created a more centralised and visual way to understand UN Country Team contributions and their alignment with Viet Nam’s national priorities. It supported strategic UN–Government consultation through structured data, visualisation, and data storytelling. I reported the resulting analysis to senior leadership, including the UN Resident Coordinator.",
      },
    ],
  },
  {
    slug: "kmutt-edtech",
    title: "TARA: from discovery to a classroom pilot",
    organisation: "King Mongkut’s University of Technology Thonburi",
    role: "Product team lead · Four-person team",
    summary:
      "An education technology platform developed through a 12-month journey from discovery to a student pilot.",
    challenge:
      "Explore how an education technology product could support student engagement.",
    outcome: "50% increase in engagement across a 20-student pilot.",
    tags: ["Education technology", "Product development", "User research"],
    featured: true,
    image: {
      src: "/images/projects/kmutt-tara-edtech.png",
      filename: "kmutt-tara-edtech.png",
      alt: "TARA student portal with learning content and an AI chatbot",
      placeholderLabel: "Project image to be added",
      aspectRatio: "16/9",
    },
    sections: [
      {
        title: "My role",
        text: "I led a four-person team over 12 months, taking the education product from discovery to pilot.",
      },
      {
        title: "Approach",
        text: "The work connected discovery, product development, and a live student pilot. The pilot provided a defined setting in which to assess engagement.",
      },
      {
        title: "Outcome",
        text: "Student engagement increased by 50% across a 20-student pilot.",
      },
    ],
    evidence: {
      label: "View TARA’s university project record",
      href: "https://seniorproject.sit.kmutt.ac.th/showproject/CS64-RE16",
    },
  },
  {
    slug: "un-vietnam-humanitarian-automation",
    title: "Making humanitarian data processing more efficient",
    organisation: "United Nations Viet Nam",
    period: "June–December 2025",
    role: "Junior Officer for Digital Transformation",
    summary:
      "AI-assisted automation supporting humanitarian information processing in a United Nations context.",
    challenge: "Reduce repetitive humanitarian data-processing work.",
    outcome: "~60% estimated reduction in humanitarian data-processing time.",
    tags: ["AI automation", "Humanitarian data", "Public sector"],
    featured: true,
    image: {
      src: "/images/projects/un-vietnam-humanitarian-automation.png",
      filename: "un-vietnam-humanitarian-automation.png",
      alt: "Humanitarian document workflow from content extraction and AI translation to review and email delivery",
      placeholderLabel: "Project image to be added",
      aspectRatio: "16/9",
    },
    sections: [
      {
        title: "My role",
        text: "I worked on humanitarian data-processing automation as a Junior Officer for Digital Transformation with United Nations Viet Nam.",
      },
      {
        title: "Approach",
        text: "The initiative applied AI-assisted automation to repetitive information-processing work. This public summary is limited to the purpose and reported outcome; internal systems and operational data are not shown.",
      },
      {
        title: "Outcome",
        text: "The initiative produced an estimated reduction of approximately 60% in humanitarian data-processing time.",
      },
    ],
  },
  {
    slug: "kbtg-virtual-patient",
    title: "A virtual patient for practical clinical learning",
    organisation: "Kasikorn Business-Technology Group (KBTG)",
    period: "January–June 2025",
    role: "Business Analyst and AI Engineering Intern",
    summary:
      "A co-developed AI virtual-patient simulator using retrieval-augmented generation (RAG).",
    challenge:
      "Explore an alternative to imported, multi-million-THB simulation hardware.",
    outcome:
      "Co-developed a RAG-based virtual-patient simulator with healthcare stakeholder validation.",
    tags: ["Applied AI", "Business analysis", "Healthcare education"],
    featured: true,
    image: {
      src: "/images/projects/kbtg-virtual-patient.jpg",
      filename: "kbtg-virtual-patient.jpg",
      alt: "Virtual Patient Plus presentation showing the medical education collaboration between Chulalongkorn University and KBTG",
      placeholderLabel: "Project image to be added",
      aspectRatio: "16/9",
    },
    sections: [
      {
        title: "My role",
        text: "I contributed business analysis and AI engineering as an intern, co-developing the virtual-patient simulator.",
      },
      {
        title: "Approach",
        text: "The work brought together requirements gathering, AI engineering, and healthcare stakeholder validation.",
      },
      {
        title: "Solution",
        text: "The virtual-patient simulator used retrieval-augmented generation (RAG), an approach that brings retrieved reference information into the response-generation process.",
      },
      {
        title: "Outcome",
        text: "The team co-developed a simulator as an alternative to imported, multi-million-THB hardware.",
      },
    ],
  },
  {
    slug: "un-thailand-ai-intelligence",
    title: "AI-powered political intelligence digest",
    organisation: "United Nations Thailand",
    period: "February–June 2026",
    role: "Junior Digital Transformation Consultant",
    summary:
      "An AI-powered digest supporting weekly UN Country Team briefing preparation.",
    challenge:
      "Reduce manual preparation for recurring political intelligence briefings.",
    outcome: "6 hours per week saved in manual briefing preparation.",
    tags: ["AI adoption", "Workflow automation"],
    featured: false,
    image: {
      src: "/images/projects/un-thailand-workflow.png",
      filename: "un-thailand-workflow.png",
      alt: "Automation workflow used to prepare and email the United Nations Thailand political intelligence digest",
      placeholderLabel: "Project image to be added",
      aspectRatio: "227/30",
    },
    sections: [
      {
        title: "My role",
        text: "I worked on the AI-powered political intelligence digest as a Junior Digital Transformation Consultant with United Nations Thailand.",
      },
      {
        title: "Outcome",
        text: "The digest reduced weekly UN Country Team briefing preparation by 6 hours. This summary excludes internal briefing content and confidential systems.",
      },
    ],
  },
  {
    slug: "aot-digital-experience",
    title: "Recommendations for a better digital experience",
    organisation: "Airports of Thailand",
    period: "June–August 2024",
    role: "IT Business Analyst Intern",
    summary:
      "Digital and website transformation recommendations in an airport organisation.",
    challenge:
      "Identify opportunities to improve the organisation’s digital and website experience.",
    outcome: "Contributed digital and website transformation recommendations.",
    tags: ["Business analysis", "Digital transformation"],
    featured: false,
    image: {
      src: null,
      filename: "aot-digital-experience.jpg",
      alt: "Approved website experience recommendations from the Airports of Thailand internship",
      placeholderLabel: "Project image to be added",
      aspectRatio: "4/3",
    },
    sections: [
      {
        title: "My role",
        text: "I contributed to digital and website transformation recommendations as an IT Business Analyst Intern.",
      },
    ],
  },
];

export const metrics = [
  {
    value: "~60%",
    description: "Estimated reduction in humanitarian data-processing time",
    context: "United Nations Viet Nam",
    slug: "un-vietnam-humanitarian-automation",
  },
  {
    value: "6 hours",
    description: "Saved each week in manual briefing preparation",
    context: "United Nations Thailand",
    slug: "un-thailand-ai-intelligence",
  },
  {
    value: "50%",
    description: "Increase in engagement across a 20-student pilot",
    context: "TARA · KMUTT",
    slug: "kmutt-edtech",
  },
];
