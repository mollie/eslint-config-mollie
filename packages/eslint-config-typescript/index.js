module.exports = {
  extends: [
    "@mollie/eslint-config-base",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/interface-name-prefix": [
      "error",
      "always",
    ],
    "@typescript-eslint/indent": [
      "error",
      2,
    ],
    "@typescript-eslint/array-type": [
      "error",
      "generic",
    ],
  },
};
