import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
// You can define `someConfig` or replace it with the actual configuration if needed
const someConfig = {
  // Custom configuration goes here
};
/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  [
    someConfig,
    eslintConfigPrettier,
  ]
];

