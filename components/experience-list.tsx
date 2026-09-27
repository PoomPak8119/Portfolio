import Link from "next/link";
import { experience } from "@/content/experience";
import { InstitutionLogo } from "./institution-logo";

export function ExperienceList({
  compact = false,
  showLogos = false,
}: {
  compact?: boolean;
  showLogos?: boolean;
}) {
  return (
    <div className="experience-list">
      {experience.map((item) => (
        <article key={item.organisation} className="experience-entry">
          <div className="experience-date">
            <p>{item.period}</p>
            <p>{item.location}</p>
          </div>
          <div>
            <div className="experience-organisation-heading">
              {showLogos && <InstitutionLogo src={item.logo} />}
              <div className="experience-organisation-copy">
                <h3>{item.organisation}</h3>
                <p className="role">{item.role}</p>
              </div>
            </div>
            {!compact && <p className="mt-4 max-w-prose">{item.summary}</p>}
          </div>
          <Link
            className="text-link"
            href={`/work/${item.project}`}
            aria-label={`View work at ${item.organisation}`}
          >
            View work <span aria-hidden="true">↗</span>
          </Link>
        </article>
      ))}
    </div>
  );
}
