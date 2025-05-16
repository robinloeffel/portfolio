import sweet from "eslint-config-sweet";

/** @type {typeof sweet} */
export default [
  ...sweet,
  {
    rules: {
      "unicorn/prefer-global-this": 0
    }
  }
];
