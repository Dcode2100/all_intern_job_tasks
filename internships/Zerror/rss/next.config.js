/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  videos: {
    domains: ["assets.acme.com","https://youtu.be"],
  },
};

module.exports = nextConfig

