module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/blog",
        permanent: false,
      },
    ];
  },
};
