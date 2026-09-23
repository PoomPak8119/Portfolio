export type Credential = {
  title: string;
  type: string;
  href: string;
  description: string;
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
    title: "Educational certificates",
    type: "External certificate collection",
    href: "https://ludaxia.app/poom/certificates",
    description:
      "A public collection of selected educational and professional-development certificates.",
  },
];

export const recommendations: Recommendation[] = [];
