import Link from "next/link";
import { experience } from "@/content/experience";

export function ExperienceList({ compact = false }: { compact?: boolean }) {
  return <div className="experience-list">{experience.map(item => <article key={item.organisation} className="experience-entry"><div className="experience-date"><p>{item.period}</p><p>{item.location}</p></div><div><h3>{item.organisation}</h3><p className="role">{item.role}</p>{!compact && <p className="mt-4 max-w-prose">{item.summary}</p>}</div><Link className="text-link" href={`/work/${item.project}`} aria-label={`View work at ${item.organisation}`}>View work <span aria-hidden="true">↗</span></Link></article>)}</div>;
}
