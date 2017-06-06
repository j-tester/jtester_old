const path = require('path');

module.exports = {
  development: {
    command: path.join(__dirname, '../node_modules/.bin/browser-refresh'),
    options: [
      require.resolve('konstructor/app'),
    ],
    environment: {
      BROWSER_REFRESH_SILENT: true,
    },
  },

  production: {
    command: 'node',
    options: [
      require.resolve('konstructor/app'),
    ],
  },
};
