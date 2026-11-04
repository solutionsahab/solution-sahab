// File: next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No reactCompiler: its Babel worker processes can't start on the deploy host and failed the build.
  // Old live-site URLs kept working; the target page's canonical tag tells Google which URL is main.
  async redirects() {
    return [
      // Old post URL was the full link pasted into the slug.
      {
        source: "/httpssolutionsahabcomhoneycomb-mesh-installation-delhi",
        destination: "/honeycomb-mesh-installation-delhi",
        permanent: true,
      },
      // Building-type pages moved from /invisible-grills/<type> to /invisible-grills-for-<type>.
      {
        source: "/invisible-grills/schools",
        destination: "/invisible-grills-for-schools",
        permanent: true,
      },
      {
        source: "/invisible-grills/hospitals",
        destination: "/invisible-grills-for-hospitals",
        permanent: true,
      },
    ];
  },
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
    // 90 is used by the full-width home hero so large photos stay sharp.
    qualities: [75, 90],
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
