export type Education = {
  institution: string;
  qualification: string;
  period: string;
  country: string;
  earlier?: boolean;
};
export const education: Education[] = [
  {
    institution: "University College Dublin",
    qualification: "Master’s Degree in Digital Innovation",
    period: "August 2026–Present",
    country: "Ireland",
  },
  {
    institution: "King Mongkut’s University of Technology Thonburi",
    qualification: "Bachelor’s Degree in Computer Science",
    period: "August 2021–December 2025",
    country: "Thailand",
  },
  {
    institution: "VSB – Technical University of Ostrava",
    qualification:
      "Exchange Programme in Electrical Engineering & Computer Science",
    period: "September 2023–January 2024",
    country: "Czech Republic",
  },
  {
    institution: "Chippewa Hills High School",
    qualification: "High School Exchange Programme",
    period: "August 2019–June 2020",
    country: "United States",
    earlier: true,
  },
];
