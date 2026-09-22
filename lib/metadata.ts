import type { Metadata } from "next";
import { profile } from "@/content/profile";

const configuredUrl = process.env.SITE_URL?.trim();
export const siteUrl = configuredUrl ? new URL(configuredUrl) : undefined;
if (siteUrl && (siteUrl.protocol !== "https:" || siteUrl.pathname !== "/" || siteUrl.search || siteUrl.hash || siteUrl.username || siteUrl.password)) {
  throw new Error("SITE_URL must be a public HTTPS origin without a path, credentials, query, or fragment.");
}

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = siteUrl ? new URL(path, siteUrl) : undefined;
  const images = siteUrl ? [{ url: new URL("/opengraph-image", siteUrl).href, width: 1200, height: 630, alt: `${profile.name} — ${profile.positioning}` }] : undefined;
  return {
    title,
    description,
    alternates: url ? { canonical: url.href } : undefined,
    openGraph: { title: `${title} | ${profile.name}`, description, type: "website", locale: "en_GB", siteName: profile.name, url, images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}
