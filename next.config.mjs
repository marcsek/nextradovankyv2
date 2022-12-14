// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: { domains: ['avatars.githubusercontent.com', 'images.punkapi.com'] },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};
export default config;
