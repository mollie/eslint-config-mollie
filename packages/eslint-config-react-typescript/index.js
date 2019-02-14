module.exports = {
  /**
   * Extending works from right to left. The rules inside the package on the right will always "win"
   * from the rules that are defined in the packages on the left side.
   */
  extends: ["@mollie/eslint-config-react", "@mollie/eslint-config-typescript"],
  parserOptions: {
    jsx: true,
    useJSXTextNode: true,
  },
};
