const prettierOptions = require('./.prettierrc.js');
const { CUSTOM_RULES, LEVEL_RULES } = require('./constants');

module.exports = {
  env: {
    browser: true,
    'cypress/globals': true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier', 'prettier/react', 'prettier/standard', "plugin:jsx-a11y/recommended"],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['babel', 'cypress', 'prettier', 'react', 'react-hooks', 'import', "jsx-a11y"],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': [LEVEL_RULES.ERROR, prettierOptions],
    ...CUSTOM_RULES,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './config/dist.js',
      },
    },
    'import/core-modules': ['config'],
    react: {
      version: 'detect',
    },
  },
};
