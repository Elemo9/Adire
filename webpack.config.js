const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production', // Enable optimizations for production
  entry: './src/index.js', // Main entry point of the application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: '[name].[contenthash].js', // Cache-busting filename
    publicPath: '/', // Adjust this based on your hosting environment
  },
  module: {
    rules: [
      // JavaScript/TypeScript loader
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // CSS/SCSS loader
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      // Asset loader
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext][query]',
        },
      },
      // HTML loader (if needed for inline assets)
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Clean dist folder before each build
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }), // Extract CSS into separate files
    new HtmlWebpackPlugin({
      template: './src/index.html', // HTML template file
      inject: 'body', // Inject scripts into the body
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
  optimization: {
    minimize: true, // Enable minification
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: { drop_console: true }, // Remove console.logs
        },
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: 'all', // Split vendor and app code
    },
    runtimeChunk: 'single', // Separate runtime code
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Resolve these extensions
    alias: {
      '@': path.resolve(__dirname, 'src'), // Example alias for src folder
    },
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 512000, // Max asset size in bytes
    maxEntrypointSize: 512000, // Max entrypoint size in bytes
  },
};
