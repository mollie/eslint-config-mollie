module.exports = {
  extends: "plugin:flowtype/recommended",
  plugins: ["flowtype"],
  rules: {
    "flowtype/space-after-type-colon": [2, "always", { allowLineBreak: true }],
  },
};
