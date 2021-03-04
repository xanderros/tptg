'use strict';
import webpack from 'webpack';
import path from 'path';

import { PRODUCTION } from './config';
import paths from './paths';

const entryPoints = {
  bundle: path.resolve(__dirname, paths.src.scripts),
};

export const config = {
  entry: Object.keys(entryPoints).reduce((acc, currentKey) => {
    acc[currentKey] = [entryPoints[currentKey]];
    return acc;
  }, {}),
  output: {
    filename: 'solutions.js',
    path: path.resolve(__dirname, paths.build.scripts),
    publicPath: '/js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        enforce: 'pre',
        include: [
          path.resolve(__dirname, 'src/js'),
          path.resolve(__dirname, 'src/components'),
          path.resolve(__dirname, 'node_modules/lazysizes'),
        ],
        use: [
          'babel-loader',
          {
            options: {
              eslintPath: require.resolve('eslint'),
              cache: true,
              configFile: path.resolve('.eslintrc'),
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules'],
  },
  devtool: PRODUCTION ? undefined : 'eval',
  mode: PRODUCTION ? 'production' : 'development',
  optimization: {
    minimize: PRODUCTION,
  },
  watch: !PRODUCTION,
};

export default config;
