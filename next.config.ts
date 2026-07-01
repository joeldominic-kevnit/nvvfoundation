import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Deployed as a Node.js server (Hostinger Node.js App hosting), not a static
  // export — the /api routes (Razorpay orders/verification, receipt emails)
  // need a server runtime and are silently dropped under output: 'export'.
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
