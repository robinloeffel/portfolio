import sweet from "eslint-config-sweet";

/** @type {import("typescript-eslint").Config} */
export default [
  ...sweet,
  {
    rules: {
      "unicorn/prefer-dom-node-dataset": 0
    }
  }
];
