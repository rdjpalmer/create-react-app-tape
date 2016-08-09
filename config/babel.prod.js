var fs = require('fs');
var path = require('path');
var rc = JSON.parse(fs.readFileSync(path.join(__dirname, '../.babelrc'), 'utf8'));

module.exports = {
  babelrc: false,
  presets: rc.presets.map(require.resolve),
  plugins: [
    'babel-plugin-syntax-trailing-function-commas',
    'babel-plugin-transform-class-properties',
    'babel-plugin-transform-object-rest-spread',
    'babel-plugin-transform-react-constant-elements',
  ].map(require.resolve).concat([
    [require.resolve('babel-plugin-transform-runtime'), {
      helpers: false,
      polyfill: false,
      regenerator: true
    }]
  ])
};
