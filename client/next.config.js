/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID: "370893850",
    NEXT_PUBLIC_ZEGO_SERVER_SECRET: "2064a6f292e4e81b1678031feb99fb84",
    // NEXT_PUBLIC_ZEGO_SERVER_URL: "wss://webliveroom698471575-api.coolzcloud.com/ws",
  },
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;

// next.config.js
// module.exports = {
//   env: {
//     NEXT_PUBLIC_ZEGO_APP_ID: process.env.NEXT_PUBLIC_ZEGO_APP_ID ? String(process.env.NEXT_PUBLIC_ZEGO_APP_ID) : 'your_default_app_id', // Convert to string
//     NEXT_PUBLIC_ZEGO_APP_SECRET: process.env.NEXT_PUBLIC_ZEGO_APP_SECRET || 'your_default_app_sign', // String, or default if not defined
//   },
//   // ... other config options
// };
