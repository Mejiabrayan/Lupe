/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'lh3.googleusercontent.com',
        protocol: 'https',
      },
      {
        hostname: 'avatars.githubusercontent.com',
        protocol: 'https',
      },

      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
