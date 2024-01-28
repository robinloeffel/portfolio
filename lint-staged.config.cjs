/** @type {import("lint-staged").Config} */
module.exports = {
	"*.{ts,js,cjs,json}": "eslint --fix",
	"*.scss": "stylelint --fix"
};
