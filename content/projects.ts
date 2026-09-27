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
    title: "TARA: English reading from classroom need to pilot",
    organisation: "King Mongkut’s University of Technology Thonburi",
    role: "Project manager",
    summary:
      "Managed the development of TARA, a platform for digital teaching materials, varied exercises, rewards, and an AI chatbot supporting English reading for Thai students.",
    challenge:
      "Explore a more engaging way for teachers to provide English reading materials and for students to practise beyond a traditional classroom format.",
    outcome: "Piloted the prototype in a classroom and gathered positive feedback from the teacher and students.",
    tags: ["Education technology", "Product development", "User research"],
    featured: true,
    image: {
      src: "/images/projects/kmutt-tara-edtech.png",
      filename: "kmutt-tara-edtech.png",
      alt: "TARA student portal with learning content and an AI chatbot",
      placeholderLabel: "Project image to be added",
      aspectRatio: "16/9",
    },
    ownership:
      "I originated the idea and managed the project: forming and coordinating the team, working with a teacher collaborator, reporting to our adviser, contacting a school for testing, and preparing presentations. I also helped a little with the frontend; other team members implemented parts of the product, including the chatbot.",
    workflowTitle: "From idea to classroom feedback",
    workflow: [
      {
        title: "Shape the learning experience",
        text: "Talk with teachers and students while developing digital teaching materials, varied exercises, and rewards students could use in a game.",
      },
      {
        title: "Guide the chatbot experience",
        text: "Suggest visual cues for difficult words to support learners who respond better to pictures; a teammate added emojis to the chatbot.",
      },
      {
        title: "Pilot in class",
        text: "Arrange a school test and ask the teacher and students for feedback at the end of the class.",
      },
    ],
    tools: ["React / Vite (project stack)"],
    methods: ["Project management", "Teacher and student conversations", "Gamification", "Classroom pilot"],
    sections: [
      {
        title: "Pilot feedback",
        text: "The teacher and students responded positively to the prototype. Some student feedback was recorded on video for the team; those recordings are not published here.",
      },
    ],
    evidence: {
      label: "View TARA’s university project record",
      href: "https://seniorproject.sit.kmutt.ac.th/showproject/CS64-RE16",
    },
  },
  {
    slug: "un-vietnam-humanitarian-automation",
    title: "Faster humanitarian document processing",
    organisation: "United Nations Viet Nam",
    period: "June–December 2025",
    role: "Junior Officer for Digital Transformation",
    summary:
      "Used OCR and generative AI to prepare Vietnamese storm and typhoon updates for human review, then built a separate automation pilot for the recurring workflow.",
    challenge:
      "During active storm response, leadership sent unstructured Vietnamese PDFs, scans, and images for English-language updates. Monitoring and reporting could recur three to nine times a day.",
    outcome: "The assisted process took approximately two minutes, compared with more than ten minutes manually; the separate automation pilot was not deployed operationally.",
    tags: ["AI-assisted workflow", "Automation pilot", "Humanitarian information"],
    featured: true,
    image: {
      src: "/images/projects/un-vietnam-humanitarian-automation.png",
      filename: "un-vietnam-humanitarian-automation.png",
      alt: "Humanitarian document workflow from content extraction and AI translation to review and email delivery",
      placeholderLabel: "Project image to be added",
      aspectRatio: "16/9",
    },
    ownership:
      "I developed the assisted document-preparation workflow and independently conceived and built a separate automation pilot. A Vietnamese colleague checked translations before leadership distributed the updates. I presented both approaches to the United Nations Development Coordination Office headquarters in New York.",
    workflowTitle: "Operational support and a separate pilot",
    workflow: [
      {
        title: "Prepare live updates",
        text: "Extract text from unstructured Vietnamese documents with OCR, use generative AI to support translation, and format English-language updates.",
      },
      {
        title: "Keep language review human",
        text: "Send the draft to a Vietnamese colleague for review before leadership shares it with the UN disaster risk reduction team in Viet Nam and UN Viet Nam.",
      },
      {
        title: "Prototype automation",
        text: "Build a React file-upload interface connected to an n8n Webhook, OCR node, and local AI model to explore extraction, translation, formatting, and routing.",
      },
    ],
    tools: ["OCR", "Generative AI", "React", "n8n", "Local AI"],
    methods: ["Document processing", "AI-assisted translation", "Human review", "Workflow prototyping"],
    sections: [
      {
        title: "Pilot boundary",
        text: "The automation remained a pilot. Its translation accuracy had not been validated sufficiently for operational use.",
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
      "Co-developed a virtual-patient simulator using rules, prompts, and retrieval from medical reference material.",
    challenge:
      "Explore a practical virtual-patient experience for clinical learning.",
    outcome:
      "Co-developed patient scenarios and evaluated generated answers against reference responses, recording the results in Excel.",
    tags: ["Applied AI", "Business analysis", "Healthcare education"],
    featured: true,
    image: {
      src: "/images/projects/kbtg-virtual-patient.jpg",
      filename: "kbtg-virtual-patient.jpg",
      alt: "Virtual Patient Plus presentation showing the medical education collaboration between Chulalongkorn University and KBTG",
      placeholderLabel: "Project image to be added",
      aspectRatio: "16/9",
    },
    ownership:
      "As an intern, I supported the business analyst and software engineer. I helped gather requirements from a Chulalongkorn medical professor, researched comparable products, framed the concept with Design Thinking, configured parts of the patient-response system, and evaluated its answers. The simulator was a team effort.",
    workflowTitle: "From clinical need to evaluated responses",
    workflow: [
      {
        title: "Understand the need",
        text: "Gather requirements with a medical professor, compare similar products, and report the findings to the team.",
      },
      {
        title: "Shape patient scenarios",
        text: "Configure rules, system prompts, and retrieval from JSON medical reference material, including patient personas with symptoms, gender, and age.",
      },
      {
        title: "Evaluate answers",
        text: "Compare generated responses with prepared reference answers and record accurate or inaccurate results in Excel.",
      },
    ],
    tools: ["Microsoft Excel", "JSON reference material", "RAG"],
    methods: ["Requirements gathering", "Design Thinking", "Comparable-product research", "Prompt and rule configuration", "Answer evaluation"],
    sections: [],
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
      "Automation tool",
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
        text: "The digest was piloted with participating agencies, with feedback collected through Microsoft Forms to inform further iteration.",
      },
      {
        title: "Outcome",
        text: "The workflow reduced manual preparation for the weekly UN Country Team briefing by six hours per week, and helped leaders make more informed decisions.",
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
      "Researched airport websites and worked with AOT departments and its website supplier to recommend clearer digital presentation after a Skytrax airport audit.",
    challenge:
      "A Skytrax airport audit prompted AOT to examine how its official website could communicate more clearly and represent the airport brand.",
    outcome: "My analysis contributed to removing advertising from the official website, making the airport branding more visible.",
    tags: ["Business analysis", "Digital transformation"],
    featured: false,
    image: {
      src: "/images/projects/aot-digital-experience.jpg",
      filename: "aot-digital-experience.jpg",
      alt: "Before-and-after comparison from an Airports of Thailand website analysis",
      placeholderLabel: "Project image to be added",
      aspectRatio: "16/9",
    },
    ownership:
      "As an IT Business Analyst Intern, I researched website practices, met with multiple AOT departments and the software house, explained website, frontend, backend, and CMS concepts to staff, and reported findings to the business analyst.",
    workflowTitle: "From audit to recommendation",
    workflow: [
      {
        title: "Compare",
        text: "Research other airports’ websites and effective website elements using web search and generative AI as research support.",
      },
      {
        title: "Discuss",
        text: "Meet with AOT departments and the website supplier to understand the existing site and possible improvements.",
      },
      {
        title: "Report",
        text: "Deliver presentation slides and a brief executive overview document to communicate the analysis.",
      },
    ],
    tools: ["Web search", "Generative AI (research support)"],
    methods: ["Website benchmarking", "Stakeholder meetings", "Business analysis", "Executive reporting"],
    sections: [],
  },
];

export const metrics = [
  {
    value: "≈2 min",
    description: "Initial assisted document task, compared with more than ten minutes manually",
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
    value: "Pilot",
    description: "Positive teacher and student feedback after a classroom test",
    context: "TARA · KMUTT",
    slug: "kmutt-edtech",
  },
];
