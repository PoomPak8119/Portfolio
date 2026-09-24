import Link from "next/link";
import { credentials, recommendations } from "@/content/credentials";
import {
  ContactCta,
  ImageFrame,
  PageIntro,
  SectionHeading,
} from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { assetPath } from "@/lib/paths";

export const metadata = pageMetadata(
  "Credentials & Recommendations",
  "Selected educational certificates and professional recommendations supporting Passapol Phukhang’s work in digital innovation, AI, and international organisations.",
  "/credentials",
);

export default function Credentials() {
  return (
    <>
      <PageIntro
        label="Supporting evidence"
        title="Credentials & Recommendations"
        description="Selected educational certificates and professional recommendations supporting my experience in digital innovation, AI, and international organisations."
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            label="Education & development"
            title="Educational certificates"
          />
          <div className="credentials-list">
            {credentials.map((credential) => (
              <article className="case-summary" key={credential.title}>
                {credential.image && (
                  <div className="credential-preview">
                    <ImageFrame image={credential.image} />
                  </div>
                )}
                <p className="eyebrow">{credential.type}</p>
                <h3>{credential.title}</h3>
                {credential.issuer && (
                  <p className="font-medium text-navy mt-4">
                    {credential.issuer}
                  </p>
                )}
                {credential.date && (
                  <p className="mt-2 text-sm">{credential.date}</p>
                )}
                <p className="mt-4">{credential.description}</p>
                <a
                  className="text-link mt-4"
                  href={
                    credential.href.startsWith("https://")
                      ? credential.href
                      : assetPath(credential.href)
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  View {credential.title}{" "}
                  {credential.href.endsWith(".pdf")
                    ? "(PDF)"
                    : "(external site)"}
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section soft" id="recommendations">
        <div className="container">
          <SectionHeading
            label="Professional evidence"
            title="Recommendation letters"
          />
          {recommendations.length ? (
            <div className="credentials-list">
              {recommendations.map((recommendation) => (
                <article className="case-summary" key={recommendation.title}>
                  <p className="eyebrow">{recommendation.organisation}</p>
                  <h3>{recommendation.title}</h3>
                  {recommendation.context && (
                    <p className="mt-4">{recommendation.context}</p>
                  )}
                  {recommendation.date && (
                    <p className="mt-2 text-sm">{recommendation.date}</p>
                  )}
                  <a
                    className="text-link mt-4"
                    href={assetPath(recommendation.href)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View {recommendation.title} (PDF)
                    <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="case-summary credentials-empty">
              <h3>Publication copies are still to be added.</h3>
              <p className="mt-4">
                Recommendation letters will be listed here after document and
                privacy review.
              </p>
            </div>
          )}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Related information</p>
          <h2>Education and professional journey</h2>
          <div className="hero-actions">
            <Link className="button button-primary" href="/education">
              View education
            </Link>
            <Link className="button button-outline" href="/experience">
              View experience
            </Link>
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
