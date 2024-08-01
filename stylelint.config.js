import { defineConfig } from "stylelint-define-config";

export default defineConfig({
	extends: "stylelint-config-sweet",
	rules: {
		"@stylistic/indentation": "tab"
	}
});
