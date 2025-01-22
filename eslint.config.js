const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
    },
    rules: {},
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
  },
];
