/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "sweet",
    "sweet/configs/typescript-typed.cjs"
  ],
  overrides: [{
    files: "stylelint.config.cjs",
    rules: {
      "unicorn/no-null": "off"
    }
  }]
};
