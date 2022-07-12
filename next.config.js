/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
};

module.exports = nextConfig;
