'use strict';

module.exports = {
  extends: [
    'airbnb/rules/react',
    'airbnb/rules/react-a11y',
  ],
  rules: {
    'react/no-set-state': 2,
    'react/sort-comp': [1, {
      order: [
        'type-annotations',
        'static-methods',
        'lifecycle',
        '/^on.+$/',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        '/^render.+$/',
        'render'
      ]
    }],
  },
};
