module.exports = {
  env: {
    node: true,
    es6: true,
    'jest/globals': true,
  },
  plugins: ['jest'],
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: 'next',
      },
    ],
    'linebreak-style': 0,
    'no-console': 1,
    'func-names': 'always',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
};
