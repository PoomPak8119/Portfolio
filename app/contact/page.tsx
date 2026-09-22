import { profile } from "@/content/profile";
import { CvAction } from "@/components/navigation";
import { PageIntro } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Contact", "Contact Passapol Phukhang about digital innovation, business analysis, applied AI opportunities, or professional collaboration.", "/contact");
export default function Contact() {
  return <><PageIntro label="Contact" title="Let’s make technology useful." description="For opportunities in digital innovation, AI transformation, business analysis, or a conversation about a shared challenge." /><section className="section"><div className="container contact-grid"><div><h2>A conversation starts here.</h2><div className="contact-link"><p className="eyebrow">Email</p><a href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">↗</span></a></div>{profile.socialLinks.map(link => <div className="contact-link" key={link.label}><p className="eyebrow">Connect</p><a href={link.href}>Visit {link.label} <span aria-hidden="true">↗</span></a></div>)}</div><div className="case-summary"><p className="eyebrow">Based in</p><h2>{profile.location}</h2><p className="mb-6">Currently studying Digital Innovation at University College Dublin.</p><CvAction /></div></div></section></>;
}
