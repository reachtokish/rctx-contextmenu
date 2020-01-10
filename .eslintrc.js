module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    },
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "brace-style": ["error", "stroustrup"],
    "no-tabs": ["error", { allowIndentationTabs: true }],
    "eol-last": ["error", "never"]
  },
};
