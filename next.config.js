/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "images.pexels.com"
    ]
  }
}

module.exports = nextConfig
