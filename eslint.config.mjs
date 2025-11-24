import js from"@elsint.js";
import globals from "globals";
import prettier from " eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config()} */

export default [
  js.configs.recommended,
  {
    files : ["**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: {
        ...globals.browser, ...globals.node},
      parserOptions: {
        configuration: {
          jsx: true,
        },
    },
  },
},
  prettier,
];
