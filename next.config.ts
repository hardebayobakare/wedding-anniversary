import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The placeholder gallery photos are SVGs — this allows next/image to
    // optimize them safely. Fine to leave in place after you swap in real
    // JPG/PNG photos too.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
