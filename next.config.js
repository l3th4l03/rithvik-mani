/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: false,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.minimize = false;
    }
    return config;
  },
};

module.exports = nextConfig; 