/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "drive.google.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "bayshore.nyc3.digitaloceanspaces.com" },
      { protocol: "https", hostname: "dashboard-sabbir-nasir.vercel.app" },
      { protocol: "https", hostname: "backend-sabbir-nasir.vercel.app" },
    ],
  },

  skipTrailingSlashRedirect: true,

  async headers() {
    return [
      {
        source: "/Sabbir-Nasir-Transformation-Framework.pdf",
        headers: [
          { key: "Content-Type", value: "application/pdf" },
          {
            key: "Content-Disposition",
            value:
              'attachment; filename="Sabbir-Nasir-Transformation-Framework.pdf"',
          },
        ],
      },
    ];
  },

  // ✅ ADD REDIRECTS HERE
  async redirects() {
    return [
      {
        source: "/attorney-profile/drew-mcculloch-esq/",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
