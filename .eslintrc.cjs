/** @type {import("eslint").Linter.BaseConfig} */
module.exports = {
  extends: "sweet",
  overrides: [{
    files: "stylelint.config.cjs",
    rules: {
      "unicorn/no-null": "off"
    }
  }]
};
