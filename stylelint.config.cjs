const { defineConfig } = require("stylelint-define-config");

module.exports = defineConfig({
	extends: "stylelint-config-sweet",
	rules: {
		"@stylistic/indentation": "tab"
	}
});
