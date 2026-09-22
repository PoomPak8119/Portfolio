import { ExperienceList } from "@/components/experience-list";
import { ContactCta, PageIntro } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Experience", "Professional experience with United Nations Thailand, United Nations Viet Nam, KBTG, and Airports of Thailand.", "/experience");
export default function Experience() {
  return <><PageIntro label="Experience" title="Connecting organisations, people, and technology." description="Experience across international organisations, financial technology, and the public sector — with a focus on practical digital transformation." /><section className="section"><div className="container"><h2 className="mb-12">Professional journey</h2><ExperienceList /></div></section><ContactCta /></>;
}
