/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate')
let nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  images: {
    formats: ['image/webp'],
    domains: [
      'owgr.com', // Valid WP Image domain.
      'lpga.com',
      'flashscore.com',
      'assets-us-01.kc-usercontent.com',
      'www.lpga.com',
      'via.placeholder.com',
      'hatscripts.github.io',
      'res.cloudinary.com',
      's.yimg.com',
      'cf-images.eu-west-1.prod.boltdns.net'
    ]
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    };

    return config;
  },

  api: {
    bodyParser: false,
  },
  env: {
    API_KEY: process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY,
    GRAPHQL_URL: process.env.GRAPHQL_URL,
    MODE: process.env.MODE,
    MODE_STAGING: process.env.MODE_STAGING
  }
}


module.exports = nextTranslate({...nextConfig})
