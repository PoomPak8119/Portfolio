import type { PortfolioImage } from "@/content/profile";

export type Recognition = {
  organisation: string;
  title: string;
  description: string;
  type: "institutional-feature" | "social-feature" | "media";
  platform: "Website" | "Facebook" | "Instagram";
  date?: string;
  url: string;
  cta: string;
  image: PortfolioImage;
};

export const recognitions: Recognition[] = [
  {
    organisation:
      "School of Information Technology, King Mongkut's University of Technology Thonburi",
    title: "Selected for United Nations Volunteer assignment in Viet Nam",
    description:
      "SIT KMUTT featured my selection, through KMUTT and United Nations Volunteers, to serve as Junior Officer for Digital Transformation at the UN Resident Coordinator's Office in Hanoi.",
    type: "institutional-feature",
    platform: "Website",
    date: "12 January 2026",
    url: "https://www.sit.kmutt.ac.th/sit-kmutt-%E0%B8%82%E0%B8%AD%E0%B9%81%E0%B8%AA%E0%B8%94%E0%B8%87%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A2%E0%B8%B4%E0%B8%99%E0%B8%94%E0%B8%B5%E0%B8%81%E0%B8%B1%E0%B8%9A-%E0%B8%A0%E0%B8%B2%E0%B8%AA/",
    cta: "View university feature",
    image: {
      src: null,
      filename: "kmutt-unv-recognition.jpg",
      alt: "",
      placeholderLabel: "University feature image coming soon",
      aspectRatio: "16/9",
    },
  },
  {
    organisation: "United Nations Volunteers — Asia & the Pacific",
    title: "Featured by UNV Asia & the Pacific",
    description:
      "Featured by United Nations Volunteers Asia & the Pacific in connection with my UN Volunteer experience and digital transformation work in Viet Nam.",
    type: "social-feature",
    platform: "Facebook",
    url: "https://www.facebook.com/photo.php?fbid=871171478641377&set=a.146209597804239&type=3&rdid=zF162eFeYfMO1Tzp&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AcAkexLz3%2F",
    cta: "View Facebook post",
    image: {
      src: null,
      filename: "unv-asia-pacific-facebook-feature.jpg",
      alt: "",
      placeholderLabel: "Facebook feature image coming soon",
      aspectRatio: "16/9",
    },
  },
  {
    organisation: "United Nations Volunteers — Asia & the Pacific",
    title: "Featured by UNV Asia & the Pacific",
    description:
      "Featured on the official UNV Asia & the Pacific Instagram channel in connection with my experience as a UN Volunteer.",
    type: "social-feature",
    platform: "Instagram",
    url: "https://www.instagram.com/p/DSHd4pQD7EH/",
    cta: "View Instagram post",
    image: {
      src: null,
      filename: "unv-asia-pacific-instagram-feature.jpg",
      alt: "",
      placeholderLabel: "Instagram feature image coming soon",
      aspectRatio: "16/9",
    },
  },
];
