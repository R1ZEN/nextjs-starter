const withPlugins = require('next-compose-plugins');
const withProjectionSymlinks = require('./plugins/projection-symlinks');
const withBundleAnalyzer = require('./plugins/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins([withProjectionSymlinks, withBundleAnalyzer]);
