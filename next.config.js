/** @type {import('next').NextConfig} */

/* import withPlaiceholder from '@plaiceholder/next' */

const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
}

module.exports = nextConfig




/* export default withPlaiceholder(nextConfig) */
