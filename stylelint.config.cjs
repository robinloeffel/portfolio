/** @type {import("stylelint").Config} */
module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-idiomatic-order"
  ],
  plugins: [ "stylelint-stylistic" ],
  rules: {
    "stylistic/color-hex-case": "lower",
    "stylistic/no-extra-semicolons": true,
    "stylistic/number-leading-zero": "always",
    "stylistic/number-no-trailing-zeros": true,
    "stylistic/property-case": "lower",
    "stylistic/string-quotes": "double",
    "stylistic/unit-case": "lower"
  }
};
