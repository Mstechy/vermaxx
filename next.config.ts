/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '' } // permissive for remote images or list specific hosts
    ],
    // unoptimized: true // optional: helps local logos during dev if you had issues
  },
};

export default nextConfig;