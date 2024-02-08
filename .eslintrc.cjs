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
			"init-declarations": "off",
			"unicorn/no-null": "off",
			"svelte/indent": [
				"error", {
					indent: "tab"
				}
			]
		}
	}]
});
