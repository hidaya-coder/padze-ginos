import js from "@elsint.js";
import globals from "globals";
import prettier from " eslint-config-prettier";
import react from " eslint-plugin-react";
import { version } from "vite";

/** @type {import('eslint').Linter.Config()} */

export default [
  js.configs.recommended,
  {
    ...reactPlugin.configs.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  reactPlugin.configs.flat("jsx-runtime"),
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        configuration: {
          jsx: true,
        },
      },
    },
    rules: {
      "react/no-unescaped-entities": "off",
      "react/prop-types": "off",
    },
  },
  prettier,
];
