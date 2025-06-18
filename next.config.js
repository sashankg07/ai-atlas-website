/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/ai-atlas-website',
  assetPrefix: '/ai-atlas-website/',
  trailingSlash: true,
  distDir: 'out',
  // Disable server-side features since we're doing static export
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig 