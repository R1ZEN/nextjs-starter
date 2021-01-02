module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  plugins: [
    '@babel/plugin-transform-runtime',
    [
      'transform-inline-environment-variables',
      {
        include: ['NODE_ENV'],
      },
    ],
  ],
};
