import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { ImageFrame, ContactCta } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;
export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  return project ? pageMetadata(project.title, project.summary, `/work/${slug}`) : { title: "Project not found" };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();
  const related = projects[(projects.indexOf(project) + 1) % projects.length];
  return <>
    <section className="page-intro case-intro navy"><div className="container"><Link href="/work" className="text-link text-cream! mb-8"><span aria-hidden="true">←</span> All work</Link><p className="eyebrow">{project.featured ? "Case study" : "Project overview"} / {project.organisation}</p><h1>{project.title}</h1><p className="lead">{project.summary}</p><dl className="case-meta"><div><dt>My role</dt><dd>{project.role}</dd></div>{project.period && <div><dt>Period</dt><dd>{project.period}</dd></div>}</dl></div></section>
    <section className="section"><div className="container"><div className="case-image"><ImageFrame image={project.image} /></div><div className="case-body"><div className="prose"><section className="mb-12"><h2>The challenge</h2><p>{project.challenge}</p></section>{project.sections.map(section => <section className="mb-12" key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}{project.evidence && <section><h2>Public evidence</h2><a className="text-link" href={project.evidence.href}>{project.evidence.label}<span aria-hidden="true">↗</span></a></section>}</div><aside className="case-summary" aria-label="Project at a glance"><h2>At a glance</h2><p className="font-medium text-navy">{project.outcome}</p><ul className="tags" aria-label="Project themes">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></aside></div></div></section>
    <section className="section soft"><div className="container"><p className="eyebrow">Continue reading</p><h2 className="max-w-3xl">{related.title}</h2><Link className="text-link mt-6" href={`/work/${related.slug}`}>View next project <span aria-hidden="true">↗</span></Link></div></section><ContactCta />
  </>;
}
