import type { Metadata } from "next";
import Link from "next/link";
import "@fontsource/roboto/latin-400.css";
import "@fontsource/roboto/latin-500.css";
import "@fontsource/roboto/latin-700.css";
import "./globals.css";
import { profile } from "@/content/profile";
import { Navigation, CvAction } from "@/components/navigation";
import { siteUrl } from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: `${profile.name} | Digital Innovation, Business Analysis & Applied AI`, template: `%s | ${profile.name}` },
  description: profile.description,
  robots: { index: Boolean(siteUrl), follow: Boolean(siteUrl) },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const person = { "@context": "https://schema.org", "@type": "Person", name: profile.name, description: profile.description, sameAs: profile.socialLinks.map(link => link.href), ...(siteUrl ? { url: siteUrl.href } : {}) };
  return <html lang="en-GB"><body>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <header className="site-header"><div className="container"><Link className="name-mark" href="/" aria-label="Passapol Phukhang — home">Passapol<span>Phukhang<span className="name-dot" aria-hidden="true">.</span></span></Link><Navigation /></div></header>
    <main id="main-content" tabIndex={-1}>{children}</main>
    <footer className="site-footer"><div className="container"><div className="footer-top"><div><Link className="footer-name" href="/">{profile.name}</Link><p>At the intersection of business,<br />people, and technology.</p></div><nav aria-label="Contact links"><a href={`mailto:${profile.email}`}>Email Passapol <span aria-hidden="true">↗</span></a>{profile.socialLinks.map(link => <a key={link.label} href={link.href}>Visit {link.label} <span aria-hidden="true">↗</span></a>)}<CvAction /></nav></div><div className="footer-bottom"><p>© {new Date().getFullYear()} {profile.name}</p><p>{profile.location}</p></div></div></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} />
  </body></html>;
}
