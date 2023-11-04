/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: "sweet/typescript",
  overrides: [{
    files: "stylelint.config.cjs",
    rules: {
      "unicorn/no-null": "off"
    }
  }]
};
