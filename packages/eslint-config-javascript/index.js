'use strict';
const { resolve } = require('path');
const { NODE_PATH = '' } = process.env;

module.exports = {
  env: {
    es6: true,
    node: true,
  },

  extends: [
    'airbnb-base',
    'airbnb-base/rules/strict',
  ],

  plugins: [
    'wyze',
  ],

  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 2017,
    sourceType: 'module',
  },

  rules: {
    'arrow-parens': [2, 'always'],
    'function-paren-newline': [2, 'consistent'],
    'import/first': 0,
    'import/order': 0,
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': [
        '**/__tests__/**/*.{js,jsx}',
        '**/*.{spec,test}.{js,jsx}',
        '**/*.{story}.{js,jsx}',
        '**/stories/**/*.{js,jsx}'
      ]
    }],
    'semi-style': 0,
    'wyze/sort-imports': [2, {
      ignoreCase: true,
    }],
  },

  settings: {
    'import/resolver': {
      node: {
        paths: NODE_PATH.split(':').map((path) => resolve(path)),
      },
    },
  },
};
