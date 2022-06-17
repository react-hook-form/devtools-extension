const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

/** @type { import('webpack').Configuration } */
module.exports = {
  entry: {
    popup: './src/popup.tsx',
    background: './src/background.ts',
    devtools: './src/devtools.tsx',
    content: './src/content.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public' }],
    }),
  ],
};
