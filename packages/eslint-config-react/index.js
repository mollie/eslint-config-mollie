module.exports = {
  /**
   * Extending works from right to left. The rules inside the package on the right will always "win"
   * from the rules that are defined in the packages on the left side.
   */
  extends: ["@mollie/eslint-config-base", "react-app"],
  plugins: ["jsx-a11y", "react-hooks"],
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
