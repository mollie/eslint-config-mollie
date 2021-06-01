module.exports = {
  /**
   * Extending works from right to left. The rules inside the package
   * on the right will always "win" from the rules that are defined in
   * the packages on the left side.
   */
  extends: ["react-app", "@mollie/eslint-config-base"],
  rules: {
    "jsx-a11y/no-static-element-interactions": "warn",
    "jsx-a11y/label-has-for": "warn",
    "react/sort-comp": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
