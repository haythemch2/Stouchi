/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["encrypted-tbn0.gstatic.com", "cdn.sanity.io", "i.ibb.co"],
  },
};

module.exports = {
  images: {
    domains: [
      "cdn-icons-png.flaticon.com",
      "i.ibb.co",
      "s2.coinmarketcap.com",
      "s3.coinmarketcap.com",
      "cdn.sanity.io",
      "encrypted-tbn0.gstatic.com",
    ],
  },

  nextConfig,
};
