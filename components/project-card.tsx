import Link from "next/link";
import type { Project } from "@/content/projects";
import { ImageFrame } from "./ui";

export function ProjectCard({ project, number }: { project: Project; number: number }) {
  return <article className="project-card">
    <ImageFrame image={project.image} />
    <div className="project-card-copy"><p className="eyebrow">{String(number).padStart(2, "0")} / {project.organisation}</p><h3>{project.title}</h3><p>{project.challenge}</p><p className="project-role"><strong>My role</strong><br />{project.role}</p><p className="project-outcome">{project.outcome}</p><Link className="text-link" href={`/work/${project.slug}`} aria-label={`View ${project.featured ? "case study" : "project"}: ${project.title}`}>View {project.featured ? "case study" : "project"} <span aria-hidden="true">↗</span></Link></div>
  </article>;
}
