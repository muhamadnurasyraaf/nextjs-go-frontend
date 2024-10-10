/** @type {import('next').NextConfig} */

const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*', // Proxy API requests
          destination: 'http://localhost:8080/api/:path*', // Proxy to your backend
        },
      ];
    },
  };
  
  export default nextConfig;