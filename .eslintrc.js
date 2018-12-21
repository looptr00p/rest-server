module.exports = {
    extends: [
      'airbnb-base',
      'plugin:jest/recommended',
    ],
    plugins: [
      'import',
      'jest',
    ],
    rules: {
      'linebreak-style': 'off', // Don't play nicely with Windows.
      'eslint linebreak-style': ["error", "windows"],
      'arrow-parens': 'off', // Incompatible with prettier
      'object-curly-newline': 'off', // Incompatible with prettier
      'no-mixed-operators': 'off', // Incompatible with prettier
      'arrow-body-style': 'off', // Not our taste?
      'function-paren-newline': 'off', // Incompatible with prettier
      'no-plusplus': 'off',
      'space-before-function-paren': 0, // Incompatible with prettier
  
      'max-len': ['error', 100, 2, { ignoreUrls: true }], // airbnb is allowing some edge cases
      'no-console': 'error', // airbnb is using warn
      'no-alert': 'error', // airbnb is using warn
  
      'no-param-reassign': 'off', // Not our taste?
      radix: 'off', // parseInt, parseFloat radix turned off. Not my taste.
    },
    env: {
      node: true,
      'jest/globals': true,
    },
  };
  