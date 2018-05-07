const path = require('path');

module.exports = {
  development: {
    command: path.join(__dirname, '../node_modules/webpack/bin/webpack.js'),
    options: [
      '--watch',
      '--progress',
      '--hide-modules',
      '--config=node_modules/laravel-mix/setup/webpack.config.js',
    ],
    environment: {
      NODE_ENV: 'development',
    },
  },
  production: {
    command: path.join(__dirname, '../node_modules/webpack/bin/webpack.js'),
    options: [
      '--progress',
      '--hide-modules',
      '--config=node_modules/laravel-mix/setup/webpack.config.js',
    ],
    environment: {
      NODE_ENV: 'production',
    },
  },
};
