import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { getLegacyRouteRedirects } from "./lib/legacyRouteRedirects";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return getLegacyRouteRedirects();
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default withNextIntl(nextConfig);
