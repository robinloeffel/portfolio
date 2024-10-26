import tsParser from "@typescript-eslint/parser";
import sweet from "eslint-config-sweet";
import svelte from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";

/** @type {import("typescript-eslint").Config} */
export default [
	...sweet,
	...svelte.configs["flat/recommended"],
	{
		name: "stylistic overrides",
		rules: {
			"@stylistic/indent": ["error", "tab"],
			"@stylistic/no-tabs": "off"
		}
	},
	{
		name: "svelte",
		files: ["**/*.svelte"],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: tsParser
			}
		},
		rules: {
			"@stylistic/indent": "off",
			"@typescript-eslint/init-declarations": "off",

			"svelte/block-lang": ["error", {
				script: "ts",
				style: "scss"
			}],
			"svelte/indent": ["error", {
				indent: "tab"
			}],
			"svelte/mustache-spacing": "error"
		}
	}
];
