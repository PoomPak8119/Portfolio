import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";
import { PageIntro, ContactCta, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Selected work",
  "Explore Passapol Phukhang’s work in education technology, humanitarian data automation, applied AI, and digital transformation.",
  "/work",
);
export default function Work() {
  return (
    <>
      <PageIntro
        label="Work"
        title="Technology with a practical purpose."
        description="Selected projects connecting organisational needs, human-centred thinking, and digital implementation."
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            label="Featured studies"
            title="Three perspectives on useful innovation."
          />
          <div className="project-list">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  number={index + 1}
                />
              ))}
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <SectionHeading
            label="Further work"
            title="Digital transformation in practice."
          />
          <div className="project-list">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  number={index + 4}
                />
              ))}
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
