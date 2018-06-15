module.exports = {
  extends: ["mollie-base", "react-app"],
  plugins: ["jsx-a11y"],
  rules: {
    "jsx-a11y/no-static-element-interactions": "warn",
    "jsx-a11y/label-has-for": "warn",
    "react/sort-comp": "error",
  },
};
