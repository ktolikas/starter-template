const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
module.exports = {
  sourceMap: true,
  plugins: [autoprefixer({ grid: "autoplace" }), cssnano()],
};
