import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";
import { profile } from "@/content/profile";
import { Navigation, CvAction } from "@/components/navigation";
import { homepageUrl, siteUrl } from "@/lib/metadata";

const roboto = localFont({
  src: [
    {
      path: "../node_modules/@fontsource/roboto/files/roboto-latin-400-normal.woff2",
      weight: "400",
    },
    {
      path: "../node_modules/@fontsource/roboto/files/roboto-latin-500-normal.woff2",
      weight: "500",
    },
    {
      path: "../node_modules/@fontsource/roboto/files/roboto-latin-700-normal.woff2",
      weight: "700",
    },
  ],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${profile.name} | Digital Innovation, Business Analysis & Applied AI`,
    template: `%s | ${profile.name}`,
  },
  description: profile.description,
  robots: { index: Boolean(siteUrl), follow: Boolean(siteUrl) },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    description: profile.description,
    sameAs: profile.socialLinks.map((link) => link.href),
    ...(siteUrl ? { url: siteUrl.href } : {}),
  };
  return (
    <html lang="en-GB" className={roboto.variable}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <header className="site-header">
          <div className="container">
            <a
              className="name-mark"
              href={homepageUrl}
              aria-label="Passapol Phukhang. — home"
            >
              Passapol{" "}
              <span>
                Phukhang
                <span className="name-dot" aria-hidden="true">
                  .
                </span>
              </span>
            </a>
            <Navigation />
          </div>
        </header>
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <footer className="site-footer">
          <div className="container">
            <div className="footer-top">
              <div>
                <a className="footer-name" href={homepageUrl}>
                  {profile.name}
                </a>
                <p>
                  At the intersection of business,
                  <br />
                  people, and technology.
                </p>
              </div>
              <nav aria-label="Contact links">
                <a href={`mailto:${profile.email}`}>
                  Email Passapol <span aria-hidden="true">↗</span>
                </a>
                {profile.socialLinks.map((link) => (
                  <a key={link.label} href={link.href}>
                    Visit {link.label} <span aria-hidden="true">↗</span>
                  </a>
                ))}
                <Link href="/credentials">
                  Credentials <span aria-hidden="true">↗</span>
                </Link>
                <CvAction />
              </nav>
            </div>
            <div className="footer-bottom">
              <p>
                © {new Date().getFullYear()} {profile.name}
              </p>
              <p>{profile.location}</p>
            </div>
          </div>
        </footer>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(person).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
