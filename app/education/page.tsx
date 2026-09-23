import { education } from "@/content/education";
import { ContactCta, PageIntro } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Education",
  "Passapol Phukhang’s education in digital innovation and computer science, with international study in Ireland, Thailand, the Czech Republic, and the United States.",
  "/education",
);
export default function Education() {
  return (
    <>
      <PageIntro
        label="Education"
        title="Learning across disciplines and borders."
        description="A computer science foundation, international exchanges, and current postgraduate study in digital innovation."
      />
      <section className="section">
        <div className="container">
          {education.map((item) => (
            <article
              key={item.institution}
              className={`education-entry${item.earlier ? " earlier" : ""}`}
            >
              <div>
                <p className="font-medium text-navy">{item.period}</p>
                <p>{item.country}</p>
                {item.earlier && (
                  <p className="mt-2">Earlier international experience</p>
                )}
              </div>
              <div>
                <h2>{item.institution}</h2>
                <p className="mt-3">{item.qualification}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <ContactCta />
    </>
  );
}
