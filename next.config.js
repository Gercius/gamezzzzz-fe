/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.akamai.steamstatic.com',
        pathname: '/steam/apps/**',
      },
    ],
  },
};

module.exports = nextConfig;
