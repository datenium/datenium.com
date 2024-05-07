/** @type {import('next').NextConfig} */
const nextConfig = {
output: 'export',
images: {
    unoptimized: true,
    remotePatterns: [
        {
        protocol: "https",
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: "https",
        hostname: 'github.com/datenium/datenium.github.io/tree/main/public'
      }
        ],
  },
}

module.exports = nextConfig
