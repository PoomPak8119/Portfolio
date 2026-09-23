import type { NextConfig } from "next";

const config: NextConfig = {
  poweredByHeader: false,
  basePath: process.env.SITE_URL
    ? new URL(process.env.SITE_URL).pathname.replace(/\/$/, "")
    : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.SITE_URL
      ? new URL(process.env.SITE_URL).pathname.replace(/\/$/, "")
      : "",
  },
  async redirects() {
    return [
      {
        source: "/case-studies/tara",
        destination: "/work/kmutt-edtech",
        permanent: true,
      },
      {
        source: "/case-studies/un-humanitarian-automation",
        destination: "/work/un-vietnam-humanitarian-automation",
        permanent: true,
      },
      {
        source: "/case-studies/rag-virtual-patient",
        destination: "/work/kbtg-virtual-patient",
        permanent: true,
      },
    ];
  },
};
export default config;
