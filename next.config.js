/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/c2s/authen_service/:path*',
        destination: 'http://192.168.1.20:8090/api/c2s/authen_service/:path*',
      },
      {
        source: '/api/c2s/app_service/:path*',
        destination: 'http://192.168.1.20:8080/api/c2s/app_service/:path*',
      },
      {
        source: '/api/c2s/media_service/:path*',
        destination: 'http://192.168.1.20:8083/api/c2s/media_service/:path*',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        port: '',
        pathname: '/s/files/1/**',
      },
    ],
  },
};

module.exports = nextConfig;
