import { FlatCompat } from '@eslint/eslintrc';
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import globals from "globals";

const compat = new FlatCompat();

export default [
  ...compat.config({
    extends: [
      "plugin:react/recommended"
    ]
  }),
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact
    },
    rules: {
      "semi": ["error", "always"],      // требовать точку с запятой  // требовать ординардные кавычки
      "react/react-in-jsx-scope": "off"
    }
  }
];