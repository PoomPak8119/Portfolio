export type Education = {
  institution: string;
  qualification: string;
  period: string;
  country: string;
  logo: string;
  earlier?: boolean;
};
export const education: Education[] = [
  {
    institution: "UCD Michael Smurfit Graduate Business School, University College Dublin",
    qualification: "Master’s Degree in Digital Innovation",
    period: "August 2026–Present",
    country: "Ireland",
    logo: "/logos/education/ucd-smurfit.png",
  },
  {
    institution: "King Mongkut’s University of Technology Thonburi (KMUTT)",
    qualification: "Bachelor’s Degree in Computer Science",
    period: "August 2021–December 2025",
    country: "Thailand",
    logo: "/logos/education/kmutt.png",
  },
  {
    institution: "VSB – Technical University of Ostrava",
    qualification:
      "Exchange Programme in Electrical Engineering & Computer Science",
    period: "September 2023–January 2024",
    country: "Czech Republic",
    logo: "/logos/education/vsb.png",
  },
  {
    institution: "Chippewa Hills High School",
    qualification: "High School Exchange Programme",
    period: "August 2019–June 2020",
    country: "United States",
    logo: "/logos/education/chippewa-hills.png",
    earlier: true,
  },
];
