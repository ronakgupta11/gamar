/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["warp-contracts-plugin-signature"],
  images: {
    domains: ['node1.irys.xyz'],
  }
};

module.exports = nextConfig;
