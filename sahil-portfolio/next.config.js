/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignore TypeScript and ESLint errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Additional optimizations
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },

  // Image optimization
  images: {
    domains: ["placeholder.svg"],
    unoptimized: true, // For static export if needed
  },

  // Webpack configuration to ignore specific warnings
  webpack: (config, { dev, isServer }) => {
    // Ignore specific warnings
    config.ignoreWarnings = [/Critical dependency/, /the request of a dependency is an expression/, /Can't resolve/]

    return config
  },
}

module.exports = nextConfig
