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
    ],
  },
};

module.exports = nextConfig;
