/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'jmlfggpacsnkpnpmsoup.supabase.co',
      },
    ],
  },
  i18n: {
    locales: ['en', 'de', 'nl'],
    defaultLocale: 'nl',
  },
};

export default nextConfig;
