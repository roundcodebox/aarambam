module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
    es6: true,
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "prettier",
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "plugin:security/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "no-console": "error",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "simple-import-sort/sort": "error",
    "unicorn/filename-case": "off",
  },
};
