module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  env: {
    es6: true,
  },
  root: true,
  extends: ['plugin:prettier/recommended', 'plugin:react/recommended'],
  rules: {
    'no-var': 2,
    'no-unused-vars': 2,
    'no-alert': 2,
    'react/prop-types': 0,
    'no-shadow': 2,
    'no-empty-function': 2,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
