const path = require('path');

module.exports = {
  command: path.join(__dirname, '../node_modules/.bin/nodemon'),
  options: [
    require.resolve('konstructor/app'),
    '--ext', 'js,json,njk,css,scss',
    '--quiet',
    '--watch', '*.js',
    '--watch', 'app',
    '--watch', 'public',
    '--ignore', 'public/assets',
  ],
  liveReload: true,
  keys: ['5f1d33b4-478e-4844-b2f4-f849aaf8598c'],
};
