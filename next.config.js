/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["warp-contracts-plugin-signature"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        port: '',
        pathname: '/**',
      },
    ],domains: ['node1.irys.xyz']
  }
};

module.exports = nextConfig;
