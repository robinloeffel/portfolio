/** @type {import("eslint").Linter.BaseConfig} */
module.exports = {
  extends: "sweet",
  overrides: [{
    files: "esbuild.js",
    env: {
      browser: false,
      node: true
    }
  }]
};
