/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgs.search.brave.com",
      },
      {
        protocol: "https",
        hostname: "ui.aceternity.com",
      },
    ],
    domains: ["images.unsplash.com", "ui.aceternity.com"],
  },
};

module.exports = nextConfig;
