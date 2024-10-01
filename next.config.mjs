/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: process.env.NODE_ENV === 'development' ? undefined : 'export',
};

export default nextConfig;
