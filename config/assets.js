const path = require('path');

module.exports = {
  command: path.join(__dirname, '../node_modules/.bin/webpack'),
  developmentOptions: [
    '--watch',
    '--colors',
    '--progress',
  ],
  productionOptions: [
    '-p',
  ],
};
