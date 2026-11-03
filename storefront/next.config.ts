// File: next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Old live-site URLs kept working; the target page's canonical tag tells Google which URL is main.
  async rewrites() {
    return [
      { source: "/invisible-grill", destination: "/invisible-grills" },
      { source: "/pleated-mesh-in-delhi", destination: "/pleated-mesh" },
      {
        source:
          "/-click-to-open-expanded-view-2-solution-sahab-ceiling-mounted-full-frame-rust-proof-6-pipe-x-6-feet-with-uv-protected-nylon-rope-stainless-steel-12747",
        destination: "/ceiling-cloth-hanger",
      },
      {
        source:
          "/solution-sahab-heavy-rust-proof-stainless-steel-6-pipe-x-6-feet-with-uv-protected-nylon-ropes-4-feet-ceiling-mounted-individual-dropdown-ceiling-7b808",
        destination: "/ceiling-cloth-hanger",
      },
      {
        source:
          "/solution-sahab-stainless-steel-heavy-duty-6-pipe-x-5-feet-wall-mounted-cloth-drying-stand-foldable-or-cloth-stand-hanger-or-cloth-drying-stand",
        destination: "/ceiling-cloth-hanger",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.zyrosite.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
