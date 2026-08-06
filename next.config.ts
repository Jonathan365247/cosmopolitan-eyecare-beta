import type { NextConfig } from "next";

const isIndexable = process.env.NEXT_PUBLIC_SITE_MODE === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{
      source: "/:path*",
      headers: [
        ...(!isIndexable ? [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }] : []),
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "X-Content-Type-Options", value: "nosniff" }
      ]
    }];
  }
};

export default nextConfig;
