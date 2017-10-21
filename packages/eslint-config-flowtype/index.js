'use strict';

module.exports = {
  extends: [
    'plugin:flowtype/recommended',
  ],

  plugins: [
    'flowtype',
  ],

  rules: {
    'flowtype/require-valid-file-annotation': [2, 'always', {
      annotationStyle: 'line',
    }],
  },
};
