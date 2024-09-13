const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
	extends: "sweet",
	rules: {
		"@stylistic/indent": [ "error", "tab" ]
	},
	overrides: [{
		files: "*.svelte",
		parser: "svelte-eslint-parser",
		parserOptions: {
			parser: "@typescript-eslint/parser"
		},
		extends: "plugin:svelte/recommended",
		rules: {
			"@stylistic/indent": "off",
			"@typescript-eslint/init-declarations": "off",

			"svelte/block-lang": [ "error", {
				script: "ts",
				style: "scss"
			}],
			"svelte/indent": [ "error", {
				indent: "tab"
			}],
			"svelte/mustache-spacing": "error"
		}
	}]
});
