/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' for proper Next.js deployment on Netlify
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
