import path from 'path';
import SentryPlugin from '@sentry/webpack-plugin';

module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.ts',
  },
  target: 'node',
  devtool: 'source-map',
  plugins: [
    new SentryPlugin({
      release: 'backend-sentry-github@v0.1.0',
      include: './dist',
    }),
  ],
};
