module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
        'favoritemedium-typescript'
    ],
    "parserOptions": {
        "ecmaVersion": 2017
    },

    "env": {
        "es6": true
    }
  };