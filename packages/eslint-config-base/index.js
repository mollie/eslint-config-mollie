module.exports = {
  /**
   * Extending works from right to left. The rules inside the package on the right will always "win"
   * from the rules that are defined in the packages on the left side.
   */
  plugins: ["import", "no-only-tests"],
  rules: {
    "import/default": "error",
    "import/named": "error",
    "import/namespace": "error",
    "import/no-extraneous-dependencies": "error",
    "no-unused-vars": "error",
    "no-console": "warn",
    "default-case": "off",
    "no-only-tests/no-only-tests": "error",
    "multiline-comment-style": ["error", "starred-block"],
  },
};
