/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignore TypeScript and ESLint errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Simplified configuration to avoid circular dependencies
  experimental: {
    serverComponentsExternalPackages: ["resend"],
  },

  // Image optimization
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
