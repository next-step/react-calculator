const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@css': path.resolve(__dirname, 'src/css'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
}
