const path = require('path');

module.exports = {
  development: {
    command: path.join(__dirname, '../node_modules/.bin/webpack'),
    options: [
      '--watch',
      '--colors',
      '--hide-modules',
    ],
  },

  production: {
    command: path.join(__dirname, '../node_modules/.bin/webpack'),
    options: [
      '-p',
    ],
  },
};
