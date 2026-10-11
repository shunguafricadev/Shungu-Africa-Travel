import type { NextConfig } from "next";
import { packages } from "./data/packages";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.199"],
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/specials",
        destination: "/packages",
        permanent: true,
      },
      ...packages.map(({ slug }) => ({
        source: `/specials/${slug}`,
        destination: `/packages/${slug}`,
        permanent: true,
      })),
      {
        source: "/transfers/victoria-falls-airport-to-hotel",
        destination: "/transfers/victoria-falls-airport-transfers",
        permanent: true,
      },
      {
        source: "/transfers/victoria-falls-hotel-to-airport",
        destination: "/transfers/victoria-falls-airport-transfers",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/webp"],
    qualities: [60, 65, 70, 75],
    minimumCacheTTL: 2592000,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-DNS-Prefetch-Control", value: "off" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://elfsightcdn.com https://*.elfsightcdn.com https://*.elfsight.com https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https://*.elfsight.com https://*.elfsightcdn.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://*.supabase.co https://*.elfsight.com https://*.elfsightcdn.com https://vitals.vercel-insights.com; frame-src https://www.google.com https://maps.google.com https://*.elfsight.com https://*.elfsightcdn.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self'; object-src 'none'",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          ...(process.env.NODE_ENV === "production"
            ? [
                {
                  key: "Strict-Transport-Security",
                  value: "max-age=31536000; includeSubDomains",
                },
              ]
            : []),
        ],
      },
    ];
  },
};

export default nextConfig;