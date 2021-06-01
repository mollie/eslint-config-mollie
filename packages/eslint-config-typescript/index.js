module.exports = {
  /**
   * Extending works from right to left. The rules inside the package
   * on the right will always "win" from the rules that are defined in
   * the packages on the left side.
   */
  extends: [
    "plugin:@typescript-eslint/recommended",
    "@mollie/eslint-config-base",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/interface-name-prefix": "off",
  },
};
