const withTM = require('next-transpile-modules')(['some-module', 'and-another']);

/** @type {import('next').NextConfig} */
module.exports = withTM({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
});
