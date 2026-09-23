import Link from "next/link";
import { profile, approach } from "@/content/profile";
import { metrics, projects } from "@/content/projects";
import { ImageFrame, SectionHeading, ContactCta } from "@/components/ui";
import { ProjectCard } from "@/components/project-card";
import { ExperienceList } from "@/components/experience-list";
import { pageMetadata } from "@/lib/metadata";

export const metadata = {
  ...pageMetadata(
    "Digital Innovation, Business Analysis & Applied AI",
    "Portfolio of Passapol Phukhang, a Dublin-based digital innovation professional working across human-centred AI, business analysis, and technology for impact.",
    "/",
  ),
  title: {
    absolute:
      "Passapol Phukhang | Digital Innovation, Business Analysis & Applied AI",
  },
};

export default function Home() {
  return (
    <>
      <section className="hero navy">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">
              Dublin, Ireland · An international perspective
            </p>
            <h1>
              Passapol
              <br />
              Phukhang
            </h1>
            <p className="hero-positioning">
              Digital Innovation &amp;
              <br />
              AI Transformation
            </p>
            <p className="lead">{profile.description}</p>
            <div className="hero-actions">
              <Link className="button button-cream" href="/work">
                View selected work <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button button-dark-outline" href="/contact">
                Get in touch <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <div className="hero-portrait">
            <ImageFrame image={profile.portrait} priority />
            <p className="hero-caption">Business. People. Technology.</p>
          </div>
        </div>
      </section>
      <section className="section" id="impact" tabIndex={-1}>
        <div className="container">
          <SectionHeading
            label="Selected impact"
            title="Practical work. Tangible outcomes."
          />
          <div className="metrics-grid">
            {metrics.map((metric) => (
              <article className="metric" key={metric.slug}>
                <p className="metric-value">{metric.value}</p>
                <h3 className="metric-description text-base! leading-relaxed!">
                  {metric.description}
                </h3>
                <Link className="text-link" href={`/work/${metric.slug}`}>
                  {metric.context}
                  <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section soft" id="case-studies" tabIndex={-1}>
        <div className="container">
          <SectionHeading
            label="Selected work"
            title="From a real need to a useful solution."
          >
            <Link className="text-link" href="/work">
              View all work <span aria-hidden="true">↗</span>
            </Link>
          </SectionHeading>
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
      <section className="section">
        <div className="container">
          <SectionHeading
            label="How I work"
            title="Start with people. Build for adoption."
          />
          <ol className="approach-grid">
            {approach.map((step, index) => (
              <li key={step.title}>
                <span className="approach-number" aria-hidden="true">
                  0{index + 1} /
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section soft" id="experience" tabIndex={-1}>
        <div className="container">
          <SectionHeading
            label="Professional experience"
            title="Across organisations. Around real challenges."
          >
            <Link className="text-link" href="/experience">
              View experience <span aria-hidden="true">↗</span>
            </Link>
          </SectionHeading>
          <ExperienceList compact />
        </div>
      </section>
      <section className="section" id="about" tabIndex={-1}>
        <div className="container about-preview">
          <div>
            <p className="eyebrow">A little about me</p>
            <h2>
              A technical foundation.
              <br />A human perspective.
            </h2>
          </div>
          <div>
            <p className="lead">
              From computer science in Thailand to digital transformation work
              with the United Nations, my experience connects technology with
              organisational needs.
            </p>
            <p>
              I’m now studying Digital Innovation at University College Dublin,
              building on education and work across Thailand, Viet Nam, the
              Czech Republic, the United States, and Ireland.
            </p>
            <Link className="text-link mt-4" href="/about">
              About my journey <span aria-hidden="true">↗</span>
            </Link>
            <div className="mt-8" id="credentials" tabIndex={-1}>
              <p className="eyebrow">Education &amp; credentials</p>
              <p className="font-medium text-navy">
                Master’s Degree in Digital Innovation
                <br />
                University College Dublin · August 2026–Present
              </p>
              <Link className="text-link mt-2" href="/education">
                View education <span aria-hidden="true">↗</span>
              </Link>
              <Link className="text-link mt-2" href="/credentials">
                View credentials &amp; recommendations{" "}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
