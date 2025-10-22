import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";

export default [
  {
    files: ["*.js", "*.jsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    env: {
      browser: true,
      es2021: true,
    },
    plugins: {
      react,
      prettier,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:prettier/recommended",
    ],
    rules: {
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
