import sweet from "eslint-config-sweet";
import { config } from "typescript-eslint";

export default config(
  sweet,
  {
    rules: {
      "github/no-dynamic-script-tag": 0,
      "unicorn/prefer-dom-node-dataset": 0,
      "unicorn/prefer-global-this": 0
    }
  }
);
