/** @type {import("lint-staged").Config} */
module.exports = {
  "*.{ts,js,cjs}": "eslint --fix",
  "*.scss": "stylelint --fix"
};
