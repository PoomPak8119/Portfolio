import type { NextConfig } from "next";

const config: NextConfig = {
  output: "export",
  poweredByHeader: false,
  images: { unoptimized: true },
  basePath: process.env.SITE_URL
    ? new URL(process.env.SITE_URL).pathname.replace(/\/$/, "")
    : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.SITE_URL
      ? new URL(process.env.SITE_URL).pathname.replace(/\/$/, "")
      : "",
  },
};
export default config;
