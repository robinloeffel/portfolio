/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: "sweet",
  overrides: [{
    files: "stylelint.config.cjs",
    rules: {
      "unicorn/no-null": "off"
    }
  }]
};
