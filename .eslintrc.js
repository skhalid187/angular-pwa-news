module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    "parserOptions": {
        "ecmaVersion": 2017
    },

    "env": {
        "es6": true
    }
  };