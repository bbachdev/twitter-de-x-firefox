// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/twitterdex.js', // Entry point of your content script
  output: {
    filename: 'content_bundle.js', // Output filename
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply the following rule to all JS files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Use babel-loader to transpile JS files
          options: {
            presets: ['@babel/preset-env'], // Use preset-env for transpilation
          },
        },
      },
    ],
  },
};
