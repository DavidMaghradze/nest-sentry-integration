import SentryWebpackPlugin from '@sentry/webpack-plugin';

module.exports = {
  devtool: 'source-map',
  plugins: [
    new SentryWebpackPlugin({
      org: 'davids-company-t9',
      project: 'node',
      include: './dist',
      authToken: '57131858adaa498491817145d2a7d734d668c7fe312c4e09ad42ff1ad05aa655',
    }),
  ],
};
