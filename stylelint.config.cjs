/** @type {import("stylelint").Config} */
module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-idiomatic-order",
    "stylelint-config-html/html",
    "stylelint-stylistic/config"
  ],
  rules: {
    "selector-class-pattern": null,
    "stylistic/indentation": null,
    "stylistic/linebreaks": null,
    "stylistic/max-line-length": null
  }
};
