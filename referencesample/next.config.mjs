/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "annamazzola.com",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
