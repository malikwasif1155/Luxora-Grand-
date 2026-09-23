import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Luxora-Grand-',
  assetPrefix: '/Luxora-Grand-/',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ]
  }
};

export default nextConfig;
