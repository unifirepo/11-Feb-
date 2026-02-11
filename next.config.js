/** @type {import('next').NextConfig} */
const repoName = '11-Feb-';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  turbopack: {
    root: __dirname,
  },

  // GitHub Pages is static hosting, so we export the site during CI.
  ...(isGitHubPages
    ? {
        output: 'export',
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
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
