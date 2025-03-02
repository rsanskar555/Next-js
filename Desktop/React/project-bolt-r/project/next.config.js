/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // This ensures the app works properly with static export
  trailingSlash: true,
};

module.exports = nextConfig;
