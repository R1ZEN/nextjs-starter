const withPlugins = require('next-compose-plugins');
const withProjectionSymlinks = require('./plugins/projection-symlinks');
const withBundleAnalyzer = require('./plugins/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { APP_ROOT } = require('./app.path');

module.exports = withPlugins([withProjectionSymlinks, withBundleAnalyzer], {
  serverRuntimeConfig: {
    PROJECT_ROOT: APP_ROOT,
  },
});
