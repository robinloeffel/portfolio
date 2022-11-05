module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [ "@typescript-eslint" ],
  extends: [
    "sweet",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    indent: [ "error", 2 ],
    quotes: [ "error", "double" ],
    "no-extra-parens": "off",
    "import/extensions": [ "error", {
      js: "never",
      ts: "never"
    }]
  },
  overrides: [{
    files: [ "build.js", "**/*.cjs" ],
    env: { node: true }
  }]
};
