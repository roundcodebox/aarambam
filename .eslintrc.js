module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
    es6: true,
  },
  extends: [
    "next",
    "airbnb",
    "prettier",
    "eslint:recommended",
    "plugin:@next/next/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "plugin:security/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "@typescript-eslint", "simple-import-sort", "import"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "no-console": "error",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "unicorn/filename-case": "off",
    "react/jsx-filename-extension": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "function-declaration",
      },
    ],
    "unicorn/prefer-module": 0,
  },
};
