import type { MetadataRoute } from "next";
import { siteUrl, absoluteUrl } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(siteUrl ? { allow: siteUrl.pathname } : { disallow: "/" }),
    },
    ...(siteUrl ? { sitemap: absoluteUrl("/sitemap.xml") } : {}),
  };
}
