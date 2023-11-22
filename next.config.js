/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const path = require('path')
 
module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
/*   webpack(config) {
    config.infrastructureLogging = { debug: /PackFileCache/ }
    return config;
  } */
/*   webpack: (config, {dev}) => {
    config.module.loaders = [{
      test: /\.json$/,
      loader: 'json'
}]
    return config
} */
   
}
