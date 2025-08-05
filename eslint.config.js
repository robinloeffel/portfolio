import sweet from "eslint-config-sweet";
import { defineConfig } from "eslint/config";

export default defineConfig(
  sweet,
  {
    rules: {
      "unicorn/prefer-global-this": 0
    }
  }
);
