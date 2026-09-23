import Link from "next/link";
import { profile, skills } from "@/content/profile";
import {
  ContactCta,
  ImageFrame,
  PageIntro,
  SectionHeading,
} from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "About",
  "Meet Passapol Phukhang: a Thai digital innovation professional in Dublin, connecting computer science, applied AI, and organisational transformation.",
  "/about",
);
export default function About() {
  return (
    <>
      <PageIntro
        label="About me"
        title="Business, people, and technology belong together."
        description="I’m Passapol, a Thai digital innovation professional based in Dublin, Ireland."
      />
      <section className="section">
        <div className="container about-grid">
          <ImageFrame image={profile.portrait} />
          <div className="prose">
            <h2>From computer science to digital transformation.</h2>
            <p>
              My background combines computer science, business analysis, and
              applied AI. I’ve worked with United Nations teams in Thailand and
              Viet Nam, KBTG, and Airports of Thailand.
            </p>
            <p>
              Across those settings, the focus is practical: understanding
              organisational needs, shaping digital solutions, and helping
              people work with technology.
            </p>
            <p>
              I’m currently pursuing a Master’s Degree in Digital Innovation at
              University College Dublin. My education and work span Thailand,
              Viet Nam, the Czech Republic, the United States, and Ireland.
            </p>
            <Link className="text-link mt-6" href="/education">
              View my education <span aria-hidden="true">↗</span>
            </Link>
            <div className="speaking">
              <p className="eyebrow">Sharing knowledge</p>
              <p>
                Invited speaker at a United Nations Asia-Pacific AI and digital
                innovation webinar with <strong>300+ participants</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <SectionHeading
            label="Capabilities"
            title="A bridge between analysis and implementation."
          />
          <div className="skills-grid">
            {skills.map((group) => (
              <section key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <p className="mt-12 text-sm">
            This portfolio also uses TypeScript; its use here is separate from
            the professional experience described above.
          </p>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
