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
  atAGlance?: string;
  tags: string[];
  featured: boolean;
  image: PortfolioImage;
  gallery?: PortfolioImage[];
  ownership?: string;
  workflowTitle?: string;
  workflow?: { title: string; text: string }[];
  tools?: string[];
  methods?: string[];
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
      "Supported a high-priority, one-time UN–Government cooperation initiative to create a centralised view of how UN Country Team activities aligned with Viet Nam’s national development priorities.",
    challenge:
      "The UN Country Team needed fragmented initiative information structured consistently and communicated clearly for strategic consultation and leadership decision-making.",
    outcome:
      "Translated initiative-level information into leadership-ready insights for UN–Government consultation and senior UN stakeholders.",
    atAGlance:
      "A centralised view of UN Country Team contributions and alignment with Viet Nam’s national priorities.",
    tags: ["Strategic alignment", "Data visualisation", "Executive reporting"],
    featured: true,
    image: {
      src: "/images/projects/un-vietnam-strategic-alignment-dashboard.png",
      filename: "un-vietnam-strategic-alignment-dashboard.png",
      alt: "Tableau visualisation showing activity types across six strategic pillars",
      placeholderLabel: "Project image to be added",
      aspectRatio: "16/9",
    },
    ownership:
      "I was responsible for gathering and translating requirements, cleaning and standardising the Excel dataset, building the Tableau dashboard, and preparing the leadership narrative. A colleague led most of the data collection, and we co-developed the alignment and comparison logic.",
    workflowTitle: "From fragmented data to leadership insight",
    workflow: [
      {
        title: "Coordinate",
        text: "Clarify leadership information needs and collaborate with colleagues around the initiative data.",
      },
      {
        title: "Prepare",
        text: "Remove duplicates, standardise labels, and restructure columns in the Excel master dataset.",
      },
      {
        title: "Align",
        text: "Co-develop a consistent comparison structure for mapping initiative descriptions, tags, and organisations against national-priority categories.",
      },
      {
        title: "Visualise",
        text: "Build the Tableau dashboard and translate the structured data into accessible alignment views.",
      },
      {
        title: "Communicate",
        text: "Develop a concise data story and present the resulting insights directly to the UN Resident Coordinator.",
      },
    ],
    tools: [
      "Microsoft Excel",
      "Tableau",
      "Generative AI",
    ],
    methods: [
      "Requirements gathering",
      "Data cleaning and standardisation",
      "AI-assisted classification",
      "Collaborative analysis",
      "Dashboard development",
      "Data storytelling",
      "Executive presentation",
    ],
    sections: [
      {
        title: "AI as augmentation",
        text: "Generative AI supported roadmap planning, suggested candidate patterns between initiative records and national-priority categories, and helped with occasional Tableau learning and troubleshooting. It did not independently determine the final alignment. The comparison logic was co-developed with a colleague, while I remained accountable for preparing the data, building and interpreting the dashboard, and communicating the final narrative.",
      },
      {
        title: "Deliverables",
        text: "A cleaned Excel dataset, an initiative-to-priority alignment structure, a Tableau dashboard, and a concise leadership data-storytelling presentation.",
      },
      {
        title: "Outcome",
        text: "The project created a more centralised and visual way to understand UN Country Team contributions and their alignment with Viet Nam’s national priorities. It supported strategic UN–Government consultation and enabled leadership-ready reporting, including a presentation to the UN Resident Coordinator.",
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
      "An AI-assisted political intelligence digest developed to reduce the manual preparation required for weekly UN Country Team briefings.",
    challenge:
      "UN Thailand needed a more efficient way to prepare recurring political intelligence briefings while preserving the contextual judgement and editorial review behind the existing process.",
    outcome: "6 hours per week saved in manual briefing preparation.",
    tags: ["AI-assisted workflow", "Human review"],
    featured: false,
    image: {
      src: "/images/projects/un-thailand-workflow.png",
      filename: "un-thailand-workflow.png",
      alt: "Automation workflow used to prepare and email the United Nations Thailand political intelligence digest",
      placeholderLabel: "Project image to be added",
      aspectRatio: "227/30",
    },
    gallery: [
      {
        src: "/images/projects/un-thailand-digest-output-public.png",
        filename: "un-thailand-digest-output-public.png",
        alt: "Example page from the United Nations Thailand weekly news briefing with an executive overview and highlighted article",
        placeholderLabel: "Briefing output image coming soon",
        aspectRatio: "3/4",
      },
    ],
    ownership:
      "I owned development of the automated workflow from requirements translation through prototype and pilot. I worked with UN Thailand leadership and the economist to preserve the judgement behind the existing analysis while automating repetitive preparation. The economist reviewed each draft, and UN Thailand retained responsibility for approving and distributing the final digest.",
    workflowTitle: "How the intelligence workflow worked",
    workflow: [
      {
        title: "Understand",
        text: "Clarify briefing requirements with UN Thailand leadership and learn how the economist previously conducted the analysis.",
      },
      {
        title: "Translate",
        text: "Co-design relevance criteria and a system prompt reflecting UN Thailand’s information needs.",
      },
      {
        title: "Automate",
        text: "Use n8n to retrieve news through HTTP and RSS, process the content, and format the digest in HTML and CSS.",
      },
      {
        title: "Augment with AI",
        text: "Use Gemini through OpenRouter to score relevance and create source-grounded executive summaries with citations and original news links.",
      },
      {
        title: "Review and distribute",
        text: "Email the draft to the economist for human review before UN Thailand distributes approved content to the UN Country Team.",
      },
    ],
    tools: [
      "n8n",
      "Gemini via OpenRouter",
      "HTTP/RSS",
      "HTML/CSS",
      "SMTP",
    ],
    methods: [
      "Requirements gathering",
      "Workflow analysis",
      "Prompt design",
      "AI-assisted relevance scoring",
      "Human-in-the-loop review",
    ],
    sections: [
      {
        title: "Pilot and feedback",
        text: "The digest was piloted with participating agencies, with feedback collected through Microsoft Forms to inform further iteration. My assignment concluded before the next feedback cycle was implemented.",
      },
      {
        title: "Outcome",
        text: "The workflow reduced manual preparation for the weekly UN Country Team briefing by six hours per week.",
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
      src: "/images/projects/aot-digital-experience.jpg",
      filename: "aot-digital-experience.jpg",
      alt: "Before-and-after comparison from an Airports of Thailand website analysis",
      placeholderLabel: "Project image to be added",
      aspectRatio: "16/9",
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
