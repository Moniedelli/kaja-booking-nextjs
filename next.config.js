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
      "res.cloudinary.com",
      "static.promediateknologi.id",
      "daisyui.com",
      "otomotifzone.com"
    ]
  }
}

module.exports = nextConfig
