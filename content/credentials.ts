import type { PortfolioImage } from "@/content/profile";

export type Credential = {
  title: string;
  type: string;
  issuer: string;
  date?: string;
  href: string;
  description: string;
  image?: PortfolioImage;
};

export type Recommendation = {
  title: string;
  organisation: string;
  href: string;
  date?: string;
  context?: string;
};

export const credentials: Credential[] = [
  {
    title: "AI and Digital Transformation in Government",
    type: "Educational certificate",
    issuer: "University of Oxford Saïd Business School & UNESCO",
    date: "11 February 2026",
    href: "/documents/certificates/oxford-unesco-ai-digital-transformation-in-government.pdf",
    description:
      "Professional development focused on AI and digital transformation in government.",
    image: {
      src: "/images/credentials/oxford-unesco-ai-digital-transformation-certificate.png",
      filename: "oxford-unesco-ai-digital-transformation-certificate.png",
      alt: "Certificate awarded to Passapol Phukhang for completing AI and Digital Transformation in Government",
      placeholderLabel: "Certificate preview unavailable",
      aspectRatio: "4/3",
    },
  },
  {
    title: "Basics of entrepreneurship: thinking and doing",
    type: "Course certificate",
    issuer: "ESSEC Business School via Coursera",
    date: "8 March 2025",
    href: "/documents/certificates/essec-coursera-basics-of-entrepreneurship.pdf",
    description:
      "An online course covering entrepreneurship and innovation fundamentals.",
    image: {
      src: "/images/credentials/essec-coursera-entrepreneurship-certificate.png",
      filename: "essec-coursera-entrepreneurship-certificate.png",
      alt: "Certificate awarded to Passapol Phukhang for completing Basics of entrepreneurship: thinking and doing",
      placeholderLabel: "Certificate preview unavailable",
      aspectRatio: "4/3",
    },
  },
  {
    title: "Think and Act Like a Project Manager",
    type: "Professional development certificate",
    issuer: "CDOTS Campus · UN Department of Operational Support",
    href: "/documents/certificates/un-cdots-project-management.pdf",
    description:
      "Professional development in practical project-management thinking and delivery.",
    image: {
      src: "/images/credentials/un-cdots-project-management-certificate.png",
      filename: "un-cdots-project-management-certificate.png",
      alt: "Certificate awarded to Passapol Phukhang for completing Think and Act Like a Project Manager",
      placeholderLabel: "Certificate preview unavailable",
      aspectRatio: "4/3",
    },
  },
  {
    title: "All educational certificates",
    type: "External certificate collection",
    issuer: "",
    href: "https://ludaxia.app/poom/certificates",
    description:
      "A public collection of selected educational and professional-development certificates.",
  },
];

export const recommendations: Recommendation[] = [
  {
    title: "United Nations Viet Nam recommendation letters",
    organisation: "United Nations Viet Nam",
    date: "September & December 2025",
    context:
      "Two professional references relating to digital transformation and responsible innovation work at the UN Resident Coordinator’s Office.",
    href: "/documents/recommendations/un-viet-nam-recommendation-letters.pdf",
  },
  {
    title: "KMUTT academic recommendation letter",
    organisation: "King Mongkut’s University of Technology Thonburi",
    date: "15 September 2025",
    context:
      "Academic recommendation from Dr Watanyoo Suksa-ngiam, lecturer and TARA capstone adviser.",
    href: "/documents/recommendations/kmutt-watanyoo-recommendation-letter.pdf",
  },
];
