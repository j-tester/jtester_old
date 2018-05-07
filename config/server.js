const path = require('path');

module.exports = {
  development: {
    command: path.join(__dirname, '../node_modules/nodemon/bin/nodemon.js'),
    options: [
      'index.js',
      // '--ignore', '*.marko.js', // uncomment if you want live-reload
      '--watch', 'src',
      '--ext', 'js,marko',
    ],
    environment: {
    },
  },
  production: {
    command: 'node',
    options: [
      'index.js',
    ],
    environment: {
    },
  },
};
