const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  sourceMap: true,
  plugins: [autoprefixer({ grid: 'autoplace' }), cssnano()]
};
