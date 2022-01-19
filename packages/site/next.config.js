const { parsed: localEnv } = require('dotenv').config();

module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  jest: {
    ignoreDuringBuilds: true,
  },
  env: {
    API_URL: process.env.API_URL,
    ...localEnv,
  },
};
