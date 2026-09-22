import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { siteUrl, absoluteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return ["/", "/work", "/experience", "/about", "/education", "/contact", ...projects.map(project => `/work/${project.slug}`)].map(path => ({ url: absoluteUrl(path)! }));
}
