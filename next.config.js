/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    edge: true,
  },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "images.pexels.com",
      "res.cloudinary.com"
    ]
  }
}

module.exports = nextConfig
