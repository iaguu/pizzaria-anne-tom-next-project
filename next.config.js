const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    disable: !isProd,
    dest: 'public'
  },
  optimizeFonts: false,
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200, 1300, 1500, 1700],
    iconSizes: [],
    domains: [],
    path: '/_next/image',
    loader: 'default'
  },
  reactStrictMode: true
})
