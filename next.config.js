/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

// If you deploy as a *project* site (e.g. https://org.github.io/repo), set this to "/repo".
// If you deploy to a *custom domain* at the root (e.g. https://example.com), leave it empty.
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').trim().replace(/\/$/, '');

const nextConfig = {
  turbopack: {
    root: __dirname,
  },

  // GitHub Pages is static hosting, so we export the site during CI.
  ...(isGitHubPages
    ? {
        output: 'export',
        ...(basePath
          ? {
              basePath,
              assetPrefix: `${basePath}/`,
            }
          : {}),
        trailingSlash: true,
      }
    : {}),

  // Disable Next's image optimization so <Image /> works reliably in static hosting.
  images: {
    unoptimized: true,
  },

  ...(isGitHubPages
    ? {}
    : {
        async redirects() {
          return [
            { source: '/sectors/hub', destination: '/sectors', permanent: true },
            { source: '/roles/hub', destination: '/roles', permanent: true },
          ];
        },
      }),
};

module.exports = nextConfig;
