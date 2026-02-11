/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },

  // Disable Next's image optimization so <Image /> works reliably in all environments.
  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      { source: '/sectors/hub', destination: '/sectors', permanent: true },
      { source: '/roles/hub', destination: '/roles', permanent: true },
    ];
  },
};

module.exports = nextConfig;
